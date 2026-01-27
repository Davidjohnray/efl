'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function BarnetPage() {
  const clubData = {
    name: 'Barnet FC',
    nickname: 'The Bees',
    founded: 1888,
    stadium: 'The Hive Stadium',
    capacity: '6,500',
    location: 'Canons Park, London',
    league: 'League Two',
    recordSigning: { player: 'John Akinde', fee: 'Undisclosed', year: 2014, from: 'Bristol City' },
    recordSale: { player: 'Dougie Freedman', fee: '£800,000', year: 1995, to: 'Crystal Palace' },
    topScorer: { name: 'John Akinde', goals: 62, years: '2014-2018' },
    mostAppearances: { name: 'Les Eason', apps: 502, years: '1965-1979' },
    honours: [
      { title: 'National League Champions', years: ['1990-91', '2004-05', '2014-15', '2024-25'] },
      { title: 'Conference Runners-up', years: ['1986-87', '1987-88', '1989-90'] },
      { title: 'Athenian League Champions', years: ['1930-31', '1931-32', '1946-47', '1947-48', '1958-59', '1963-64', '1964-65'] },
      { title: 'Southern League Division One Champions', years: ['1965-66'] },
      { title: 'Southern League Division One South', years: ['1976-77'] },
      { title: 'FA Amateur Cup Winners', years: ['1946'] },
      { title: 'Conference League Cup Winners', years: ['1989'] }
    ],
    history: {
      founding: "Originally founded in 1888 as successors to Woodville FC and New Barnet FC, the club competed in local leagues before folding in 1902. Two rival clubs—Barnet Avenue FC and Alston Works AFC—merged in 1912 to form Barnet & Alston FC, establishing themselves at Underhill Stadium in 1907. The club adopted the iconic amber and black colors from the Alston Works team, formed from dental equipment manufacturer workers.",
      rise: "Barnet spent 53 successful years in the Athenian League (1912-1965), winning seven league championships and the 1946 FA Amateur Cup at Wembley. Under manager Barry Fry, after three consecutive Conference runners-up finishes, they finally secured the Conference title in 1991, earning promotion to the Football League after 44 years. The club reached Division Two (third tier) in 1993 under controversial chairman Stan Flashman, though financial turmoil soon followed.",
      modernEra: "After relegation to the Conference in 2001, Barnet returned to the Football League in 2005 and 2015, but suffered relegation again in 2013 and 2018. The 2024-25 season marked their greatest achievement, winning the National League with a club-record 102 points under manager Dean Brennan, returning to the Football League for the fourth time. Notable players include Dougie Freedman (voted fans' all-time favorite despite just one season), John Akinde (record Football League scorer), and famous names like Jimmy Greaves, Edgar Davids, and Jason Puncheon.",
      notable: "In 2013, after 106 years at Underhill Stadium (1907-2013), Barnet moved to The Hive Stadium in Canons Park, Harrow—originally built for Wealdstone FC. The 6,500-capacity ground features modern training facilities and serves as a base for international teams near Wembley. The club's phoenix-like resilience earned them the nickname 'the club that wouldn't die,' surviving multiple relegations and financial crises. The famous 1989 Milk Marketing Board advert borrowed inspiration from Accrington Stanley's 'Who are they?' slogan."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-slate-900">
      <header className="bg-gradient-to-r from-amber-800/50 to-amber-600/10 backdrop-blur-sm border-b border-amber-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-amber-600">BFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-amber-200 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-slate-300 text-sm mt-1 italic">Back in the Football League (2025-26)</p>
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
            <Calendar className="w-8 h-8 text-amber-400 mb-2" />
            <p className="text-slate-400 text-sm">Founded (Original)</p>
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
            <MapPin className="w-8 h-8 text-amber-400 mb-2" />
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
              <h3 className="text-xl font-bold text-white mb-3">The Early Years (1888-1912)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Athenian League Era & Football League (1912-2001)</h3>
              <p>{clubData.history.rise}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Phoenix Club (2001-Present)</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">From Underhill to The Hive</h3>
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
              <TrendingDown className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-amber-400">{clubData.recordSale.fee}</p>
              <p className="text-xl text-white">{clubData.recordSale.player}</p>
              <p className="text-slate-400">To {clubData.recordSale.to} • {clubData.recordSale.year}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Football League Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Football League goals only</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-amber-400">{clubData.topScorer.goals}</p>
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
                <p className="text-slate-500 text-sm">Club legend - 14 seasons</p>
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