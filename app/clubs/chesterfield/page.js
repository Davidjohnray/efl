'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function ChesterfieldPage() {
  const clubData = {
    name: 'Chesterfield FC',
    nickname: 'The Spireites',
    founded: 1867,
    stadium: 'SMH Group Stadium',
    capacity: '10,500',
    location: 'Chesterfield, Derbyshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Jason Lee', fee: '£250,000', year: 1998, from: 'Watford' },
    recordSale: { player: 'Kevin Davies', fee: '£750,000', year: 1997, to: 'Southampton' },
    topScorer: { name: 'Ernie Moss', goals: '192 (162 league)', years: '1968-1974, 1976-1981, 1984-1986' },
    mostAppearances: { name: 'Dave Blakey', apps: 617, years: '1948-1967' },
    honours: [
      { title: 'National League Champions', years: ['2023-24'] },
      { title: 'League Two Champions', years: ['2010-11', '2013-14', '1984-85', '1969-70'] },
      { title: 'Third Division North Champions', years: ['1930-31', '1935-36'] },
      { title: 'Football League Trophy Winners', years: ['2011-12'] },
      { title: 'Anglo-Scottish Cup Winners', years: ['1980-81'] }
    ],
    history: {
      founding: "Chesterfield FC was officially established in 1867, making it the fourth-oldest surviving club in the Football League and the oldest in Derbyshire. Known as 'The Spireites' after the town's distinctive crooked church spire at St Mary's and All Saints Parish Church, the club has had multiple incarnations. The modern professional club formed in 1891 as Chesterfield Town, joining the Football League Second Division in 1899. They lost their League status in 1909 but returned after World War I, reforming as Chesterfield Municipal in 1919 before becoming simply Chesterfield FC in 1920.",
      goldenEra: "The club's most famous moment came in 1997 when they reached the FA Cup semi-finals, facing Middlesbrough. In a controversial match, Chesterfield were denied what appeared to be a clear goal when Jonathan Howard's shot crossed the line but was not given. They lost 3-0 in extra time after drawing 3-3 in normal time. This remains one of the most talked-about refereeing controversies in FA Cup history. The club have been League Two/Fourth Division champions four times (1970, 1985, 2011, 2014), a record for that division.",
      decline: "After years of stability, Chesterfield suffered consecutive relegations in 2017 and 2018, dropping from League One to the National League for the first time since 1921. Financial troubles led to administration, and in 2020, the club was bought by the Chesterfield FC Community Trust. The club endured six difficult years in non-league football, losing the 2023 National League play-off final on penalties to Notts County at Wembley, an agonizing near-miss.",
      modern: "Redemption came in 2023-24 when Chesterfield won the National League title and returned to the Football League. They drew remarkable crowds during their National League season, averaging 9,973—the highest in the division. In 2024, the ownership transferred to brothers Phil and Ashley Kirk. Currently in the 2025-26 season, Chesterfield compete in League Two, filling 75.5% of their stadium capacity with an average attendance of 7,931, one of the best in the division.",
      stadium: "The club departed their historic home at Saltergate (occupied from 1871-2010) after 139 years and moved to the newly built SMH Group Stadium in 2010. The modern 10,500-capacity all-seater stadium cost £13 million to build and includes The HUB, a £1.7m community facility. The stadium has hosted England youth internationals and pop concerts, including Elton John in 2012. The highest attendance was 10,108 for their final 2023-24 National League match against Maidenhead United."
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
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-lg font-bold">SMH Group</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-blue-600" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Foundation & Early Years (1867-1920)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">1997 FA Cup Semi-Final & Record Championships (1970-2014)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Consecutive Relegations & Non-League Years (2017-2023)</h3>
              <p>{clubData.history.decline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Return to the Football League (2024-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">From Saltergate to SMH Group Stadium</h3>
              <p>{clubData.history.stadium}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
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

          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
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
          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Club legend - 3 spells</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-blue-600">192</p>
                <p className="text-slate-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club legend - 19 seasons</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-blue-600" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">1997 FA Cup Semi-Final:</strong> Reached the semi-finals and were controversially denied a goal that crossed the line against Middlesbrough—one of the most famous refereeing errors in FA Cup history
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Record League Two Champions:</strong> Four-time winners of the fourth tier (1970, 1985, 2011, 2014)—a record for that division
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}