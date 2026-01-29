'use client';

import { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MessageSquare, ArrowLeft, Plus, User, Clock, MessageCircle, Loader2, X, Trash2, Shield } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ClubForum({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clubId } = use(params);
  const clubName = searchParams.get('name') || 'Club';
  const clubLogo = searchParams.get('logo') || '';

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    checkUser();
    loadPosts();
  }, [clubId]);

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

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_posts')
        .select(`
          *,
          users (username),
          forum_comments (id)
        `)
        .eq('club_id', clubId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    if (!user) {
      alert('Please login to create a post');
      return;
    }

    if (!newTitle.trim() || !newContent.trim()) {
      alert('Please enter a title and content');
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('forum_posts')
        .insert([{
          user_id: user.id,
          club_id: parseInt(clubId),
          club_name: clubName,
          title: newTitle.trim(),
          content: newContent.trim()
        }]);

      if (error) throw error;

      setNewTitle('');
      setNewContent('');
      setShowNewPost(false);
      await loadPosts();
    } catch (error) {
      alert('Error creating post: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const deletePost = async (postId, e) => {
    e.stopPropagation();
    if (!confirm('Delete this post and all its comments?')) return;

    try {
      const { error } = await supabase
        .from('forum_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      await loadPosts();
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
    return date.toLocaleDateString('en-GB');
  };

  const canDelete = (postUserId) => {
    if (!user) return false;
    return user.id === postUserId || user.is_admin === true;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading forum...</p>
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
                <img src={clubLogo} alt={clubName} className="w-16 h-16 object-contain" />
              )}
              <div>
                <h1 className="text-3xl font-bold text-white">{clubName}</h1>
                <p className="text-orange-200">Fan Forum</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {user?.is_admin && (
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold flex items-center gap-1">
                  <Shield className="w-4 h-4" /> Admin
                </span>
              )}
              {user && (
                <button
                  onClick={() => setShowNewPost(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  New Post
                </button>
              )}
              <button 
                onClick={() => router.push('/fansforum')} 
                className="px-6 py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                All Clubs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowNewPost(false)}>
          <div className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Post</h2>
              <button onClick={() => setShowNewPost(false)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Content</label>
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={6}
                  className="w-full p-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none resize-none"
                />
              </div>

              <button
                onClick={createPost}
                disabled={submitting}
                className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition disabled:opacity-50"
              >
                {submitting ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {!user && (
          <div className="bg-orange-900/30 border-2 border-orange-600 rounded-lg p-4 mb-6 text-center">
            <p className="text-orange-200">
<a href="/auth?returnTo=/fansforum" className="underline font-bold hover:text-white">Login</a>            </p>
          </div>
        )}

        {posts.length === 0 ? (
          <div className="bg-slate-800 rounded-xl p-12 text-center border-2 border-slate-700">
            <MessageSquare className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No posts yet</h2>
            <p className="text-slate-400 mb-6">Be the first to start a conversation!</p>
            {user && (
              <button
                onClick={() => setShowNewPost(true)}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition"
              >
                Create First Post
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <div
                key={post.id}
                className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700 hover:border-orange-500 transition"
              >
                <div className="flex justify-between items-start">
                  <button
                    onClick={() => router.push(`/fansforum/${clubId}/${post.id}?name=${encodeURIComponent(clubName)}&logo=${encodeURIComponent(clubLogo)}`)}
                    className="flex-1 text-left"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-slate-400 line-clamp-2 mb-4">{post.content}</p>
                  </button>
                  
                  {canDelete(post.user_id) && (
                    <button
                      onClick={(e) => deletePost(post.id, e)}
                      className="text-red-400 hover:text-red-300 p-2 ml-2"
                      title={user?.is_admin ? "Delete (Admin)" : "Delete"}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-slate-400">
                      <User className="w-4 h-4" />
                      {post.users?.username || 'Anonymous'}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-4 h-4" />
                      {formatDate(post.created_at)}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-orange-400">
                    <MessageCircle className="w-4 h-4" />
                    {post.forum_comments?.length || 0} comments
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}