'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function SwindonTownPage() {
  const clubData = {
    name: 'Swindon Town FC',
    nickname: 'The Robins',
    founded: 1879,
    stadium: 'Nigel Eady County Ground',
    capacity: '15,728',
    location: 'Swindon, Wiltshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Joey Beauchamp',
      fee: '£800,000',
      year: 1994,
      from: 'West Ham United'
    },
    recordSale: {
      player: 'Massimo Luongo',
      fee: '£3,800,000',
      year: 2015,
      to: 'Queens Park Rangers'
    },
    topScorer: {
      name: 'Harry Morris',
      goals: 229,
      years: '1926-1933'
    },
    mostAppearances: {
      name: 'John Trollope',
      apps: 889,
      league: 770,
      years: '1960-1980'
    },
    honours: [
      { title: 'League Cup Winners', years: ['1968-69'] },
      { title: 'Anglo-Italian Cup Winners', years: ['1969-70'] },
      { title: 'Fourth Division Champions', years: ['1985-86'] },
      { title: 'Division Two Champions', years: ['1995-96'] },
      { title: 'League Two Play-off Winners', years: ['2019-20'] },
      { title: 'Second Division Play-off Winners', years: ['1992-93'] }
    ],
    history: {
      founding: "Swindon Town Football Club was founded by Reverend William Pitt of Liddington in 1879 as Swindon AFC. The club became Spartans the next year, before finally settling on the name Swindon Town in 1883. The team turned professional in 1894 as a founding member of the Southern League, later also entering the Western League between 1897 and 1902. The club was crowned Western League champion in 1898-99 and Southern League champion in 1910-11 and 1913-14. They reached the FA Cup semi-finals for the first time in 1909-10, losing to eventual winners Newcastle United. Swindon were elected into the Football League in 1920 as members of the Third Division South and remained in the third tier for 43 years.",
      
      leagueCup: "The club's most celebrated achievement came on March 15, 1969, when Third Division Swindon Town defeated First Division Arsenal 3-1 after extra time at Wembley Stadium to win the Football League Cup—one of the greatest giant-killings in English football history. Roger Smart opened the scoring in the first half before Bobby Gould equalized for Arsenal in the 86th minute to force extra time. In extra time, Don Rogers scored twice (in the 101st and 109th minutes) to seal an incredible upset. The heavy Wembley pitch and illnesses affecting six Arsenal players contributed to the shock result. Following the victory, 8,000 fans gathered in Regent's Circus as the players emerged onto the Town Hall balcony. Swindon achieved promotion to the Second Division that same season after remaining unbeaten in their final nine matches.",
      
      macariEra: "Following relegation to the Fourth Division in 1982—the lowest point in the club's history—Lou Macari was appointed manager in 1985. His arrival signaled an immediate upturn: Swindon won the Fourth Division title in 1985-86 with a Football League record 102 points (the second club ever to score over 100 points in a season, after York City's 101 in 1983-84). They secured a second successive promotion the following season, winning the Third Division play-offs under Macari's stewardship. Macari left in 1989 to take charge of West Ham United.",
      
      playoffScandal: "Macari was replaced by veteran midfielder and former Argentine international Osvaldo Ardiles. In his first season (1989-90), Swindon won the Second Division play-off final at Wembley, beating Sunderland 1-0 in front of 72,873 fans to earn promotion to the top flight. However, the club later admitted to 36 charges of breaching league rules (35 involving illegal payments to players during the Macari era). The Football League initially relegated them two divisions to the Third Division, giving Sunderland promotion to the First Division. After an appeal, Swindon were allowed to remain in the Second Division but were denied their top-flight promotion. Chairman Brian Hillier received a six-month prison sentence. Despite the scandal, Ardiles remained until March 1991 when he departed for Newcastle United.",
      
      hoddle: "Glenn Hoddle, former Tottenham and England midfielder, was appointed player-manager in March 1991 with Swindon battling relegation. He saved them from the Third Division with just eight games to play. The 1991-92 season saw improvement as they narrowly missed the play-offs. In 1992-93, Hoddle led Swindon to the Division One play-off final against Leicester City at Wembley. In a thrilling encounter, Hoddle scored just before half-time to give Swindon the lead. Craig Maskell and Shaun Taylor made it 3-0 early in the second half, but Leicester fought back to level at 3-3. With six minutes remaining, Paul Bodin converted a penalty to seal a dramatic 4-3 victory—Swindon's first-ever promotion to the top flight after 114 years. However, days after the victory, Hoddle announced he was leaving to manage Chelsea.",
      
      premier: "Hoddle's assistant John Gorman took charge for Swindon's inaugural Premier League season in 1993-94. It proved disastrous: they won just five matches all season and were relegated after conceding 100 league goals—a Premier League record that stood until Sheffield United broke it in 2024. Only four clean sheets were recorded all season. Their first-ever top-flight victory came on November 24, 1993, when Keith Scott's goal gave them a 1-0 home win over Queens Park Rangers. Swindon suffered a second consecutive relegation in 1994-95, dropping to the third tier. However, they bounced straight back as Division Two champions in 1995-96 to avoid an FA expulsion and a hat-trick of relegations.",
      
      modern: "Swindon remained in the second tier until relegation in 1999-2000. They dropped into League Two for the first time since 1986 at the end of the 2005-06 season—becoming the first former Premier League team to drop to the fourth tier. Since then, Swindon have earned promotion from League Two on three occasions: via play-offs in 2006-07 and 2019-20, and through automatic promotion in 2011-12. In March 2023, Swindon Town bought the County Ground from Swindon Borough Council for £2.3 million in a joint venture with the Swindon Town Supporters Club (TrustSTFC). The stadium is now known as the Nigel Eady County Ground. Currently competing in League Two for the 2025-26 season."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-gradient-to-r from-red-700 to-red-800 text-white border-b-4 border-red-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-red-700">ST</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-red-100 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-red-100 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-red-50 text-red-700 rounded-lg transition-colors font-bold"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Calendar className="w-8 h-8 text-red-700 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-sm font-bold">Nigel Eady County Ground</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-600 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-700" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Foundation & Early Years (1879-1962)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Miracle of 1969 - League Cup Glory</h3>
              <p>{clubData.history.leagueCup}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Lou Macari Resurgence (1985-1989)</h3>
              <p>{clubData.history.macariEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Play-off Scandal (1990)</h3>
              <p>{clubData.history.playoffScandal}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Glenn Hoddle Era (1991-1993)</h3>
              <p>{clubData.history.hoddle}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Premier League Disaster (1993-94)</h3>
              <p>{clubData.history.premier}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Modern Era & Current Status (1995-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
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

          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
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
          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-700 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Club record</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-700">{clubData.topScorer.goals}</p>
                <p className="text-slate-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">{clubData.mostAppearances.league} league games - MBE</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Total</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-600 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-700" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-700 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">1969 League Cup Miracle:</strong> Third Division Swindon defeated First Division Arsenal 3-1 at Wembley—Don Rogers scored twice in extra time in one of English football's greatest-ever giant-killings
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">First Floodlit Football League Ground:</strong> Swindon Town installed floodlights in 1951 at a cost of £350—becoming the FIRST Football League club to do so, six months ahead of Arsenal
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">John Trollope - Record Breaker:</strong> Made 770 league appearances (889 total) for Swindon from 1960-1980—a professional record in English football until broken in 2023. Awarded MBE in 1978. Statue unveiled August 2025
            </p>
          </div>
          <div className="mt-4 p-4 bg-red-100 rounded-lg border-2 border-red-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Premier League Record:</strong> Conceded 100 goals in 1993-94 Premier League season—a record that stood for 30 years until Sheffield United broke it in 2024. Only five wins recorded in their sole top-flight campaign
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}