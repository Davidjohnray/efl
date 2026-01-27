'use client';

import { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, User, Clock, Send, Loader2, Trash2, Shield } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function PostDetail({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clubId, postId } = use(params);
  const clubName = searchParams.get('name') || 'Club';
  const clubLogo = searchParams.get('logo') || '';

  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    checkUser();
    loadPost();
    loadComments();
  }, [postId]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('users')
        .select('*, is_admin')
        .eq('id', user.id)
        .single();
      setUser(profile);
    }
  };

  const loadPost = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_posts')
        .select(`*, users (username)`)
        .eq('id', postId)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_comments')
        .select(`*, users (username)`)
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

  const addComment = async () => {
    if (!user) {
      alert('Please login to comment');
      return;
    }

    if (!newComment.trim()) {
      alert('Please enter a comment');
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('forum_comments')
        .insert([{
          post_id: postId,
          user_id: user.id,
          content: newComment.trim()
        }]);

      if (error) throw error;

      setNewComment('');
      await loadComments();
    } catch (error) {
      alert('Error adding comment: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteComment = async (commentId) => {
    if (!confirm('Delete this comment?')) return;

    try {
      const { error } = await supabase
        .from('forum_comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;
      await loadComments();
    } catch (error) {
      alert('Error deleting comment: ' + error.message);
    }
  };

  const deletePost = async () => {
    if (!confirm('Delete this post and all comments?')) return;

    try {
      const { error } = await supabase
        .from('forum_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      router.push(`/fansforum/${clubId}?name=${encodeURIComponent(clubName)}&logo=${encodeURIComponent(clubLogo)}`);
    } catch (error) {
      alert('Error deleting post: ' + error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-GB') + ' ' + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  const canDelete = (userId) => {
    if (!user) return false;
    return user.id === userId || user.is_admin === true;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Post not found</p>
          <button
            onClick={() => router.push(`/fansforum/${clubId}?name=${encodeURIComponent(clubName)}&logo=${encodeURIComponent(clubLogo)}`)}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold"
          >
            Back to Forum
          </button>
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
            <div className="flex items-center gap-4">
              {clubLogo && (
                <img src={clubLogo} alt={clubName} className="w-12 h-12 object-contain" />
              )}
              <div>
                <h1 className="text-2xl font-bold text-white">{clubName}</h1>
                <p className="text-orange-200 text-sm">Fan Forum</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {user?.is_admin && (
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold flex items-center gap-1">
                  <Shield className="w-4 h-4" /> Admin
                </span>
              )}
              <button 
                onClick={() => router.push(`/fansforum/${clubId}?name=${encodeURIComponent(clubName)}&logo=${encodeURIComponent(clubLogo)}`)} 
                className="px-6 py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Post */}
        <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700 mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-white">{post.title}</h1>
            {canDelete(post.user_id) && (
              <button
                onClick={deletePost}
                className="text-red-400 hover:text-red-300 p-2"
                title={user?.is_admin ? "Delete (Admin)" : "Delete"}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>

          <p className="text-slate-300 whitespace-pre-wrap mb-6">{post.content}</p>

          <div className="flex items-center gap-4 text-sm text-slate-400 pt-4 border-t border-slate-700">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.users?.username || 'Anonymous'}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatDate(post.created_at)}
            </span>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-slate-800 rounded-xl border-2 border-slate-700 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-700">
            <h2 className="text-lg font-bold text-white">
              Comments ({comments.length})
            </h2>
          </div>

          {/* Comment Input */}
          {user ? (
            <div className="p-4 border-b border-slate-700">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                  {user.username?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    rows={3}
                    className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none resize-none"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={addComment}
                      disabled={submitting || !newComment.trim()}
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition disabled:opacity-50 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {submitting ? 'Posting...' : 'Post'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 border-b border-slate-700 text-center">
              <p className="text-slate-400">
                <a href="/predictions" className="text-orange-400 underline font-bold hover:text-orange-300">Login</a> to comment
              </p>
            </div>
          )}

          {/* Comments List */}
          <div className="divide-y divide-slate-700">
            {comments.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-slate-400">No comments yet. Be the first to comment!</p>
              </div>
            ) : (
              comments.map(comment => (
                <div key={comment.id} className="p-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.users?.username?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{comment.users?.username || 'Anonymous'}</span>
                          <span className="text-slate-500 text-sm">{formatDate(comment.created_at)}</span>
                        </div>
                        {canDelete(comment.user_id) && (
                          <button
                            onClick={() => deleteComment(comment.id)}
                            className="text-red-400 hover:text-red-300 p-1"
                            title={user?.is_admin ? "Delete (Admin)" : "Delete"}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <p className="text-slate-300">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}