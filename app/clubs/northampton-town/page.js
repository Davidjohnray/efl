'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function NorthamptonPage() {
  const clubData = {
    name: 'Northampton Town',
    nickname: 'The Cobblers',
    founded: 1897,
    stadium: 'Sixfields Stadium',
    capacity: '8,203',
    location: 'Northampton, Northamptonshire',
    league: 'League One',
    recordSigning: { player: 'Josh Low', fee: '£180,000', year: 2016, from: 'AFC Hornchurch' },
    recordSale: { player: 'Richard Hill', fee: '£265,000', year: 1987, to: 'Watford' },
    topScorer: { name: 'Jack English', goals: 143, years: '1947-1959' },
    honours: [
      { title: 'League Two Champions', years: ['2015-16'] },
      { title: 'Fourth Division Champions', years: ['1986-87'] },
      { title: 'Fourth Division Runners-up', years: ['1975-76'] },
      { title: 'Third Division Champions', years: ['1962-63'] },
      { title: 'Second Division Runners-up', years: ['1964-65'] },
      { title: 'Third Division South Runners-up', years: ['1927-28', '1949-50'] },
      { title: 'Southern League Champions', years: ['1908-09'] },
      { title: 'Southern League Runners-up', years: ['1910-11'] }
    ],
    history: {
      founding: "Founded in 1897, Northampton Town joined the Northants League before moving through the Midland League and Southern League. They won the Southern League championship in 1908-09, earning the right to contest the FA Charity Shield. The club joined the Football League in 1920 as founder members of Division Three South and played at the County Ground from 1897 until 1994.",
      goldenEra: "Under Dave Bowen, Northampton achieved one of football's most remarkable rises, climbing from the Fourth Division to the First Division in just five years (1960-1965). They spent one season in the top flight (1965-66) before three relegations in four years saw them return to Division Four by 1969. During this era they famously beat Arsenal 3-1 in the FA Cup and set attendance records.",
      modernEra: "After near-extinction in the early 1990s and finishing bottom of the Football League in 1993-94, Northampton moved to Sixfields Stadium in 1994. The club won the Fourth Division championship with a record 99 points in 1986-87, and more recently claimed the League Two title in 2015-16. Under Jon Brady since 2021, they earned promotion to League One in 2023 and are consolidating in the third tier.",
      notable: "Sixfields Stadium opened in 1994 and recently completed a £10.25m East Stand development in 2025, increasing capacity to 8,203. The club's nickname 'The Cobblers' reflects Northampton's historic shoe-making industry. Their main rivals are Peterborough United in the 'Nene Derby'. Tommy Fowler holds the appearance record with 552 games, while George Best famously scored six goals against them in a 1970 FA Cup tie."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-slate-900 overflow-x-hidden">      <ClubHeader 
          name={clubData.name}
          nickname={clubData.nickname}
          initials="BFC"
          season="Season 2025-26"
          color="red"
        />

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
            <p className="text-white text-xl font-bold">{clubData.stadium}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
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
              <h3 className="text-xl font-bold text-white mb-3">Golden Era</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Times</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Notable Moments</h3>
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

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
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