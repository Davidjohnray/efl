'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function HuddersfieldTownFC() {
  const clubData = {
    name: 'Huddersfield Town FC',
    nickname: 'The Terriers',
    founded: 1908,
    originalName: 'Huddersfield Town Association Football Club',
    status: 'First English Club to Win Three Consecutive League Titles',
    stadium: 'John Smith\'s Stadium',
    capacity: '24,121',
    location: 'Huddersfield, West Yorkshire',
    league: 'Championship',
    recordSigning: {
      player: 'Steve Mounié',
      fee: '£11,500,000',
      year: 2017,
      from: 'Montpellier'
    },
    recordSale: {
      player: 'Aaron Mooy',
      fee: '£8,000,000',
      year: 2019,
      to: 'Brighton & Hove Albion'
    },
    topScorer: {
      name: 'George Brown',
      goals: 159,
      seasonRecord: 32,
      years: '1920-1929'
    },
    mostAppearances: {
      name: 'Jimmy Glazzard',
      apps: 441,
      years: '1946-1956'
    },
    honours: [
      { title: 'First Division Champions', years: ['1923-24', '1924-25', '1925-26'] },
      { title: 'FA Cup Winners', years: ['1922'] },
      { title: 'FA Cup Runners-up', years: ['1920', '1928', '1930', '1938'] },
      { title: 'FA Charity Shield Winners', years: ['1922'] },
      { title: 'Second Division Champions', years: ['1969-70', '1979-80'] },
      { title: 'Third Division Champions', years: ['1974-75', '1982-83'] },
      { title: 'Third Division Play-off Winners', years: ['1994-95', '2003-04'] },
      { title: 'Championship Play-off Winners', years: ['2016-17'] },
      { title: 'Yorkshire Cup Winners', years: ['1919-20', '1926-27'] },
      { title: 'War Cup Winners', years: ['1945'] }
    ],
    history: {
      founding: "Huddersfield Town Football Club was founded in 1908, established by local sports enthusiasts who wanted to create a professional football team for the town. The club initially played at Leeds Road, which would remain their home for 86 years. Huddersfield Town were elected to the Football League in 1910, joining the Second Division. The club's early colors were red and white, but they changed to their now-iconic blue and white stripes in 1913. The nickname 'The Terriers' was adopted in 1969, inspired by the tenacious nature of the dog breed and reflecting the club's fighting spirit. Despite being a relatively young club compared to many of their rivals, Huddersfield Town would soon establish themselves as one of English football's greatest forces.",
      
      goldenAge: "The 1920s marked Huddersfield Town's golden age, establishing them as one of England's most successful clubs. Under legendary manager Herbert Chapman, Town won their first major trophy - the FA Cup in 1922, defeating Preston North End 1-0 at Stamford Bridge. Chapman's tactical innovations revolutionized English football and laid the foundation for unprecedented success. In 1923-24, Huddersfield Town won their first First Division championship. This began a historic three-in-a-row of league titles (1924-25, 1925-26), making them the first English club to achieve this remarkable feat. Chapman left for Arsenal in 1925, but his successor Cecil Potter maintained the success, with Town finishing as runners-up in 1926-27 and 1927-28. This period established Huddersfield as a footballing powerhouse and Yorkshire's leading club.",
      
      chapmanRevolution: "Herbert Chapman's influence on Huddersfield Town and English football cannot be overstated. Appointed manager in 1921, Chapman introduced revolutionary tactics including the WM formation, which would dominate English football for decades. He pioneered professional approaches to training, tactics, and player development. Under Chapman, Huddersfield Town developed a reputation for attractive, attacking football combined with defensive solidity. His departure for Arsenal in 1925 was a major blow, but his legacy continued as Town won their third consecutive title under his former assistant. Chapman's success at Huddersfield laid the groundwork for his even greater achievements at Arsenal, where he would win multiple championships and establish another dynasty. Huddersfield Town's golden age remains the foundation of their proud history.",
      
      postwarDecline: "Following World War II, Huddersfield Town entered a period of gradual decline. Relegation from the First Division in 1952 began a downward trend that saw the club fluctuate between divisions. The 1960s brought financial difficulties and several relegations, with Town falling to the Third Division by 1973. However, there were moments of resurgence: promotion back to the Second Division in 1969-70 under manager Ian Greaves, and a memorable FA Cup run in 1972 that saw them reach the semi-finals. The 1974-75 season brought Third Division championship success under manager Bobby Collins, but consistency proved elusive. The 1980s saw further yo-yoing between divisions, with another Third Division title in 1982-83 under manager Mick Buxton offering temporary relief from the club's struggles.",
      
      modernStruggles: "The 1990s and early 2000s were challenging for Huddersfield Town. Relegation to the Fourth Division in 1992 marked the club's lowest point. However, the mid-1990s brought hope: promotion via the play-offs in 1994-95 under manager Neil Warnock, and a move from Leeds Road to the new Alfred McAlpine Stadium (now John Smith's Stadium) in 1994. The stadium move, while necessary for modern football, severed a historic link with the club's past. Financial problems escalated in the early 2000s, with the club entering administration in 2003. Relegation to the Fourth Division (now League Two) followed in 2003, but immediate promotion via the play-offs under manager Peter Jackson provided some consolation. This period tested the loyalty of Town's supporters but strengthened their connection to the club.",
      
      championshipResurgence: "The 2010s marked Huddersfield Town's resurgence. Under chairman Dean Hoyle's ownership, the club stabilized financially and began building for the future. Manager Lee Clark assembled an attractive team that reached the League One play-off final in 2012, losing to Sheffield United. His successor Simon Grayson achieved promotion to the Championship in 2012 via the play-offs. The 2016-17 season brought historic success under German manager David Wagner. Playing an energetic, pressing style dubbed 'gegenpressing', Town reached the Championship play-offs against expectations. They defeated Sheffield Wednesday on penalties in the semi-final, then beat Reading 4-3 on penalties in the final at Wembley after a 0-0 draw. This secured promotion to the Premier League for the first time in the club's history.",
      
      premierLeagueAdventure: "The 2017-18 Premier League season was a fairytale for Huddersfield Town. Against all predictions of immediate relegation, David Wagner's team achieved survival with memorable victories including a 2-1 win over Manchester United at the John Smith's Stadium. Town's aggressive pressing style and team spirit won them many admirers. Key players included Australian midfielder Aaron Mooy, German striker Steve Mounié, and goalkeeper Jonas Lössl. The 2018-19 season proved more challenging, and despite changing managers (with Jan Siewert replacing Wagner), Town were relegated after two seasons in the top flight. However, their Premier League adventure had restored the club's national profile and generated significant revenue that would support future development.",
      
      recentHistory: "Since their 2019 relegation, Huddersfield Town have established themselves as a competitive Championship club. The 2021-22 season brought remarkable success under manager Carlos Corberán, with Town reaching the Championship play-off final against Nottingham Forest. Despite a 1-0 defeat at Wembley, the season represented significant progress. Financial challenges emerged in 2023 with relegation worries, but manager Neil Warnock returned for a second spell and achieved a 'great escape' to keep Town in the Championship. The 2023-24 season saw further consolidation under new ownership and manager André Breitenreiter. Throughout this period, Huddersfield Town have maintained their commitment to developing young talent while honoring their historic past as three-time English champions.",
      
      communityIdentity: "Huddersfield Town's identity is deeply connected to their historic achievements and Yorkshire roots. The club's blue and white stripes are instantly recognizable and have been worn since 1913. The 'Terriers' nickname reflects the club's tenacious spirit, particularly apt given their status as a relatively small town club that achieved historic success. The John Smith's Stadium, shared with rugby league's Huddersfield Giants, provides modern facilities while maintaining an intimate atmosphere. Town have strong rivalries with local clubs including Leeds United, Bradford City, and Sheffield Wednesday. The club's community work through the Huddersfield Town Foundation is extensive, engaging with thousands of local residents annually. Despite being a town of modest size, Huddersfield's footballing heritage as three-time champions remains a source of immense local pride."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-white to-blue-800">
      <header className="bg-gradient-to-r from-blue-800 to-white text-blue-800 border-b-4 border-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-800">
                <span className="text-2xl font-bold text-blue-800">HTAFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-blue-800">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-blue-600 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-blue-600 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Calendar className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-blue-300 text-xs mt-1">Leeds Road 1910-1994</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-blue-300 text-xs mt-1">Opened 1994 • Modern arena</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-blue-300 text-xs mt-1">All-seater stadium</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-blue-300 text-xs mt-1">West Yorkshire • Historic mill town</p>
          </div>
        </div>

        <section className="bg-blue-800 rounded-xl p-8 border-2 border-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-white" />
            The Huddersfield Town Story: Three-in-a-Row Champions
          </h2>
          <div className="space-y-6 text-blue-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Founding & Early Years (1908-1921)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Golden Age & Historic Treble (1922-1926)</h3>
              <p>{clubData.history.goldenAge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Chapman Revolution & Tactical Legacy</h3>
              <p>{clubData.history.chapmanRevolution}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Postwar Decline & Division Fluctuations</h3>
              <p>{clubData.history.postwarDecline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Struggles & Stadium Move</h3>
              <p>{clubData.history.modernStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Championship Resurgence & Wagner Era</h3>
              <p>{clubData.history.championshipResurgence}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Premier League Adventure & Top-Flight Return</h3>
              <p>{clubData.history.premierLeagueAdventure}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Recent History & Championship Stability</h3>
              <p>{clubData.history.recentHistory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Community Identity & Yorkshire Pride</h3>
              <p>{clubData.history.communityIdentity}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-white">{clubData.recordSigning.player}</p>
              <p className="text-blue-300 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-blue-200 mt-2">Beninese international • Premier League striker</p>
            </div>
          </div>

          <div className="bg-blue-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-yellow-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-blue-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-blue-200 mt-2">Australian international • Midfield maestro</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-blue-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-blue-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1925-26 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-blue-200">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-blue-200 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-blue-300 text-sm">Striker • Postwar hero • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-blue-200">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-blue-800 rounded-xl p-8 border-2 border-white shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-white" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-2 border-blue-600">
                <h3 className="text-lg font-bold text-blue-800 mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-900 to-yellow-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">Historic Three-in-a-Row 1924-1926:</strong> First English club to achieve this • Herbert Chapman manager • Football revolution
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-blue-900 rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">FA Cup Winners 1922</strong>
            </div>
            <p className="text-white text-center">
              First major trophy • Beat Preston 1-0 • Chapman's first success • Foundation for golden era
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Premier League Adventure 2017-2019:</strong> Promotion via play-offs • David Wagner's gegenpressing • Two seasons in top flight
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Herbert Chapman Legacy:</strong> Tactical innovator • WM formation pioneer • Arsenal success followed • English football visionary
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-lg border-2 border-gray-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Terriers Identity</strong>
            </div>
            <p className="text-white text-center">
              Blue & white stripes since 1913 • 'Terriers' nickname from 1969 • Yorkshire pride • Fighting spirit
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-blue-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">John Smith's Stadium 1994:</strong> Replaced Leeds Road • Shared with Giants • Modern facilities • 30-year home
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-black rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community & Heritage</strong>
            </div>
            <p className="text-white text-center">
              Huddersfield Town Foundation • Historic three-peat legacy • Yorkshire community • Football innovators
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-800 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">Football History Makers:</strong> Three consecutive titles • FA Cup winners • Premier League adventure • Yorkshire's first great club
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-blue-800 rounded-full text-xs font-bold">Three-in-a-Row</span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">FA Cup 1922</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">Premier League</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">The Terriers</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-800 to-blue-800 rounded-lg border-2 border-yellow-500">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Football Firsts</strong>
            </div>
            <p className="text-white text-center text-sm">
              • First club to win three consecutive league titles • Herbert Chapman's tactical revolution • First £10,000 transfer (David Jack to Arsenal)
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}