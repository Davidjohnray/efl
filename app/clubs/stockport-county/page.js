'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function StockportPage() {
  const clubData = {
    name: 'Stockport County',
    nickname: 'The Hatters',
    founded: 1883,
    stadium: 'Edgeley Park',
    capacity: '10,832',
    location: 'Stockport, Greater Manchester',
    league: 'League One',
    recordSigning: { player: 'Various', fee: 'Undisclosed', year: 2024, from: 'Various clubs' },
    recordSale: { player: 'Paddy Madden', fee: 'Undisclosed', year: 2014, to: 'Yeovil Town' },
    topScorer: { name: 'Jack Connor', goals: 132, years: '1951-1956' },
    mostAppearances: { name: 'Andy Thorpe', apps: 555, years: '1978-1986, 1988-1992' },
    honours: [
      { title: 'League Two Champions', years: ['2023-24'] },
      { title: 'National League Champions', years: ['2021-22'] },
      { title: 'National League North Champions', years: ['2018-19'] },
      { title: 'Fourth Division Champions', years: ['1966-67'] },
      { title: 'Third Division North Champions', years: ['1921-22', '1936-37'] },
      { title: 'League Cup Semi-Finalists', years: ['1996-97'] }
    ],
    history: {
      founding: "Founded in 1883 as Heaton Norris Rovers, the club was renamed Stockport County in 1890 after Stockport became a county borough. The club joined the Football League in 1900. Nicknamed 'The Hatters' after the town's historic hat-making industry, they have worn blue and white since 1914.",
      goldenEra: "The 1990s marked Stockport's golden era under Danny Bergara and Dave Jones. County reached the First Division (now Championship) and competed there for five seasons (1997-2002). Their highest league finish was 8th in 1997-98. They reached the League Cup semi-finals in 1996-97 and played at Wembley four times in the 1990s.",
      modernEra: "After financial difficulties led to relegation from the Football League in 2011, County dropped to the National League North. Under new ownership, they mounted a remarkable comeback: winning the National League North (2018-19), National League (2021-22), and League Two (2023-24). Now in their second consecutive League One season (2025-26), celebrating their 144th year.",
      notable: "Edgeley Park has been home since 1902, originally built for rugby league club Stockport RFC. The record attendance is 27,833 vs Liverpool (1950). The Main Stand burned down in 1935, destroying all club records. County shared the ground with Sale Sharks (2003-2012) before regaining sole tenancy."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-r from-blue-900/50 to-white/10 backdrop-blur-sm border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-blue-600">SCFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-blue-200 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-slate-300 text-sm mt-1 italic">144th Season (2025-26)</p>
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
            <p className="text-white text-xl font-bold">{clubData.stadium}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
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
              <h3 className="text-xl font-bold text-white mb-3">The Beginning</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Era (1990s)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Comeback Story</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Edgeley Park</h3>
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
                <p className="text-slate-500 text-sm">League goals only</p>
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
                <p className="text-slate-500 text-sm">489 league, 555 total</p>
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