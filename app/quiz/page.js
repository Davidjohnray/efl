'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Trophy, CheckCircle, XCircle, ArrowLeft, Loader2, UserPlus, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function WeeklyQuiz() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [guestNickname, setGuestNickname] = useState('');
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameInput, setNicknameInput] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [startTime, setStartTime] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weekNumber, setWeekNumber] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [alreadyTaken, setAlreadyTaken] = useState(false);
  const [previousScore, setPreviousScore] = useState(null);

  const getWeekNumber = () => {
    const week4Start = new Date('2026-01-26');
    week4Start.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = today - week4Start;
    const diffWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
    return diffWeeks + 4;
  };

  useEffect(() => {
    const week = getWeekNumber();
    setWeekNumber(week);
    checkUser(week);
    
    const savedNickname = localStorage.getItem('guestNickname');
    if (savedNickname) {
      setGuestNickname(savedNickname);
    }
  }, []);

  const checkUser = async (week) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('users')
        .select('*, is_admin')
        .eq('id', user.id)
        .single();
      setUser(profile);

      // Check if already taken this week
      const { data: existingScore } = await supabase
        .from('quiz_scores')
        .select('*')
        .eq('user_id', user.id)
        .eq('week_number', week)
        .single();

      if (existingScore) {
        setAlreadyTaken(true);
        setPreviousScore(existingScore);
      }
    }
    
    await loadQuestions(week);
    setLoading(false);
  };

  const loadQuestions = async (week) => {
    try {
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('week_number', week)
        .limit(10);
      
      if (error) {
        console.log('Supabase error:', error.message);
        return;
      }
      
      if (data && data.length > 0) {
        setQuestions(data.map(q => ({
          id: q.id,
          question: q.question,
          options: [q.option_a, q.option_b, q.option_c, q.option_d],
          correctAnswer: q.correct_answer,
          explanation: q.explanation
        })));
      }
    } catch (error) {
      console.error('Catch error:', error);
    }
  };

  useEffect(() => {
    if (quizCompleted || !quizStarted || timeLeft <= 0 || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizCompleted, quizStarted, timeLeft, questions.length]);

  useEffect(() => {
    if (timeLeft === 0 && !quizCompleted && quizStarted) {
      finishQuiz();
    }
  }, [timeLeft]);

  const handleStartQuiz = () => {
    if (!user && !guestNickname) {
      setShowNicknameModal(true);
      return;
    }
    setQuizStarted(true);
    setStartTime(Date.now());
  };

  const handleNicknameSubmit = () => {
    if (!nicknameInput.trim()) {
      alert('Please enter a nickname');
      return;
    }
    
    const nickname = nicknameInput.trim();
    localStorage.setItem('guestNickname', nickname);
    setGuestNickname(nickname);
    setShowNicknameModal(false);
    setNicknameInput('');
    setQuizStarted(true);
    setStartTime(Date.now());
  };

  const handleGuestLogout = () => {
    localStorage.removeItem('guestNickname');
    setGuestNickname('');
    setQuizStarted(false);
    setUserAnswers({});
    setCurrentQuestion(0);
  };

  const handleAnswerSelect = (optionIndex) => {
    if (quizCompleted) return;
    
    setSelectedOption(optionIndex);
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(userAnswers[currentQuestion + 1] ?? null);
    } else {
      finishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(userAnswers[currentQuestion - 1] ?? null);
    }
  };

  const finishQuiz = async () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizCompleted(true);

    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
    try {
      if (user) {
        await supabase
          .from('quiz_scores')
          .insert([{
            user_id: user.id,
            week_number: weekNumber,
            score: correctAnswers,
            time_taken: timeTaken
          }]);
      } else if (guestNickname) {
        await supabase
          .from('quiz_scores')
          .insert([{
            guest_nickname: guestNickname,
            week_number: weekNumber,
            score: correctAnswers,
            time_taken: timeTaken
          }]);
      }
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getQuestionStatus = (questionIndex) => {
    if (quizCompleted) {
      const isCorrect = userAnswers[questionIndex] === questions[questionIndex].correctAnswer;
      return isCorrect ? 'correct' : 'incorrect';
    }
    return userAnswers[questionIndex] !== undefined ? 'answered' : 'unanswered';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading quiz...</p>
        </div>
      </div>
    );
  }

  // No questions available
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                EFL Weekly Quiz
              </h1>
              <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 sm:p-12 border border-slate-700 text-center">
            <Brain className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">No Questions Available</h2>
            <p className="text-slate-400 mb-6">
              Check back later for this week's quiz!
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Already taken this week (for registered users)
  if (alreadyTaken && previousScore) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                EFL Weekly Quiz - Week {weekNumber}
              </h1>
              <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center mb-8">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Quiz Already Completed!</h2>
            <p className="text-slate-400 mb-6">
              You've already taken this week's quiz. Come back next Monday for a new quiz!
            </p>
            <div className="text-4xl font-bold text-indigo-400 mb-2">
              Your Score: {previousScore.score}/10
            </div>
            <div className="text-slate-400">
              Time: {formatTime(previousScore.time_taken)}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push('/members')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition"
            >
              View Leaderboard
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Start screen (before quiz begins)
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                EFL Weekly Quiz - Week {weekNumber}
              </h1>
              <div className="flex items-center gap-2">
                {user ? (
                  <div className="bg-white/10 px-3 py-1 rounded-lg">
                    <span className="text-white text-sm">{user.username}</span>
                  </div>
                ) : guestNickname ? (
                  <div className="flex items-center gap-2">
                    <div className="bg-white/10 px-3 py-1 rounded-lg">
                      <span className="text-white text-sm">{guestNickname} <span className="text-indigo-300">(Guest)</span></span>
                    </div>
                    <button onClick={handleGuestLogout} className="px-2 py-1 bg-slate-600 text-white rounded text-xs">
                      Change
                    </button>
                  </div>
                ) : null}
                <button
                  onClick={() => router.push('/')}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back Home</span>
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
              <p className="text-slate-400 mb-4 text-sm">Choose a nickname to track your quiz scores</p>
              
              <input
                type="text"
                value={nicknameInput}
                onChange={(e) => setNicknameInput(e.target.value)}
                placeholder="Your nickname"
                className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none mb-4"
                maxLength={20}
              />
              
              <button
                onClick={handleNicknameSubmit}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition mb-4"
              >
                Start Quiz
              </button>
              
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-2">Want to see the leaderboard?</p>
                <button
                  onClick={() => {
                    setShowNicknameModal(false);
                    router.push('/auth?returnTo=/quiz');
                  }}
                  className="text-indigo-400 hover:text-indigo-300 font-bold text-sm"
                >
                  Register for Free →
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
          <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-12 border border-slate-700 text-center">
            <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Week {weekNumber} Quiz</h2>
            <p className="text-slate-400 mb-6 text-sm sm:text-base">
              Test your knowledge of League One & League Two football!
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white">{questions.length}</p>
                <p className="text-slate-400 text-xs">Questions</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white">10</p>
                <p className="text-slate-400 text-xs">Minutes</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white">1</p>
                <p className="text-slate-400 text-xs">Attempt</p>
              </div>
            </div>
            
            <button
              onClick={handleStartQuiz}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition text-lg"
            >
              🧠 Start Quiz
            </button>
            
            {!user && (
              <p className="text-slate-500 mt-4 text-sm">
                Already a member? <button onClick={() => router.push('/auth?returnTo=/quiz')} className="text-indigo-400 hover:text-indigo-300 font-bold">Login</button>
              </p>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Quiz completed
  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h1 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                Quiz Complete!
              </h1>
              <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </button>
            </div>
          </div>
        </header>

        {/* Register Banner for Guests */}
        {!user && guestNickname && (
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 border-b border-indigo-700">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-indigo-200 text-sm text-center sm:text-left">
                  📊 Want to see your score on the leaderboard? Register to become a member!
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

        <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-300" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quiz Completed!
              </h2>
              
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                {score}/{questions.length}
              </div>
              
              <div className="text-xl sm:text-2xl text-slate-300 mb-6">
                {score === questions.length ? "Perfect Score! 🏆" : 
                 score >= questions.length * 0.8 ? "Excellent! ⭐⭐⭐" :
                 score >= questions.length * 0.6 ? "Good Job! ⭐⭐" :
                 "Keep Learning! ⭐"}
              </div>

              <div className="grid grid-cols-5 gap-2 mb-8">
                {questions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <div
                      key={index}
                      className={`h-2 rounded-full ${
                        status === 'correct' ? 'bg-green-500' :
                        status === 'incorrect' ? 'bg-red-500' :
                        'bg-slate-700'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Answers Review */}
            <div className="space-y-4 sm:space-y-6 mb-8">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm sm:text-base">Question {index + 1}</span>
                      <div className={`flex items-center gap-1 text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {isCorrect ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : <XCircle className="w-4 h-4 sm:w-5 sm:h-5" />}
                        <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-2 text-sm sm:text-base">{question.question}</p>
                    <div className="text-xs sm:text-sm text-slate-400">
                      <span className="font-medium">Your answer:</span> {question.options[userAnswer] || 'Not answered'}
                      <br />
                      <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition"
              >
                Return Home
              </button>
              {user && (
                <button
                  onClick={() => router.push('/members')}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold transition"
                >
                  View Leaderboard
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Active quiz
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div>
              <h1 className="text-lg sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Brain className="w-5 h-5 sm:w-8 sm:h-8 text-indigo-400" />
                Week {weekNumber} Quiz
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {user ? (
                <div className="bg-white/10 px-2 sm:px-3 py-1 rounded-lg">
                  <span className="text-white text-xs sm:text-sm">{user.username}</span>
                </div>
              ) : guestNickname ? (
                <div className="bg-white/10 px-2 sm:px-3 py-1 rounded-lg">
                  <span className="text-white text-xs sm:text-sm">{guestNickname} <span className="text-indigo-300">(Guest)</span></span>
                </div>
              ) : null}
              <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${timeLeft > 60 ? 'bg-green-600' : timeLeft > 30 ? 'bg-yellow-600' : 'bg-red-600'}`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Register Banner for Guests */}
      {!user && guestNickname && (
        <div className="bg-gradient-to-r from-indigo-900/50 to-indigo-800/50 border-b border-indigo-700/50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
            <p className="text-indigo-200 text-xs sm:text-sm text-center">
              📊 <button onClick={() => router.push('/auth?returnTo=/members')} className="underline hover:text-white">Register</button> to see your scores on the leaderboard!
            </p>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="bg-slate-800/50 rounded-2xl p-4 sm:p-8 border border-slate-700 shadow-2xl">
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-300 text-sm">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-slate-300 text-sm">
                Answered: {Object.keys(userAnswers).length}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Navigation */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6 sm:mb-8">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestion(index);
                  setSelectedOption(userAnswers[index] ?? null);
                }}
                className={`h-8 sm:h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                  currentQuestion === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white ring-2 ring-indigo-500'
                    : getQuestionStatus(index) === 'answered'
                    ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Current Question */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-2 sm:space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all ${
                    selectedOption === index
                      ? 'border-indigo-500 bg-indigo-500/10'
                      : 'border-slate-700 hover:border-slate-600 bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base ${
                      selectedOption === index
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-sm sm:text-lg text-slate-300">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <div>
              {currentQuestion > 0 && (
                <button
                  onClick={handlePreviousQuestion}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors text-sm sm:text-base"
                >
                  ← Previous
                </button>
              )}
            </div>
            
            <button
              onClick={handleNextQuestion}
              disabled={userAnswers[currentQuestion] === undefined}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold transition-colors text-sm sm:text-base ${
                userAnswers[currentQuestion] !== undefined
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next →'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}