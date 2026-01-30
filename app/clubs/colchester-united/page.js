'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function ColchesterUnitedPage() {
  const clubData = {
    name: 'Colchester United FC',
    nickname: 'The U\'s',
    founded: 1937,
    stadium: 'JobServe Community Stadium',
    capacity: '10,105',
    location: 'Colchester, Essex',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Not publicly disclosed', fee: 'Various signings', year: '', from: '' },
    recordSale: { player: 'Greg Halford', fee: '£2,500,000', year: 2007, to: 'Reading' },
    topScorer: { name: 'Tony Adcock', goals: 149, years: '1981-1987, 1995-1999' },
    mostAppearances: { name: 'Micky Cook', apps: 700, years: '1969-1984' },
    honours: [
      { title: 'League One Runners-up', years: ['2005-06'] },
      { title: 'Third Division Play-off Winners', years: ['1997-98'] },
      { title: 'Conference Champions', years: ['1991-92'] },
      { title: 'FA Trophy Winners', years: ['1991-92'] },
      { title: 'Southern League Champions', years: ['1938-39'] }
    ],
    history: {
      founding: "Colchester United was formed in March 1937 after supporters wanted to create a professional club in Colchester, similar to nearby Ipswich Town. The new club replaced Colchester Town, who had resisted turning professional. United joined the Southern Football League and played at Layer Road, the same ground Town had used. By December 1937, Colchester Town folded as crowds dwindled and players were signed by United's reserve team. The club won the Southern League championship in 1938-39, their second season, scoring 110 goals in 44 games.",
      nonLeagueCup: "Following World War II, Colchester produced one of the most remarkable FA Cup runs by a non-league side in 1947-48. They defeated Football League clubs Wrexham, Huddersfield Town, and Bradford Park Avenue before losing to Blackpool in the fifth round. This memorable run demonstrated the club was ready for the Football League, and in 1950 they were elected to the Third Division South, replacing the expelled Gillingham.",
      leedsGiant: "The club's most famous moment came on February 13, 1971, when Fourth Division Colchester stunned First Division leaders Leeds United 3-2 in the FA Cup fifth round at Layer Road. Leeds, managed by Don Revie and featuring legendary players, were widely considered the best team in England at the time. Colchester raced to a 3-0 lead before Leeds pulled two goals back. The result remains one of the greatest giant-killings in FA Cup history and put Colchester on the national stage. The U's reached the quarter-finals before losing 5-0 to Everton.",
      championship: "Colchester achieved their greatest league success in 2006 when they finished runners-up in League One under Phil Parkinson, earning promotion to the Championship for the first time in the club's history. The following season, 2006-07, they finished 10th in the Championship—their highest-ever league finish—remarkably finishing ahead of East Anglian rivals Ipswich Town and Norwich City, as well as Essex rivals Southend United. However, they were relegated back to League One after just two seasons.",
      modern: "After relegation from the Championship in 2008, Colchester spent eight seasons in League One before being relegated to League Two in 2016 for the first time in 18 years. They have remained in the fourth tier since. In the 2025-26 season, Colchester compete in League Two and have entered into a ground-share agreement with Ipswich Town's Women's and Under-21 teams, using the arrangement to undertake significant pitch improvements at the JobServe Community Stadium.",
      stadium: "Colchester played at Layer Road for 71 years (1937-2008), a historic ground that had been built in 1910 for predecessors Colchester Town. After 30 years of planning and a successful community petition that gathered over 30,000 signatures, the club moved to the new £14 million JobServe Community Stadium in 2008. Located at Cuckoo Farm in northern Colchester, the modern 10,105-capacity all-seater stadium is the largest entertainment venue in Essex and hosts concerts with a capacity of 20,000."
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
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-base font-bold">JobServe</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-600 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-blue-600" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Formation & Southern League Era (1937-1950)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Non-League Giant-Killers (1947-48)</h3>
              <p>{clubData.history.nonLeagueCup}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Leeds United Shock (1971)</h3>
              <p>{clubData.history.leedsGiant}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Championship Glory (2006-2008)</h3>
              <p>{clubData.history.championship}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Modern Era (2008-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">From Layer Road to JobServe Stadium</h3>
              <p>{clubData.history.stadium}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-slate-700 font-bold">Not publicly disclosed</p>
              <p className="text-slate-500 text-sm">Lower league club with modest transfer activity</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
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
          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Two spells at the club</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-blue-600">{clubData.topScorer.goals}</p>
                <p className="text-slate-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club legend - 15 seasons</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-600 shadow-lg">
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
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">1971 FA Cup Giant-Killing:</strong> Fourth Division Colchester defeated First Division leaders Leeds United 3-2 in the fifth round—one of the greatest upsets in FA Cup history
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Championship Achievement:</strong> Highest-ever league finish of 10th in the Championship (2006-07), finishing ahead of East Anglian rivals Ipswich and Norwich
            </p>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border-2 border-purple-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">The Double:</strong> Won Conference title and FA Trophy in 1991-92, returning to the Football League after just two years in non-league
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}