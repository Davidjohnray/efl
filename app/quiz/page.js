'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Trophy, CheckCircle, XCircle, ArrowLeft, RefreshCw, Loader2, Lock, AlertTriangle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function WeeklyQuiz() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [alreadyTaken, setAlreadyTaken] = useState(false);
  const [previousScore, setPreviousScore] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [startTime, setStartTime] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  const [weekNumber, setWeekNumber] = useState(0);
  const [questionsRemaining, setQuestionsRemaining] = useState(0);

  // Calculate week number (weeks since Jan 1, 2026)
  const getWeekNumber = () => {
  const week4Start = new Date('2026-01-26'); // Week 4 starts Jan 26
  week4Start.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = today - week4Start;
  const diffWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
  return diffWeeks + 4; // Starts at week 4
};

  useEffect(() => {
    const week = getWeekNumber();
    setWeekNumber(week);
    checkUser(week);
  }, []);

  const checkUser = async (week) => {
  console.log('checkUser called, supabase is:', supabase);
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
       .gte('week_number', 1)
        .single();

      if (existingScore) {
        setAlreadyTaken(true);
        setPreviousScore(existingScore);
      }
    }
    
    await loadQuestions(week);
    await loadLeaderboard(week);
    await checkQuestionsRemaining();
    setLoading(false);
  };

  const loadQuestions = async (week) => {
  try {
    console.log('Loading questions for week:', week);
    
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('week_number', week)
      .limit(10);
    
    console.log('Data:', data);
    console.log('Error:', error);
    
    if (error) {
      console.log('Supabase error:', error.message);
      return;
    }
    
    if (data && data.length > 0) {
      console.log('Found questions:', data.length);
      setQuestions(data.map(q => ({
        id: q.id,
        question: q.question,
        options: [q.option_a, q.option_b, q.option_c, q.option_d],
        correctAnswer: q.correct_answer,
        explanation: q.explanation
      })));
      setStartTime(Date.now());
    } else {
      console.log('No questions found for week', week);
    }
  } catch (error) {
    console.error('Catch error:', error);
  }
};

  const loadLeaderboard = async (week) => {
    try {
      const { data, error } = await supabase
        .from('quiz_scores')
        .select('*, users(username)')
        .eq('week_number', week)
        .order('score', { ascending: false })
        .order('time_taken', { ascending: true })
        .limit(10);

      if (error) throw error;
      setLeaderboard(data || []);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    }
  };

  const checkQuestionsRemaining = async () => {
    try {
      const { count, error } = await supabase
        .from('quiz_questions')
        .select('*', { count: 'exact', head: true })
        .is('week_number', null);

      if (!error) {
        setQuestionsRemaining(count || 0);
      }
    } catch (error) {
      console.error('Error checking questions:', error);
    }
  };

  // Timer effect
  useEffect(() => {
    if (quizCompleted || alreadyTaken || timeLeft <= 0 || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizCompleted, alreadyTaken, timeLeft, questions.length]);

  useEffect(() => {
    if (timeLeft === 0 && !quizCompleted && !alreadyTaken) {
      finishQuiz();
    }
  }, [timeLeft]);

  const handleAnswerSelect = (optionIndex) => {
    if (quizCompleted || alreadyTaken) return;
    
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
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(userAnswers[currentQuestion - 1] ?? null);
      setShowExplanation(false);
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

    // Save score if logged in
    if (user) {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      
      try {
        const { error } = await supabase
          .from('quiz_scores')
          .insert([{
            user_id: user.id,
            week_number: weekNumber,
            score: correctAnswers,
            time_taken: timeTaken
          }]);

        if (error) throw error;
        await loadLeaderboard(weekNumber);
      } catch (error) {
        console.error('Error saving score:', error);
      }
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
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Brain className="w-8 h-8 text-indigo-400" />
                EFL Weekly Quiz
              </h1>
              <button
  onClick={() => router.push('/auth?returnTo=/quiz')}
  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
>
  Login / Register
</button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700 text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">No Questions Available</h2>
            <p className="text-slate-400 mb-6">
              We've run out of quiz questions! Please check back later when new questions are added.
            </p>
            {user?.is_admin && (
              <button
                onClick={() => router.push('/quiz/admin')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
              >
                Add Questions (Admin)
              </button>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Already taken this week
  if (alreadyTaken && previousScore) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Brain className="w-8 h-8 text-indigo-400" />
                EFL Weekly Quiz - Week {weekNumber}
              </h1>
              <button
  onClick={() => router.push('/')}
  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
>
  <ArrowLeft className="w-4 h-4" />
  Back Home
</button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center mb-8">
            <Lock className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
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

          {/* Leaderboard */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Week {weekNumber} Leaderboard
            </h3>
            {leaderboard.length === 0 ? (
              <p className="text-slate-400 text-center py-4">No scores yet this week!</p>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={entry.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      entry.user_id === user?.id ? 'bg-indigo-600/20 border border-indigo-500' : 'bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-orange-600 text-white' :
                        'bg-slate-700 text-slate-300'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-white font-medium">
                        {entry.users?.username || 'Anonymous'}
                        {entry.user_id === user?.id && ' (You)'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400 text-sm">{formatTime(entry.time_taken)}</span>
                      <span className="text-xl font-bold text-white">{entry.score}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Brain className="w-8 h-8 text-indigo-400" />
                EFL Weekly Quiz - Week {weekNumber}
              </h1>
              <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700 text-center">
            <Brain className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Login Required</h2>
            <p className="text-slate-400 mb-6">
              Please login to take the weekly quiz and compete on the leaderboard!
            </p>
            <button
  onClick={() => router.push('/auth?returnTo=/quiz')}
  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
>
  Login / Register
</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Brain className="w-8 h-8 text-indigo-400" />
                EFL Weekly Quiz - Week {weekNumber}
              </h1>
              <p className="text-slate-300 mt-2">
                Test your knowledge of League One & Two football
              </p>
            </div>
            <div className="flex items-center gap-4">
              {user?.is_admin && questionsRemaining < 20 && (
                <div className="px-3 py-1 bg-yellow-600 text-white rounded-lg text-sm">
                  ⚠️ {questionsRemaining} questions left
                </div>
              )}
              <div className={`px-4 py-2 rounded-lg font-bold ${timeLeft > 60 ? 'bg-green-600' : timeLeft > 30 ? 'bg-yellow-600' : 'bg-red-600'}`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {quizCompleted ? (
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Trophy className="w-16 h-16 text-yellow-300" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Quiz Completed!
              </h2>
              
              <div className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                {score}/{questions.length}
              </div>
              
              <div className="text-2xl text-slate-300 mb-8">
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

              <div className="space-y-6 mb-8 text-left">
                {questions.map((question, index) => {
                  const userAnswer = userAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Question {index + 1}</span>
                        <div className={`flex items-center gap-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                          {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                          <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-2">{question.question}</p>
                      <div className="text-sm text-slate-400">
                        <span className="font-medium">Your answer:</span> {question.options[userAnswer] || 'Not answered'}
                        <br />
                        <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                      </div>
                      {question.explanation && (
                        <div className="mt-2 text-sm text-slate-500 italic">
                          {question.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-300">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-slate-300">
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
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-8">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(index);
                    setSelectedOption(userAnswers[index] ?? null);
                    setShowExplanation(false);
                  }}
                  className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
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
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedOption === index
                        ? 'border-indigo-500 bg-indigo-500/10'
                        : 'border-slate-700 hover:border-slate-600 bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        selectedOption === index
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg text-slate-300">{option}</span>
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
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors"
                  >
                    ← Previous
                  </button>
                )}
              </div>
              
              <button
                onClick={handleNextQuestion}
                disabled={userAnswers[currentQuestion] === undefined}
                className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                  userAnswers[currentQuestion] !== undefined
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question →'}
              </button>
            </div>
          </div>
        )}

        {/* Quiz Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Scoring
            </h3>
            <p className="text-slate-400 text-sm">
              1 point per correct answer. Compete for the fastest time!
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-white mb-2">⏱️ Time Limit</h3>
            <p className="text-slate-400 text-sm">
              10 minutes to complete all questions. Faster times rank higher!
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-white mb-2">📅 One Attempt</h3>
            <p className="text-slate-400 text-sm">
              You can only take each week's quiz once. New quiz every Monday!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}