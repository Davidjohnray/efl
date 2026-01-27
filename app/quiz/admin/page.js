'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Plus, Trash2, ArrowLeft, Save, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function QuizAdmin() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [stats, setStats] = useState({ total: 0, unused: 0, used: 0 });
  
  // New question form
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answer: 0,
    explanation: ''
  });

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('users')
        .select('*, is_admin')
        .eq('id', user.id)
        .single();
      
      if (!profile?.is_admin) {
        router.push('/quiz');
        return;
      }
      
      setUser(profile);
      await loadQuestions();
    } else {
      router.push('/quiz');
    }
    setLoading(false);
  };

  const loadQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuestions(data || []);

      // Calculate stats
      const total = data?.length || 0;
      const unused = data?.filter(q => q.week_number === null).length || 0;
      const used = total - unused;
      setStats({ total, unused, used });
    } catch (error) {
      console.error('Error loading questions:', error);
    }
  };

  const addQuestion = async () => {
    if (!newQuestion.question.trim() || !newQuestion.option_a.trim() || 
        !newQuestion.option_b.trim() || !newQuestion.option_c.trim() || 
        !newQuestion.option_d.trim()) {
      alert('Please fill in the question and all 4 options');
      return;
    }

    setSaving(true);

    try {
      const { error } = await supabase
        .from('quiz_questions')
        .insert([{
          question: newQuestion.question.trim(),
          option_a: newQuestion.option_a.trim(),
          option_b: newQuestion.option_b.trim(),
          option_c: newQuestion.option_c.trim(),
          option_d: newQuestion.option_d.trim(),
          correct_answer: newQuestion.correct_answer,
          explanation: newQuestion.explanation.trim() || null
        }]);

      if (error) throw error;

      // Reset form
      setNewQuestion({
        question: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        correct_answer: 0,
        explanation: ''
      });

      await loadQuestions();
      alert('Question added successfully!');
    } catch (error) {
      alert('Error adding question: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const deleteQuestion = async (id, weekNumber) => {
    if (weekNumber !== null) {
      alert('Cannot delete a question that has already been used in a quiz');
      return;
    }
    
    if (!confirm('Delete this question?')) return;

    try {
      const { error } = await supabase
        .from('quiz_questions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await loadQuestions();
    } catch (error) {
      alert('Error deleting question: ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Brain className="w-8 h-8 text-indigo-400" />
                Quiz Admin - Question Bank
              </h1>
              <p className="text-slate-300 mt-2">Add and manage quiz questions</p>
            </div>
            <button
              onClick={() => router.push('/quiz')}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Quiz
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-white">{stats.total}</p>
            <p className="text-slate-400">Total Questions</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-green-400">{stats.unused}</p>
            <p className="text-slate-400">Unused (Available)</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-orange-400">{stats.used}</p>
            <p className="text-slate-400">Already Used</p>
          </div>
        </div>

        {/* Warning if low on questions */}
        {stats.unused < 20 && (
          <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded-lg p-4 mb-8 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <p className="text-yellow-200">
              <strong>Warning:</strong> Only {stats.unused} questions remaining! 
              Add more questions to ensure quizzes can run each week (10 questions per week).
            </p>
          </div>
        )}

        {/* Add New Question Form */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Plus className="w-6 h-6 text-green-400" />
            Add New Question
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 mb-2">Question *</label>
              <textarea
                value={newQuestion.question}
                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                placeholder="Enter the quiz question..."
                rows={2}
                className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2">
                  Option A * 
                  {newQuestion.correct_answer === 0 && <span className="text-green-400 ml-2">✓ Correct</span>}
                </label>
                <input
                  type="text"
                  value={newQuestion.option_a}
                  onChange={(e) => setNewQuestion({ ...newQuestion, option_a: e.target.value })}
                  placeholder="Option A"
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">
                  Option B *
                  {newQuestion.correct_answer === 1 && <span className="text-green-400 ml-2">✓ Correct</span>}
                </label>
                <input
                  type="text"
                  value={newQuestion.option_b}
                  onChange={(e) => setNewQuestion({ ...newQuestion, option_b: e.target.value })}
                  placeholder="Option B"
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">
                  Option C *
                  {newQuestion.correct_answer === 2 && <span className="text-green-400 ml-2">✓ Correct</span>}
                </label>
                <input
                  type="text"
                  value={newQuestion.option_c}
                  onChange={(e) => setNewQuestion({ ...newQuestion, option_c: e.target.value })}
                  placeholder="Option C"
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">
                  Option D *
                  {newQuestion.correct_answer === 3 && <span className="text-green-400 ml-2">✓ Correct</span>}
                </label>
                <input
                  type="text"
                  value={newQuestion.option_d}
                  onChange={(e) => setNewQuestion({ ...newQuestion, option_d: e.target.value })}
                  placeholder="Option D"
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Correct Answer *</label>
              <div className="flex gap-4">
                {['A', 'B', 'C', 'D'].map((letter, index) => (
                  <button
                    key={letter}
                    onClick={() => setNewQuestion({ ...newQuestion, correct_answer: index })}
                    className={`px-6 py-3 rounded-lg font-bold transition ${
                      newQuestion.correct_answer === index
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Explanation (Optional)</label>
              <textarea
                value={newQuestion.explanation}
                onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                placeholder="Fun fact or explanation shown after answering..."
                rows={2}
                className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-indigo-500 outline-none resize-none"
              />
            </div>

            <button
              onClick={addQuestion}
              disabled={saving}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {saving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Add Question to Bank
                </>
              )}
            </button>
          </div>
        </div>

        {/* Question List */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">
            Question Bank ({questions.length})
          </h2>

          {questions.length === 0 ? (
            <p className="text-slate-400 text-center py-8">
              No questions yet. Add your first question above!
            </p>
          ) : (
            <div className="space-y-4">
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border ${
                    q.week_number !== null
                      ? 'bg-slate-900/30 border-slate-700 opacity-60'
                      : 'bg-slate-900/50 border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-slate-500 text-sm">#{questions.length - index}</span>
                        {q.week_number !== null ? (
                          <span className="px-2 py-1 bg-orange-600/20 text-orange-400 text-xs rounded">
                            Used in Week {q.week_number}
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded">
                            Available
                          </span>
                        )}
                      </div>
                      <p className="text-white font-medium mb-2">{q.question}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className={q.correct_answer === 0 ? 'text-green-400' : 'text-slate-400'}>
                          A: {q.option_a} {q.correct_answer === 0 && '✓'}
                        </span>
                        <span className={q.correct_answer === 1 ? 'text-green-400' : 'text-slate-400'}>
                          B: {q.option_b} {q.correct_answer === 1 && '✓'}
                        </span>
                        <span className={q.correct_answer === 2 ? 'text-green-400' : 'text-slate-400'}>
                          C: {q.option_c} {q.correct_answer === 2 && '✓'}
                        </span>
                        <span className={q.correct_answer === 3 ? 'text-green-400' : 'text-slate-400'}>
                          D: {q.option_d} {q.correct_answer === 3 && '✓'}
                        </span>
                      </div>
                      {q.explanation && (
                        <p className="text-slate-500 text-sm mt-2 italic">{q.explanation}</p>
                      )}
                    </div>
                    {q.week_number === null && (
                      <button
                        onClick={() => deleteQuestion(q.id, q.week_number)}
                        className="text-red-400 hover:text-red-300 p-2"
                        title="Delete question"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
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