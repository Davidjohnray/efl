'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function CheltenhamTownPage() {
  const clubData = {
    name: 'Cheltenham Town FC',
    nickname: 'The Robins',
    founded: 1887,
    stadium: 'Whaddon Road (EV Charger Points Stadium)',
    capacity: '7,066',
    location: 'Cheltenham, Gloucestershire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Information not disclosed', fee: 'Undisclosed', year: 2020, from: 'Various' },
    recordSale: { player: 'Information not disclosed', fee: 'Undisclosed', year: 2020, to: 'Various' },
    topScorer: { name: 'Dave Lewis', goals: 290, years: '1967-1983 (three spells)' },
    mostAppearances: { name: 'Roger Thorndale', apps: 702, years: '1958-1976' },
    honours: [
      { title: 'League Two Champions', years: ['2020-21'] },
      { title: 'Conference Champions', years: ['1998-99', '2015-16'] },
      { title: 'FA Trophy Winners', years: ['1997-98'] },
      { title: 'League Two Play-off Winners', years: ['2005-06'] },
      { title: 'Third Division Play-off Winners', years: ['2001-02'] },
      { title: 'Southern League Champions', years: ['1984-85'] },
      { title: 'Southern League Midland Division Champions', years: ['1982-83'] }
    ],
    history: {
      founding: "Founded in 1887 by Albert Close White, a local teacher who introduced association football to Cheltenham after discovering the game while at college in London. Trials were held at the East Gloucestershire Cricket Ground, and the club was born. The team originally wore ruby shirts (earning the nickname 'The Rubies') before adopting red and white stripes in 1932, becoming 'The Robins'. They spent their first three decades in local football, with notable early players including Gloucestershire cricketers Charles Barnett and Gilbert Jessop.",
      nonleague: "The club turned professional in 1932, joining the Birmingham Combination before moving to the Southern League in 1935. They spent 50 years in the Southern League, winning the Midland Division in 1982-83 and the Premier Division in 1984-85, earning promotion to the Alliance Premier League (now Conference). After relegation in 1992, Cheltenham spent four seasons as Southern League runners-up before finally returning to the Conference in 1997.",
      cotterill: "The appointment of Steve Cotterill as manager in 1996-97 transformed the club's fortunes. In his first season, they finished as Southern League runners-up but were promoted after champions Gresley Rovers failed ground capacity requirements. In 1998, Cheltenham won the FA Trophy (beating Southport 1-0 at Wembley) and in 1998-99, secured the Conference title and entry to the Football League for the first time. Cotterill then guided them to the FA Cup fifth round and victory in the 2002 Third Division play-off final, earning promotion to Division Two (League One).",
      modern: "After relegation from League One in 2003, Cheltenham bounced between the lower two tiers. John Ward led them to another promotion via the 2006 League Two play-offs. The club suffered relegation to the Conference in 2015 after 16 years in the Football League, but Gary Johnson immediately brought them back as champions in 2015-16 with a record-breaking 101 points—the first club in 26 years to secure an immediate return as Conference champions. Under Michael Duff, Cheltenham won their first EFL title, the 2020-21 League Two championship. They spent three seasons in League One before relegation back to League Two in 2024, where they currently compete in the 2025-26 season.",
      stadium: "Whaddon Road has been home since 1932, built in 1927 by the Cheltenham Original Brewery on the site of former Berkeley Hunt kennels. The record attendance of 8,326 was set in 1956 for an FA Cup tie against Reading. The stadium has undergone various improvements including the Colin Farmer Stand (2001) and the Hazlewoods Stand (2005). The ground is known for its asymmetric shape, confined by surrounding houses. In 2025, majority owner Mike Garlick pledged investment into facilities, suggesting stadium improvements are coming."
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
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Calendar className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-lg font-bold">Whaddon Road</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-600" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Foundation & Early Years (1887-1932)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Non-League Success (1932-1999)</h3>
              <p>{clubData.history.nonleague}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Steve Cotterill Era & Football League Entry (1996-2002)</h3>
              <p>{clubData.history.cotterill}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">League Two Champions & Current Era (2003-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Whaddon Road Stadium</h3>
              <p>{clubData.history.stadium}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-700">Lower league club</p>
              <p className="text-slate-500 text-sm">Transfer records not publicly disclosed</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-700">Lower league club</p>
              <p className="text-slate-500 text-sm">Transfer records not publicly disclosed</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">53 goals in 1974/75 season!</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-600">{clubData.topScorer.goals}</p>
                <p className="text-slate-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club legend - 18 seasons</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-500 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-600" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Historic Achievement:</strong> Won their first-ever Football League title in 2020-21, becoming League Two champions under Michael Duff
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Record Return:</strong> In 2015-16, became the first club in 26 years to secure an immediate return to the Football League as Conference champions, amassing 101 points
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}