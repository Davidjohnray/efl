'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flag, Medal, Globe } from 'lucide-react';

export default function BoltonWanderersFC() {
  const clubData = {
    name: 'Bolton Wanderers FC',
    nickname: 'The Trotters / The Wanderers',
    founded: 1874,
    originalName: 'Christ Church FC',
    status: 'FA Cup Winners 4 Times',
    stadium: 'Toughsheet Community Stadium',
    capacity: '28,723',
    location: 'Bolton, Greater Manchester',
    league: 'League One',
    recordSigning: {
      player: 'Nicolas Anelka',
      fee: '£8,000,000',
      year: 2006,
      from: 'Fenerbahçe'
    },
    recordSale: {
      player: 'Gary Cahill',
      fee: '£7,000,000',
      year: 2012,
      to: 'Chelsea'
    },
    topScorer: {
      name: 'Nat Lofthouse',
      goals: 285,
      seasonRecord: 33,
      years: '1946-1961'
    },
    mostAppearances: {
      name: 'Eddie Hopkinson',
      apps: 578,
      years: '1956-1970'
    },
    honours: [
      { title: 'FA Cup Winners', years: ['1923', '1926', '1929', '1958'] },
      { title: 'FA Cup Runners-up', years: ['1894', '1904', '1953'] },
      { title: 'Football League Cup Runners-up', years: ['1995', '2004'] },
      { title: 'Second Division Champions', years: ['1908-09', '1977-78', '1996-97'] },
      { title: 'Third Division Champions', years: ['1972-73'] },
      { title: 'Football League Trophy Winners', years: ['1989'] }
    ],
    history: {
      founding: "Bolton Wanderers Football Club was founded in 1874 as Christ Church FC by the Reverend Joseph Farrall Wright, the first curate of Christ Church in Bolton. The club adopted the name Bolton Wanderers in 1877 to reflect their nomadic existence, having played at several grounds including Pike's Lane and Burden Park before settling at Burnden Park in 1895. Bolton were founding members of the Football League in 1888 and quickly established themselves as a competitive side. The club's early years were marked by their distinctive white kit with red and blue sashes, and their reputation for producing exciting, attacking football. Bolton's first major achievement came in 1894 when they reached the FA Cup final, losing 4-1 to Notts County.",
      
      faCupDominance: "The 1920s represented Bolton's golden era, with the club establishing themselves as the dominant force in the FA Cup. Under manager Charles Foweraker, Bolton won the FA Cup three times in seven years. Their first victory came in the famous 1923 'White Horse Final' at the original Wembley Stadium, where they defeated West Ham United 2-0 in front of an estimated 300,000 spectators. Bolton retained the trophy in 1926, beating Manchester City 1-0, and completed their hat-trick in 1929 with a 2-0 victory over Portsmouth. This period also saw Bolton establish themselves as a consistent First Division side, regularly finishing in the top half of the table. Key players included David Jack, who scored the first goal at Wembley in 1923, and Joe Smith, who would later manage Blackpool to FA Cup glory.",
      
      lofthouseEra: "The post-World War II period was dominated by Nat Lofthouse, arguably Bolton's greatest ever player and England's 'Lion of Vienna.' Signed as a 14-year-old in 1939, Lofthouse made his debut in 1946 and went on to score 285 goals for the club—a record that still stands. His finest hour came in the 1958 FA Cup final, where he scored both goals in Bolton's 2-0 victory over Manchester United, who were playing with the emotional weight of the Munich air disaster. Lofthouse was named Footballer of the Year in 1953 and earned 33 England caps. This era also saw Bolton establish themselves as a top-flight force, finishing as high as 3rd in the First Division in 1953-54. The club developed a reputation for producing homegrown talent and playing attractive, physical football suited to the demanding conditions at Burnden Park.",
      
      burndenParkDisaster: "Bolton's history includes one of English football's darkest chapters—the Burnden Park disaster of 1946. On 9 March 1946, during an FA Cup sixth-round tie against Stoke City, overcrowding in the embankment area led to a crush that killed 33 spectators and injured hundreds more. The tragedy led to significant changes in ground safety regulations and the eventual introduction of the Moelwyn Hughes Report, which recommended improvements to stadium design and crowd control. Despite this tragedy, Burnden Park remained Bolton's home for another 51 years, with the club maintaining a special relationship with their supporters through both triumph and adversity.",
      
      modernEra: "The 1990s brought both revival and heartbreak for Bolton. Under manager Bruce Rioch, Bolton won promotion to the Premier League via the play-offs in 1995, defeating Reading 4-3 in one of Wembley's most dramatic finals. The club moved from Burnden Park to the new Reebok Stadium (now Toughsheet Community Stadium) in 1997, ushering in a new era. Under manager Sam Allardyce, Bolton established themselves as a Premier League force from 2001 to 2012, famously reaching the UEFA Cup in 2005-07 and finishing as high as 6th in 2004-05. This period featured memorable European nights and victories over top clubs, with players like Jay-Jay Okocha, Youri Djorkaeff, and Ivan Campo becoming cult heroes. However, financial problems followed relegation in 2012, leading to severe difficulties.",
      
      financialCrisis: "The 2010s brought Bolton's most challenging period. Relegation from the Premier League in 2012 was followed by mounting financial problems. Under owner Eddie Davies, the club accumulated significant debt, and after his death in 2018, Bolton entered administration in 2019. The club faced liquidation and was relegated to League One, then to League Two in 2020 after starting the season with a 12-point deduction. During this period, Bolton faced multiple winding-up petitions, player strikes over unpaid wages, and the threat of extinction. The club's survival was secured in 2019 when Football Ventures (Whites) Ltd, led by Sharon Brittan, completed a takeover, saving the club from liquidation and beginning a rebuilding process.",
      
      rebirth: "Under new ownership, Bolton have undergone a remarkable recovery. The club won promotion from League Two in 2020-21 under manager Ian Evatt, playing attractive football that attracted crowds back to the stadium. Bolton consolidated in League One and have been building toward a sustainable future. The stadium was renamed the Toughsheet Community Stadium in 2023 as part of a long-term sponsorship deal. The club has repaired relationships with supporters and the local community, focusing on developing young talent and re-establishing their academy. Bolton's recovery represents one of modern football's great survival stories, with the club now operating sustainably while honoring its rich 150-year history.",
      
      futureOutlook: "Looking ahead, Bolton aim to return to the Championship and eventually challenge for Premier League status once more. Under the leadership of Sharon Brittan and CEO Neil Hart, the club has implemented a sustainable business model focusing on community engagement and developing local talent. Plans include further development of the Toughsheet Community Stadium's facilities and strengthening the club's Category 2 academy. With strong local support, a modern stadium, and a renewed sense of purpose, Bolton Wanderers are building toward a future that honors their illustrious past while embracing modern football's realities. The club's 150th anniversary in 2024 was celebrated with renewed optimism for the chapters yet to be written."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <header className="bg-gradient-to-r from-white to-blue-100 text-blue-900 border-b-4 border-red-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">BWFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-blue-900">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-blue-700 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-blue-600 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-gray-600 text-sm">Founded</p>
            <p className="text-blue-900 text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-500 text-xs mt-1">as Christ Church FC</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-gray-600 text-sm">Stadium</p>
            <p className="text-blue-900 text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-500 text-xs mt-1">Since 1997 • Modern facility</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-gray-600 text-sm">Capacity</p>
            <p className="text-blue-900 text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-500 text-xs mt-1">Largest in League One</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-gray-600 text-sm">Location</p>
            <p className="text-blue-900 text-base font-bold">{clubData.location}</p>
            <p className="text-gray-500 text-xs mt-1">Historic mill town</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-blue-600" />
            The Bolton Wanderers Story: 150 Years of History
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Founding & Early Years (1874-1920)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">FA Cup Dominance & The White Horse Final (1920-1930)</h3>
              <p>{clubData.history.faCupDominance}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Nat Lofthouse Era & FA Cup Glory (1946-1961)</h3>
              <p>{clubData.history.lofthouseEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Burnden Park Disaster & Legacy (1946)</h3>
              <p>{clubData.history.burndenParkDisaster}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Modern Era & Premier League Adventure (1990-2012)</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Financial Crisis & Administration (2012-2019)</h3>
              <p>{clubData.history.financialCrisis}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Rebirth Under New Ownership (2019-Present)</h3>
              <p>{clubData.history.rebirth}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Future Outlook & 150th Anniversary</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-gray-800">{clubData.recordSigning.player}</p>
              <p className="text-gray-600 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-gray-500 mt-2">French striker • Premier League Golden Boot winner</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-red-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-800">{clubData.recordSale.player}</p>
              <p className="text-gray-600 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-500 mt-2">Became England international & Champions League winner</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-blue-900">{clubData.topScorer.name}</p>
                <p className="text-gray-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-500 text-sm">'Lion of Vienna' • England international</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-600">{clubData.topScorer.goals}</p>
                <p className="text-gray-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-blue-900">{clubData.mostAppearances.name}</p>
                <p className="text-gray-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-500 text-sm">Goalkeeper • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-blue-600" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-white rounded-lg border-2 border-blue-400">
            <p className="text-blue-900 text-center">
              <strong className="text-blue-700">The White Horse Final (1923):</strong> First FA Cup final at Wembley • Defeated West Ham 2-0 • Estimated 300,000 attendance • David Jack scored first Wembley goal
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border-2 border-red-400">
            <p className="text-blue-900 text-center">
              <strong className="text-red-700">Nat Lofthouse Legacy:</strong> 285 club goals • 1958 FA Cup final hero vs Manchester United • 'Lion of Vienna' • Footballer of the Year 1953
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-lg border-2 border-yellow-400">
            <div className="flex items-center justify-center mb-2">
              <Medal className="w-5 h-5 mr-2 text-blue-700" />
              <strong className="text-blue-700 text-lg">FA Cup Specialists</strong>
            </div>
            <p className="text-blue-900 text-center">
              4-time FA Cup winners • 3 wins in 7 years (1923-1929) • 8 finals appearances total • Historic cup pedigree
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-400">
            <p className="text-blue-900 text-center">
              <strong className="text-green-700">Premier League Era (2001-2012):</strong> UEFA Cup qualification 2005 • 6th place finish 2005 • Jay-Jay Okocha, Youri Djorkaeff era • 'Fortress Reebok'
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-400">
            <div className="flex items-center justify-center mb-2">
              <Globe className="w-5 h-5 mr-2 text-blue-700" />
              <strong className="text-blue-700 text-lg">European Adventures</strong>
            </div>
            <p className="text-blue-900 text-center">
              UEFA Cup 2005-07 • Beat Atlético Madrid, Sevilla • Memorable European nights • Reached last 32
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-2 border-gray-400">
            <p className="text-blue-900 text-center">
              <strong className="text-gray-700">Burnden Park to Toughsheet:</strong> Burnden Park (1895-1997) • 1946 disaster • Reebok Stadium 1997 • Renamed Toughsheet 2023
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border-2 border-indigo-400">
            <div className="flex items-center justify-center mb-2">
              <Flag className="w-5 h-5 mr-2 text-blue-700" />
              <strong className="text-blue-700 text-lg">Survival & Recovery</strong>
            </div>
            <p className="text-blue-900 text-center">
              Administration 2019 • Saved from liquidation • Rebuilt under Football Ventures • Sustainable future
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border-2 border-blue-600">
            <p className="text-blue-900 text-center">
              <strong className="text-blue-800">150 Years of Wanderers:</strong> Founded 1874 • Founding Football League member • Rich history • Bright future ahead
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-xs font-bold">4× FA Cup Winners</span>
              <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-xs font-bold">Nat Lofthouse</span>
              <span className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-bold">Premier League Era</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded-full text-xs font-bold">European Nights</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}