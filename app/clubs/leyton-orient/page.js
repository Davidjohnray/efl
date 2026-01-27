'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function LeytonOrientFC() {
  const clubData = {
    name: 'Leyton Orient FC',
    nickname: 'The O\'s',
    founded: 1881,
    originalName: 'Eagle Cricket Club / Orient Football Club',
    status: 'League Two Champions 2023',
    stadium: 'Brisbane Road',
    capacity: '9,271',
    location: 'Leyton, East London',
    league: 'League One',
    recordSigning: {
      player: 'Dean Cox',
      fee: '£225,000',
      year: 2010,
      from: 'Brighton & Hove Albion'
    },
    recordSale: {
      player: 'Moses Odubajo',
      fee: '£3,500,000',
      year: 2014,
      to: 'Brentford'
    },
    topScorer: {
      name: 'Tom Johnston',
      goals: 163,
      seasonRecord: 28,
      years: '1905-1914, 1919-1922'
    },
    mostAppearances: {
      name: 'John Chiedozie',
      apps: 522,
      years: '1976-1985'
    },
    honours: [
      { title: 'League Two Champions', years: ['2022-23'] },
      { title: 'Third Division South Champions', years: ['1955-56'] },
      { title: 'Fourth Division Champions', years: ['1969-70'] },
      { title: 'Conference National Champions', years: ['2005-06'] },
      { title: 'FA Cup Semi-finalists', years: ['1978'] },
      { title: 'EFL Trophy Finalists', years: ['2022'] },
      { title: 'London Challenge Cup Winners', years: ['1912', '1971', '1973', '1993', '1994', '2011'] },
      { title: 'Football League Group Cup Winners', years: ['1985'] },
      { title: 'Anglo-Italian Cup Winners', years: ['1977'] },
      { title: 'Associate Members\' Cup Finalists', years: ['1999'] }
    ],
    history: {
      founding: "Leyton Orient Football Club was founded in 1881 as the Eagle Cricket Club by members of the Homerton Theological College. The club soon turned to football, becoming Orient Football Club in 1888. The name 'Orient' was chosen by a player who worked for the Orient Shipping Line. The club turned professional in 1903 and joined the Football League in 1905. In 1937, the club added 'Leyton' to its name to reflect its location. The O's have played at Brisbane Road (now known as The Breyer Group Stadium for sponsorship) since 1937, having previously played at several grounds including Lea Bridge Road and Millfields Road. The club's traditional colors of red and white were established early in their history, though they have occasionally worn blue.",
      
      earlyYears: "Leyton Orient's early Football League years saw them establish themselves as a solid Third Division South club. The interwar period was challenging, with the club generally occupying mid-table positions. The 1950s brought the club's first major success under manager Alec Stock. In the 1955-56 season, Orient won the Third Division South championship, securing promotion to the Second Division for the first time. This team, featuring players like Tommy Johnston and Stan Aldous, played attractive football and attracted increased support. The club consolidated their Second Division status throughout the late 1950s, with their highest-ever league finish of 2nd in Division Two coming in 1961-62 under manager Johnny Carey. This remains the closest Orient have come to top-flight football.",
      
      goldenSeventies: "The 1970s marked Leyton Orient's most successful period. Under manager George Petchey, the club established themselves as a competitive Second Division side. The 1977-78 season brought historic FA Cup success as Orient reached the semi-finals for the first time. They defeated several higher-division teams including Chelsea and Middlesbrough before losing to Arsenal in a semi-final replay at Stamford Bridge. This period also saw success in European competition, with Orient winning the Anglo-Italian Cup in 1977. The team featured legendary players like John Chiedozie (the club's record appearance maker), Peter Kitchen, and Glenn Roeder. Despite limited resources compared to their London rivals, Orient developed a reputation for attractive football and strong team spirit.",
      
      eightiesDecline: "The 1980s brought decline for Leyton Orient. Relegation from the Second Division in 1982 began a downward trend that saw the club fall to the Fourth Division by 1985. Financial problems emerged, though there were occasional highlights including winning the Football League Group Cup in 1985 under manager Frank Clark. The late 1980s were particularly difficult, with the club facing relegation from the Football League in 1989. Only a last-day victory over Oxford United preserved their league status. The 1990s saw continued struggles, with Orient yo-yoing between the Third and Fourth Divisions. The club's survival in the Football League became an annual concern, testing the loyalty of their dedicated supporters.",
      
      nonLeagueExile: "The 2004-05 season proved disastrous as Leyton Orient were relegated from the Football League for the first time in their history. The club entered administration in 2004 with significant debts, facing possible extinction. However, a supporters' trust helped save the club, and under manager Martin Ling, Orient responded positively. The 2005-06 season saw the club win the Conference National title with a record 89 points, securing an immediate return to the Football League. This achievement, built around players like Gary Alexander and John Mackie, demonstrated the club's resilience. The non-league period, while brief, strengthened the bond between the club and its community and highlighted the importance of supporter involvement.",
      
      millenniumStadiumStruggles: "Following their return to the Football League, Leyton Orient faced financial challenges and ownership uncertainties. Italian businessman Francesco Becchetti purchased the club in 2014, but his tenure proved disastrous. Despite reaching the League One play-off final in 2014 under manager Russell Slade (losing to Rotherham United), the club entered a period of crisis. Poor management decisions, including frequent managerial changes and questionable signings, led to relegation to League Two in 2015 and then to the brink of relegation from the Football League entirely. The club's survival in 2017 was secured only on the final day of the season, preserving their league status by the narrowest of margins.",
      
      renaissanceUnderLing: "The club's fortunes transformed dramatically with the arrival of new ownership in 2017. Businessman Nigel Travis and head coach Justin Edinburgh stabilized the club, both financially and on the pitch. Tragically, Edinburgh died suddenly in 2019, but his legacy inspired the club's revival. Under manager Ross Embleton and later Kenny Jackett, Orient began rebuilding. The 2020-21 season saw progress under manager Jobi McAnuff, and in 2022, Richie Wellens was appointed manager. The 2022-23 season brought historic success as Orient won the League Two championship with 91 points, securing promotion to League One in style. This achievement, built on a solid defence and effective attacking play, marked the club's return to stability and success.",
      
      communityIdentity: "Leyton Orient's identity is deeply connected to its East London roots and community focus. The club's traditional red home kit with white sleeves has been worn since the 1960s, though variations have occurred. The nickname 'The O's' is simple but distinctive, derived from the club's name. Brisbane Road, with its intimate atmosphere and famous South Stand terrace, provides one of London's most authentic football experiences. The club has strong community connections through the Leyton Orient Trust, which engages extensively with local residents. Orient's rivalry with Southend United is one of London's less famous but keenly contested derbies. Despite being overshadowed by larger London clubs, Orient maintains a proud identity and loyal supporter base that has remained steadfast through difficult times."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900">
      <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white border-b-4 border-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-red-800">
                <span className="text-2xl font-bold text-red-800">LOFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-red-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-red-800 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Calendar className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-red-200 text-xs mt-1">One of London's oldest</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-red-200 text-xs mt-1">East London home since 1937</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-red-200 text-xs mt-1">Intimate atmosphere</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-red-200 text-xs mt-1">East London • Community club</p>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-red-700 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-400" />
            The Leyton Orient Story: East London's Community Club
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Founding & Early Years (1881-1950)</h3>
              <p className="text-gray-100">{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">First Success & Second Division Era</h3>
              <p className="text-gray-100">{clubData.history.earlyYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Golden Seventies & FA Cup Glory</h3>
              <p className="text-gray-100">{clubData.history.goldenSeventies}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Eighties Decline & Financial Struggles</h3>
              <p className="text-gray-100">{clubData.history.eightiesDecline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Non-League Exile & Immediate Return</h3>
              <p className="text-gray-100">{clubData.history.nonLeagueExile}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Millennium Struggles & Ownership Crisis</h3>
              <p className="text-gray-100">{clubData.history.millenniumStadiumStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Renaissance & League Two Champions 2023</h3>
              <p className="text-gray-100">{clubData.history.renaissanceUnderLing}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Community Identity & East London Pride</h3>
              <p className="text-gray-100">{clubData.history.communityIdentity}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-300">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-white">{clubData.recordSigning.player}</p>
              <p className="text-gray-300 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-gray-200 mt-2">Creative midfielder • Club favorite</p>
            </div>
          </div>

          <div className="bg-red-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-300">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-gray-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-200 mt-2">Full-back • Later played for Hull City</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1908-09 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-300">{clubData.topScorer.goals}</p>
                <p className="text-gray-200">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-red-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-200 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-300 text-sm">Winger • Nigerian international • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-300">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-200">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-red-700 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-400" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h3 className="text-lg font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900 to-gray-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">League Two Champions 2023:</strong> Won title with 91 points • Richie Wellens manager • Promotion to League One
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">FA Cup Semi-finalists 1978</strong>
            </div>
            <p className="text-white text-center">
              Historic cup run • Beat Chelsea & Middlesbrough • Lost to Arsenal in replay • Club's best FA Cup performance
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-red-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Conference Champions 2006:</strong> Immediate return to Football League • 89 points • Martin Ling manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-red-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Anglo-Italian Cup Winners 1977:</strong> European success • Beat Piacenza • George Petchey manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-red-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The O's Identity</strong>
            </div>
            <p className="text-white text-center">
              Red & white colors • 'The O's' nickname • Brisbane Road since 1937 • East London community club
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-red-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Brisbane Road:</strong> Home since 1937 • South Stand terrace • Intimate atmosphere • East London landmark
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community & Resilience</strong>
            </div>
            <p className="text-white text-center">
              Leyton Orient Trust • Survived administration • Supporter involvement • Community programs • East London engagement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-gray-800 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">143 Years of Football:</strong> London's community club • FA Cup semi-finalists • League Two champions • Resilient through adversity
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-red-800 rounded-full text-xs font-bold">Founded 1881</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">FA Cup 1978</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">League Two 2023</span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">The O's</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}