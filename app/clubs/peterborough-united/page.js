'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function PeterboroughPage() {
  const clubData = {
    name: 'Peterborough United',
    nickname: 'The Posh',
    founded: 1934,
    stadium: 'Weston Homes Stadium',
    capacity: '15,314',
    location: 'Peterborough, Cambridgeshire',
    league: 'League One',
    recordSigning: { player: 'Jack Marriott', fee: '£1,300,000', year: 2014, from: 'Ipswich Town' },
    recordSale: { player: 'Ivan Toney', fee: '£7,000,000', year: 2020, to: 'Brentford' },
    topScorer: { name: 'Dennis Emery', goals: 195, years: '1954-1963' },
    honours: [
      { title: 'EFL Trophy', years: ['2023-24', '2024-25', '2013-14'] },
      { title: 'Midland League Champions', years: ['1955-56', '1956-57', '1957-58', '1958-59', '1959-60'] },
      { title: 'Fourth Division Champions', years: ['1960-61', '1973-74'] },
      { title: 'Division Two Play-off Winners', years: ['1991-92', '2010-11'] },
      { title: 'Division Three Play-off Winners', years: ['1999-2000'] },
      { title: 'League One Runners-up', years: ['2020-21'] },
      { title: 'League Two Champions', years: ['2007-08'] },
      { title: 'League Two Play-off Winners', years: ['2008-09'] }
    ],
    history: {
      founding: "Founded in 1934 at Peterborough's Angel Hotel to replace Peterborough & Fletton United, the club joined the Midland League. They won the Midland League an impressive six times, including five consecutive titles from 1956-1960, before being elected to the Football League in 1960. They have played at London Road (now Weston Homes Stadium) throughout their entire history.",
      goldenEra: "In their first Football League season (1960-61), Peterborough immediately won the Fourth Division title and set a still-standing Football League record of 134 goals scored in a season, with Terry Bly netting an incredible 52 goals. They spent seven seasons in the Third Division, reaching the FA Cup quarter-finals in 1965 and the League Cup semi-finals in 1966, beating Arsenal along the way.",
      modernEra: "Under Darren Ferguson's management, Peterborough achieved back-to-back promotions in 2007-08 and 2008-09, reaching the Championship. They won promotion to the Championship again in 2020-21 as runners-up. Recently, they made history by becoming the first team to win back-to-back EFL Trophy titles in 2024 and 2025. Currently competing in League One, they continue to develop young talent.",
      notable: "The Weston Homes Stadium has a capacity of 15,314 and a record attendance of 30,096 set in 1965 against Swansea Town in the FA Cup. The club's unique nickname 'The Posh' comes from 1921 when a manager said he was 'looking for posh players for a posh club.' Their main rivals are Cambridge United (Cambridgeshire Derby) and Northampton Town (Nene Derby). Tommy Robson holds the appearance record with 564 matches."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-r from-blue-900/50 to-white/20 backdrop-blur-sm border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-blue-700">PU</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-blue-200 text-xl mt-2">{clubData.nickname}</p>
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
            <p className="text-white text-lg font-bold">{clubData.stadium}</p>
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