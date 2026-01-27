'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function CardiffCityFC() {
  const clubData = {
    name: 'Cardiff City FC',
    nickname: 'The Bluebirds',
    founded: 1899,
    originalName: 'Riverside Football Club',
    status: 'FA Cup Winners 1927',
    stadium: 'Cardiff City Stadium',
    capacity: '33,280',
    location: 'Cardiff, Wales',
    league: 'Championship',
    recordSigning: {
      player: 'Gary Medel',
      fee: '£11,000,000',
      year: 2013,
      from: 'Sevilla'
    },
    recordSale: {
      player: 'Aaron Ramsey',
      fee: '£4,800,000',
      year: 2008,
      to: 'Arsenal'
    },
    topScorer: {
      name: 'Len Davies',
      goals: 179,
      seasonRecord: 31,
      years: '1920-1931'
    },
    mostAppearances: {
      name: 'Phil Dwyer',
      apps: 575,
      years: '1972-1985'
    },
    honours: [
      { title: 'FA Cup Winners', years: ['1927'] },
      { title: 'FA Cup Runners-up', years: ['1925', '2008'] },
      { title: 'Community Shield Winners', years: ['1927'] },
      { title: 'Second Division Champions', years: ['1920-21', '1946-47', '1951-52', '1959-60', '2012-13'] },
      { title: 'Third Division Champions', years: ['1946-47 (South)', '1975-76', '1992-93'] },
      { title: 'Championship Runners-up', years: ['2017-18'] },
      { title: 'League Cup Runners-up', years: ['2012'] },
      { title: 'Welsh Cup Winners', years: ['1912', '1920', '1922', '1923', '1927', '1928', '1930', '1956', '1959', '1964', '1965', '1967', '1968', '1969', '1970', '1971', '1973', '1974', '1976', '1988', '1992', '1993'] },
      { title: 'European Cup Winners\' Cup Semi-finalists', years: ['1968'] }
    ],
    history: {
      founding: "Cardiff City Football Club was founded in 1899 as Riverside Football Club by members of the Riverside Cricket Club. The club initially played in the South Wales Amateur League before turning professional in 1910. In 1908, the club changed its name to Cardiff City and joined the Southern Football League Second Division. The club's early colors were chocolate and amber, but they switched to their iconic blue in 1908, earning the nickname 'The Bluebirds'. Cardiff City moved to Ninian Park in 1910, which would remain their home for 99 years. The club's rise was rapid, and they were elected to the Football League Second Division in 1920, becoming the only Welsh club to play in the Football League at that time.",
      
      goldenAge: "The 1920s marked Cardiff City's golden age. Under manager Fred Stewart, the club achieved remarkable success. They won promotion to the First Division in their first season (1920-21) and established themselves as a top-flight force. The pinnacle came in 1927 when Cardiff City became the only non-English club to win the FA Cup. They defeated Arsenal 1-0 at Wembley, with Hughie Ferguson scoring the historic goal. This made them the first team to take the FA Cup out of England. The following season, they won the FA Charity Shield by defeating Corinthians. Cardiff City also finished as First Division runners-up in 1923-24, their highest-ever league finish. During this period, the club developed fierce rivalries with nearby clubs and became a symbol of Welsh pride in English football.",
      
      postwarDecline: "Following World War II, Cardiff City experienced a period of decline. Relegation from the First Division in 1929 began a downward trend that saw the club fluctuate between divisions. Despite this, Cardiff City remained competitive in cup competitions, winning multiple Welsh Cups throughout the 1950s and 1960s. The 1958-59 season saw the club reach the European Cup Winners' Cup quarter-finals, and in 1968 they reached the semi-finals of the same competition, losing to Hamburg. The 1970s brought financial difficulties and relegation to the Third Division, though the club won promotion back to the Second Division in 1975-76 under manager Jimmy Andrews. This period also saw the emergence of local hero Phil Dwyer, who would become the club's record appearance maker.",
      
      modernStruggles: "The 1980s and 1990s were challenging for Cardiff City. Financial problems plagued the club, leading to administration in 1986. Relegation to the Fourth Division in 1985 marked the club's lowest point. However, there were moments of hope: the club won the Welsh Cup in 1988 and 1992-93, and promotion from the Third Division in 1992-93 under manager Eddie May. The 1996-97 season saw Cardiff City reach the Third Division play-off final but lose to Northampton Town. The late 1990s brought further instability with multiple changes in ownership and management. Despite these struggles, Cardiff City maintained a passionate fanbase and their rivalry with Swansea City remained one of British football's most intense derbies.",
      
      millenniumStadiumEra: "The early 2000s marked a new beginning for Cardiff City. Under owner Sam Hammam, the club moved from Ninian Park to the new Cardiff City Stadium in 2009. The 2002-03 season saw promotion to the Second Division (now Championship) under manager Lennie Lawrence. The 2007-08 season was particularly memorable as Cardiff City reached the FA Cup final for the first time since 1927, losing 1-0 to Portsmouth. The club also reached the 2012 League Cup final, losing to Liverpool on penalties. Financial issues continued, with the club facing a winding-up order in 2010 over unpaid taxes. Malaysian businessman Vincent Tan purchased the club in 2010, bringing much-needed investment but also controversy over his decision to change the club's colors from blue to red.",
      
      premierLeagueDream: "The 2012-13 season saw Cardiff City win the Championship title under manager Malky Mackay, securing promotion to the Premier League for the first time. This achievement came amid controversy over the club's rebranding to red colors and a new dragon crest. The 2013-14 Premier League season began promisingly with a 3-2 victory over Manchester City, but the club was relegated after one season. Manager Ole Gunnar Solskjær couldn't prevent the drop. The club returned to blue colors in 2015 after fan pressure. In 2017-18, under manager Neil Warnock, Cardiff City finished second in the Championship, earning promotion back to the Premier League. The 2018-19 season saw another relegation, but not before a memorable 2-0 victory over Manchester United at Old Trafford.",
      
      recentHistory: "Since their 2019 relegation, Cardiff City have established themselves as a competitive Championship club. The 2019-20 season saw the club reach the play-off semi-finals under Neil Harris. In 2021, Mick McCarthy led the club to an 8th-place finish. Recent seasons have seen managerial changes with Steve Morison, Mark Hudson, and Sabri Lamouchi taking charge. The club continues to develop young Welsh talent while maintaining ambitions for Premier League return. The 2023-24 season saw Erol Bulut appointed manager, with the club finishing mid-table while showing promising signs of progress. Cardiff City's academy continues to produce talent, with recent graduates including Rubin Colwill and Isaak Davies making first-team impacts.",
      
      identityAndCommunity: "Cardiff City's identity is deeply tied to Welsh nationalism and pride. The club's traditional blue colors and bluebird crest symbolize their nickname and heritage. The rivalry with Swansea City (the South Wales Derby) is one of British football's most passionate, dating back to 1912. Cardiff City supporters are known for their vocal support, particularly with the anthem 'Men of Harlech'. The club has strong connections to the Welsh national team, having produced numerous Welsh internationals throughout its history. The Cardiff City Stadium, shared with the Wales national rugby team, provides modern facilities and an atmospheric home. The Cardiff City Community Foundation engages extensively with local communities, running programs focused on health, education, and inclusion throughout South Wales."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-white to-blue-800">
      <header className="bg-gradient-to-r from-blue-800 to-white text-blue-800 border-b-4 border-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-800">
                <span className="text-2xl font-bold text-blue-800">CCFC</span>
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
            <p className="text-blue-300 text-xs mt-1">As Riverside AFC</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-blue-300 text-xs mt-1">Opened 2009 • Modern arena</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-blue-300 text-xs mt-1">Largest in Wales</p>
          </div>
          <div className="bg-blue-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-blue-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-blue-300 text-xs mt-1">Capital of Wales • Historic city</p>
          </div>
        </div>

        <section className="bg-blue-800 rounded-xl p-8 border-2 border-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-white" />
            The Cardiff City Story: FA Cup Glory & Welsh Pride
          </h2>
          <div className="space-y-6 text-blue-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Founding & Early Success (1899-1920)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Golden Age & FA Cup Triumph (1920s)</h3>
              <p>{clubData.history.goldenAge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Postwar Decline & European Adventures</h3>
              <p>{clubData.history.postwarDecline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Struggles & Financial Challenges</h3>
              <p>{clubData.history.modernStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">New Millennium & Stadium Move</h3>
              <p>{clubData.history.millenniumStadiumEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Premier League Dreams & Rebranding</h3>
              <p>{clubData.history.premierLeagueDream}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Recent History & Championship Stability</h3>
              <p>{clubData.history.recentHistory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Welsh Identity & Community</h3>
              <p>{clubData.history.identityAndCommunity}</p>
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
              <p className="text-xs text-blue-200 mt-2">Chilean international • 'The Pitbull'</p>
            </div>
          </div>

          <div className="bg-blue-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-red-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-blue-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-blue-200 mt-2">Wales captain • Arsenal & Juventus star</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-blue-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-blue-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1925-26 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
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
                <p className="text-blue-300 text-sm">Defender • Local hero • Club legend</p>
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
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">FA Cup Winners 1927:</strong> Only non-English winners • Beat Arsenal 1-0 • Took cup out of England
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-blue-900 rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">22 Welsh Cup Wins</strong>
            </div>
            <p className="text-white text-center">
              Record 22 Welsh Cup victories • Last win 1993 • Multiple domestic cup doubles
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">European Adventures 1968:</strong> Cup Winners' Cup semi-finalists • Lost to Hamburg • Best European performance
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-blue-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Championship Title 2013:</strong> Won Championship • Premier League promotion • Malky Mackay manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Bluebirds Identity</strong>
            </div>
            <p className="text-white text-center">
              Traditional blue colors • Bluebird crest • Welsh pride • South Wales Derby vs Swansea
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Cardiff City Stadium 2009:</strong> £48m stadium • Replaced Ninian Park • Shared with Wales rugby
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-black rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Welsh Community</strong>
            </div>
            <p className="text-white text-center">
              Cardiff City Community Foundation • Welsh talent development • National pride • Local engagement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-800 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">Cardiff's Football Pride:</strong> 125-year history • FA Cup glory • Premier League • Welsh football pioneers
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-blue-800 rounded-full text-xs font-bold">FA Cup 1927</span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">Welsh Pride</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">Premier League</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">Bluebirds</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}