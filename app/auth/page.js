'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { User, Mail, Lock, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Script from 'next/script';

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo') || '/';
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);

  useEffect(() => {
    // Reset turnstile when switching between login/register
    if (window.turnstile && turnstileRef.current) {
      window.turnstile.reset(turnstileRef.current);
      setTurnstileToken('');
    }
  }, [isLogin]);

  const handleTurnstileLoad = () => {
    if (window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: '0x4AAAAAACVOsqlcUR2RD-Lo',
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setError('Please complete the captcha');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      router.push(returnTo);
    } catch (err) {
      setError(err.message);
      // Reset turnstile on error
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
        setTurnstileToken('');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setError('Please complete the captcha');
      return;
    }
    
    setLoading(true);
    setError('');

    if (!username.trim()) {
      setError('Please enter a username');
      setLoading(false);
      return;
    }

    try {
      const { data: existingUser } = await supabase
        .from('users')
        .select('username')
        .eq('username', username.trim())
        .single();

      if (existingUser) {
        setError('Username already taken');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        await supabase.from('users').insert([
          {
            id: data.user.id,
            email,
            username: username.trim(),
          },
        ]);
      }

      setMessage('Registration successful! Please check your email to verify your account.');
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      // Reset turnstile
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
        setTurnstileToken('');
      }
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={handleTurnstileLoad}
      />
      
      <div className="max-w-md w-full">
        <button
          onClick={() => router.push(returnTo)}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-slate-400 mt-2">
              {isLogin ? 'Sign in to continue' : 'Join the EFL community'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6">
              {message}
            </div>
          )}

          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-slate-300 mb-2 text-sm">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-orange-500 outline-none transition"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-slate-300 mb-2 text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-orange-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-2 text-sm">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 text-white rounded-lg border border-slate-700 focus:border-orange-500 outline-none transition"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Turnstile Captcha */}
            <div className="flex justify-center">
              <div ref={turnstileRef}></div>
            </div>

            <button
              type="submit"
              disabled={loading || !turnstileToken}
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-bold hover:from-orange-700 hover:to-orange-800 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setMessage('');
                }}
                className="text-orange-400 hover:text-orange-300 font-bold ml-2"
              >
                {isLogin ? 'Register' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <Suspense fallback={
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-orange-500 animate-spin mx-auto" />
          <p className="text-slate-400 mt-2">Loading...</p>
        </div>
      }>
        <AuthForm />
      </Suspense>
    </div>
  );
}