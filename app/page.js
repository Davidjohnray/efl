'use client';
import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Trophy, Users, Radio, BarChart3, TrendingUp, Brain, MessageSquare, Headphones } from 'lucide-react';
import HitCounter from './components/HitCounter';

export default function HomePage() {
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
    <p>© 2026 EFL League One & Two Hub. All rights reserved.</p>
  </div>
</footer>
      </div>
    </div>
  );
}