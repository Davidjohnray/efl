'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function PlymouthPage() {
  const clubData = {
    name: 'Plymouth Argyle',
    nickname: 'The Pilgrims',
    founded: 1886,
    stadium: 'Home Park',
    capacity: '17,900',
    location: 'Plymouth, Devon',
    league: 'League One',
    recordSigning: { player: 'Morgan Whittaker', fee: '£1,000,000', year: 2023, from: 'Swansea City' },
    recordSale: { player: 'Peter Halmosi', fee: '£2,000,000', year: 2008, to: 'Hull City' },
    topScorer: { name: 'Sammy Black', goals: 184, years: '1924-1938' },
    honours: [
      { title: 'League One Champions', years: ['2022-23'] },
      { title: 'Third Division Champions', years: ['1958-59', '2001-02', '2003-04'] },
      { title: 'Third Division South Champions', years: ['1929-30', '1951-52'] },
      { title: 'Third Division Runners-up', years: ['1974-75', '1985-86'] },
      { title: 'Southern League Champions', years: ['1912-13'] },
      { title: 'Western League Champions', years: ['1904-05'] },
      { title: 'FA Cup Semi-finalists', years: ['1983-84'] },
      { title: 'League Cup Semi-finalists', years: ['1964-65', '1973-74'] }
    ],
    history: {
      founding: "Founded in 1886 as Argyle Football Club, the club became professional and changed its name to Plymouth Argyle in 1903. They joined the Southern League and Western League that same year, winning the Western League title in 1905 and Southern League in 1913. The club joined the Football League in 1920 and have played at Home Park since 1901.",
      goldenEra: "The club's finest moments include reaching the FA Cup semi-finals in 1984 and the League Cup semi-finals twice (1965, 1974). In 1924, they toured South America, famously beating Uruguay 4-0 and Argentina 1-0. The 2001-02 season saw them set a Third Division record with 102 points. They hold the record with five third-tier titles, winning their most recent in 2022-23.",
      modernEra: "After administration and relegation to League Two in 2011, Argyle rebuilt under new ownership. They won promotion to League One in 2017, and after another promotion in 2020 and subsequent relegation, they returned in spectacular fashion as League One champions in 2022-23. After one season in the Championship, they were relegated back to League One in 2024-25 but are focused on bouncing back.",
      notable: "Home Park is one of England's oldest stadiums, hosting football since 1901. The Mayflower Grandstand was redeveloped in 2019. The club's nickname 'The Pilgrims' comes from the Pilgrim Fathers who left Plymouth for the New World in 1620. Kevin Hodges holds the appearance record with 620 matches. Main rivals are Exeter City and Bristol Rovers."
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
            <MapPin className="w-8 h-8 text-green-400 mb-2" />
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
            <Target className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
              <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold text-green-400">{clubData.topScorer.goals}</p>
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