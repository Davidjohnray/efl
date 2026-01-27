'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function MansfieldTownFC() {
  const clubData = {
    name: 'Mansfield Town FC',
    nickname: 'The Stags',
    founded: 1897,
    originalName: 'Mansfield Wesleyans',
    status: 'League Two Promotion Challengers',
    stadium: 'One Call Stadium',
    capacity: '9,186',
    location: 'Mansfield, Nottinghamshire',
    league: 'League Two',
    recordSigning: {
      player: 'Rhys Day',
      fee: '£175,000',
      year: 2004,
      from: 'Barnsley'
    },
    recordSale: {
      player: 'Liam Lawrence',
      fee: '£175,000',
      year: 2004,
      to: 'Sunderland'
    },
    topScorer: {
      name: 'Harry Johnson',
      goals: 204,
      seasonRecord: 44,
      years: '1923-1932'
    },
    mostAppearances: {
      name: 'Rod Arnold',
      apps: 466,
      years: '1971-1981'
    },
    honours: [
      { title: 'Third Division Champions', years: ['1976-77'] },
      { title: 'Fourth Division Champions', years: ['1974-75'] },
      { title: 'Conference Premier Champions', years: ['2012-13'] },
      { title: 'Midland League Champions', years: ['1923-24', '1928-29', '1930-31', '1931-32', '1934-35', '1935-36'] },
      { title: 'FA Trophy Winners', years: ['1987'] },
      { title: 'Football League Trophy Finalists', years: ['1984'] },
      { title: 'Central League Champions', years: ['1965-66', '1967-68', '1968-69'] },
      { title: 'Nottinghamshire Senior Cup Winners', years: ['1899', '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1920', '1922', '1923', '1924', '1925', '1926', '1928', '1930', '1931', '1933', '1934', '1936', '1937', '1938', '1939', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1955', '1956', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2022', '2023'] }
    ],
    history: {
      founding: "Mansfield Town Football Club was founded in 1897 as Mansfield Wesleyans by the Wesleyan Methodist Church. The club initially played in local leagues before joining the Midland League in 1919. In 1910, the club changed its name to Mansfield Town and adopted amber and blue as their colors, which were changed to the now-iconic amber and blue in 1910. The nickname 'The Stags' comes from the town's crest, which features a stag. Mansfield Town joined the Football League in 1931, replacing New Brighton in the Third Division North. The club initially played at Field Mill (now known as the One Call Stadium), which has been their home throughout their history, making it one of the world's oldest football grounds that has been continuously used by the same club.",
      
      earlyLeagueYears: "Mansfield Town's early Football League years saw them establish themselves as a solid Third Division North club. The 1936-37 season was particularly memorable as striker Harry Johnson scored 44 goals - a club record that still stands today. Johnson remains Mansfield's all-time top scorer with 204 goals. The club generally occupied mid-table positions in the Third Division North throughout the 1930s, with occasional cup successes including reaching the FA Cup fourth round in 1935. World War II interrupted the club's progress, but the post-war years saw Mansfield continue as a Third Division North club. The 1950s were challenging, with the club generally finishing in the lower half of the division, but they maintained their Football League status despite financial pressures that affected many smaller clubs during this period.",
      
      seventiesSuccess: "The 1970s marked Mansfield Town's most successful period under manager Peter Morris. The 1974-75 season saw Mansfield win the Fourth Division championship, securing promotion to the Third Division. This achievement was remarkable given the club's limited resources and small fanbase. The success continued as Mansfield immediately won the Third Division championship in 1976-77, securing back-to-back promotions and reaching the Second Division for the first time in their history. This team, featuring players like Rod Arnold (the club's record appearance maker), Kevin Kent, and Ian Wood, played attractive, attacking football. Mansfield's stay in the Second Division lasted only one season, but this period remains the club's highest league position and represents their greatest footballing achievement.",
      
      eightiesStruggles: "The 1980s proved challenging for Mansfield Town. Relegation from the Third Division in 1979 began a period of decline that saw the club fall back to the Fourth Division. Financial problems emerged, though there were occasional highlights. The 1983-84 season saw Mansfield reach the Football League Trophy final, losing to Bournemouth. The 1986-87 season brought success in the FA Trophy, with Mansfield defeating Bristol City 1-1 (5-4 on penalties) at Wembley to win the competition. This Wembley victory provided some consolation during a difficult period. The late 1980s saw Mansfield yo-yoing between the Third and Fourth Divisions, with the club's survival in the Football League becoming an annual concern for their loyal supporters.",
      
      ninetiesInstability: "The 1990s brought instability for Mansfield Town. The club faced financial difficulties and ownership changes, while on-field performances were inconsistent. The 1991-92 season saw Mansfield relegated to the Fourth Division, beginning a period of struggle at the bottom of the Football League. The mid-1990s brought brief hope under manager Andy King, with the club reaching the Third Division play-offs in 1994-95, losing to Chesterfield in the semi-finals. However, financial problems continued to plague the club, leading to administration in 1999. Despite these challenges, Mansfield maintained their Football League status throughout the decade, largely thanks to the loyalty of their supporters and the club's strong community roots in the Nottinghamshire mining town.",
      
      nonLeagueExile: "The 2007-08 season proved disastrous as Mansfield Town were relegated from the Football League for the first time in their history. Despite the efforts of manager Billy Dearden, the club finished bottom of League Two, consigning them to the Conference Premier. This marked the beginning of a five-year exile from the Football League. The non-league period was challenging financially and tested the loyalty of Mansfield's supporters. However, under manager Paul Cox, the club responded positively. The 2012-13 season saw Mansfield win the Conference Premier title with 95 points, securing an immediate return to the Football League. This achievement, built around players like Matt Green and Luke Jones, demonstrated the club's resilience and the importance of their community support.",
      
      leagueTwoConsolidation: "Since their return to the Football League in 2013, Mansfield Town have established themselves as a competitive League Two club. The 2017-18 season saw the club reach the League Two play-offs under manager Steve Evans, losing to Newport County in the semi-finals. The following season, under manager David Flitcroft, Mansfield finished 4th but lost to Newport County again in the play-off semi-finals. The 2021-22 season brought further play-off disappointment under manager Nigel Clough, with Mansfield losing to Port Vale in the final at Wembley. Despite these near misses, Mansfield Town have developed a reputation for playing attractive football and have maintained ambitions for promotion to League One, supported by one of League Two's larger budgets and a loyal fanbase.",
      
      recentProgress: "The 2023-24 season saw Mansfield Town under manager Nigel Clough mount a serious promotion challenge. The club played attractive, possession-based football and developed several young players while maintaining a strong home record at the One Call Stadium. Key players included striker Davis Keillor-Dunn, midfielder Louis Reed, and defender Aden Flint. Mansfield's community work and youth development continued to be strengths, with the club's academy producing talent for the first team. Throughout this period, Mansfield Town have maintained their commitment to their local community while pursuing their ambition of returning to League One for the first time since 2003. The club's stability under owner John Radford has provided a solid foundation for continued progress.",
      
      communityIdentity: "Mansfield Town's identity is deeply connected to their Nottinghamshire mining roots and community focus. The club's traditional amber and blue colors have been worn since 1910. The One Call Stadium (traditionally Field Mill) provides one of English football's most atmospheric lower-league grounds, with its famous Quarry Lane End. The 'Stags' nickname reflects the town's crest and local heritage. Mansfield have strong rivalries with local clubs including Chesterfield, Notts County, and Derby County (despite the size difference). The club's community work through the Mansfield Town Community Trust is extensive, engaging with thousands of local residents annually. Despite being a relatively small town club, Mansfield Town represents a source of pride for the Nottinghamshire mining community and maintains a loyal, passionate fanbase."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-blue-900 to-gray-900">
      <header className="bg-gradient-to-r from-amber-800 to-blue-900 text-white border-b-4 border-amber-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-amber-800">
                <span className="text-2xl font-bold text-amber-800">MTFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-amber-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-amber-800 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-amber-800 rounded-lg p-6 border-2 border-blue-200 shadow-lg">
            <Calendar className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-amber-200 text-xs mt-1">As Mansfield Wesleyans</p>
          </div>
          <div className="bg-amber-800 rounded-lg p-6 border-2 border-blue-200 shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-amber-200 text-xs mt-1">Field Mill since 1861</p>
          </div>
          <div className="bg-amber-800 rounded-lg p-6 border-2 border-blue-200 shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-amber-200 text-xs mt-1">Historic Quarry Lane End</p>
          </div>
          <div className="bg-amber-800 rounded-lg p-6 border-2 border-blue-200 shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-gray-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-amber-200 text-xs mt-1">Nottinghamshire • Mining town</p>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-amber-700 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-amber-400" />
            The Mansfield Town Story: The Stags' Nottinghamshire Pride
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Founding & Early Years (1897-1930)</h3>
              <p className="text-gray-100">{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Early League Years & Record Breakers</h3>
              <p className="text-gray-100">{clubData.history.earlyLeagueYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Seventies Success & Back-to-Back Promotions</h3>
              <p className="text-gray-100">{clubData.history.seventiesSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Eighties Struggles & FA Trophy Glory</h3>
              <p className="text-gray-100">{clubData.history.eightiesStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Nineties Instability & Financial Challenges</h3>
              <p className="text-gray-100">{clubData.history.ninetiesInstability}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Non-League Exile & Immediate Return</h3>
              <p className="text-gray-100">{clubData.history.nonLeagueExile}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">League Two Consolidation & Play-off Challenges</h3>
              <p className="text-gray-100">{clubData.history.leagueTwoConsolidation}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Recent Progress & Promotion Ambitions</h3>
              <p className="text-gray-100">{clubData.history.recentProgress}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Community Identity & Nottinghamshire Roots</h3>
              <p className="text-gray-100">{clubData.history.communityIdentity}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-800 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-300">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-white">{clubData.recordSigning.player}</p>
              <p className="text-gray-300 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-gray-200 mt-2">Defender • Wales U21 international</p>
            </div>
          </div>

          <div className="bg-amber-800 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-300">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-gray-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-200 mt-2">Midfielder • Later played for Stoke City</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-800 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1936-37 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-300">{clubData.topScorer.goals}</p>
                <p className="text-gray-200">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-800 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-200 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-300 text-sm">Goalkeeper • Club captain • 10-year service</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-300">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-200">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-800 rounded-xl p-8 border-2 border-amber-700 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-amber-400" />
            Honours & Historical Achievements
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Major Honours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Third Division Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[0].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Fourth Division Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[1].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Conference Premier Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[2].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">FA Trophy Winners</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[4].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Football League Trophy Finalists</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[5].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
                <h4 className="text-lg font-bold text-white mb-2">Midland League Champions</h4>
                <p className="text-gray-200 text-sm mb-2">6 titles: 1924, 1929, 1931, 1932, 1935, 1936</p>
                <p className="text-gray-300 text-xs">Dominance before Football League entry</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 bg-amber-800 rounded-lg p-4 border-2 border-gray-600">
            <h4 className="text-lg font-bold text-white mb-2">Nottinghamshire Senior Cup</h4>
            <p className="text-gray-200 text-sm mb-2">Record 105 wins (1899-2023) - Complete dominance of county competition</p>
            <p className="text-gray-300 text-xs">One of English football's most successful records in county cup competitions</p>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-900 to-gray-900 rounded-lg border-2 border-amber-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">Back-to-Back Promotions 1970s:</strong> Fourth Division champions 1975 • Third Division champions 1977 • Reached Second Division
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-amber-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">FA Trophy Winners 1987</strong>
            </div>
            <p className="text-white text-center">
              Won at Wembley • Beat Bristol City on penalties • Keith Cassells scored • Only major Wembley final
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-amber-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Conference Champions 2013:</strong> Immediate return to Football League • 95 points • Paul Cox manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-amber-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Harry Johnson Record 1937:</strong> 44 goals in one season • Club record still stands • 204 career goals for Mansfield
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-amber-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Stags Identity</strong>
            </div>
            <p className="text-white text-center">
              Amber & blue colors • Stag symbol • One Call Stadium (Field Mill) • Nottinghamshire mining heritage
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-amber-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">One Call Stadium:</strong> Field Mill since 1861 • World's oldest ground continuously used by same club • Historic venue
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-900 to-black rounded-lg border-2 border-amber-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community & Tradition</strong>
            </div>
            <p className="text-white text-center">
              Mansfield Town Community Trust • Historic ground • Strong local rivalries • Nottinghamshire community pride
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-900 to-gray-800 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">127 Years of Football:</strong> Historic Field Mill ground • Back-to-back promotions • FA Trophy winners • Nottinghamshire's football pride
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-amber-800 rounded-full text-xs font-bold">Founded 1897</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">FA Trophy 1987</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">Back-to-Back 1977</span>
              <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-bold">The Stags</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-800 to-amber-800 rounded-lg border-2 border-yellow-500">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Historic Ground</strong>
            </div>
            <p className="text-white text-center text-sm">
              • One Call Stadium (Field Mill) operational since 1861 • World's oldest ground continuously used by same club • Historic Quarry Lane End
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}