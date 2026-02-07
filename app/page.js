'use client';
import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Trophy, Users, Radio, BarChart3, TrendingUp, Brain, MessageSquare, Headphones, Crown, Download, Smartphone } from 'lucide-react';
import HitCounter from './components/HitCounter';

export default function HomePage() {
  const [showInstallModal, setShowInstallModal] = React.useState(false);

  const navigationButtons = [
    {
      title: 'Clubs',
      icon: Users,
      description: 'Browse all League One & Two clubs',
      color: 'from-blue-500 to-blue-700',
      href: '/clubs'
    },
    {
      title: 'Live Match Centre',
      icon: Radio,
      description: 'Live scores, results & fixtures',
      color: 'from-red-500 to-red-700',
      href: '/match-centre'
    },
    {
      title: 'Player Statistics',
      icon: Trophy,
      description: 'Up to date stats from players',
      color: 'from-green-500 to-green-700',
      href: '/player-stats'
    },
    {
      title: 'League Tables',
      icon: BarChart3,
      description: 'Current standings and statistics',
      color: 'from-purple-500 to-purple-700',
      href: '/tables'
    },
    {
      title: 'Predictions',
      icon: TrendingUp,
      description: 'Match predictions and insights',
      color: 'from-orange-500 to-orange-700',
      href: '/predictions'
    },
    {
      title: 'Fans Forum',
      icon: MessageSquare,
      description: 'Comment and post your latest thoughts',
      color: 'from-yellow-500 to-yellow-700',
      href: '/fansforum'
    },
    {
      title: 'EFL Podcasts & Channels',
      icon: Headphones,
      description: 'The best podcats for the fans',
      color: 'from-silver-500 to-silver-700',
      href: '/podcasts-channels'
    },
    {
      title: 'EFL Official Websites',
      icon: MessageSquare,
      description: 'Visit your offical website',
      color: 'from-gold-500 to-gold-700',
      href: '/official-websites'
    },
    {
      title: 'Weekly Quiz',
      icon: Brain,
      description: 'Test your football knowledge',
      color: 'from-indigo-500 to-indigo-700',
      href: '/quiz'
    }
  ];

  const InstallModal = () => {
    if (!showInstallModal) return null;

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowInstallModal(false)}>
        <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 border-b border-slate-700 sticky top-0 bg-slate-800">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Install App</h2>
              </div>
              <button onClick={() => setShowInstallModal(false)} className="text-slate-400 hover:text-white text-3xl font-bold px-3">×</button>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* iOS Instructions */}
            <div>
              <div className="flex items-center gap-3 mb-4 bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg">
                <div className="text-4xl">📱</div>
                <h3 className="text-xl font-bold text-white">iPhone / iPad (Safari)</h3>
              </div>
              
              <div className="space-y-4 ml-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">1</div>
                  <div>
                    <p className="text-white font-medium">Open this page in Safari</p>
                    <p className="text-slate-400 text-sm mt-1">(This only works in Safari, not Chrome or other browsers)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">2</div>
                  <div>
                    <p className="text-white font-medium">Tap the Share button</p>
                    <p className="text-slate-400 text-sm mt-1">The square with an arrow pointing up at the bottom of your screen</p>
                    <div className="mt-2 bg-slate-700 p-3 rounded text-center">
                      <span className="text-4xl">⬆️</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">3</div>
                  <div>
                    <p className="text-white font-medium">Scroll and tap "Add to Home Screen"</p>
                    <div className="mt-2 bg-slate-700 p-3 rounded flex items-center gap-2">
                      <span className="text-2xl">➕</span>
                      <span className="text-white">Add to Home Screen</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">4</div>
                  <div>
                    <p className="text-white font-medium">Tap "Add"</p>
                    <p className="text-slate-400 text-sm mt-1">The app icon will appear on your home screen!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Android Instructions */}
            <div className="pt-8 border-t border-slate-700">
              <div className="flex items-center gap-3 mb-4 bg-gradient-to-r from-green-900 to-green-800 p-4 rounded-lg">
                <div className="text-4xl">🤖</div>
                <h3 className="text-xl font-bold text-white">Android (Chrome)</h3>
              </div>
              
              <div className="space-y-4 ml-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">1</div>
                  <div>
                    <p className="text-white font-medium">Open this page in Chrome</p>
                    <p className="text-slate-400 text-sm mt-1">Make sure you're using the Chrome browser</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">2</div>
                  <div>
                    <p className="text-white font-medium">Tap the three dots menu (⋮)</p>
                    <p className="text-slate-400 text-sm mt-1">In the top right corner of Chrome</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">3</div>
                  <div>
                    <p className="text-white font-medium">Tap "Add to Home screen" or "Install app"</p>
                    <div className="mt-2 bg-slate-700 p-3 rounded flex items-center gap-2">
                      <Download className="w-5 h-5 text-white" />
                      <span className="text-white">Add to Home screen</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">4</div>
                  <div>
                    <p className="text-white font-medium">Tap "Install"</p>
                    <p className="text-slate-400 text-sm mt-1">The app will be added to your home screen!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="pt-8 border-t border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">✨ Benefits of Installing:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <div className="text-green-400 font-bold">⚡ Faster Access</div>
                  <div className="text-slate-400 text-sm">Launch directly from your home screen</div>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <div className="text-green-400 font-bold">📱 Full Screen</div>
                  <div className="text-slate-400 text-sm">Works like a native app</div>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <div className="text-green-400 font-bold">🔔 Notifications</div>
                  <div className="text-slate-400 text-sm">Get live match updates (coming soon)</div>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <div className="text-green-400 font-bold">📶 Offline Mode</div>
                  <div className="text-slate-400 text-sm">View cached data without internet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2036&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-900/95"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/20"></div>
      </div>

    {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/70 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex items-center justify-between">
              {/* Empty div for spacing on left */}
              <div className="w-20 sm:w-24"></div>
              
              {/* Center - Logo and Title */}
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white text-center tracking-tight">
                    EFL League One & Two
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 text-center mt-0.5 sm:mt-1">
                    Your complete guide to English Football League
                  </p>
                </div>
              </div>
              
              {/* Right - Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowInstallModal(true)}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg font-bold transition-all text-xs sm:text-sm shadow-lg hover:shadow-green-500/30"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Install</span>
                </button>
                <button
                  onClick={() => window.location.href = '/members'}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white rounded-lg font-bold transition-all text-xs sm:text-sm shadow-lg hover:shadow-yellow-500/30"
                >
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Members</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <div className="relative py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
              <span className="text-orange-400 font-semibold text-sm">⚽ 2025/26 Season</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Fans</span>, By The Fans
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Live scores, stats, predictions, forums and more - everything you need to follow League One & Two
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <button
                  key={index}
                  onClick={() => window.location.href = button.href}
                  className="group relative overflow-hidden rounded-2xl bg-slate-800/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-slate-600"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${button.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${button.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {button.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      {button.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </button>
              );
            })}
          </div>
        </main>

        {/* Footer */}
<footer className="mt-16 bg-slate-900/70 backdrop-blur-md border-t border-slate-700/50">
  <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-400">
    <HitCounter />
    <div className="flex justify-center gap-4 mb-3">
      <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
      <span>•</span>
      <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
      <span>•</span>
      <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
    </div>
    <p>© 2026 EFL League One & Two Hub. All rights reserved.</p>
  </div>
</footer>
      </div>

      {/* Install Modal */}
      <InstallModal />
    </div>
  );
}