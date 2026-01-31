'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trophy, Brain, Target, ArrowLeft, Loader2, Lock, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function MembersPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('predictions');
  const [predictionsLeaderboard, setPredictionsLeaderboard] = useState([]);
  const [quizLeaderboard, setQuizLeaderboard] = useState([]);

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
      await loadLeaderboards();
    }
    setLoading(false);
  };

  const loadLeaderboards = async () => {
    // Load predictions leaderboard
    try {
      const { data: predData, error: predError } = await supabase.rpc('get_leaderboard');
      if (!predError) {
        setPredictionsLeaderboard(predData || []);
      }
    } catch (err) {
      console.error('Error loading predictions leaderboard:', err);
    }

    // Load quiz leaderboard - get current week
    const getWeekNumber = () => {
      const week4Start = new Date('2026-01-26');
      week4Start.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diffTime = today - week4Start;
      const diffWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
      return diffWeeks + 4;
    };

    try {
      const { data: quizData, error: quizError } = await supabase
        .from('quiz_scores')
        .select('*, users(username)')
        .eq('week_number', getWeekNumber())
        .order('score', { ascending: false })
        .order('time_taken', { ascending: true })
        .limit(20);

      if (!quizError) {
        setQuizLeaderboard(quizData || []);
      }
    } catch (err) {
      console.error('Error loading quiz leaderboard:', err);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getWeekNumber = () => {
    const week4Start = new Date('2026-01-26');
    week4Start.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = today - week4Start;
    const diffWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
    return diffWeeks + 4;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-orange-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                Members Area
              </h1>
              <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 sm:p-12 border border-slate-700 text-center">
            <Lock className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Members Only</h2>
            <p className="text-slate-400 mb-6">
              Login or register to view leaderboards and track your scores!
            </p>
            <button
              onClick={() => router.push('/auth?returnTo=/members')}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700"
            >
              Login / Register
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                Members Area
              </h1>
              <p className="text-slate-400 text-sm mt-1">Welcome, {user.username}!</p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab('predictions')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition text-xs sm:text-base flex items-center gap-2 ${
              activeTab === 'predictions' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
            Predictions
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition text-xs sm:text-base flex items-center gap-2 ${
              activeTab === 'quiz' ? 'bg-orange-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
            Quiz Week {getWeekNumber()}
          </button>
        </div>

        {/* Predictions Leaderboard */}
        {activeTab === 'predictions' && (
          <div className="bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700">
            <div className="bg-gradient-to-r from-orange-900 to-orange-800 p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-400" />
                Predictions Leaderboard
              </h2>
            </div>

            {/* Mobile Leaderboard */}
            <div className="block sm:hidden">
              {predictionsLeaderboard.length === 0 ? (
                <p className="text-slate-400 text-center py-8">No predictions yet!</p>
              ) : (
                predictionsLeaderboard.map((entry, index) => (
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
                          {entry.username || entry.guest_nickname || 'Anonymous'}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-white">{entry.total_points} pts</span>
                    </div>
                    <div className="flex gap-4 mt-1 text-xs text-slate-400 ml-10">
                      <span>{entry.total_predictions} pred</span>
                      <span className="text-green-400">{entry.exact_scores} exact</span>
                    </div>
                  </div>
                ))
              )}
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
                {predictionsLeaderboard.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-slate-400">No predictions yet!</td>
                  </tr>
                ) : (
                  predictionsLeaderboard.map((entry, index) => (
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
                          {entry.username || entry.guest_nickname || 'Anonymous'} {entry.username === user?.username && '(You)'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-slate-300">{entry.total_predictions}</td>
                      <td className="py-4 px-6 text-center text-green-400 font-bold">{entry.exact_scores}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-2xl font-bold text-white">{entry.total_points}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Quiz Leaderboard */}
        {activeTab === 'quiz' && (
          <div className="bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700">
            <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 p-4 sm:p-6">
              <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-indigo-400" />
                Quiz Leaderboard - Week {getWeekNumber()}
              </h2>
            </div>

            {/* Mobile Leaderboard */}
            <div className="block sm:hidden">
              {quizLeaderboard.length === 0 ? (
                <p className="text-slate-400 text-center py-8">No quiz scores yet this week!</p>
              ) : (
                quizLeaderboard.map((entry, index) => (
                  <div key={entry.id} className={`p-3 border-b border-slate-700 ${entry.user_id === user?.id ? 'bg-indigo-900/20' : ''}`}>
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
                        <span className={`text-white font-bold text-sm ${entry.user_id === user?.id ? 'text-indigo-400' : ''}`}>
                          {entry.users?.username || entry.guest_nickname || 'Anonymous'}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-white">{entry.score}/10</span>
                    </div>
                    <div className="flex gap-4 mt-1 text-xs text-slate-400 ml-10">
                      <span>Time: {formatTime(entry.time_taken)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Desktop Leaderboard */}
            <table className="hidden sm:table w-full">
              <thead className="bg-slate-900 text-slate-400 text-xs uppercase">
                <tr>
                  <th className="py-3 px-6 text-left">Rank</th>
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-center">Time</th>
                  <th className="py-3 px-6 text-center">Score</th>
                </tr>
              </thead>
              <tbody>
                {quizLeaderboard.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-slate-400">No quiz scores yet this week!</td>
                  </tr>
                ) : (
                  quizLeaderboard.map((entry, index) => (
                    <tr key={entry.id} className={`border-b border-slate-700 ${entry.user_id === user?.id ? 'bg-indigo-900/20' : ''}`}>
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
                        <span className={`text-white font-bold ${entry.user_id === user?.id ? 'text-indigo-400' : ''}`}>
                          {entry.users?.username || entry.guest_nickname || 'Anonymous'} {entry.user_id === user?.id && '(You)'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-slate-300">{formatTime(entry.time_taken)}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-2xl font-bold text-white">{entry.score}/10</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}