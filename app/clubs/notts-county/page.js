'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Crown, Zap, History } from 'lucide-react';

export default function NottsCountyFC() {
  const clubData = {
    name: 'Notts County FC',
    nickname: 'The Magpies',
    founded: 1862,
    originalName: 'Notts County Football Club',
    status: 'Oldest Professional Football Club in the World',
    stadium: 'Meadow Lane',
    capacity: '19,841',
    location: 'Nottingham, Nottinghamshire',
    league: 'League One',
    season: '2025-26',
    recordSigning: {
      player: 'Tony Hateley',
      fee: '£35,000',
      year: 1966,
      from: 'Chelsea'
    },
    recordSale: {
      player: 'Craig Short',
      fee: '£2,500,000',
      year: 1995,
      to: 'Everton'
    },
    topScorer: {
      name: 'Les Bradd',
      goals: 125,
      seasonRecord: 35,
      years: '1967-1978'
    },
    mostAppearances: {
      name: 'Albert Iremonger',
      apps: 564,
      years: '1904-1926'
    },
    honours: [
      { title: 'FA Cup Winners', years: ['1894'] },
      { title: 'Second Division Champions', years: ['1896-97', '1913-14', '1922-23'] },
      { title: 'Third Division Champions', years: ['1970-71', '1997-98'] },
      { title: 'Fourth Division Champions', years: ['1970-71'] },
      { title: 'Anglo-Italian Cup Winners', years: ['1994-95'] },
      { title: 'National League Champions', years: ['2022-23'] }
    ],
    history: {
      founding: "Notts County Football Club was founded in 1862, making them the oldest professional football club in the world. The club played a crucial role in the development of modern football, being founding members of the Football Association in 1863. Notts County played their first competitive match against neighbours Nottingham Forest in 1864—a match they won 1-0. The club was instrumental in creating the laws of the game and adopted the famous black and white striped kit in 1872, which inspired Juventus to adopt similar colors when they formed in 1897. Notts County were founding members of the Football League in 1888, finishing 11th in the inaugural season. The club has spent more seasons in the top flight of English football (30) than any other club currently outside the Premier League.",
      
      earlyGlory: "The late 19th and early 20th centuries represented Notts County's golden era. In 1891, they reached their first FA Cup final, losing 3-1 to Blackburn Rovers. Three years later, in 1894, Notts County made history by becoming the first club from outside the top division to win the FA Cup, defeating Bolton Wanderers 4-1 at Goodison Park. This remains their only major trophy. The club enjoyed several promotions to the First Division, winning the Second Division title in 1896-97, 1913-14, and 1922-23. During the interwar period, Notts County established themselves as a top-flight club, finishing as high as 5th in the First Division in 1925-26. The club's longevity and historical significance are recognized worldwide, with their role in football's development cemented in history.",
      
      postWarDecline: "After World War II, Notts County began a long period of decline. Relegated from the First Division in 1926, they would not return to the top flight for over 50 years. The club fluctuated between the Second and Third Divisions until the 1970s. Under manager Jimmy Sirrel, appointed in 1969, Notts County experienced a renaissance. Sirrel led the club to promotion from the Fourth Division in 1970-71, then from the Third Division in 1972-73, taking them to the Second Division. The pinnacle came in 1980-81 when Notts County finished 15th in the First Division—their highest finish since 1926. However, this success was short-lived, and the club was relegated in 1984, beginning another period of decline that would last decades.",
      
      modernStruggles: "The 21st century brought severe financial difficulties for Notts County. In 2003-04, the club suffered relegation to League Two and entered administration with debts of £7 million. Under new ownership, the club stabilized but remained in the lower leagues. In 2009, Notts County gained worldwide attention when they were bought by Munto Finance, who brought in Sven-Göran Eriksson as director of football and promised Premier League football within five years. Sol Campbell was signed but played only one game before leaving. The takeover collapsed in 2010, leaving the club in crisis again. Relegation to the National League followed in 2019 after 157 years in the Football League—a devastating blow for the world's oldest league club.",
      
      nationalLeagueYears: "Notts County spent four seasons in the National League (2019-2023), creating one of non-league's biggest rivalries with Wrexham. Under owners Alexander and Christoffer Reedtz (Danish brothers who bought the club in 2019), the club implemented a data-driven approach to recruitment. The 2021-22 season saw Notts County amass 107 points but finish second to Wrexham, who gained 111 points—the highest-ever points total for a runner-up in English football history. The 2022-23 season brought redemption as Notts County scored 117 goals and accumulated 107 points again, this time winning the National League title and securing promotion back to the Football League. Manager Luke Williams' attacking football thrilled fans, with Macaulay Langton scoring 42 goals in the title-winning season.",
      
      returnToGlory: "The 2023-24 season marked Notts County's return to League Two, where they finished 14th while adapting to the higher level. The club's data-led recruitment continues to bear fruit, with the Danish ownership providing stable investment. Meadow Lane attendances regularly exceed 10,000, demonstrating the club's strong local support.",
      
      futureAmbitions: "Looking ahead to 2026 and beyond. The club's 10-year plan includes stadium redevelopment at Meadow Lane and continued investment in the academy. With their unique historical status as the world's oldest professional club, Notts County are also exploring international partnerships and heritage projects. The data analytics department, one of the most sophisticated in the lower leagues, continues to identify undervalued talent. Manager Stuart Maynard has implemented an attractive, possession-based style that honors the club's traditions while embracing modern methods. Notts County's remarkable recovery from National League to League One in just three seasons represents one of football's great revival stories."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <header className="bg-gradient-to-r from-black to-gray-800 text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Crown className="w-10 h-10 text-black" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-gray-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-yellow-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-black rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Calendar className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-gray-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-400 text-xs mt-1">World's oldest pro club</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-gray-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-400 text-xs mt-1">Since 1910 • World's oldest</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-gray-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-gray-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-gray-400 text-xs mt-1">Home of football</p>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <History className="w-8 h-8 mr-3 text-yellow-400" />
            Historical Timeline (1862-2026)
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Foundation & Pioneering Years (1862-1900)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">FA Cup Glory & Early Success (1890-1926)</h3>
              <p>{clubData.history.earlyGlory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Post-War Decline & Jimmy Sirrel Renaissance (1946-1984)</h3>
              <p>{clubData.history.postWarDecline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Modern Struggles & Relegation (1990-2019)</h3>
              <p>{clubData.history.modernStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">National League Years & Wrexham Rivalry (2019-2023)</h3>
              <p>{clubData.history.nationalLeagueYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Return to Football League & Promotion (2023-2026)</h3>
              <p>{clubData.history.returnToGlory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Future Ambitions & Legacy</h3>
              <p>{clubData.history.futureAmbitions}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-white shadow-lg">
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

          <div className="bg-gray-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSale.player}</p>
              <p className="text-gray-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-400 text-sm">{clubData.topScorer.seasonRecord} goals in 1970-71 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-gray-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-400 text-sm">Goalkeeper • Club record holder</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-white shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 border-2 border-gray-500">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-900 to-black rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">World's Oldest Professional Club (1862):</strong> Founding members of FA (1863) & Football League (1888) • Created black & white stripes that inspired Juventus
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-black rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">FA Cup History Makers (1894):</strong> First club outside top division to win FA Cup • Defeated Bolton 4-1 at Goodison Park
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-black rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Historic National League Title (2023):</strong> Won National League with 107 points & 117 goals • Macaulay Langton scored 42 goals
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Record-Breaking Runners-Up (2022):</strong> 107 points but finished 2nd to Wrexham (111 points)—highest points total for runners-up in English history
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-black rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Back-to-Back Promotions (2023-2025):</strong> National League → League Two → League One in just 3 seasons under Danish data-driven ownership
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-black rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Current Season 2025-26:</strong> 16th in League One • 32 points from 27 games • 8 points clear of relegation • Establishing in third tier
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-900 to-black rounded-lg border-2 border-indigo-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Data Analytics Pioneers:</strong> Danish owners use sophisticated data analysis for recruitment—model studied by clubs worldwide
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-black to-gray-900 rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Football Heritage & Future:</strong> 164 years of history • 30 seasons in top flight • Now building sustainable future with modern methods
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Founded 1862</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">FA Cup Winners</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Data-Driven</span>
              <span className="px-3 py-1 bg-purple-800 text-purple-200 rounded-full text-xs font-bold">Back in League One</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}