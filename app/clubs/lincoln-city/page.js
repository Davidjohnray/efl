'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function LincolnCityFC() {
  const clubData = {
    name: 'Lincoln City FC',
    nickname: 'The Imps',
    founded: 1884,
    originalName: 'Lincoln City Football Club',
    status: 'League One Play-off Contenders',
    stadium: 'LNER Stadium',
    capacity: '10,780',
    location: 'Lincoln, Lincolnshire',
    league: 'League One',
    recordSigning: {
      player: 'Perry Digweed',
      fee: '£150,000',
      year: 1986,
      from: 'Brighton & Hove Albion'
    },
    recordSale: {
      player: 'Jack Hobbs',
      fee: '£400,000',
      year: 2009,
      to: 'Leicester City'
    },
    topScorer: {
      name: 'Andy Graver',
      goals: 149,
      seasonRecord: 36,
      years: '1950-1955, 1957-1958'
    },
    mostAppearances: {
      name: 'Grant Brown',
      apps: 469,
      years: '1990-2000, 2001-2002'
    },
    honours: [
      { title: 'Third Division North Champions', years: ['1931-32', '1947-48'] },
      { title: 'Fourth Division Champions', years: ['1975-76'] },
      { title: 'Conference National Champions', years: ['1987-88'] },
      { title: 'League Two Champions', years: ['2018-19'] },
      { title: 'EFL Trophy Winners', years: ['2018'] },
      { title: 'EFL Trophy Finalists', years: ['1983', '2003', '2005', '2006'] },
      { title: 'FA Cup Quarter-finalists', years: ['2017'] },
      { title: 'Lincolnshire Senior Cup Winners', years: ['1887', '1888', '1891', '1892', '1893', '1894', '1895', '1896', '1897', '1898', '1899', '1900', '1901', '1903', '1904', '1905', '1907', '1909', '1910', '1912', '1913', '1914', '1920', '1921', '1923', '1924', '1927', '1928', '1930', '1932', '1934', '1935', '1937', '1947', '1948', '1949', '1951', '1952', '1953', '1954', '1956', '1958', '1960', '1961', '1962', '1963', '1967', '1973', '1975', '1976', '1977', '1978', '1979', '1980', '1982', '1983', '1984', '1985', '1987', '1988', '1991', '1994', '1995', '1996', '1998', '1999', '2000', '2001', '2004', '2007', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2022'] },
      { title: 'League Two Manager of the Season', years: ['2016-17 (Danny Cowley)', '2018-19 (Danny Cowley)'] }
    ],
    history: {
      founding: "Lincoln City Football Club was founded in 1884, making them one of the oldest professional football clubs in England. The club was formed following a public meeting at the Drill Hall in Lincoln and initially played at the John O'Gaunts ground. The nickname 'The Imps' comes from the legend of the Lincoln Imp, a grotesque statue in Lincoln Cathedral that is a symbol of the city. Lincoln City joined the Football League in 1892 as founding members of the Second Division, beginning their long association with the lower divisions of English football. The club moved to their current Sincil Bank ground (now known as the LNER Stadium) in 1895, where they have played ever since, making it one of England's oldest continuously used football grounds.",
      
      earlySuccess: "Lincoln City's early Football League years saw them establish themselves as a solid Second Division club. The club's first major success came in the 1931-32 season when they won the Third Division North championship under manager Harry Parkes. This team, featuring prolific striker Allan Hall, secured promotion to the Second Division. Further success followed in 1947-48 with another Third Division North title under manager Bill Anderson. The 1950s brought the emergence of legendary striker Andy Graver, who remains the club's all-time top scorer with 149 goals. Graver's goalscoring exploits, including 36 goals in the 1951-52 season, made him a local hero. Despite these successes, Lincoln City generally occupied mid-table positions in the Second Division during this period.",
      
      seventiesResurgence: "The 1970s marked a resurgence for Lincoln City under manager Graham Taylor. Appointed in 1972 at just 28 years old, Taylor implemented modern coaching methods and transformed the club's fortunes. In the 1975-76 season, Lincoln City won the Fourth Division championship with a record 74 points (under the old two-points-for-a-win system), securing promotion to the Third Division. This achievement was remarkable given the club's limited resources. Taylor's team played attractive, attacking football and developed several players who would later play at higher levels. Taylor's success at Lincoln City launched his managerial career, which would later include taking Watford to the First Division and the FA Cup final, and managing the England national team.",
      
      eightiesStruggles: "The 1980s proved challenging for Lincoln City. Relegation from the Third Division in 1979 began a period of decline that saw the club fall to the Fourth Division. The 1985-86 season brought particular difficulties as Lincoln City narrowly avoided relegation from the Football League. However, the club responded positively under manager Colin Murphy, winning the Conference National title in 1987-88 to secure an immediate return to the Football League. This period also saw success in cup competitions, with Lincoln City reaching the Football League Trophy final in 1983 (losing to Bournemouth) and developing a reputation as cup fighters. Despite limited resources, the club maintained a loyal fanbase throughout these challenging years.",
      
      cowleyRevolution: "The 2010s marked Lincoln City's most successful modern period under brothers Danny and Nicky Cowley. Appointed in 2016, the Cowleys transformed the club both on and off the pitch. The 2016-17 season produced one of the greatest FA Cup stories in modern times as Lincoln City, then a National League club, became the first non-league team in 103 years to reach the quarter-finals. They defeated Championship sides Ipswich Town and Brighton & Hove Albion before losing to Arsenal at the Emirates Stadium. That same season, Lincoln City won the National League title with a record 99 points, securing promotion to the Football League. They also won the EFL Trophy, defeating Shrewsbury Town 1-0 at Wembley - the first non-league club to win the competition.",
      
      leagueOneAdventure: "The Cowleys continued their success in the Football League. In the 2017-18 season, Lincoln City reached the League Two play-offs in their first season back in the EFL. The following season, 2018-19, they won the League Two championship with 85 points, securing back-to-back promotions and a return to League One after a 20-year absence. This achievement was built on a solid defence, effective set-pieces, and strong team spirit. Key players included goalkeeper Josh Vickers, defender Jason Shackell, and striker John Akinde. The Cowleys' success transformed Lincoln City from a struggling National League club to an established League One side in just three seasons, creating a remarkable footballing story.",
      
      recentProgress: "Since the Cowleys' departure in 2019, Lincoln City have established themselves as a competitive League One club. Under manager Michael Appleton, the club reached the League One play-off final in 2021, losing to Blackpool at Wembley. This achievement was particularly impressive given Lincoln City operated with one of the smallest budgets in the division. Appleton's team played attractive, possession-based football and developed several young players who were later sold for significant fees. The 2022-23 season saw Mark Kennedy take charge, with the club consolidating their League One status. Throughout this period, Lincoln City have maintained their commitment to developing young talent while playing progressive football that has won them many admirers.",
      
      communityIdentity: "Lincoln City's identity is deeply connected to their Lincolnshire roots and the legend of the Lincoln Imp. The club's traditional red and white striped kit has been worn since the 1950s, though variations have occurred. The LNER Stadium (traditionally Sincil Bank) provides one of English football's most atmospheric lower-league grounds, with its famous Stacey West Stand named in memory of two supporters who died in the Bradford City fire. Lincoln City have strong rivalries with local clubs including Boston United, Grimsby Town, and Scunthorpe United. The club's community work through the Lincoln City Foundation is extensive, engaging with thousands of local residents annually. Despite being a relatively small city club, Lincoln City's recent successes and historic FA Cup run have established them as one of English football's most admired lower-league clubs."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900">
      <header className="bg-gradient-to-r from-red-800 to-gray-900 text-white border-b-4 border-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-red-800">
                <span className="text-2xl font-bold text-red-800">LCFC</span>
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
            <p className="text-red-200 text-xs mt-1">Joined Football League 1892</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-red-200 text-xs mt-1">Sincil Bank since 1895</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-red-200 text-xs mt-1">Historic Stacey West Stand</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-gray-200 shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-red-200 text-xs mt-1">Lincolnshire • Cathedral city</p>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-red-700 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-400" />
            The Lincoln City Story: The Imps' Remarkable Journey
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Founding & Early Years (1884-1930)</h3>
              <p className="text-gray-100">{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Early Success & Third Division North Titles</h3>
              <p className="text-gray-100">{clubData.history.earlySuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Seventies Resurgence & Graham Taylor Era</h3>
              <p className="text-gray-100">{clubData.history.seventiesResurgence}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Eighties Struggles & Conference Success</h3>
              <p className="text-gray-100">{clubData.history.eightiesStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">The Cowley Revolution & Historic FA Cup Run</h3>
              <p className="text-gray-100">{clubData.history.cowleyRevolution}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">League One Adventure & Back-to-Back Promotions</h3>
              <p className="text-gray-100">{clubData.history.leagueOneAdventure}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Recent Progress & Play-off Final</h3>
              <p className="text-gray-100">{clubData.history.recentProgress}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Community Identity & Lincolnshire Pride</h3>
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
              <p className="text-xs text-gray-200 mt-2">Goalkeeper • Former England U21 international</p>
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
              <p className="text-xs text-gray-200 mt-2">Defender • Later played for Nottingham Forest</p>
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
                <p className="text-gray-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1951-52 season</p>
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
                <p className="text-gray-300 text-sm">Defender • Club captain • Two spells at club</p>
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
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Major Honours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">League Two Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[3].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">EFL Trophy Winners</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[4].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">FA Cup Quarter-finalists</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[6].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Conference National Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[2].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Third Division North Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[0].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-red-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Fourth Division Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[1].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8 bg-red-800 rounded-lg p-4 border-2 border-gray-600">
            <h4 className="text-lg font-bold text-white mb-2">Lincolnshire Senior Cup</h4>
            <p className="text-gray-200 text-sm mb-2">Record 84 wins (1887-2022) - Complete dominance of local competition</p>
            <p className="text-gray-300 text-xs">One of English football's most successful records in county cup competitions</p>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900 to-gray-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">Historic FA Cup Run 2017:</strong> First non-league quarter-finalists in 103 years • Beat Brighton & Ipswich • Lost to Arsenal
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Cowley Revolution</strong>
            </div>
            <p className="text-white text-center">
              Danny & Nicky Cowley • National League to League One in 3 years • Historic cup runs • Transformation of club
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-red-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">League Two Champions 2019:</strong> Back-to-back promotions • 85 points • Established in League One
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-red-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">EFL Trophy Winners 2018:</strong> First non-league winners • Beat Shrewsbury 1-0 • Nathan Arnold winner
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-red-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Imps Identity</strong>
            </div>
            <p className="text-white text-center">
              Red & white stripes • Lincoln Imp symbol • Sincil Bank since 1895 • Lincolnshire's football pride
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-red-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Graham Taylor Legacy:</strong> Started managerial career at Lincoln • Fourth Division champions 1976 • Went on to manage England
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community & Development</strong>
            </div>
            <p className="text-white text-center">
              Lincoln City Foundation • Stacey West Stand memorial • Youth development • Progressive football philosophy
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-gray-800 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">140 Years of Football:</strong> Historic FA Cup run • Cowley revolution • League One established • Lincolnshire's premier club
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-red-800 rounded-full text-xs font-bold">Founded 1884</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">FA Cup 2017</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">League Two 2019</span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">The Imps</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}