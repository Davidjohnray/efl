'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function WycombeWanderersPage() {
  const clubData = {
    name: 'Wycombe Wanderers',
    nickname: 'The Chairboys',
    founded: 1887,
    stadium: 'Adams Park',
    capacity: '10,446',
    location: 'High Wycombe, Buckinghamshire',
    league: 'League One',
    recordSigning: { player: 'Magnus Westergaard', fee: 'Undisclosed', year: 2025, from: 'Viborg FF' },
    recordSale: { player: 'Nathan Tyson', fee: '£675,000', year: 2006, to: 'Nottingham Forest' },
    topScorer: { name: 'Keith Ryan', goals: 50, years: '1990-2006' },
    mostAppearances: { name: 'Keith Ryan', apps: 500, years: '1990-2006' },
    honours: [
      { title: 'FA Trophy Winners', years: ['1990-91', '1992-93'] },
      { title: 'Conference Champions', years: ['1992-93'] },
      { title: 'Isthmian League Champions', years: ['1955-56', '1956-57', '1970-71', '1971-72', '1973-74', '1974-75', '1982-83', '1986-87'] },
      { title: 'FA Amateur Cup Winners', years: ['1930-31'] },
      { title: 'FA Cup Semi-Finalists', years: ['2000-01'] },
      { title: 'League Cup Semi-Finalists', years: ['2006-07'] },
      { title: 'League One Play-Off Winners', years: ['2019-20'] }
    ],
    history: {
      founding: "Founded in 1887 by young furniture trade workers, the club earned the nickname 'The Chairboys' in reference to High Wycombe's historic furniture-making industry. The club spent 64 years in the Isthmian League, winning eight titles and the FA Amateur Cup in 1931. They played at Loakes Park from 1895 to 1990 before moving to Adams Park.",
      goldenEra: "The 1990s marked Wycombe's transformation under Martin O'Neill. The club won the FA Trophy (1991, 1993) and the Conference title (1992-93), entering the Football League for the first time. Under O'Neill and successors, they reached Division Two (now League One) in 1994. The 2000-01 FA Cup run to the semi-finals remains the club's most famous achievement, defeating Leicester City before narrowly losing 2-1 to Liverpool.",
      modernEra: "Currently in their fifth consecutive League One season (2025-26), celebrating their 139th year. Under Gareth Ainsworth, Wycombe achieved promotion to the Championship for the first time in 2020, though they were relegated after one season. The club has established itself as a competitive League One side, reaching the League Cup semi-finals in 2007 and the EFL Trophy final in 2024.",
      notable: "Adams Park opened in 1990 with a capacity of 6,000, gradually expanded to 10,446. The stadium shared with rugby union side London Wasps (2002-2014). Record attendance of 10,000 was first achieved against Chelsea in a 2005 pre-season friendly. The stadium sits in a valley surrounded by the Chiltern Hills, creating one of English football's most scenic settings."
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
            <Calendar className="w-8 h-8 text-cyan-400 mb-2" />
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
            <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white text-sm font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Beginning (1887-1990)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Football League Era (1990s-2000s)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Recent Years & Championship Journey</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Adams Park</h3>
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
              <TrendingDown className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-cyan-400">{clubData.recordSale.fee}</p>
              <p className="text-xl text-white">{clubData.recordSale.player}</p>
              <p className="text-slate-400">To {clubData.recordSale.to} • {clubData.recordSale.year}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">All competitions</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-cyan-400">{clubData.topScorer.goals}+</p>
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
                <p className="text-slate-500 text-sm">Club legend "Rhino"</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}+</p>
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