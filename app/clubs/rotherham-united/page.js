'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function RotherhamPage() {
  const clubData = {
    name: 'Rotherham United',
    nickname: 'The Millers',
    founded: 1925,
    stadium: 'AESSEAL New York Stadium',
    capacity: '12,021',
    location: 'Rotherham, South Yorkshire',
    league: 'League One',
    recordSigning: { player: 'Sam Nombe', fee: '£1,000,000', year: 2023, from: 'Exeter City' },
    recordSale: { player: 'Danny Ward', fee: '£1,600,000', year: 2014, to: 'Cardiff City' },
    topScorer: { name: 'Gladstone Guest', goals: 130, years: '1946-1956' },
    mostAppearances: { name: 'Danny Williams', apps: 621, years: '1946-1960' },
    honours: [
      { title: 'EFL Trophy Winners', years: ['2021-22'] },
      { title: 'Third Division North Champions', years: ['1950-51'] },
      { title: 'Third Division Champions', years: ['1980-81'] },
      { title: 'Fourth Division Champions', years: ['1988-89'] },
      { title: 'Football League Trophy Winners', years: ['1995-96'] },
      { title: 'Football League Cup Runners-up', years: ['1960-61'] },
      { title: 'League One Play-off Winners', years: ['2013-14', '2017-18'] }
    ],
    history: {
      founding: "Formed in 1925 through the merger of Rotherham County (founded 1877 as Thornhill) and Rotherham Town, the club was immediately accepted into the Football League. The club adopted red and white colours around 1930, moving away from their original amber and black kit.",
      goldenEra: "Rotherham's finest hour came in the 1950s. They won the Third Division North title in 1950-51 and reached their highest ever league position of 3rd in the Second Division in 1954-55, missing promotion to the top flight only on goal average. In 1961, they reached the inaugural League Cup final, losing 3-2 on aggregate to Aston Villa.",
      modernEra: "Currently in their second consecutive League One season (2025-26) following relegation from the Championship in 2023-24. The club has experienced numerous promotions and relegations between the Championship and League One in recent years, including winning the League One play-offs in 2018 and the EFL Trophy in 2022.",
      notable: "The club moved to the New York Stadium in 2012 from their historic home at Millmoor (which they occupied for over 100 years). The stadium is named after the area's historical name 'New York'. Rotherham has faced financial difficulties multiple times, including points deductions in 2006-07, 2007-08, and 2008-09."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-r from-red-900/50 to-white/10 backdrop-blur-sm border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-red-600">RUFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-red-200 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-slate-300 text-sm mt-1 italic">Formed {clubData.founded}</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Calendar className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-slate-400 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-slate-400 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Formation</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Era (1950s)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Times</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Notable Facts</h3>
              <p>{clubData.history.notable}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-xl text-white">{clubData.recordSigning.player}</p>
              <p className="text-slate-400">From {clubData.recordSigning.from} • {clubData.recordSigning.year}</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-xl text-white">{clubData.recordSale.player}</p>
              <p className="text-slate-400">To {clubData.recordSale.to} • {clubData.recordSale.year}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-slate-400">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-slate-400 text-lg">{clubData.mostAppearances.years}</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-400">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}