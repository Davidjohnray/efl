'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function AccringtonStanleyPage() {
  const clubData = {
    name: 'Accrington Stanley',
    nickname: 'Stanley / The Owd Reds',
    founded: 1968,
    stadium: 'Wham Stadium',
    capacity: '5,450',
    location: 'Accrington, Lancashire',
    league: 'League Two',
    recordSigning: { player: 'Paul Mullin', fee: '£15,000', year: 2000, from: 'Radcliffe Borough' },
    recordSale: { player: 'Brett Ormerod', fee: '£50,000', year: 1997, to: 'Blackpool' },
    topScorer: { name: 'Paul Mullin', goals: 96, years: '1995-2009' },
    mostAppearances: { name: 'Paul Mullin', apps: 453, years: '1995-2009' },
    honours: [
      { title: 'League Two Champions', years: ['2017-18'] },
      { title: 'Conference Champions', years: ['2005-06'] },
      { title: 'Northern Premier League Champions', years: ['1999-2000', '2002-03'] },
      { title: 'Cheshire County League Div 2 Champions', years: ['1980-81'] },
      { title: 'Lancashire Combination Champions', years: ['1973-74', '1977-78'] },
      { title: 'FA Cup Third Round', years: ['2003-04', '2016-17'] }
    ],
    history: {
      founding: "Founded in 1968 at a meeting in Bold Street Working Men's Club, two years after the original Accrington Stanley (founded 1891) collapsed in 1966. The reformed club entered the Lancashire Combination in 1970, playing at the Crown Ground. The club became nationally famous from the 1989 Milk Marketing Board TV advert featuring the slogan 'Accrington Stanley, who are they?'",
      rise: "Under chairman Eric Whalley and manager John Coleman (appointed 1999), Stanley embarked on a remarkable rise. The windfall from Brett Ormerod's sell-on clause (£50,000 to Blackpool in 1997, later bringing hundreds of thousands when Blackpool sold him to Southampton for £1.75m) funded ground improvements. Stanley won three titles in seven years: Northern Premier League (2000, 2003) and Conference (2006), returning to the Football League after 44 years.",
      modernEra: "Currently in their third consecutive League Two season (2025-26), marking their 57th year since reformation. The club achieved their greatest success winning League Two in 2017-18, spending three seasons in League One (2018-2023) before relegation. Nearly folding in 2009, the club was rescued by businessman Andy Holt in 2015, who cleared £1.2m debt and owns What More UK, the stadium sponsor.",
      notable: "The Wham Stadium (Crown Ground) opened in 1968, named after the adjacent Crown Pub owned by the club. Capacity 5,450 (3,100 seated), making it one of the smallest in the Football League. Record attendance: 5,397 vs Derby County, FA Cup 2019. The club is known as 'the club that wouldn't die' - a phoenix from the ashes of the original Accrington Stanley and the town's founder Football League member, Accrington FC (1888-1894)."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-slate-900">
      <header className="bg-gradient-to-r from-red-800/50 to-red-600/10 backdrop-blur-sm border-b border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-red-600">ASFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-red-200 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-slate-300 text-sm mt-1 italic">57th Season (2025-26)</p>
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
            <Calendar className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-slate-400 text-sm">Founded (Reformed)</p>
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
              <h3 className="text-xl font-bold text-white mb-3">The Reformation (1968)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Rise Back (1990s-2006)</h3>
              <p>{clubData.history.rise}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Football League Era</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Wham Stadium (Crown Ground)</h3>
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
              <TrendingDown className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-red-400">{clubData.recordSale.fee}</p>
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
                <p className="text-slate-500 text-sm">All competitions</p>
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
                <p className="text-slate-500 text-sm">Club legend - two spells</p>
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