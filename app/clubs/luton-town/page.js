'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function LutonTownFC() {
  const clubData = {
    name: 'Luton Town FC',
    nickname: 'The Hatters',
    founded: 1885,
    originalName: 'Luton Town Football Club',
    status: 'Premier League 2023-2024',
    stadium: 'Kenilworth Road',
    capacity: '11,850',
    location: 'Luton, Bedfordshire',
    league: 'Premier League',
    recordSigning: {
      player: 'Ryan Giles',
      fee: '£5,000,000',
      year: 2023,
      from: 'Wolves'
    },
    recordSale: {
      player: 'James Justin',
      fee: '£8,000,000',
      year: 2019,
      to: 'Leicester City'
    },
    topScorer: {
      name: 'Gordon Turner',
      goals: 276,
      seasonRecord: 35,
      years: '1949-1964'
    },
    mostAppearances: {
      name: 'Bob Morton',
      apps: 579,
      years: '1948-1964'
    },
    honours: [
      { title: 'League Cup Winners', years: ['1988'] },
      { title: 'Second Division Champions', years: ['1981-82'] },
      { title: 'Third Division Champions', years: ['1973-74', '2004-05', '2018-19'] },
      { title: 'Fourth Division Champions', years: ['1967-68'] },
      { title: 'Conference Premier Champions', years: ['2013-14'] },
      { title: 'Football League Trophy Winners', years: ['2009', '2020'] },
      { title: 'EFL Championship Play-off Winners', years: ['2023'] },
      { title: 'FA Cup Finalists', years: ['1959'] },
      { title: 'Southern League Champions', years: ['1897-98', '1899-1900', '1900-01'] },
      { title: 'Bedfordshire Premier Cup Winners', years: ['1887-2019 (Record 54 wins)'] }
    ],
    history: {
      founding: "Luton Town Football Club was founded in 1885 following a public meeting at the Town Hall. The club initially played at Dallow Lane before moving to their famous Kenilworth Road ground in 1905, where they have played ever since. The nickname 'The Hatters' comes from Luton's historic straw hat manufacturing industry, which was the town's primary industry when the club was formed. Luton Town were founding members of the Southern League in 1894 and enjoyed early success, winning the Southern League championship three times (1898, 1900, 1901). The club joined the Football League in 1897 but left in 1900 before rejoining permanently in 1920. The club's traditional colors of white and black (with orange trim) have been worn in various combinations throughout their history.",
      
      earlySuccess: "Luton Town's early Football League years saw them establish themselves as a solid Third Division South club. The 1936-37 season brought the club's first major success as they won the Third Division South championship under manager Ned Liddell, securing promotion to the Second Division. This period saw the emergence of Joe Payne, who famously scored 10 goals in a single match against Bristol Rovers in 1936 - a Football League record that still stands. World War II interrupted the club's progress, but the post-war years brought further success. The 1954-55 season saw Luton win promotion to the First Division for the first time under manager Dally Duncan. The 1958-59 season brought historic FA Cup success as Luton reached the final, losing 2-1 to Nottingham Forest at Wembley.",
      
      topFlightYears: "The late 1950s and early 1960s marked Luton Town's first sustained period in the top flight. Under manager Syd Owen, Luton established themselves as a competitive First Division side. The team featured legendary goalkeeper Ron Baynham and prolific striker Gordon Turner, who remains the club's all-time top scorer with 276 goals. Luton's highest-ever league finish of 7th in the First Division came in 1957-58. The club developed a reputation for attractive, attacking football and became known as one of the 'Cinderella clubs' of English football. Relegation in 1960 ended this first top-flight era, but Luton would return to the First Division in the 1970s under manager Harry Haslam, consolidating their status as a club capable of competing at the highest level.",
      
      eightiesGlory: "The 1980s marked Luton Town's golden age under manager David Pleat. The 1981-82 season saw Luton win the Second Division championship, securing promotion to the First Division. This team, featuring players like Ricky Hill, Brian Stein, and Mal Donaghy, played exciting, attacking football. The pinnacle came in 1988 when Luton Town won the League Cup, defeating Arsenal 3-2 in a memorable final at Wembley. Brian Stein scored the winning goal in the final minute, cementing his place in club folklore. This period also saw Luton establish themselves as a solid First Division club, regularly finishing in mid-table and developing fierce rivalries with nearby clubs. The club's artificial plastic pitch at Kenilworth Road, installed in 1985, became a distinctive feature and gave Luton a significant home advantage.",
      
      ninetiesDecline: "The 1990s brought decline for Luton Town. Relegation from the First Division in 1992 (the inaugural Premier League season) began a downward trend that saw the club fall through the divisions. Financial problems emerged, exacerbated by the Taylor Report's requirement for all-seater stadiums, which Kenilworth Road struggled to meet. The club's plastic pitch was removed in 1991, ending a unique era. The late 1990s saw Luton yo-yoing between the Second and Third Divisions, with occasional highlights including promotion in 2001-02 under manager Joe Kinnear. However, the club's financial situation continued to deteriorate, leading to administration in 2003 and points deductions that resulted in relegation to the Fourth Division.",
      
      nonLeagueExile: "The 2008-09 season proved disastrous as Luton Town suffered a second administration and were relegated from the Football League for the first time in their history. This came despite winning the Football League Trophy that same season, defeating Scunthorpe United 3-2 at Wembley. Relegation to the Conference Premier marked the club's lowest point. However, under manager Richard Money, Luton responded positively. The 2013-14 season saw the club win the Conference Premier title with a record 101 points, securing an immediate return to the Football League. This achievement, built around players like Andre Gray and Luke Guttridge, demonstrated the club's resilience and the loyalty of their supporters during difficult times.",
      
      remarkableComeback: "The 2010s marked Luton Town's remarkable comeback under manager Nathan Jones. Appointed in 2016, Jones transformed the club's fortunes. The 2017-18 season saw Luton promoted from League Two, followed by the 2018-19 season when they won the League One championship with 94 points - securing back-to-back promotions. This team, featuring players like James Collins and Sonny Bradley, played attractive, attacking football that delighted fans. The 2021-22 season saw Luton reach the Championship play-offs under manager Rob Edwards, losing to Huddersfield Town in the semi-finals. The following season, 2022-23, Luton Town made history by winning the Championship play-off final, defeating Coventry City on penalties at Wembley to secure promotion to the Premier League.",
      
      premierLeagueReturn: "The 2023-24 season marked Luton Town's return to the top flight of English football after a 31-year absence. Against all predictions of immediate relegation, Rob Edwards' team achieved several memorable results including a 4-0 victory over Brighton and a 1-1 draw with Liverpool. Despite operating with the smallest budget in the Premier League and playing at the league's smallest stadium (Kenilworth Road), Luton won many admirers for their courage, team spirit, and attacking approach. Key players included captain Tom Lockyer, midfielder Ross Barkley, and striker Carlton Morris. Although the club was relegated after one season, their Premier League adventure restored their national profile and generated significant revenue to support future development.",
      
      communityIdentity: "Luton Town's identity is deeply connected to their working-class roots and the town's historic hat-making industry. The club's traditional orange, white, and black colors are unique in English football. Kenilworth Road, with its famous entrance through terraced houses and intimate atmosphere, provides one of football's most authentic experiences. The 'Hatters' nickname reflects the town's industrial heritage. Luton have strong rivalries with nearby clubs including Watford, Wimbledon, and Stevenage. The club's community work through the Luton Town Community Trust is extensive, engaging with one of England's most diverse communities. Despite the town's challenges, Luton Town represents a source of pride and unity, demonstrated by their remarkable journey from non-league to Premier League in just nine years."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-gray-900 to-black">
      <header className="bg-gradient-to-r from-orange-800 to-gray-900 text-white border-b-4 border-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-orange-800">
                <span className="text-2xl font-bold text-orange-800">LTFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-orange-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-orange-800 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-orange-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Calendar className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-orange-200 text-xs mt-1">Kenilworth Road since 1905</p>
          </div>
          <div className="bg-orange-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-orange-200 text-xs mt-1">Smallest in Premier League</p>
          </div>
          <div className="bg-orange-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-orange-200 text-xs mt-1">Intimate atmosphere</p>
          </div>
          <div className="bg-orange-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-orange-200 text-xs mt-1">Bedfordshire • Historic town</p>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-orange-700 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-orange-400" />
            The Luton Town Story: From Non-League to Premier League
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Founding & Early Success (1885-1939)</h3>
              <p className="text-gray-100">{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Early League Success & FA Cup Final</h3>
              <p className="text-gray-100">{clubData.history.earlySuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">First Top Flight Era & Record Breakers</h3>
              <p className="text-gray-100">{clubData.history.topFlightYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Eighties Glory & League Cup Triumph</h3>
              <p className="text-gray-100">{clubData.history.eightiesGlory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Nineties Decline & Financial Struggles</h3>
              <p className="text-gray-100">{clubData.history.ninetiesDecline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Non-League Exile & Immediate Return</h3>
              <p className="text-gray-100">{clubData.history.nonLeagueExile}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Remarkable Comeback & Back-to-Back Promotions</h3>
              <p className="text-gray-100">{clubData.history.remarkableComeback}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Premier League Return After 31 Years</h3>
              <p className="text-gray-100">{clubData.history.premierLeagueReturn}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Community Identity & Hatters Heritage</h3>
              <p className="text-gray-100">{clubData.history.communityIdentity}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-orange-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-300">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-white">{clubData.recordSigning.player}</p>
              <p className="text-gray-300 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-gray-200 mt-2">Left-back • Premier League quality</p>
            </div>
          </div>

          <div className="bg-orange-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-300">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-gray-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-200 mt-2">Full-back • England U21 international</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-orange-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1958-59 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-300">{clubData.topScorer.goals}</p>
                <p className="text-gray-200">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-800 rounded-xl p-6 border-2 border-gray-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-200 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-300 text-sm">Defender • Club captain • 16-year service</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-300">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-200">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-orange-700 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-orange-400" />
            Honours & Historical Achievements
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Major Honours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {clubData.honours.slice(0, 9).map((honour, index) => (
                <div key={index} className="bg-orange-800 rounded-lg p-4 border-2 border-gray-600">
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
          </div>
          
          <div className="mb-8 bg-orange-800 rounded-lg p-4 border-2 border-gray-600">
            <h4 className="text-lg font-bold text-white mb-2">Bedfordshire Premier Cup</h4>
            <p className="text-gray-200 text-sm mb-2">Record 54 wins (1887-2019) - Complete dominance of county competition</p>
            <p className="text-gray-300 text-xs">One of English football's most successful records in county cup competitions</p>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-900 to-gray-900 rounded-lg border-2 border-orange-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">League Cup Winners 1988:</strong> Beat Arsenal 3-2 at Wembley • Brian Stein last-minute winner • David Pleat manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-orange-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Premier League Return 2023</strong>
            </div>
            <p className="text-white text-center">
              After 31-year absence • Championship play-off winners • Rob Edwards manager • Kenilworth Road in top flight
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-orange-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">FA Cup Finalists 1959:</strong> Lost 2-1 to Nottingham Forest • First Wembley final • Syd Owen manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Record 101 Points 2014:</strong> Conference Premier champions • Immediate Football League return • John Still manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-orange-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Hatters Identity</strong>
            </div>
            <p className="text-white text-center">
              Orange, white & black colors • Hat-making heritage • Kenilworth Road since 1905 • Plastic pitch era
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-orange-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Joe Payne Record 1936:</strong> 10 goals in one match vs Bristol Rovers • Football League record • Still stands today
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-900 to-black rounded-lg border-2 border-orange-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community & Resilience</strong>
            </div>
            <p className="text-white text-center">
              Luton Town Community Trust • Survived two administrations • Remarkable comeback story • Diverse community engagement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-900 to-gray-800 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">139 Years of Football:</strong> League Cup winners • Premier League return • Non-league to top flight in 9 years • Bedfordshire pride
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-orange-800 rounded-full text-xs font-bold">Founded 1885</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">League Cup 1988</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">Premier League</span>
              <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-bold">The Hatters</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-800 to-orange-800 rounded-lg border-2 border-yellow-500">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Football's Greatest Comeback</strong>
            </div>
            <p className="text-white text-center text-sm">
              • Non-league (2014) to Premier League (2023) in 9 years • Two administrations survived • Record 101-point Conference season
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}