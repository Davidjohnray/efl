'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Castle, Flower, Shield } from 'lucide-react';

export default function ShrewsburyTownFC() {
  const clubData = {
    name: 'Shrewsbury Town FC',
    nickname: 'The Shrews / Salop',
    founded: 1886,
    originalName: 'Shrewsbury Town Football Club',
    status: 'Longest-serving League Two Club (Historic)',
    stadium: 'New Meadow',
    capacity: '9,875',
    location: 'Shrewsbury, Shropshire',
    league: 'League One',
    season: '2025-26',
    recordSigning: {
      player: 'Sam Ricketts',
      fee: '£250,000',
      year: 2009,
      from: 'Hull City'
    },
    recordSale: {
      player: 'Joe Hart',
      fee: '£600,000',
      year: 2006,
      to: 'Manchester City'
    },
    topScorer: {
      name: 'Arthur Rowley',
      goals: 152,
      seasonRecord: 38,
      years: '1958-1965'
    },
    mostAppearances: {
      name: 'Jimmy McLaughlin',
      apps: 466,
      years: '1978-1991'
    },
    honours: [
      { title: 'Third Division Champions', years: ['1978-79'] },
      { title: 'Fourth Division Champions', years: ['1958-59'] },
      { title: 'Football League Trophy Winners', years: ['2023-24'] },
      { title: 'Welsh Cup Winners', years: ['1891', '1938', '1977', '1979', '1984', '1985'] },
      { title: 'FA Cup Best Run', years: ['Quarter-finals 1978-79'] },
      { title: 'League Cup Best Run', years: ['Quarter-finals 1960-61'] }
    ],
    history: {
      founding: "Shrewsbury Town Football Club was founded in 1886 at the Turf Hotel in Claremont Hill, Shrewsbury. The club initially played in local leagues before joining the Birmingham & District League in 1895. Shrewsbury Town's early success came in the Welsh Cup, which they won six times between 1891 and 1985—a remarkable achievement for an English club. The club turned professional in 1905 and joined the Football League in 1950 when they were elected to the Third Division North. Shrewsbury's historic home was Gay Meadow, situated beside the River Severn, where they played from 1910 to 2007. The ground was famous for its beautiful riverside setting and the occasional flood, which sometimes required boats to retrieve balls from the river.",
      
      goldenEra: "The late 1970s and early 1980s represented Shrewsbury Town's golden era. Under manager Graham Turner, the club achieved promotion to the Third Division as champions in 1978-79, setting a club record of 95 points that still stands. That same season, Shrewsbury reached the FA Cup quarter-finals for the only time in their history, defeating Manchester City 2-1 in the fifth round before losing to Wolverhampton Wanderers. The team featured legendary striker Arthur Rowley, who scored 152 goals for the club—still the all-time record. Shrewsbury established themselves in the Third Division (now League One) throughout the 1980s, with their highest-ever league finish coming in 1984-85 when they placed 7th in the Second Division (now Championship). This period also saw Shrewsbury win the Welsh Cup twice more, in 1984 and 1985.",
      
      modernStruggles: "The 1990s and early 2000s brought difficult times for Shrewsbury Town. Relegation to the Fourth Division in 1994 was followed by financial struggles. The club spent 11 consecutive seasons in League Two (formerly Fourth Division) from 1994 to 2004, the longest unbroken spell at that level in English football history. Despite these challenges, Shrewsbury continued to produce talented players, most notably goalkeeper Joe Hart, who came through the academy and was sold to Manchester City for £600,000 in 2006—a club record sale. Hart would go on to become England's number one goalkeeper and win multiple Premier League titles. In 2007, Shrewsbury moved from their historic Gay Meadow home to the purpose-built New Meadow stadium, marking the end of an era.",
      
      leagueOneEstablishment: "Under manager Paul Hurst, Shrewsbury achieved promotion to League One in 2014-15 via the play-offs, defeating Chesterfield in the final at Wembley. This began a period of relative stability in the third tier. The 2017-18 season was particularly memorable as Shrewsbury, under manager Paul Hurst, finished 3rd in League One with 87 points—their highest finish since 1985. They reached the League One play-off final at Wembley, losing to Rotherham United after extra time. That same season, Shrewsbury reached the FA Cup fifth round, taking Premier League Manchester United to a replay at Old Trafford. Sam Ricketts took over as manager in 2018 and established Shrewsbury as a solid League One side before Steve Cotterill's appointment in 2020 brought further stability.",
      
      recentSuccess: "The 2023-24 season brought Shrewsbury Town their first major trophy in 40 years. Under manager Matt Taylor (appointed 2023), Shrewsbury won the EFL Trophy (then called the Papa Johns Trophy), defeating League One rivals Lincoln City 2-1 in the final at Wembley. This was the club's first Wembley victory and first national trophy since winning the Third Division title in 1979. Manager Matt Taylor continues to build a competitive squad with a blend of experience and youth.",
      
      communityClub: "Shrewsbury Town has always been deeply rooted in its local community. Despite being an English club, Shrewsbury's six Welsh Cup wins reflect their location just 9 miles from the Welsh border. The club's nickname 'Salop' comes from the historic name for Shropshire. Shrewsbury's academy has produced several notable players including Joe Hart, Dave Edwards, and Ryan Woods. The club operates with one of the smaller budgets in League One but punches above its weight through strong team spirit and effective recruitment. New Meadow, while lacking the character of Gay Meadow, provides modern facilities and has hosted England youth internationals. Average attendances hover around 6,000, reflecting strong local support for the only professional football club in Shropshire.",
      
      futureOutlook: "Looking ahead to 2026 and beyond, Shrewsbury Town aim to establish themselves as a sustainable League One club with occasional pushes for promotion to the Championship. The club's business model focuses on developing young talent, both through their Category 3 academy and smart recruitment of released players from bigger clubs. Plans include improving New Meadow's facilities and increasing commercial revenue. Under the ownership of local businessman Roland Wycherley (chairman since 1997), the club maintains financial stability while competing against clubs with larger budgets. With their recent EFL Trophy success providing momentum, Shrewsbury look to build on their proud history while embracing modern football's challenges. The club remains a vital part of Shropshire's sporting identity and continues to represent their community with pride."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-amber-900 to-blue-900">
      <header className="bg-gradient-to-r from-blue-900 to-amber-800 text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Castle className="w-10 h-10 text-blue-900" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-gray-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-bold">
                    Historic Welsh Cup Winners
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
          <div className="bg-blue-900 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Calendar className="w-8 h-8 text-amber-400 mb-2" />
            <p className="text-gray-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-400 text-xs mt-1">at Turf Hotel, Shrewsbury</p>
          </div>
          <div className="bg-blue-900 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-gray-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-400 text-xs mt-1">Since 2007 • Modern facility</p>
          </div>
          <div className="bg-blue-900 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-gray-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-400 text-xs mt-1">Average: 6,000</p>
          </div>
          <div className="bg-blue-900 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-gray-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-gray-400 text-xs mt-1">Only pro club in Shropshire</p>
          </div>
        </div>

        <section className="bg-blue-900 rounded-xl p-8 border-2 border-amber-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-amber-400" />
            The Shrewsbury Town Story: 138 Years of History
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Founding & Early Welsh Cup Success (1886-1950)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Golden Era & Record-Breaking Success (1978-1985)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Modern Struggles & Joe Hart Emergence (1990-2007)</h3>
              <p>{clubData.history.modernStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">League One Establishment (2014-2023)</h3>
              <p>{clubData.history.leagueOneEstablishment}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Recent Success & Wembley Glory (2023-2026)</h3>
              <p>{clubData.history.recentSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Community Club & Shropshire Identity</h3>
              <p>{clubData.history.communityClub}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Future Outlook & Sustainability</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-900 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSigning.player}</p>
              <p className="text-gray-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-blue-900 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-red-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSale.player}</p>
              <p className="text-gray-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-500 mt-2">Became England's #1 goalkeeper & Premier League champion</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-900 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-400 text-sm">{clubData.topScorer.seasonRecord} goals in 1958-59 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-gray-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-400 text-sm">Midfielder • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-blue-900 rounded-xl p-8 border-2 border-amber-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-amber-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-amber-900 rounded-lg p-4 border-2 border-amber-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-amber-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-900 to-blue-900 rounded-lg border-2 border-amber-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Welsh Cup Specialists:</strong> Won Welsh Cup 6 times as an English club • Most recent win 1985 • Unique cross-border achievement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-green-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Historic Wembley Victory (2024):</strong> Won EFL Trophy 2-1 vs Lincoln City • First national trophy since 1979 • First Wembley win
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Record-Breaking Season (1978-79):</strong> Third Division champions with 95 points (club record) • FA Cup quarter-finals • Golden era peak
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-blue-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Joe Hart Academy Product:</strong> Sold to Manchester City for £600k • Became England #1 • Won 2 Premier League titles
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Flower className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Gay Meadow Legacy</strong>
            </div>
            <p className="text-white text-center">
              Historic riverside ground (1910-2007) • Ball boys in boats on River Severn • Floods caused postponements • Moved to New Meadow in 2007
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-blue-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Community Anchor:</strong> Only professional club in Shropshire • Deep local roots • Category 3 academy • Sustainable model
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-black rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Shropshire's Pride:</strong> 138-year history • Sustainable League One club • Developing local talent • Proud community identity
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-amber-800 text-amber-200 rounded-full text-xs font-bold">Welsh Cup Winners</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">EFL Trophy 2024</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Joe Hart Academy</span>
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">Community Club</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}