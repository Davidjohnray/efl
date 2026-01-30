'use client';

import React from 'react';

export default function ClubHeader({ name, nickname, initials, season, color = 'red' }) {
  const getColorClasses = () => {
    switch(color) {
      case 'blue':
        return { header: 'from-blue-800/50 to-blue-600/10 border-blue-700', initials: 'text-blue-600', nickname: 'text-blue-200' };
      case 'green':
        return { header: 'from-green-800/50 to-green-600/10 border-green-700', initials: 'text-green-600', nickname: 'text-green-200' };
      case 'orange':
        return { header: 'from-orange-800/50 to-orange-600/10 border-orange-700', initials: 'text-orange-600', nickname: 'text-orange-200' };
      case 'yellow':
        return { header: 'from-yellow-800/50 to-yellow-600/10 border-yellow-700', initials: 'text-yellow-600', nickname: 'text-yellow-200' };
      case 'purple':
        return { header: 'from-purple-800/50 to-purple-600/10 border-purple-700', initials: 'text-purple-600', nickname: 'text-purple-200' };
      case 'sky':
        return { header: 'from-sky-800/50 to-sky-600/10 border-sky-700', initials: 'text-sky-600', nickname: 'text-sky-200' };
      case 'amber':
        return { header: 'from-amber-800/50 to-amber-600/10 border-amber-700', initials: 'text-amber-600', nickname: 'text-amber-200' };
      default:
        return { header: 'from-red-800/50 to-red-600/10 border-red-700', initials: 'text-red-600', nickname: 'text-red-200' };
    }
  };

  const colors = getColorClasses();

  return (
    <header className={`bg-gradient-to-r ${colors.header} backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Mobile: Stack everything vertically */}
        <div className="flex flex-col gap-4">
          {/* Club info row */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <span className={`text-lg sm:text-3xl font-bold ${colors.initials}`}>{initials}</span>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-white truncate">{name}</h1>
              <p className={`${colors.nickname} text-xs sm:text-xl mt-1`}>{nickname}</p>
              {season && <p className="text-slate-300 text-xs sm:text-sm mt-1 italic">{season}</p>}
            </div>
          </div>
          
          {/* Button - full width on mobile */}
          <button
            onClick={() => window.location.href = '/clubs'}
            className="px-4 py-2 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto sm:self-end"
          >
            ← Back to Clubs
          </button>
        </div>
      </div>
    </header>
  );
}