'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Trophy, User, LogOut, LogIn, Clock, ArrowLeft, UserPlus } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Script from 'next/script';

export default function Predictions() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [guestNickname, setGuestNickname] = useState('');
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameInput, setNicknameInput] = useState('');
  const [fixtures, setFixtures] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [loading, setLoading] = useState(true);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  useEffect(() => {
    checkUser();
    // Check for saved guest nickname
    const savedNickname = localStorage.getItem('guestNickname');
    if (savedNickname) {
      setGuestNickname(savedNickname);
    }
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

  const loadGuestPredictions = async (nickname) => {
    const { data, error } = await supabase
      .from('predictions')
      .select('*')
      .eq('guest_nickname', nickname);

    if (error) {
      console.error('Error loading guest predictions:', error);
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setPredictions({});
    setInputValues({});
    router.push('/');
  };

  const handleGuestLogout = () => {
    localStorage.removeItem('guestNickname');
    setGuestNickname('');
    setPredictions({});
    setInputValues({});
  };

  const handleNicknameSubmit = async () => {
    if (!nicknameInput.trim()) {
      alert('Please enter a nickname');
      return;
    }
    
    const nickname = nicknameInput.trim();
    localStorage.setItem('guestNickname', nickname);
    setGuestNickname(nickname);
    setShowNicknameModal(false);
    setNicknameInput('');
    await loadGuestPredictions(nickname);
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
    if (!user && !guestNickname) {
      setShowNicknameModal(true);
      return;
    }

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
      if (user) {
        // Logged in user
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
      } else {
        // Guest user
        const { error } = await supabase
          .from('predictions')
          .insert([
            {
              guest_nickname: guestNickname,
              fixture_id: fixtureId,
              home_score: homeNum,
              away_score: awayNum
            }
          ]);

        if (error) throw error;
      }

      setPredictions(prev => ({
        ...prev,
        [fixtureId]: { home: homeNum, away: awayNum }
      }));

      setInputValues(prev => {
        const newInputs = { ...prev };
        delete newInputs[fixtureId];
        return newInputs;
      });

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
              ) : guestNickname ? (
                <>
                  <div className="bg-white/10 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <span className="text-white font-bold text-xs sm:text-base truncate max-w-[80px] sm:max-w-none">{guestNickname}</span>
                      <span className="text-orange-300 text-xs">(Guest)</span>
                    </div>
                  </div>
                  <button onClick={handleGuestLogout} className="px-2 sm:px-4 py-1 sm:py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition text-xs sm:text-base">
                    Change
                  </button>
                </>
              ) : (
                <button onClick={() => setShowNicknameModal(true)} className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                  Play Now
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

      {/* Nickname Modal */}
      {showNicknameModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowNicknameModal(false)}>
          <div className="bg-slate-800 rounded-xl p-6 sm:p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Enter Your Nickname</h2>
            <p className="text-slate-400 mb-4 text-sm">Choose a nickname to track your predictions</p>
            
            <input
              type="text"
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              placeholder="Your nickname"
              className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none mb-4"
              maxLength={20}
            />
            
            <button
              onClick={handleNicknameSubmit}
              className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition mb-4"
            >
              Start Playing
            </button>
            
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-2">Want to see the leaderboard?</p>
              <button
                onClick={() => {
                  setShowNicknameModal(false);
                  router.push('/auth?returnTo=/predictions');
                }}
                className="text-orange-400 hover:text-orange-300 font-bold text-sm"
              >
                Register for Free →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Register Banner for Guests */}
      {!user && guestNickname && (
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 border-b border-indigo-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-indigo-200 text-sm text-center sm:text-left">
                📊 Want to see your scores on the leaderboard? Register to become a member!
              </p>
              <button
                onClick={() => router.push('/auth?returnTo=/members')}
                className="px-4 py-1 bg-white text-indigo-900 rounded-lg font-bold text-sm hover:bg-indigo-50 transition flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Register Free
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!user && !guestNickname ? (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
          <div className="bg-slate-800 rounded-xl p-8 sm:p-16 text-center border-2 border-slate-700">
            <LogIn className="w-16 h-16 sm:w-24 sm:h-24 text-slate-600 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Ready to Predict?</h2>
            <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">Enter a nickname to start making predictions!</p>
            <button onClick={() => setShowNicknameModal(true)} className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition text-sm sm:text-lg">
              Play Now
            </button>
            <p className="text-slate-500 mt-4 text-sm">
              Already a member? <button onClick={() => router.push('/auth?returnTo=/predictions')} className="text-orange-400 hover:text-orange-300 font-bold">Login</button>
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
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

          {/* Fixtures */}
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
    </div>
  );
}