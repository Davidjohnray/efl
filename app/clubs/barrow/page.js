'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function BarrowPage() {
  const clubData = {
    name: 'Barrow AFC',
    nickname: 'The Bluebirds',
    founded: 1901,
    stadium: 'Holker Street (SO Legal Stadium)',
    capacity: '5,045',
    location: 'Barrow-in-Furness, Cumbria',
    league: 'League Two',
    recordSigning: { player: 'Ged Garner', fee: 'Undisclosed', year: 2023, from: 'Fleetwood Town' },
    recordSale: { player: 'Kenny Lowe', fee: '£40,000', year: 1990, to: 'Barnet' },
    topScorer: { name: 'Colin Cowperthwaite', goals: 282, years: '1977-1992' },
    mostAppearances: { name: 'Colin Cowperthwaite', apps: 704, years: '1977-1992' },
    honours: [
      { title: 'National League Champions', years: ['2019-20'] },
      { title: 'Conference North Champions', years: ['2014-15'] },
      { title: 'Northern Premier League Champions', years: ['1983-84', '1988-89', '1997-98'] },
      { title: 'FA Trophy Winners', years: ['1989-90', '2009-10'] },
      { title: 'Lancashire Combination Champions', years: ['1920-21'] },
      { title: 'Lancashire FA Challenge Trophy', years: ['1981'] }
    ],
    history: {
      founding: "Founded at a public meeting at the Drill Hall on 16 July 1901, with £280 in subscriptions raised. The club was admitted to the Lancashire League two months later, playing their first match against Blackpool before 4,000 spectators. After winning the Lancashire Combination in 1920-21, Barrow were elected to the new Football League Third Division (North) in 1921, kicking off at home against Stockport County.",
      golden: "After 46 years in the basement division, Barrow finally achieved promotion in 1967, finishing third in Division Four under Don McEvoy. Colin Appleton then led the Bluebirds to their highest-ever finish—eighth in Division Three in 1967-68. The club even topped the Third Division table for one day during the 1968-69 season. This era saw defender Brian Arrowsmith make the most Football League appearances for Barrow, and the main stand now bears his name.",
      darkYears: "Financial difficulties led to Barrow being up for re-election in 1971 and 1972. On the second occasion, after 51 years in the Football League, they were voted out and replaced by Hereford United. To raise funds, a speedway track was installed around the pitch (1972-74), which proved unpopular with visiting teams. The club then spent 48 years in non-league football, yo-yoing between divisions but winning the FA Trophy in 1990 and 2010—becoming the only club to win at both old and new Wembley Stadiums.",
      return: "After near-liquidation in 1999 due to criminal ownership by Stephen Vaughan, supporters formed a members' company and regained control of Holker Street. Under Ian Evatt's management, Barrow won the 2019-20 National League title (decided on points-per-game due to COVID-19), returning to the Football League after 48 years—the first club to regain their place automatically after being voted out via re-election. Legend Colin Cowperthwaite remains the club's all-time record holder with 704 appearances and 282 goals, including the fastest goal in English national competition (3.5 seconds vs Kettering, 1979)."
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
            <p className="text-white text-base font-bold">Holker Street</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
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
              <h3 className="text-xl font-bold text-white mb-3">The Foundation & Football League Entry (1901-1921)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Years (1967-1972)</h3>
              <p>{clubData.history.golden}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Wilderness Years (1972-2020)</h3>
              <p>{clubData.history.darkYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Great Return (2020-Present)</h3>
              <p>{clubData.history.return}</p>
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
                <p className="text-slate-500 text-sm">Club legend - 15 seasons</p>
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
                <p className="text-slate-500 text-sm">All-time greatest player</p>
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
              <strong className="text-yellow-400">Unique Achievement:</strong> Only club to win the FA Trophy at both the old (1990) and new (2010) Wembley Stadiums
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}