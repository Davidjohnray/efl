'use client';

import React, { useState } from 'react';
import { Users, ChevronRight, Home, MapPin, Beer, Train, Car, Bus, Utensils } from 'lucide-react';

export default function ClubsPage() {
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [mode, setMode] = useState(null); // 'clubs' or 'away'

  const leagueOneClubs = [
    'AFC Wimbledon', 'Barnsley', 'Blackpool', 'Bolton Wanderers', 'Bradford City',
    'Burton Albion', 'Cardiff City', 'Doncaster Rovers', 'Exeter City', 'Huddersfield Town',
    'Leyton Orient', 'Lincoln City', 'Luton Town', 'Mansfield Town', 'Northampton Town',
    'Peterborough United', 'Plymouth Argyle', 'Port Vale', 'Reading', 'Rotherham United',
    'Stevenage', 'Stockport County', 'Wigan Athletic', 'Wycombe Wanderers'
  ];

  const leagueTwoClubs = [
    'Accrington Stanley', 'Barnet', 'Barrow', 'Bristol Rovers', 'Bromley',
    'Cambridge United', 'Cheltenham Town', 'Chesterfield', 'Colchester United', 'Crawley Town',
    'Crewe Alexandra', 'Fleetwood Town', 'Gillingham', 'Grimsby Town', 'Harrogate Town',
    'Milton Keynes Dons', 'Newport County', 'Notts County', 'Oldham Athletic', 'Salford City',
    'Shrewsbury Town', 'Swindon Town', 'Tranmere Rovers', 'Walsall'
  ];

  const currentClubs = selectedLeague === 'League One' ? leagueOneClubs : leagueTwoClubs;

  const handleReset = () => {
    setSelectedLeague(null);
    setMode(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-white">EFL Clubs</h1>
                <p className="text-slate-300 text-sm mt-1">2025-2026 Season</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 sm:px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm sm:text-base"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Main Selection */}
        {!mode && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* League One Clubs */}
            <button
              onClick={() => { setMode('clubs'); setSelectedLeague('League One'); }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">League One</h2>
                <p className="text-slate-400">View all 24 League One clubs</p>
                <ChevronRight className="w-6 h-6 text-blue-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            {/* League Two Clubs */}
            <button
              onClick={() => { setMode('clubs'); setSelectedLeague('League Two'); }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-green-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">League Two</h2>
                <p className="text-slate-400">View all 24 League Two clubs</p>
                <ChevronRight className="w-6 h-6 text-green-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            {/* Away Day Guide League One */}
            <button
              onClick={() => { setMode('away'); setSelectedLeague('League One'); }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-orange-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg">
                  <Beer className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Away Day Guide</h2>
                <p className="text-slate-400">League One away day info</p>
                <ChevronRight className="w-6 h-6 text-orange-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>

            {/* Away Day Guide League Two */}
            <button
              onClick={() => { setMode('away'); setSelectedLeague('League Two'); }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-yellow-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center shadow-lg">
                  <Beer className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Away Day Guide</h2>
                <p className="text-slate-400">League Two away day info</p>
                <ChevronRight className="w-6 h-6 text-yellow-400 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        )}

        {/* Clubs List */}
        {mode === 'clubs' && selectedLeague && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedLeague} Clubs ({currentClubs.length})
              </h2>
              <button
                onClick={handleReset}
                className="px-4 sm:px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentClubs.map((clubName, index) => (
                <div
                  key={index}
                  className="group bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {clubName}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-3 text-slate-400 text-xs sm:text-sm">
                        <Home className="w-4 h-4" />
                        <span>{selectedLeague}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  <button
                    onClick={() => {
                      const clubSlug = clubName.toLowerCase().replace(/\s+/g, '-');
                      window.location.href = `/clubs/${clubSlug}`;
                    }}
                    className="w-full mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Away Day Guide List */}
        {mode === 'away' && selectedLeague && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                🍺 {selectedLeague} Away Day Guides
              </h2>
              <button
                onClick={handleReset}
                className="px-4 sm:px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentClubs.map((clubName, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const clubSlug = clubName.toLowerCase().replace(/\s+/g, '-');
                    window.location.href = `/away-guide/${clubSlug}`;
                  }}
                  className="group bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:scale-105 text-left"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {clubName}
                  </h3>
                  <div className="flex items-center gap-3 mt-3 text-slate-400 text-xs">
                    <div className="flex items-center gap-1"><Car className="w-3 h-3" /> Car</div>
                    <div className="flex items-center gap-1"><Train className="w-3 h-3" /> Train</div>
                    <div className="flex items-center gap-1"><Beer className="w-3 h-3" /> Pubs</div>
                    <div className="flex items-center gap-1"><Utensils className="w-3 h-3" /> Food</div>
                  </div>
                  <div className="mt-3 text-orange-400 text-sm font-bold flex items-center gap-1">
                    View Guide <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}