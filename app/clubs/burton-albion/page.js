'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function BurtonAlbionFC() {
  const clubData = {
    name: 'Burton Albion FC',
    nickname: 'The Brewers',
    founded: 1950,
    originalName: 'Burton Albion Football Club',
    status: 'League Two Champions 2015',
    stadium: 'Pirelli Stadium',
    capacity: '6,912 (2,034 seated)',
    location: 'Burton upon Trent, Staffordshire',
    league: 'League One',
    recordSigning: {
      player: 'Liam Boyce',
      fee: '£500,000',
      year: 2017,
      from: 'Ross County'
    },
    recordSale: {
      player: 'Ollie Watkins',
      fee: '£1,800,000',
      year: 2017,
      to: 'Brentford'
    },
    topScorer: {
      name: 'Shaun Harrad',
      goals: 78,
      seasonRecord: 20,
      years: '2008-2011, 2012-2013'
    },
    mostAppearances: {
      name: 'John Brayford',
      apps: 291,
      years: '2009-2013, 2018-2024'
    },
    honours: [
      { title: 'League Two Champions', years: ['2014-15'] },
      { title: 'Conference Premier Champions', years: ['2008-09'] },
      { title: 'Conference League Cup Winners', years: ['1996-97'] },
      { title: 'Northern Premier League Champions', years: ['2001-02'] },
      { title: 'Southern League Cup Winners', years: ['1983-84', '1986-87'] },
      { title: 'FA Trophy Runners-up', years: ['1987'] }
    ],
    history: {
      founding: "Burton Albion Football Club was founded in 1950, making them one of the youngest professional clubs in England. The club was formed by a group of local businessmen and football enthusiasts who wanted to re-establish league football in Burton upon Trent after the dissolution of Burton Town FC. The name 'Albion' was chosen as a traditional football club name, while 'Brewers' reflects Burton's historic brewing industry - the town is known as the brewing capital of Britain. The club initially played in the Birmingham & District League before joining the Southern League in 1958. For their first 55 years, Burton Albion played at Eton Park, a traditional non-league ground that became synonymous with the club's rise through the football pyramid.",
      
      nonLeagueYears: "For most of their existence, Burton Albion were a non-league club, competing primarily in the Southern League and later the Football Conference. The 1990s marked a period of significant progress under manager Nigel Clough, who took charge in 1998 following the departure of his father Brian Clough. During this period, the club began to establish themselves as one of the strongest non-league sides in the country. The 2001-02 season saw Burton Albion win the Northern Premier League title under manager Nigel Clough, securing promotion to the Football Conference. This success came after the club made the strategic decision to leave the Southern League for the Northern Premier League in 2001 - a move that proved instrumental in their eventual rise to the Football League.",
      
      promotionToFootballLeague: "The 2008-09 season marked the most significant moment in Burton Albion's history up to that point. Under manager Nigel Clough, the club won the Conference Premier title, securing promotion to the Football League for the first time. The title was secured with several games to spare, and the promotion was particularly poignant as it came just weeks before Clough departed to manage Derby County. Roy McFarland took over and guided the club to a comfortable 13th-place finish in League Two in their debut season. This achievement was remarkable for a club that had spent nearly 60 years in non-league football and demonstrated the progress made under chairman Ben Robinson's stewardship. The club had moved to the Pirelli Stadium in 2005, providing modern facilities that supported their Football League ambitions.",
      
      leagueTwoSuccess: "Burton Albion's first period in League Two was characterized by steady progress and eventual triumph. After several seasons of mid-table finishes and play-off near-misses, the 2014-15 season proved to be historic. Under manager Jimmy Floyd Hasselbaink, Burton Albion won the League Two title, securing promotion to League One for the first time. The title race went down to the final day, with Burton needing to avoid defeat against Cambridge United to secure the championship. A 0-0 draw was enough to spark celebrations at the Pirelli Stadium. Hasselbaink's achievement was particularly impressive as he had taken over a struggling side in November 2014 and transformed them into champions. The following season, under new manager Nigel Clough (returning for his second spell), Burton Albion achieved back-to-back promotions.",
      
      championshipAdventure: "The 2015-16 season produced one of the most remarkable stories in English football history. Under manager Nigel Clough, Burton Albion secured a second consecutive promotion, reaching the Championship via the play-offs. After finishing second in League One, they faced Walsall in the play-off semi-finals, winning 3-2 on aggregate. The final at Wembley against Sheffield Wednesday ended 1-1 after extra time, with Burton Albion winning 5-3 on penalties. This achievement was extraordinary for a club that had been in non-league football just seven years earlier. The 2016-17 Championship season saw Burton Albion defy all expectations by surviving relegation, finishing 20th under Clough's management. The club spent two seasons in the second tier before relegation in 2018, but their Championship adventure remains one of football's great fairytale stories.",
      
      modernEra: "Since their relegation from the Championship in 2018, Burton Albion have established themselves as a stable League One club. The 2018-19 season saw a respectable 9th-place finish under Nigel Clough, while the following seasons have involved battles at both ends of the table. The 2020-21 season was particularly challenging, with the club narrowly avoiding relegation to League Two on the final day. In recent years, Burton Albion have developed a reputation for nurturing young talent and playing attractive football under various managers including Jake Buxton, Jimmy Floyd Hasselbaink (in his second spell), and Dino Maamria. The club continues to operate with one of the smallest budgets in League One but maintains a competitive edge through shrewd recruitment and strong team spirit.",
      
      communityAndIdentity: "Burton Albion's identity is deeply connected to the town's brewing heritage, with the nickname 'The Brewers' reflecting Burton upon Trent's status as the traditional home of British brewing. The club's colors of yellow and black were chosen to represent the brewing industry, with yellow symbolising beer and black representing the stout porter beer for which Burton was famous. The Pirelli Stadium, named after the tyre manufacturer whose UK headquarters are in Burton, is known for its intimate atmosphere and excellent pitch. Despite its relatively small capacity, the ground has hosted Championship football and provides modern facilities for a club of Burton's size. The Burton Albion Community Trust is highly active in the local area, running numerous programs focused on health, education, and inclusion.",
      
      futureOutlook: "Looking ahead, Burton Albion aim to consolidate their position in League One while continuing to develop young talent through their academy. Chairman Ben Robinson, who has been at the helm since 1995, remains committed to sustainable growth and community engagement. The club's model focuses on developing players who can either contribute to the first team or be sold for profit to reinvest in the squad. With the Pirelli Stadium providing a solid foundation and the club's reputation for punching above its weight well established, Burton Albion continue to build on their remarkable journey from non-league to the Championship. The club's story serves as an inspiration to smaller clubs across the country, demonstrating what can be achieved through careful planning, community support, and footballing vision."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-800 via-black to-yellow-800">
      <header className="bg-gradient-to-r from-yellow-800 to-black text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-yellow-800">BAFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-yellow-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-yellow-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-yellow-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-yellow-800 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-yellow-800 rounded-lg p-6 border-2 border-black shadow-lg">
            <Calendar className="w-8 h-8 text-black mb-2" />
            <p className="text-yellow-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-yellow-500 text-xs mt-1">Young professional club</p>
          </div>
          <div className="bg-yellow-800 rounded-lg p-6 border-2 border-black shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-yellow-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-yellow-500 text-xs mt-1">Opened 2005 • Modern facility</p>
          </div>
          <div className="bg-yellow-800 rounded-lg p-6 border-2 border-black shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-yellow-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-yellow-500 text-xs mt-1">Intimate atmosphere</p>
          </div>
          <div className="bg-yellow-800 rounded-lg p-6 border-2 border-black shadow-lg">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-yellow-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-yellow-500 text-xs mt-1">Brewing capital of Britain</p>
          </div>
        </div>

        <section className="bg-yellow-800 rounded-xl p-8 border-2 border-black shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-black" />
            The Burton Albion Story: From Non-League to Championship
          </h2>
          <div className="space-y-6 text-yellow-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Founding & Early Years (1950-1998)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Non-League Establishment & Progress</h3>
              <p>{clubData.history.nonLeagueYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Historic Promotion to Football League (2009)</h3>
              <p>{clubData.history.promotionToFootballLeague}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">League Two Champions & Rise Continues (2015)</h3>
              <p>{clubData.history.leagueTwoSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Fairytale Championship Adventure (2016-2018)</h3>
              <p>{clubData.history.championshipAdventure}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Modern Era & League One Stability</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Community Club & Brewing Heritage</h3>
              <p>{clubData.history.communityAndIdentity}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Future Outlook & Sustainable Model</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-yellow-800 rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-yellow-100">{clubData.recordSigning.player}</p>
              <p className="text-black text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-yellow-800 rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-yellow-100">{clubData.recordSale.player}</p>
              <p className="text-black text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-yellow-500 mt-2">Now established Premier League star</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-yellow-800 rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-black text-lg">{clubData.topScorer.years}</p>
                <p className="text-yellow-500 text-sm">{clubData.topScorer.seasonRecord} goals in 2009-10 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-black">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-800 rounded-xl p-6 border-2 border-black shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-black text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-yellow-500 text-sm">Defender • Club legend • Two spells</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-black">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-yellow-800 rounded-xl p-8 border-2 border-black shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-black" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-black rounded-lg p-4 border-2 border-yellow-600">
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
          
          <div className="mt-6 p-4 bg-gradient-to-r from-black to-yellow-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">League Two Champions 2015:</strong> Won title on final day • Jimmy Floyd Hasselbaink manager • Back-to-back promotions followed
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-yellow-900 rounded-lg border-2 border-green-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Conference Premier Champions 2009</strong>
            </div>
            <p className="text-white text-center">
              First promotion to Football League • Nigel Clough manager • 60 years in non-league ended
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-yellow-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Championship Fairytale 2016:</strong> Won play-off final on penalties • Two seasons in second tier • Defied all expectations
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-yellow-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Ollie Watkins Sale 2017:</strong> £1.8m to Brentford • Now England international • Shows club's eye for talent
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-yellow-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">The Brewers Identity</strong>
            </div>
            <p className="text-white text-center">
              Yellow & black colors • Nickname from brewing industry • Burton's brewing heritage • Community focused
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-yellow-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Pirelli Stadium 2005:</strong> Modern £7.2m stadium • Replaced Eton Park • Hosted Championship football
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-black rounded-lg border-2 border-yellow-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-black" />
              <strong className="text-black text-lg">Community & Sustainability</strong>
            </div>
            <p className="text-white text-center">
              Burton Albion Community Trust • Sustainable business model • Developing young talent • Local engagement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-gray-900 rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-black">Football's Greatest Rise:</strong> Non-league to Championship in 7 years • Model club • Chairman Ben Robinson since 1995
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-black text-yellow-200 rounded-full text-xs font-bold">Conference 2009</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">League Two 2015</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Championship 2016</span>
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">The Brewers</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}