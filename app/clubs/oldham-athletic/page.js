'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flag, AlertTriangle, ArrowUpDown } from 'lucide-react';

export default function OldhamAthleticFC() {
  const clubData = {
    name: 'Oldham Athletic AFC',
    nickname: 'The Latics',
    founded: 1895,
    originalName: 'Pine Villa FC',
    status: 'Former Premier League Founder Member',
    stadium: 'Boundary Park',
    capacity: '13,512',
    location: 'Oldham, Greater Manchester',
    league: 'National League',
    season: '2025-26',
    recordSigning: {
      player: 'Ian Olney',
      fee: '£750,000',
      year: 1992,
      from: 'Aston Villa'
    },
    recordSale: {
      player: 'Ian Marshall',
      fee: '£800,000',
      year: 1993,
      to: 'Leicester City'
    },
    topScorer: {
      name: 'Tom Davis',
      goals: 145,
      seasonRecord: 33,
      years: '1919-1926'
    },
    mostAppearances: {
      name: 'Alan Groves',
      apps: 506,
      years: '1964-1976'
    },
    honours: [
      { title: 'First Division Runners-up', years: ['1914-15'] },
      { title: 'Second Division Champions', years: ['1990-91'] },
      { title: 'Third Division Champions', years: ['1973-74'] },
      { title: 'Fourth Division Champions', years: ['1962-63', '1970-71'] },
      { title: 'League Cup Semi-finalists', years: ['1990', '1994'] },
      { title: 'FA Cup Semi-finalists', years: ['1913', '1990', '1994'] }
    ],
    history: {
      founding: "Oldham Athletic Association Football Club was founded in 1895 as Pine Villa FC, adopting the name Oldham Athletic in 1899. The club joined the Football League in 1907 and quickly rose through the divisions. Under manager David Ashworth, Oldham achieved their highest-ever league finish in 1914-15, finishing as runners-up in the First Division behind Everton—just one point from winning the league title. World War I interrupted what could have been a period of sustained success. The club remained a First Division side until 1923 and reached the FA Cup semi-finals in 1913. Throughout the early 20th century, Oldham established themselves as a competitive top-flight club with a strong local following at Boundary Park, their home since 1904.",
      
      joeRoyleEra: "The late 1980s and early 1990s marked Oldham Athletic's golden era under manager Joe Royle. Appointed in 1982, Royle built a talented team that achieved promotion to the Second Division in 1986-87. The 1989-90 season saw Oldham reach both the FA Cup and League Cup semi-finals, losing to Manchester United in the FA Cup semi-final replay and to West Ham United in the League Cup. The following season, 1990-91, Oldham won the Second Division title with 88 points, securing promotion to the First Division just in time for its rebranding as the Premier League. As founder members of the Premier League in 1992-93, Oldham finished 19th to survive relegation. The 1993-94 season brought another remarkable cup run, reaching both domestic cup semi-finals again. However, Oldham were relegated from the Premier League in 1994 after a dramatic final day, beginning a long decline.",
      
      premierLeagueLegacy: "Oldham Athletic's three seasons in the Premier League (1992-1995) remain their most recent spell in the top flight. Key players included Andy Ritchie, Earl Barrett, Denis Irwin (who moved to Manchester United in 1990), and future England internationals like Nick Henry and Rick Holden. The club's survival in the inaugural Premier League season was secured with a famous 4-3 victory over Southampton on the final day. Oldham's time in the Premier League featured memorable matches including a 3-2 win over Manchester United in September 1993. Despite relegation in 1994, Oldham remained competitive in the First Division (now Championship) until 1997 when financial pressures began to mount. The club's infrastructure, including Boundary Park, began to show its age compared to newer stadiums being built elsewhere.",
      
      declineAndCrisis: "The 21st century brought severe financial difficulties for Oldham Athletic. Relegation to League One in 1997 was followed by further relegation to League Two in 2018. The club changed ownership multiple times, with each transition bringing more instability. Moroccan football agent Abdallah Lemsagam bought the club in 2018, but his tenure proved disastrous. Fans protested against his ownership as the club accumulated debt and suffered points deductions. The 2020-21 season saw Oldham finish 18th in League Two, narrowly avoiding relegation to the National League. However, the 2021-22 season brought catastrophe—Oldham were relegated from the Football League after 115 years, becoming the first former Premier League club to drop into non-league football. The relegation was confirmed on 23 April 2022 with a 2-1 defeat to Salford City.",
      
      nationalLeagueStruggles: "Oldham's first season in the National League (2022-23) was turbulent. Despite having one of the largest budgets in the division, the club finished 12th under multiple managers. Fan protests against the Lemsagam ownership intensified, with supporters' groups organizing boycotts and demonstrations. The 2023-24 season saw improvement under manager David Unsworth, with Oldham finishing 10th and reaching the National League play-offs, losing to Solihull Moors in the eliminator round. Off-field issues continued as the club faced winding-up petitions and transfer embargoes. Finally, in July 2024, the Lemsagam family sold the club to local businessman Frank Rothwell, owner of Manchester-based cabin company cabin8, who promised to restore the club's fortunes.",
      
      newEra2024: "Frank Rothwell's takeover in July 2024 marked a new beginning for Oldham Athletic. The 74-year-old businessman, famous for rowing across the Atlantic for charity, immediately cleared the club's debts and began repairing relationships with fans. Manager The club has stabilized financially and begun infrastructure improvements, including repairs to the stadium and training facilities.",
      
      futureOutlook: "Looking ahead to 2026, Oldham Athletic's immediate goal is promotion. Longer-term plans include redevelopment of Boundary Park's Broadway Stand and improving the youth academy. Under fan-focused ownership, the club is rebuilding community connections that were damaged during the Lemsagam era. With a competitive budget and passionate support base, Oldham remain one of the best-supported clubs in non-league football. The journey from Premier League founders to National League strugglers has been painful, but the club now has stable ownership and a clear path back to their rightful place in the Football League."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900">
      <header className="bg-gradient-to-r from-blue-900 to-gray-800 text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-blue-900">OAFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-gray-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Calendar className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-gray-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-400 text-xs mt-1">as Pine Villa FC</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-gray-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-400 text-xs mt-1">Since 1904 • 13,512 capacity</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-gray-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-400 text-xs mt-1">2nd largest in National League</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-gray-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-gray-400 text-xs mt-1">Former mill town club</p>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-blue-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="w-8 h-8 mr-3 text-yellow-400" />
            The Oldham Athletic Story: From Premier League to National League
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Early Success & First Division Runners-up (1895-1923)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Joe Royle Golden Era & Premier League Founder (1982-1994)</h3>
              <p>{clubData.history.joeRoyleEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Premier League Legacy & Memorable Matches (1992-1995)</h3>
              <p>{clubData.history.premierLeagueLegacy}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Financial Crisis & Relegation from EFL (1997-2022)</h3>
              <p>{clubData.history.declineAndCrisis}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">National League Struggles & Fan Protests (2022-2024)</h3>
              <p>{clubData.history.nationalLeagueStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">New Ownership & Recovery (2024-2026)</h3>
              <p>{clubData.history.newEra2024}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Future Outlook: Back to the Football League</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSigning.player}</p>
              <p className="text-gray-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-gray-500 mt-2">During Premier League era</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-red-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSale.player}</p>
              <p className="text-gray-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-400 text-sm">{clubData.topScorer.seasonRecord} goals in 1923-24 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-gray-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-400 text-sm">Midfielder • Club record holder</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-blue-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-blue-900 rounded-lg p-4 border-2 border-blue-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-blue-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Premier League Founder Member (1992):</strong> One of 22 original Premier League clubs • Played 3 seasons in top flight • Beat Manchester United 3-2 in 1993
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-blue-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Historic Decline (2022):</strong> Relegated from Football League after 115 years • First ex-Premier League club to drop into non-league
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Joe Royle Golden Era:</strong> 1990-91 Second Division champions • FA Cup semi-finals 1990 & 1994 • League Cup semi-finals 1990 & 1994
            </p>
            <div className="flex justify-center mt-2">
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold mr-2">Double cup semi-finalists 1990</span>
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Double cup semi-finalists 1994</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Record First Division Finish (1915):</strong> Runners-up in First Division • One point behind champions Everton • Best-ever league finish
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-blue-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">New Era Under Frank Rothwell (2024):</strong> Local businessman bought club July 2024 • Cleared debts • Restored fan relations • Atlantic rower
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-lg border-2 border-gray-600">
            <div className="flex items-center justify-center mb-2">
              <ArrowUpDown className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Current Season 2025-26</strong>
            </div>
            <p className="text-white text-center">
              6th in National League • 48 points from 28 games • Play-off contenders • Micky Mellon manager • Average attendance: 6,000
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-black rounded-lg border-2 border-blue-700">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Boundary Park Legacy:</strong> Home since 1904 • 13,512 capacity • "Ice Station Zebra" nickname for cold conditions • Oldest stadium in Greater Manchester still in use
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-gray-900 rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">"Back to the EFL" Campaign:</strong> Target: Return to Football League by 2027 • 120th anniversary of original Football League admission
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Premier League Founders</span>
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">Fighting Back</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Stable Ownership</span>
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Play-off Push 2026</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}