'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function CambridgeUnitedPage() {
  const clubData = {
    name: 'Cambridge United FC',
    nickname: 'The U\'s',
    founded: 1912,
    stadium: 'Abbey Stadium (Cledara Abbey Stadium)',
    capacity: '8,127',
    location: 'Cambridge, Cambridgeshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Steve Claridge', fee: '£190,000', year: 1992, from: 'Luton Town' },
    recordSale: { player: 'Trevor Benjamin', fee: '£1,500,000', year: 2000, to: 'Leicester City' },
    topScorer: { name: 'John Taylor', goals: '86 (League)', years: '1988-1992, 1997-2004' },
    mostAppearances: { name: 'Steve Spriggs', apps: 416, years: '1975-1987' },
    honours: [
      { title: 'FA Trophy Winners', years: ['2013-14'] },
      { title: 'League One Runners-up', years: ['2020-21'] },
      { title: 'Third Division Champions', years: ['1990-91'] },
      { title: 'Fourth Division Champions', years: ['1976-77'] },
      { title: 'Conference Play-off Winners', years: ['2013-14'] },
      { title: 'Southern League Champions', years: ['1968-69', '1969-70'] },
      { title: 'Fourth Division Play-off Winners', years: ['1989-90'] }
    ],
    history: {
      founding: "Founded in 1912 as Abbey United (named after the Abbey district of Cambridge), the club played in local amateur leagues before joining the Southern League in 1958. After finishing runners-up in the Eastern Counties League in 1957-58, they joined the Southern League's South Eastern zone. Under Bill Leivers' stewardship, they won the Southern League Premier Division in 1968-69 and 1969-70, which helped secure their election into the Football League in 1970, replacing Bradford Park Avenue.",
      beck: "The early 1990s was Cambridge's most successful era. Manager John Beck led United to promotion from the Fourth Division via play-offs in May 1990 (Dion Dublin scored the only goal in a 1-0 win over Chesterfield at Wembley). They won the Third Division title in 1990-91 and reached two FA Cup quarter-finals in 1990 and 1991. In 1991-92, they finished 5th in the Second Division—their highest ever league position—and reached the play-offs hoping to join the inaugural Premier League. After drawing 1-1 at home to Leicester City, they were hammered 5-0 in the away leg, ending their promotion dreams. The following season Beck was sacked and the club was relegated.",
      struggle: "After the Beck era, Cambridge suffered a dramatic decline. Two relegations in three years sent them back to the fourth tier. Brief respite came in 1999 with promotion, but more relegations followed. In 2005, after 35 years in the Football League, Cambridge United were relegated to the Conference. The club entered administration in April 2005 with debts mounting. They had sold the Abbey Stadium earlier that season for £1.9m just to stay afloat. After intervention from sports minister Richard Caborn, a deal was struck with HMRC and the club emerged from administration in July 2005.",
      return: "Cambridge spent nine years in the Conference (2005-2014). They reached the Conference play-off finals at Wembley in 2008 and 2009, losing both times. In 2013-14, under Richard Money, United went on a record-breaking 16-game unbeaten run to start the season. They won the FA Trophy at Wembley (beating Gosport Borough 4-0) and then won the Conference play-off final 2-1 against Gateshead, returning to the Football League after nine years. In 2020-21, under Mark Bonner, they won promotion to League One as runners-up. However, they were relegated back to League Two at the end of the 2024-25 season after finishing 23rd, and are currently competing in League Two in the 2025-26 season.",
      stadium: "The Abbey Stadium has been home since 1932, donated to the club by president Henry Francis. The record attendance of 14,000 came in 1970 for a friendly against Chelsea to mark the opening of the floodlights—the first time an English League ground's record crowd turned out to watch a friendly. The club bought back the stadium in September 2022 after 18 years as a tenant. Plans are underway to redevelop the Habbin Stand and Newmarket Road End to increase capacity to nearly 12,000."
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
          <div className="bg-white rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Calendar className="w-8 h-8 text-amber-600 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-lg font-bold">Abbey Stadium</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-amber-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-amber-600" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Foundation & Entry to the Football League (1912-1970)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The John Beck Era & Near-Miss (1990-1992)</h3>
              <p>{clubData.history.beck}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Decline & Administration (1992-2005)</h3>
              <p>{clubData.history.struggle}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Return to the Football League (2005-2026)</h3>
              <p>{clubData.history.return}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Abbey Stadium</h3>
              <p>{clubData.history.stadium}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSigning.player}</p>
              <p className="text-slate-500 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSale.player}</p>
              <p className="text-slate-500 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Partnership with Dion Dublin</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-amber-600">{clubData.topScorer.goals.split(' ')[0]}</p>
                <p className="text-slate-600">League Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club legend - 12 seasons</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-amber-500 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-amber-600" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Notable Achievement:</strong> Came agonizingly close to the Premier League in 1992, finishing 5th in the Second Division before losing 6-1 on aggregate to Leicester City in the play-off semi-finals
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}