'use client';
import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft, Trash2, CheckCircle, Circle, RefreshCw, Inbox, Clock, User, AtSign, MessageSquare, ChevronDown, ChevronUp, AlertCircle, Lock, Eye, EyeOff } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// ⚠️ CHANGE THIS PASSWORD! 
const ADMIN_PASSWORD = 'Icelords1';

export default function AdminMessagesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Check if already logged in (session storage)
  useEffect(() => {
    const adminSession = sessionStorage.getItem('adminAuth');
    if (adminSession === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('Incorrect password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
    setLoading(false);
  };

  const toggleRead = async (id, currentStatus) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: !currentStatus } : msg
      ));
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.filter(msg => msg.id !== id));
      setDeleteConfirm(null);
      setExpandedMessage(null);
    } catch (error) {
      console.error('Error deleting message:', error);
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
    
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unread') return !msg.read;
    if (filter === 'read') return msg.read;
    return true;
  });

  const unreadCount = messages.filter(msg => !msg.read).length;

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Access</h1>
            <p className="text-slate-400 text-center mb-6">Enter password to view messages</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors pr-12"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {loginError && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-orange-500/30"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Home</span>
            </button>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-orange-400" />
              <span className="text-white font-bold">Admin Messages</span>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={fetchMessages}
                className="text-slate-400 hover:text-white transition-colors p-2"
                title="Refresh"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={handleLogout}
                className="text-slate-400 hover:text-red-400 transition-colors p-2"
                title="Logout"
              >
                <Lock className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-white">{messages.length}</div>
            <div className="text-slate-400 text-sm">Total</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-orange-400">{unreadCount}</div>
            <div className="text-slate-400 text-sm">Unread</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-green-400">{messages.length - unreadCount}</div>
            <div className="text-slate-400 text-sm">Read</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { key: 'all', label: 'All' },
            { key: 'unread', label: 'Unread' },
            { key: 'read', label: 'Read' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-20">
            <Inbox className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Messages</h3>
            <p className="text-slate-400">
              {filter === 'all' 
                ? 'No messages yet. They will appear here when users submit the contact form.'
                : filter === 'unread' 
                  ? 'No unread messages.'
                  : 'No read messages.'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredMessages.map(msg => (
              <div
                key={msg.id}
                className={`bg-slate-800/50 rounded-xl border transition-all ${
                  msg.read 
                    ? 'border-slate-700/50' 
                    : 'border-orange-500/50 bg-slate-800/70'
                }`}
              >
                {/* Message Header */}
                <div
                  onClick={() => setExpandedMessage(expandedMessage === msg.id ? null : msg.id)}
                  className="flex items-start gap-4 p-4 cursor-pointer hover:bg-slate-700/20 transition-colors rounded-xl"
                >
                  {/* Read Status Indicator */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRead(msg.id, msg.read);
                    }}
                    className="mt-1 flex-shrink-0"
                    title={msg.read ? 'Mark as unread' : 'Mark as read'}
                  >
                    {msg.read ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-orange-400" />
                    )}
                  </button>

                  {/* Message Preview */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-semibold ${msg.read ? 'text-slate-300' : 'text-white'}`}>
                        {msg.name}
                      </span>
                      {!msg.read && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">New</span>
                      )}
                    </div>
                    <div className="text-sm text-slate-400 mb-1">{msg.email}</div>
                    <div className={`font-medium ${msg.read ? 'text-slate-400' : 'text-slate-200'}`}>
                      {msg.subject || 'No subject'}
                    </div>
                    {expandedMessage !== msg.id && (
                      <div className="text-slate-500 text-sm truncate mt-1">
                        {msg.message}
                      </div>
                    )}
                  </div>

                  {/* Timestamp & Expand */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {formatDate(msg.created_at)}
                    </div>
                    {expandedMessage === msg.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedMessage === msg.id && (
                  <div className="px-4 pb-4 border-t border-slate-700/50 mt-2 pt-4">
                    {/* Full Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <User className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-400">Name:</span>
                        <span>{msg.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <AtSign className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-400">Email:</span>
                        <a href={`mailto:${msg.email}`} className="text-blue-400 hover:underline">
                          {msg.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <MessageSquare className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-400">Subject:</span>
                        <span>{msg.subject || 'No subject'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-400">Received:</span>
                        <span>{new Date(msg.created_at).toLocaleString('en-GB')}</span>
                      </div>
                    </div>

                    {/* Message Body */}
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                      <div className="text-slate-300 whitespace-pre-wrap">{msg.message}</div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <a
                        href={`mailto:${msg.email}?subject=Re: ${msg.subject || 'Your message'}`}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Reply via Email
                      </a>
                      <button
                        onClick={() => toggleRead(msg.id, msg.read)}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                      >
                        {msg.read ? (
                          <>
                            <Circle className="w-4 h-4" />
                            Mark Unread
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Mark Read
                          </>
                        )}
                      </button>
                      
                      {deleteConfirm === msg.id ? (
                        <div className="flex items-center gap-2 ml-auto">
                          <span className="text-red-400 text-sm">Delete?</span>
                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(msg.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg font-medium transition-colors ml-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}