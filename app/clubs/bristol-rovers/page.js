'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function BristolRoversPage() {
  const clubData = {
    name: 'Bristol Rovers FC',
    nickname: 'The Pirates / The Gas',
    founded: 1883,
    stadium: 'Memorial Stadium',
    capacity: '12,011',
    location: 'Horfield, Bristol',
    league: 'League Two',
    recordSigning: { player: 'Andy Tilson', fee: '£400,000', year: 1992, from: 'Queens Park Rangers' },
    recordSale: { player: 'Jason Roberts', fee: '£2,700,000', year: 2000, to: 'West Bromwich Albion' },
    topScorer: { name: 'Geoff Bradford', goals: 242, years: '1949-1964' },
    mostAppearances: { name: 'Stuart Taylor', apps: 546, years: '1965-1980' },
    honours: [
      { title: 'Division Three South Champions', years: ['1952-53'] },
      { title: 'Watney Cup Winners', years: ['1972'] },
      { title: 'Division Three South Cup', years: ['1934-35'] },
      { title: 'Gloucestershire Cup', years: ['32 times (1889-1995)'] },
      { title: 'Football League Trophy Runners-up', years: ['1989-90', '2006-07'] },
      { title: 'Conference Premier Play-off Winners', years: ['2014-15'] }
    ],
    history: {
      founding: "Founded at the Eastville Restaurant in September 1883 as Black Arabs FC—named after the Arabs rugby team and their distinctive black kits. The club changed names to Eastville Rovers (1884) and Bristol Eastville Rovers before settling on Bristol Rovers in 1899. They spent most of their early years at Eastville Stadium (1897-1986), a ground they would call home for 89 years. The club's official nickname 'The Pirates' reflects Bristol's maritime heritage.",
      golden: "The 1950s were Rovers' golden era. Under Bert Tann's management, they won the Division Three South title in 1952-53 with legendary striker Geoff Bradford scoring 33 goals. Bradford went on to become the only Rovers player to represent England (scoring vs Denmark in 1955) and remains the club's all-time leading scorer with 242 goals. In 1956, Rovers famously beat Manchester United 4-0 in the FA Cup. The club reached the FA Cup quarter-finals three times (1951, 1958, 2008).",
      watney: "In 1972, manager Don Megson won the Watney Cup in his first three matches in charge—beating Sheffield United 7-6 on penalties at Eastville. The same season, Rovers defeated a Manchester United side featuring Bobby Charlton and George Best 2-1 at Old Trafford in the League Cup. The 1970s also saw the famous 'Smash & Grab' partnership of Bruce Bannister and Alan Warboys, who scored 133 goals between them.",
      modern: "Financial difficulties forced Rovers to leave Eastville in 1986, spending 10 years in exile at Twerton Park, Bath (1986-1996). They returned to Bristol at the Memorial Stadium in 1996, purchasing it from Bristol Rugby in 1998. After relegation to the Conference in 2014, Rovers bounced back immediately, winning the 2015 play-off final. Promotion to League One followed in 2016, though they currently find themselves back in League Two after relegation in 2025. The club is nicknamed 'The Gas' after the gasworks that stood next to Eastville—originally a Bristol City taunt, now worn as a badge of pride."
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
              <h3 className="text-xl font-bold text-white mb-3">The Black Arabs & Early Years (1883-1949)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Era - Geoff Bradford & The 1950s</h3>
              <p>{clubData.history.golden}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Watney Cup Glory & The 1970s</h3>
              <p>{clubData.history.watney}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Exile, Return & The Modern Era (1986-Present)</h3>
              <p>{clubData.history.modern}</p>
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
              <p className="text-slate-500 text-sm">Still stands as club record (33 years)</p>
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
              <p className="text-slate-500 text-sm">38 goals in 78 games for Rovers</p>
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
                <p className="text-slate-500 text-sm">Only Rover to play for England</p>
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
                <p className="text-slate-500 text-sm">Club legend - 15 seasons</p>
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
          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700">
            <p className="text-blue-200 text-center">
              <strong className="text-yellow-400">Famous Moment:</strong> Beat Manchester United 4-0 in the 1956 FA Cup with Geoff Bradford scoring twice
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}