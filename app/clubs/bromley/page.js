'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function BromleyPage() {
  const clubData = {
    name: 'Bromley FC',
    nickname: 'The Ravens / The Lilywhites',
    founded: 1892,
    stadium: 'Hayes Lane (CopperJax Community Stadium)',
    capacity: '6,100',
    location: 'Bromley, Greater London',
    league: 'League Two',
    recordSigning: { player: 'Information not disclosed', fee: 'Undisclosed', year: 2024, from: 'Various' },
    recordSale: { player: 'Information not disclosed', fee: 'Undisclosed', year: 2024, to: 'Various' },
    topScorer: { name: 'George Brown', goals: 570, years: '1938-1961' },
    mostAppearances: { name: 'George Brown', apps: '500+', years: '1938-1961' },
    honours: [
      { title: 'FA Trophy Winners', years: ['2021-22'] },
      { title: 'National League Play-off Winners', years: ['2023-24'] },
      { title: 'Conference South Champions', years: ['2014-15'] },
      { title: 'FA Amateur Cup Winners', years: ['1910-11', '1937-38', '1948-49'] },
      { title: 'Isthmian League Champions', years: ['1908-09', '1909-10', '1953-54', '1960-61'] },
      { title: 'Athenian League Champions', years: ['1922-23', '1948-49', '1950-51'] },
      { title: 'Spartan League Champions', years: ['1907-08'] }
    ],
    history: {
      founding: "Founded in 1892—the same year as Liverpool—Bromley initially played at Queensmead Recreation Ground before moving through several grounds. They became founder members of the Southern League (1894) and London League (1896), winning the London League Division Two at the first attempt. In 1907, they became founder members of the Spartan League, winning the inaugural championship. They joined the Isthmian League in 1908 and won back-to-back titles in 1908-09 and 1909-10.",
      golden: "Bromley's golden era came in the late 1940s and 1950s, dominated by legendary striker George Brown who scored an incredible 570 goals from 1938-1961, including 129 goals in the 1948-49 season alone. That season, Bromley won both the FA Amateur Cup (beating Romford 1-0 at Wembley in front of 90,000 fans—the first Amateur Cup final at Wembley) and the Athenian League title. They won the Amateur Cup again in 1910-11 and 1937-38, and captured four Isthmian League titles.",
      modern: "After decades in non-league football, moving between the Isthmian League divisions, Bromley won the Conference South in 2014-15 to reach the National League. The club's fortunes transformed under manager Andy Woodman: they won the FA Trophy in 2021-22 (beating Wrexham 1-0 at Wembley) and reached play-offs in consecutive seasons. In 2023-24, they finally achieved the dream, defeating Solihull Moors 4-3 on penalties in the play-off final to reach the Football League for the first time in their 132-year history.",
      stadium: "Hayes Lane opened in 1938, replacing an earlier ground on the same road. The record attendance of 10,798 was set in September 1948 for a friendly against a Nigeria XI. The original main stand burned down in October 1992 and was replaced by a smaller 320-seat structure. In 2019, the impressive 1,450-seat Glyn Beverly Stand opened at the south end. In 2025, a new East Stand was completed at a cost of £2.8m, increasing capacity to 6,100. The pitch was converted from 3G to natural grass in 2024 to meet EFL requirements."
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
          <div className="bg-white rounded-lg p-6 border-2 border-black shadow-lg">
            <Calendar className="w-8 h-8 text-black mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-black shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-lg font-bold">Hayes Lane</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-black shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-black shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-black shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-500" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Foundation & Early Success (1892-1910)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The George Brown Era & Wembley Glory (1938-1961)</h3>
              <p>{clubData.history.golden}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Historic Promotion to the Football League (2014-2024)</h3>
              <p>{clubData.history.modern}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Hayes Lane Stadium Evolution</h3>
              <p>{clubData.history.stadium}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-700">As a non-league club</p>
              <p className="text-slate-500 text-sm">Transfer records not publicly disclosed</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-700">As a non-league club</p>
              <p className="text-slate-500 text-sm">Transfer records not publicly disclosed</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-black mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">129 goals in 1948-49 season!</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-black">{clubData.topScorer.goals}</p>
                <p className="text-slate-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club legend - 23 seasons</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-black shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-500" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 border-2 border-slate-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Historic Achievement:</strong> First club from the National League to reach the Football League via play-offs in 2024 - ending a 132-year wait
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}