'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function ReadingPage() {
  const clubData = {
    name: 'Reading FC',
    nickname: 'The Royals',
    founded: 1871,
    stadium: 'Select Car Leasing Stadium',
    capacity: '24,200',
    location: 'Reading, Berkshire',
    league: 'League One',
    recordSigning: { player: 'Shane Long', fee: '£1,000,000', year: 2005, from: 'Cork City' },
    recordSale: { player: 'Michael Olise', fee: '£8,000,000', year: 2021, to: 'Crystal Palace' },
    topScorer: { name: 'Ronnie Blackman', goals: 158, years: '1947-1954' },
    mostAppearances: { name: 'Martin Hicks', apps: 500, years: '1978-1991' },
    honours: [
      { title: 'Championship Winners', years: ['2005-06', '2011-12'] },
      { title: 'Third Division South Champions', years: ['1925-26'] },
      { title: 'FA Cup Semi-Finalists', years: ['1926-27', '2014-15'] },
      { title: 'Simod Cup Winners', years: ['1987-88'] },
      { title: 'Southern League Division Two Champions', years: ['1910-11'] }
    ],
    history: {
      founding: "Founded on Christmas Day 1871 by Joseph Edward Sydenham, Reading is one of the oldest football clubs in England. Originally nicknamed 'The Biscuitmen' after Huntley & Palmers biscuit factory, the club switched to 'The Royals' in the 1970s. Reading became founder members of Third Division South in 1920.",
      goldenEra: "Reading's greatest achievement came in 2005-06 when they won the Championship with a record 106 points, scoring 99 goals and losing just twice. Under Steve Coppell, they were promoted to the top flight for the first time in their history, finishing 8th in their debut Premier League season (2006-07).",
      modernEra: "After relegation to League One in 2023 following financial difficulties and points deductions, Rob Couhig's Redwood Holdings took ownership. Leam Richardson was appointed manager in October 2025, replacing Noel Hunt. The club is in its third consecutive League One season (2025-26), working to rebuild after challenging times.",
      notable: "In 1998, Reading moved from Elm Park (home since 1896) to the new Madejski Stadium, now known as the Select Car Leasing Stadium. The club holds the record for most consecutive league wins at the start of a season (13 in 1985-86). Reading were the first club to register their fans as an official squad member, giving them number 13."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-r from-blue-900/50 to-white/10 backdrop-blur-sm border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-blue-600">RFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-blue-200 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-slate-300 text-sm mt-1 italic">Est. {clubData.founded}</p>
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
            <p className="text-white text-base font-bold">{clubData.stadium}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white text-lg font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Beginning</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Era (2000s)</h3>
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
              <Target className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-blue-400">{clubData.topScorer.goals}</p>
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

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
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