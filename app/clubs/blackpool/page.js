'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Umbrella, Castle, Waves } from 'lucide-react';

export default function BlackpoolFC() {
  const clubData = {
    name: 'Blackpool FC',
    nickname: 'The Seasiders / The Tangerines',
    founded: 1887,
    originalName: 'Blackpool St. John\'s',
    status: 'FA Cup Winners 1953',
    stadium: 'Bloomfield Road',
    capacity: '16,616',
    location: 'Blackpool, Lancashire',
    league: 'League One',
    recordSigning: {
      player: 'Billy Ayre',
      fee: '£300,000',
      year: 1989,
      from: 'Cardiff City'
    },
    recordSale: {
      player: 'Charlie Adam',
      fee: '£7,000,000',
      year: 2009,
      to: 'Liverpool'
    },
    topScorer: {
      name: 'Jimmy Hampson',
      goals: 248,
      seasonRecord: 45,
      years: '1927-1938'
    },
    mostAppearances: {
      name: 'Jimmy Armfield',
      apps: 627,
      years: '1952-1971'
    },
    honours: [
      { title: 'FA Cup Winners', years: ['1953'] },
      { title: 'FA Cup Runners-up', years: ['1948', '1951'] },
      { title: 'Second Division Champions', years: ['1929-30', '1999-00'] },
      { title: 'Third Division Play-off Winners', years: ['1991-92', '2006-07'] },
      { title: 'Football League Trophy Winners', years: ['2001-02', '2003-04'] },
      { title: 'Anglo-Italian Cup Winners', years: ['1971'] }
    ],
    history: {
      founding: "Blackpool Football Club was founded in 1887 as Blackpool St. John's, initially playing at Raikes Hall Gardens before moving to Bloomfield Road in 1899. The club joined the Football League in 1896 and initially struggled in the lower divisions. Blackpool's early identity was shaped by their distinctive tangerine kit, adopted in 1923 after a suggestion by referee Albert Hargreaves, who was impressed by the Dutch national team's colors. The club's nickname 'The Seasiders' reflects Blackpool's status as England's most famous seaside resort. Throughout the early 20th century, Blackpool established themselves as a solid Second Division side, with their first major success coming in the 1929-30 season when they won the Second Division title to reach the First Division for the first time.",
      
      matthewsEra: "The post-World War II period marked Blackpool's golden era, centered around legendary winger Sir Stanley Matthews. Under manager Joe Smith, Blackpool reached three FA Cup finals in five years (1948, 1951, 1953), winning the famous 'Matthews Final' in 1953. In that historic match, Blackpool trailed Bolton Wanderers 3-1 with 20 minutes remaining before Matthews inspired a remarkable comeback. Blackpool won 4-3, with Stan Mortensen becoming the only player to score a hat-trick in an FA Cup final at Wembley. This period also saw Blackpool establish themselves as a top-flight club, finishing as high as 2nd in the First Division in 1955-56. The team featured other stars including Harry Johnston, Allan Brown, and Ernie Taylor, but it was Matthews—the 'Wizard of Dribble'—who became immortalized in Blackpool folklore.",
      
      postMatthews: "After Matthews' departure in 1961, Blackpool entered a period of gradual decline. Relegation from the First Division in 1967 was followed by yo-yoing between the top two divisions throughout the 1970s. The 1970-71 season brought success in the Anglo-Italian Cup, but the club's fortunes faded. Relegation to the Third Division in 1978 marked the beginning of a long exile from the top flight. The 1980s and 1990s saw Blackpool struggle in the lower divisions, including a brief spell in the Fourth Division. However, the club maintained its unique identity and passionate support, with Bloomfield Road remaining one of English football's most atmospheric grounds despite its aging facilities. The club's financial struggles during this period mirrored the wider economic challenges facing the seaside town.",
      
      oystonControversy: "The late 1990s and early 2000s brought both success and controversy. Under manager Steve McMahon, Blackpool won promotion to the Second Division (now Championship) in 1999-2000. However, the club became embroiled in one of English football's most bitter ownership disputes. The Oyston family, who owned the club from 1987, became increasingly unpopular with fans due to perceived mismanagement and a lack of investment. Protests intensified after Blackpool's remarkable promotion to the Premier League in 2010 under manager Ian Holloway. Despite a memorable season in the top flight that included victories over Liverpool and Tottenham, relegation followed in 2011. Fan boycotts and protests continued for years, with attendances sometimes falling below 5,000 at Bloomfield Road despite the stadium's 16,616 capacity.",
      
      newEra: "In February 2019, after a court-ordered sale, Blackpool was purchased by local businessman Simon Sadler, a lifelong fan. This marked the beginning of a new era. Under manager Neil Critchley, Blackpool won promotion from League One via the play-offs in 2020-21, defeating Lincoln City 2-1 in the final at Wembley. The club consolidated in the Championship before being relegated in 2023. Following relegation, Blackpool have been rebuilding in League One with the aim of returning to the Championship. The club has invested in upgrading Bloomfield Road's facilities and repairing relationships with the fanbase. Under Sadler's ownership, Blackpool has restored financial stability and operates as a sustainable, community-focused club.",
      
      bloomfieldRoad: "Bloomfield Road has been Blackpool's home since 1899, though the current stadium bears little resemblance to its predecessor after extensive redevelopment. The ground's most distinctive feature is the 'Mighty Bloomfield' stand, which houses the club's most vocal supporters. The stadium has hosted England internationals and Rugby League matches, and its location just a mile from Blackpool's famous seafront makes it one of English football's most uniquely situated grounds. Recent improvements include new corporate facilities and improved disabled access. The atmosphere at Bloomfield Road, particularly for evening matches under the lights, is renowned throughout the Football League, with the 'Sea of Tangerine' creating a spectacular visual display.",
      
      futureOutlook: "Looking ahead, Blackpool aim to secure promotion back to the Championship and build toward a sustainable future. Under owner Simon Sadler's stewardship, the club has implemented a sensible financial model and focuses on developing young talent. Plans include potential further development of Bloomfield Road and strengthening community engagement. With the club now debt-free and operating with fan interests at heart, Blackpool represents a model of responsible ownership in modern football. The 'Seasiders' continue to embody the spirit of their coastal community while honoring their rich history, including the legendary Matthews era and their famous FA Cup triumph."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-800 via-black to-orange-800">
      <header className="bg-gradient-to-r from-black to-orange-700 text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-orange-700">BFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-orange-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-yellow-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-orange-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-orange-700 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-black rounded-lg p-6 border-2 border-orange-500 shadow-lg">
            <Calendar className="w-8 h-8 text-orange-400 mb-2" />
            <p className="text-orange-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-orange-500 text-xs mt-1">as Blackpool St. John's</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-orange-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-orange-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-orange-500 text-xs mt-1">Since 1899 • Seaside location</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-orange-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-orange-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-orange-500 text-xs mt-1">Sea of Tangerine</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-orange-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-orange-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-orange-500 text-xs mt-1">England's famous seaside resort</p>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-orange-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-orange-400" />
            The Blackpool Story: Seaside Glory & The Matthews Final
          </h2>
          <div className="space-y-6 text-orange-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Founding & Early Years (1887-1945)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">The Matthews Golden Era (1946-1961)</h3>
              <p>{clubData.history.matthewsEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Post-Matthews Decline (1961-1990)</h3>
              <p>{clubData.history.postMatthews}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Oyston Controversy & Premier League (1990-2019)</h3>
              <p>{clubData.history.oystonControversy}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">New Era Under Simon Sadler (2019-Present)</h3>
              <p>{clubData.history.newEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Bloomfield Road Fortress</h3>
              <p>{clubData.history.bloomfieldRoad}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Future Outlook & Ambitions</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-orange-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-orange-100">{clubData.recordSigning.player}</p>
              <p className="text-orange-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-orange-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-orange-100">{clubData.recordSale.player}</p>
              <p className="text-orange-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-orange-500 mt-2">Scottish midfielder • Premier League champion with Liverpool</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-orange-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-orange-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-orange-500 text-sm">{clubData.topScorer.seasonRecord} goals in 1929-30 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-orange-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-orange-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-orange-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-orange-500 text-sm">England captain • Later became respected journalist</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-orange-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-orange-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-orange-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-orange-900 rounded-lg p-4 border-2 border-orange-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-orange-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-900 to-yellow-900 rounded-lg border-2 border-orange-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">The Matthews Final 1953:</strong> FA Cup winners • Trailed Bolton 3-1 • Matthews inspired 4-3 comeback • Stan Mortensen hat-trick
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-orange-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Umbrella className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Seaside Identity</strong>
            </div>
            <p className="text-white text-center">
              Tangerine kit since 1923 • 'The Seasiders' nickname • Bloomfield Road near famous Blackpool seafront
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-orange-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Premier League 2010-11:</strong> Promoted via play-offs under Ian Holloway • Beat Liverpool 2-1 • Charlie Adam sold for £7m
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-orange-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Castle className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Fan Victory 2019</strong>
            </div>
            <p className="text-white text-center">
              Boycott forced Oyston sale • Simon Sadler bought club • Lifelong fan ownership • Attendances recovered
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg border-2 border-yellow-600">
            <div className="flex items-center justify-center mb-2">
              <Waves className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Bloomfield Road Fortress</strong>
            </div>
            <p className="text-white text-center">
              Home since 1899 • 16,616 capacity • 'Sea of Tangerine' atmosphere • Plans for expansion
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-orange-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Wembley Return 2021:</strong> Won League One play-off final • Beat Lincoln 2-1 • First promotion under Sadler ownership
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-orange-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Anglo-Italian Cup 1971:</strong> Defeated Bologna • Only English club to win competition • Represented unique era
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-900 to-black rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Seaside Renaissance:</strong> 139-year history • FA Cup glory • Fan ownership restored • Sustainable future
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-orange-800 text-orange-200 rounded-full text-xs font-bold">FA Cup 1953</span>
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Premier League</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Seaside Club</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Fan Owned</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}