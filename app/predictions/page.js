'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trophy, TrendingUp, User, LogOut, LogIn, Clock, ArrowLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Predictions() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fixtures, setFixtures] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);
  const [activeTab, setActiveTab] = useState('predict');
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
      
      setUser(profile);
      await loadUserPredictions(user.id);
    }
    await loadData();
    setLoading(false);
  };

  const loadData = async () => {
    const allFixtures = [];
    for (let i = 0; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      
      const [l1, l2] = await Promise.all([
        fetch(`https://v3.football.api-sports.io/fixtures?date=${dateStr}&league=41&season=2025`, {
          headers: { 'x-apisports-key': KEY }
        }),
        fetch(`https://v3.football.api-sports.io/fixtures?date=${dateStr}&league=42&season=2025`, {
          headers: { 'x-apisports-key': KEY }
        })
      ]);

      const d1 = await l1.json();
      const d2 = await l2.json();
      
      allFixtures.push(...(d1.response || []).filter(m => m.fixture.status.short === 'NS'));
      allFixtures.push(...(d2.response || []).filter(m => m.fixture.status.short === 'NS'));
    }

    setFixtures(allFixtures.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date)));
    await loadLeaderboard();
  };

  const loadUserPredictions = async (userId) => {
    const { data, error } = await supabase
      .from('predictions')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('Error loading predictions:', error);
      return;
    }

    const preds = {};
    data.forEach(p => {
      preds[p.fixture_id] = {
        home: p.home_score,
        away: p.away_score
      };
    });
    setPredictions(preds);
  };

  const loadLeaderboard = async () => {
    try {
      const { data, error } = await supabase.rpc('get_leaderboard');
      if (error) {
        console.error('Error loading leaderboard:', error);
        return;
      }
      setLeaderboard(data || []);
    } catch (err) {
      console.error('Caught error:', err);
    }
  };

  const handleAuth = async () => {
    setAuthLoading(true);
    
    try {
      if (authMode === 'register') {
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username
            }
          }
        });

        if (signUpError) throw signUpError;
        alert('Account created! Please check your email to verify your account.');
        setAuthMode('login');
      } else {
        const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (signInError) throw signInError;
        await checkUser();
        setShowAuth(false);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setAuthLoading(false);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setPredictions({});
    setInputValues({});
    router.push('/');
  };

  const handleInputChange = (fixtureId, field, value) => {
    setInputValues(prev => ({
      ...prev,
      [fixtureId]: {
        ...prev[fixtureId],
        [field]: value
      }
    }));
  };

  const submitPrediction = async (fixtureId) => {
    if (!user) return;

    const input = inputValues[fixtureId] || {};
    const home = input.home;
    const away = input.away;

    if (home === '' || home === undefined || away === '' || away === undefined) {
      alert('Please enter both home and away scores!');
      return;
    }

    const homeNum = parseInt(home);
    const awayNum = parseInt(away);

    if (isNaN(homeNum) || isNaN(awayNum) || homeNum < 0 || awayNum < 0) {
      alert('Please enter valid scores (0 or higher)!');
      return;
    }

    const fixture = fixtures.find(f => f.fixture.id === fixtureId);
    if (fixture && new Date(fixture.fixture.date) <= new Date()) {
      alert('Match has started! Cannot predict.');
      return;
    }

    try {
      const { error } = await supabase
        .from('predictions')
        .upsert([
          {
            user_id: user.id,
            fixture_id: fixtureId,
            home_score: homeNum,
            away_score: awayNum
          }
        ], {
          onConflict: 'user_id,fixture_id'
        });

      if (error) throw error;

      setPredictions(prev => ({
        ...prev,
        [fixtureId]: { home: homeNum, away: awayNum }
      }));

      setInputValues(prev => {
        const newInputs = { ...prev };
        delete newInputs[fixtureId];
        return newInputs;
      });

      await loadLeaderboard();
    } catch (error) {
      alert('Failed to save prediction: ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Clock className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header - RESPONSIVE */}
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b-4 border-orange-700 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">🎯 Match Predictions</h1>
              <p className="text-orange-200 text-xs sm:text-sm mt-1">Predict scores and compete!</p>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-4 flex-wrap">
              {user ? (
                <>
                  <div className="bg-white/10 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <span className="text-white font-bold text-xs sm:text-base truncate max-w-[80px] sm:max-w-none">{user.username}</span>
                    </div>
                  </div>
                  <button onClick={handleLogout} className="px-2 sm:px-4 py-1 sm:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                    <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              ) : (
                <button onClick={() => setShowAuth(true)} className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                  Login / Register
                </button>
              )}
              <button onClick={() => router.push('/')} className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition text-xs sm:text-base">
                <ArrowLeft className="w-4 h-4 sm:hidden" />
                <span className="hidden sm:inline">← Back</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal - RESPONSIVE */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowAuth(false)}>
          <div className="bg-slate-800 rounded-xl p-4 sm:p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{authMode === 'login' ? 'Login' : 'Create Account'}</h2>
            
            <div className="space-y-3 sm:space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-slate-300 mb-1 sm:mb-2 text-sm">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 sm:p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none text-sm sm:text-base"
                    placeholder="Choose a username"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-slate-300 mb-1 sm:mb-2 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 sm:p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-1 sm:mb-2 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 sm:p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none text-sm sm:text-base"
                  placeholder="••••••••"
                />
              </div>

              <button 
                onClick={handleAuth} 
                disabled={authLoading}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition disabled:opacity-50 text-sm sm:text-base"
              >
                {authLoading ? 'Please wait...' : (authMode === 'login' ? 'Login' : 'Create Account')}
              </button>

              <button 
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="w-full text-slate-400 hover:text-white transition text-xs sm:text-sm"
              >
                {authMode === 'login' ? "Don't have an account? Register" : 'Already have an account? Login'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - RESPONSIVE */}
      {!user ? (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <div className="bg-slate-800 rounded-xl p-8 sm:p-16 text-center border-2 border-slate-700">
            <LogIn className="w-16 h-16 sm:w-24 sm:h-24 text-slate-600 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Members Only</h2>
            <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">Login or register to make predictions!</p>
            <button onClick={() => setShowAuth(true)} className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition text-sm sm:text-lg">
              Login / Register
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
          {/* Tabs - RESPONSIVE */}
          <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-8">
            <button 
              onClick={() => setActiveTab('predict')}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition text-xs sm:text-base ${
                activeTab === 'predict' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              📝 Predictions
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition text-xs sm:text-base ${
                activeTab === 'leaderboard' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              🏆 Leaderboard
            </button>
          </div>

          {/* Predictions Tab - RESPONSIVE */}
          {activeTab === 'predict' && (
            <div>
              {/* Stats */}
              <div className="bg-gradient-to-r from-orange-900 to-orange-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 flex justify-between">
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">Your Predictions</p>
                  <p className="text-orange-200 text-xs sm:text-sm">
                    {Object.keys(predictions).length} of {fixtures.length}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{Object.keys(predictions).length}</p>
                  <p className="text-orange-200 text-xs sm:text-sm">Locked</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {fixtures.map(fixture => {
                  const savedPred = predictions[fixture.fixture.id];
                  const input = inputValues[fixture.fixture.id] || {};
                  const isLocked = savedPred !== undefined;
                  const matchStarted = new Date(fixture.fixture.date) <= new Date();
                  const isDisabled = isLocked || matchStarted;

                  const displayHome = isLocked ? savedPred.home : (input.home ?? '');
                  const displayAway = isLocked ? savedPred.away : (input.away ?? '');

                  const canSubmit = !isDisabled && input.home !== undefined && input.home !== '' && input.away !== undefined && input.away !== '';

                  return (
                    <div key={fixture.fixture.id} className={`bg-slate-800 rounded-lg p-3 sm:p-6 border-2 ${isDisabled ? 'border-slate-600 opacity-75' : 'border-slate-700'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-1 sm:gap-0">
                        <span className="text-slate-400 text-xs sm:text-sm">{fixture.league.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400 text-xs sm:text-sm">{new Date(fixture.fixture.date).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                          {isLocked && <span className="px-2 py-0.5 sm:py-1 bg-green-600 text-white text-xs rounded font-bold">✓</span>}
                          {matchStarted && !isLocked && <span className="px-2 py-0.5 sm:py-1 bg-red-600 text-white text-xs rounded font-bold">Started</span>}
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="block sm:hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-bold text-sm flex-1">{fixture.teams.home.name}</span>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            value={displayHome}
                            onChange={(e) => handleInputChange(fixture.fixture.id, 'home', e.target.value)}
                            disabled={isDisabled}
                            className={`w-14 p-2 text-center text-xl font-bold rounded-lg border-2 outline-none ${
                              isDisabled ? 'bg-slate-700 text-slate-400 border-slate-600 cursor-not-allowed' : 'bg-slate-900 text-white border-slate-700 focus:border-orange-500'
                            }`}
                            placeholder="-"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold text-sm flex-1">{fixture.teams.away.name}</span>
                          <input
                            type="number"
                            min="0"
                            max="20"
                            value={displayAway}
                            onChange={(e) => handleInputChange(fixture.fixture.id, 'away', e.target.value)}
                            disabled={isDisabled}
                            className={`w-14 p-2 text-center text-xl font-bold rounded-lg border-2 outline-none ${
                              isDisabled ? 'bg-slate-700 text-slate-400 border-slate-600 cursor-not-allowed' : 'bg-slate-900 text-white border-slate-700 focus:border-orange-500'
                            }`}
                            placeholder="-"
                          />
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden sm:grid grid-cols-7 gap-4 items-center">
                        <div className="col-span-2 text-right">
                          <span className="text-white font-bold">{fixture.teams.home.name}</span>
                        </div>

                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={displayHome}
                          onChange={(e) => handleInputChange(fixture.fixture.id, 'home', e.target.value)}
                          disabled={isDisabled}
                          className={`p-3 text-center text-2xl font-bold rounded-lg border-2 outline-none ${
                            isDisabled ? 'bg-slate-700 text-slate-400 border-slate-600 cursor-not-allowed' : 'bg-slate-900 text-white border-slate-700 focus:border-orange-500'
                          }`}
                          placeholder="-"
                        />

                        <div className="text-center"><span className="text-slate-500 font-bold">VS</span></div>

                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={displayAway}
                          onChange={(e) => handleInputChange(fixture.fixture.id, 'away', e.target.value)}
                          disabled={isDisabled}
                          className={`p-3 text-center text-2xl font-bold rounded-lg border-2 outline-none ${
                            isDisabled ? 'bg-slate-700 text-slate-400 border-slate-600 cursor-not-allowed' : 'bg-slate-900 text-white border-slate-700 focus:border-orange-500'
                          }`}
                          placeholder="-"
                        />

                        <div className="col-span-2">
                          <span className="text-white font-bold">{fixture.teams.away.name}</span>
                        </div>
                      </div>

                      {canSubmit && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-700 text-center">
                          <button
                            onClick={() => submitPrediction(fixture.fixture.id)}
                            className="px-4 sm:px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition text-sm sm:text-base"
                          >
                            🔒 Lock ({input.home} - {input.away})
                          </button>
                        </div>
                      )}

                      {isLocked && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-700 text-center">
                          <span className="text-green-400 text-xs sm:text-sm font-bold">✓ Locked: {savedPred.home} - {savedPred.away}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Leaderboard - RESPONSIVE */}
          {activeTab === 'leaderboard' && (
            <div className="bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700">
              <div className="bg-gradient-to-r from-orange-900 to-orange-800 p-4 sm:p-6">
                <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-400" />
                  Leaderboard
                </h2>
              </div>

              {/* Mobile Leaderboard */}
              <div className="block sm:hidden">
                {leaderboard.map((entry, index) => (
                  <div key={entry.id} className={`p-3 border-b border-slate-700 ${entry.username === user?.username ? 'bg-orange-900/20' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          index === 0 ? 'bg-yellow-500 text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                          index === 2 ? 'bg-orange-600 text-white' :
                          'bg-slate-700 text-slate-300'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`text-white font-bold text-sm ${entry.username === user?.username ? 'text-orange-400' : ''}`}>
                          {entry.username}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-white">{entry.total_points} pts</span>
                    </div>
                    <div className="flex gap-4 mt-1 text-xs text-slate-400 ml-10">
                      <span>{entry.total_predictions} pred</span>
                      <span className="text-green-400">{entry.exact_scores} exact</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Leaderboard */}
              <table className="hidden sm:table w-full">
                <thead className="bg-slate-900 text-slate-400 text-xs uppercase">
                  <tr>
                    <th className="py-3 px-6 text-left">Rank</th>
                    <th className="py-3 px-6 text-left">User</th>
                    <th className="py-3 px-6 text-center">Predictions</th>
                    <th className="py-3 px-6 text-center">Exact</th>
                    <th className="py-3 px-6 text-center">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry, index) => (
                    <tr key={entry.id} className={`border-b border-slate-700 ${entry.username === user?.username ? 'bg-orange-900/20' : ''}`}>
                      <td className="py-4 px-6">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          index === 0 ? 'bg-yellow-500 text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                          index === 2 ? 'bg-orange-600 text-white' :
                          'bg-slate-700 text-slate-300'
                        }`}>
                          {index + 1}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`text-white font-bold ${entry.username === user?.username ? 'text-orange-400' : ''}`}>
                          {entry.username} {entry.username === user?.username && '(You)'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-slate-300">{entry.total_predictions}</td>
                      <td className="py-4 px-6 text-center text-green-400 font-bold">{entry.exact_scores}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-2xl font-bold text-white">{entry.total_points}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Info Banner - RESPONSIVE */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-green-900/30 border-2 border-green-600 rounded-lg p-3 sm:p-4">
          <p className="text-green-300 text-xs sm:text-sm text-center">
            ✅ <strong>Production Ready!</strong> Using Supabase database with real authentication
          </p>
        </div>
      </div>
    </div>
  );
}