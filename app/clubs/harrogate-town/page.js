'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function HarrogateTownFC() {
  const clubData = {
    name: 'Harrogate Town FC',
    nickname: 'The Sulphurites',
    founded: 1914,
    originalName: 'Harrogate Town AFC',
    stadium: 'EnviroVent Stadium',
    capacity: '5,000',
    location: 'Harrogate, North Yorkshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Luke Armstrong',
      fee: 'Undisclosed (club record)',
      year: 2021,
      from: 'Salford City'
    },
    recordSale: {
      player: 'Jack Diamond',
      fee: '£200,000',
      year: 2023,
      to: 'Lincoln City'
    },
    topScorer: {
      name: 'Jack Muldoon',
      goals: 78,
      seasonRecord: 24,
      years: '2019-2023'
    },
    mostAppearances: {
      name: 'Warren Burrell',
      apps: 350,
      years: '2012-2023'
    },
    honours: [
      { title: 'National League Play-off Winners', years: ['2019-20'] },
      { title: 'National League North Champions', years: ['2017-18'] },
      { title: 'Northern Premier League Division One North Champions', years: ['2011-12'] },
      { title: 'Northern Counties East League Premier Division Champions', years: ['2001-02'] },
      { title: 'West Riding County Cup Winners', years: ['2014-15', '2017-18', '2018-19'] },
      { title: 'FA Trophy Best Finish', years: ['Semi-finalists 2021-22'] }
    ],
    history: {
      founding: "Harrogate Town Football Club was founded in 1914, though the town had earlier football clubs dating back to 1907. The club initially played in local leagues before joining the Yorkshire League in 1920. After World War II, Harrogate Town joined the West Yorkshire League where they remained for several decades. The club's early years were spent in regional football with modest success. For much of its history, Harrogate Town was a non-league club operating in the lower tiers of English football. The original ground was at Station View before moving to their current Wetherby Road home in 1920.",
      
      earlyYears: "The club's fortunes began to change in the late 1990s and early 2000s. Under manager John Reed, Harrogate Town won the Northern Counties East League Premier Division in 2001-02, earning promotion to the Northern Premier League Division One. This marked the beginning of the club's rise through the football pyramid. The early 2000s saw steady progress, with the club establishing itself in the Northern Premier League. In 2011-12, under manager Simon Weaver, the club won the Northern Premier League Division One North title, securing promotion to the Northern Premier League Premier Division.",
      
      weaverEra: "Simon Weaver, appointed player-manager in 2009, became the architect of Harrogate Town's remarkable rise. The son of owner Irving Weaver, Simon implemented a progressive style of football that brought consistent success. In 2016-17, Harrogate Town won the National League North title with a club-record 91 points, earning promotion to the National League for the first time in their history. This achievement was particularly impressive considering the club had been in the eighth tier just six years earlier. The 2017-18 season saw Harrogate Town adapt well to the National League, finishing a respectable 12th in their debut season.",
      
      historicPromotion: "The 2019-20 season proved to be historic for Harrogate Town. When the COVID-19 pandemic forced the National League season to be curtailed, Harrogate Town were in second place behind Barrow. The play-offs proceeded behind closed doors, and Harrogate Town defeated Boreham Wood 1-0 in the semi-final before facing Notts County at Wembley Stadium in the first-ever competitive play-off final to be played at the national stadium without fans. On 2 August 2020, Harrogate Town defeated Notts County 3-1 to achieve promotion to the English Football League for the first time in their 106-year history. The victory was particularly poignant as it came during the club's centenary celebrations.",
      
      footballLeague: "Harrogate Town's debut season in League Two (2020-21) saw them finish a creditable 17th, ensuring Football League survival. The 2021-22 season was even more successful, with the club finishing 19th but reaching the FA Cup third round for the first time, where they lost 4-1 to Premier League side West Ham United. That same season, Harrogate Town reached the FA Trophy semi-finals, demonstrating their cup pedigree. The 2022-23 season saw further progress with a 12th-place finish in League Two. Currently, Harrogate Town compete in League Two for the 2025-26 season under manager Simon Weaver, who remains the longest-serving manager in the English Football League.",
      
      modernAchievements: "Harrogate Town's rise from the Northern Counties East League to the Football League in just 18 years represents one of English football's most remarkable stories. The club has developed a reputation for playing attractive, possession-based football under Weaver's leadership. In 2022, the club's ground was renamed the EnviroVent Stadium as part of a sponsorship deal. Harrogate Town have also become known for developing young talent, with several players moving to higher divisions. The club's community engagement has been praised, with strong local support despite being in a town traditionally associated with rugby league. Currently sitting in 15th place in League Two for the 2025-26 season, Harrogate Town continue to establish themselves as a stable Football League club with ambitions for further progress.",
      
      uniqueFeatures: "Harrogate Town are unique in being the only English Football League club owned by a father-son management team, with Irving Weaver as chairman and Simon Weaver as manager. The club's nickname 'The Sulphurites' comes from Harrogate's history as a spa town famous for its sulphur springs. The club's colours of yellow and black reflect the town's sulphur heritage. Despite their modest resources, Harrogate Town have built a reputation for financial stability and sustainable growth, avoiding the boom-and-bust cycles that have affected many smaller clubs."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-black to-yellow-900">
      <header className="bg-gradient-to-r from-black to-yellow-800 text-white border-b-4 border-yellow-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-black">HTAFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-yellow-200 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-yellow-300 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg transition-colors font-bold"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-black rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Calendar className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-yellow-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-yellow-500 text-xs mt-1">as {clubData.originalName}</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-yellow-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">EnviroVent Stadium</p>
            <p className="text-yellow-500 text-xs mt-1">Since 1920</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-yellow-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-yellow-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-yellow-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Club History
          </h2>
          <div className="space-y-6 text-yellow-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Foundation & Early Years (1914-1990s)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Rise Through Non-League (2000-2011)</h3>
              <p>{clubData.history.earlyYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">The Simon Weaver Era Begins (2009-2017)</h3>
              <p>{clubData.history.weaverEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Historic Football League Promotion (2019-2020)</h3>
              <p>{clubData.history.historicPromotion}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Establishing in the Football League (2020-2023)</h3>
              <p>{clubData.history.footballLeague}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Modern Achievements & Community</h3>
              <p>{clubData.history.modernAchievements}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Unique Club Features</h3>
              <p>{clubData.history.uniqueFeatures}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-yellow-100">{clubData.recordSigning.player}</p>
              <p className="text-yellow-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-yellow-100">{clubData.recordSale.player}</p>
              <p className="text-yellow-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-yellow-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-yellow-500 text-sm">{clubData.topScorer.seasonRecord} goals in a season (club record)</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-yellow-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-yellow-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-yellow-500 text-sm">Club record holder</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-yellow-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-yellow-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-yellow-900 rounded-lg p-4 border-2 border-yellow-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-yellow-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Historic Wembley Promotion (2020):</strong> Defeated Notts County 3-1 in the National League play-off final to achieve promotion to the Football League for the first time in the club's 106-year history
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Remarkable Rise:</strong> From Northern Counties East League to Football League in just 18 years—one of English football's most impressive climbs
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Longest-Serving Manager:</strong> Simon Weaver has been manager since 2009—making him the longest-serving manager in the English Football League
            </p>
          </div>
          <div className="mt-4 p-4 bg-purple-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Unique Ownership:</strong> The only English Football League club owned by a father-son management team (Irving and Simon Weaver)
            </p>
          </div>
          <div className="mt-4 p-4 bg-red-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">FA Cup Run (2021-22):</strong> Reached the FA Cup third round for the first time, facing Premier League West Ham United
            </p>
          </div>
          <div className="mt-4 p-4 bg-indigo-900 rounded-lg border-2 border-indigo-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Record Points (2017-18):</strong> Won National League North with a club-record 91 points, earning promotion to the National League
            </p>
          </div>
          <div className="mt-4 p-4 bg-orange-900 rounded-lg border-2 border-orange-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">The Sulphurites:</strong> Nickname comes from Harrogate's history as a spa town famous for its sulphur springs—yellow and black colors reflect this heritage
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}