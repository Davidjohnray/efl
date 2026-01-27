'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trophy, TrendingUp, User, LogOut, LogIn, Clock } from 'lucide-react';
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
  const [inputValues, setInputValues] = useState({}); // NEW: Local input state
  const [leaderboard, setLeaderboard] = useState([]);
  const [activeTab, setActiveTab] = useState('predict');
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  // Check if user is logged in
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
    // Get upcoming fixtures
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
    
    // Load leaderboard
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

  // NEW: Update local input state (doesn't save to DB)
  const handleInputChange = (fixtureId, field, value) => {
    setInputValues(prev => ({
      ...prev,
      [fixtureId]: {
        ...prev[fixtureId],
        [field]: value
      }
    }));
  };

  // NEW: Save prediction when user clicks submit
  const submitPrediction = async (fixtureId) => {
    if (!user) return;

    const input = inputValues[fixtureId] || {};
    const home = input.home;
    const away = input.away;

    // Validate both scores are entered
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

    // Check if match started
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

      // Update saved predictions state (this locks the inputs)
      setPredictions(prev => ({
        ...prev,
        [fixtureId]: { home: homeNum, away: awayNum }
      }));

      // Clear input state for this fixture
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
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b-4 border-orange-700 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">🎯 Match Predictions</h1>
              <p className="text-orange-200 mt-2">Predict scores and compete!</p>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <div className="bg-white/10 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-white" />
                      <span className="text-white font-bold">{user.username}</span>
                    </div>
                  </div>
                  <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={() => setShowAuth(true)} className="px-6 py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Login / Register
                </button>
              )}
              <button onClick={() => router.push('/')} className="px-6 py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition">
                ← Back
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowAuth(false)}>
          <div className="bg-slate-800 rounded-xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-white mb-6">{authMode === 'login' ? 'Login' : 'Create Account'}</h2>
            
            <div className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-slate-300 mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none"
                    placeholder="Choose a username"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none"
                  placeholder="••••••••"
                />
              </div>

              <button 
                onClick={handleAuth} 
                disabled={authLoading}
                className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition disabled:opacity-50"
              >
                {authLoading ? 'Please wait...' : (authMode === 'login' ? 'Login' : 'Create Account')}
              </button>

              <button 
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="w-full text-slate-400 hover:text-white transition text-sm"
              >
                {authMode === 'login' ? "Don't have an account? Register" : 'Already have an account? Login'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!user ? (
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-slate-800 rounded-xl p-16 text-center border-2 border-slate-700">
            <LogIn className="w-24 h-24 text-slate-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Members Only</h2>
            <p className="text-slate-400 mb-8">Login or register to make predictions!</p>
            <button onClick={() => setShowAuth(true)} className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition text-lg">
              Login / Register
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex gap-3 mb-8">
            <button 
              onClick={() => setActiveTab('predict')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'predict' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              📝 Predictions
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-3 rounded-lg font-bold transition ${
                activeTab === 'leaderboard' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              🏆 Leaderboard
            </button>
          </div>

          {/* Predictions Tab */}
          {activeTab === 'predict' && (
            <div>
              {/* Stats */}
              <div className="bg-gradient-to-r from-orange-900 to-orange-800 rounded-lg p-4 mb-6 flex justify-between">
                <div>
                  <p className="text-white font-bold">Your Predictions</p>
                  <p className="text-orange-200 text-sm">
                    {Object.keys(predictions).length} of {fixtures.length}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-white">{Object.keys(predictions).length}</p>
                  <p className="text-orange-200 text-sm">Locked</p>
                </div>
              </div>

              <div className="space-y-4">
                {fixtures.map(fixture => {
                  const savedPred = predictions[fixture.fixture.id];
                  const input = inputValues[fixture.fixture.id] || {};
                  const isLocked = savedPred !== undefined; // Only locked if already saved
                  const matchStarted = new Date(fixture.fixture.date) <= new Date();
                  const isDisabled = isLocked || matchStarted;

                  // Show saved values if locked, otherwise show input values
                  const displayHome = isLocked ? savedPred.home : (input.home ?? '');
                  const displayAway = isLocked ? savedPred.away : (input.away ?? '');

                  // Check if both inputs have values (for showing submit button)
                  const canSubmit = !isDisabled && input.home !== undefined && input.home !== '' && input.away !== undefined && input.away !== '';

                  return (
                    <div key={fixture.fixture.id} className={`bg-slate-800 rounded-lg p-6 border-2 ${isDisabled ? 'border-slate-600 opacity-75' : 'border-slate-700'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-sm">{fixture.league.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400 text-sm">{new Date(fixture.fixture.date).toLocaleString('en-GB')}</span>
                          {isLocked && <span className="px-2 py-1 bg-green-600 text-white text-xs rounded font-bold">✓ Locked</span>}
                          {matchStarted && !isLocked && <span className="px-2 py-1 bg-red-600 text-white text-xs rounded font-bold">Started</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-4 items-center">
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

                      {/* Submit Button - only show when both scores entered and not locked */}
                      {canSubmit && (
                        <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                          <button
                            onClick={() => submitPrediction(fixture.fixture.id)}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
                          >
                            🔒 Lock Prediction ({input.home} - {input.away})
                          </button>
                        </div>
                      )}

                      {/* Show locked prediction */}
                      {isLocked && (
                        <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                          <span className="text-green-400 text-sm font-bold">✓ Locked: {savedPred.home} - {savedPred.away}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Leaderboard */}
          {activeTab === 'leaderboard' && (
            <div className="bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700">
              <div className="bg-gradient-to-r from-orange-900 to-orange-800 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
                  Leaderboard
                </h2>
              </div>

              <table className="w-full">
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

      {/* Info Banner */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-green-900/30 border-2 border-green-600 rounded-lg p-4">
          <p className="text-green-300 text-sm text-center">
            ✅ <strong>Production Ready!</strong> Using Supabase database with real authentication
          </p>
        </div>
      </div>
    </div>
  );
}