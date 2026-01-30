'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function DoncasterRoversFC() {
  const clubData = {
    name: 'Doncaster Rovers FC',
    nickname: 'The Rovers',
    founded: 1879,
    originalName: 'Doncaster Rovers Football Club',
    status: 'League Two Play-off Winners 2024',
    stadium: 'Eco-Power Stadium',
    capacity: '15,231',
    location: 'Doncaster, South Yorkshire',
    league: 'League Two',
    recordSigning: {
      player: 'Billy Sharp',
      fee: '£1,150,000',
      year: 2005,
      from: 'Sheffield United'
    },
    recordSale: {
      player: 'John Marquis',
      fee: '£1,750,000',
      year: 2019,
      to: 'Portsmouth'
    },
    topScorer: {
      name: 'Tom Keetley',
      goals: 180,
      seasonRecord: 37,
      years: '1925-1932'
    },
    mostAppearances: {
      name: 'Colin Douglas',
      apps: 432,
      years: '1964-1975'
    },
    honours: [
      { title: 'Third Division North Champions', years: ['1934-35', '1946-47', '1949-50'] },
      { title: 'Fourth Division Champions', years: ['1965-66', '1968-69'] },
      { title: 'League Two Runners-up', years: ['2003-04'] },
      { title: 'League One Play-off Winners', years: ['2007-08'] },
      { title: 'League Two Play-off Winners', years: ['2024'] },
      { title: 'Football League Trophy Winners', years: ['2007'] },
      { title: 'Conference National Champions', years: ['2002-03'] },
      { title: 'FA Cup Semi-finalists', years: ['1956'] },
      { title: 'FA Trophy Winners', years: ['1998'] },
      { title: 'Associate Members\' Cup Finalists', years: ['1990'] }
    ],
    history: {
      founding: "Doncaster Rovers Football Club was founded in 1879 by Albert Jenkins, making them one of the oldest football clubs in England. The club initially played at Intake Ground before moving to their famous Belle Vue ground in 1922, which would remain their home for 84 years. Early years saw Rovers playing in various regional leagues before joining the Football League in 1901 as founding members of the Second Division. The club's early colors were blue and white, but they switched to their current red and white hoops in 1901, inspired by the famous Sheffield Wednesday kit of that era. The nickname 'Rovers' reflects the club's early years of moving between different grounds before settling at Belle Vue.",
      
      interwarSuccess: "The 1930s marked Doncaster Rovers' first period of sustained success. Under manager David Menzies, the club won the Third Division North championship in 1934-35, securing promotion to the Second Division for the first time. This team, featuring legendary striker Tom Keetley (who scored 180 goals for the club), played attractive football and established Rovers as a competitive force. The club consolidated their Second Division status throughout the late 1930s before World War II interrupted their progress. After the war, Rovers enjoyed further success, winning the Third Division North title again in 1946-47 and 1949-50 under manager Jackie Bestall. The 1950s saw the club maintain their Second Division status while reaching the FA Cup semi-finals in 1956, losing to Manchester City at Hillsborough.",
      
      postwarDecline: "The 1960s brought a period of decline for Doncaster Rovers. Relegation to the Third Division in 1958 began a downward trend that saw the club fall to the Fourth Division by 1965. However, the late 1960s provided a brief resurgence with two Fourth Division championships (1965-66 and 1968-69) under manager Billy Bremner. The 1970s and 1980s were characterized by financial difficulties and yo-yoing between the Third and Fourth Divisions. The 1983-84 season was particularly memorable as Rovers won promotion to the Third Division under Billy Bremner (in his second spell), playing attractive football that delighted fans. However, financial problems returned, and by the 1990s, Doncaster Rovers faced their greatest crisis yet.",
      
      nonLeagueExile: "The 1997-98 season proved disastrous as Doncaster Rovers were relegated from the Football League for the first time in their history. The club entered administration in 1997 with debts of £750,000 and faced extinction. However, a supporters' trust led by lifelong fan Ian Wragg helped save the club. Rovers spent five seasons in the Conference, winning the FA Trophy in 1998 under manager Ian Snodin. The 2002-03 season marked a turning point as Rovers, under manager Dave Penney, won the Conference National title with a record 97 points, securing a return to the Football League. This period forged a strong bond between the club and its supporters, who had rallied to save their beloved team from extinction.",
      
      millenniumRenaissance: "The 2000s marked Doncaster Rovers' most successful modern period. Under manager Dave Penney, Rovers won immediate promotion from League Two in 2003-04, finishing as runners-up. The club moved from Belle Vue to the new Keepmoat Stadium (now Eco-Power Stadium) in 2006, providing modern facilities for their ascent. In 2007, Rovers won the Football League Trophy, defeating Bristol Rovers 3-2 at the Millennium Stadium. The following season, under manager Sean O'Driscoll, Rovers achieved their greatest modern success by winning promotion to the Championship via the play-offs, defeating Leeds United 1-0 at Wembley. The 2008-09 Championship season saw Rovers establish themselves at the second tier, playing attractive passing football that earned widespread praise.",
      
      championshipYears: "Doncaster Rovers enjoyed three seasons in the Championship (2008-2011), establishing themselves as a competitive second-tier club under manager Sean O'Driscoll. The 2009-10 season was particularly impressive as Rovers finished 12th, playing attractive football that won many admirers. Key players included Billy Sharp, James Coppinger, and Brian Stock. The club developed a reputation for playing some of the most attractive football in the Championship despite having one of the smallest budgets. Relegation in 2012 was followed by an immediate return to the Championship in 2012-13 under manager Dean Saunders, but this second spell lasted only one season. Despite relegation, this period represented the club's highest league position since the 1950s and created lasting memories for supporters.",
      
      recentHistory: "Since their 2014 relegation from the Championship, Doncaster Rovers have experienced fluctuating fortunes in League One. The 2016-17 season saw Rovers reach the League One play-offs under manager Darren Ferguson, losing to Plymouth Argyle in the semi-finals. The 2018-19 season brought another play-off appearance, with Rovers finishing 6th before losing to Charlton Athletic in the play-off semi-finals. The 2020-21 season ended in relegation to League Two, but Rovers bounced back immediately by winning promotion via the play-offs in 2024 under manager Grant McCann, defeating Crewe Alexandra 2-0 in the final at Wembley. This marked the club's return to League One after a three-year absence and demonstrated their resilience.",
      
      communityIdentity: "Doncaster Rovers' identity is deeply rooted in their South Yorkshire mining heritage. The club's red and white hoops are instantly recognizable and have been worn since 1901. The nickname 'Rovers' reflects the club's early nomadic existence before settling at Belle Vue. The move to the Eco-Power Stadium (originally Keepmoat Stadium) in 2006 marked a new era, providing modern facilities while maintaining the club's community focus. Doncaster Rovers are known for their passionate, loyal fanbase and strong community engagement through the Club Doncaster Foundation. The club has strong rivalries with local teams including Rotherham United, Barnsley, and Scunthorpe United. Despite being a relatively small club, Rovers have consistently punched above their weight throughout their long history."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-slate-900 overflow-x-hidden">      <ClubHeader 
          name={clubData.name}
          nickname={clubData.nickname}
          initials="BFC"
          season="Season 2025-26"
          color="red"
        />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Calendar className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-red-300 text-xs mt-1">One of England's oldest</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-red-300 text-xs mt-1">Opened 2006 • Modern arena</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-red-300 text-xs mt-1">All-seater stadium</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-red-300 text-xs mt-1">South Yorkshire • Mining heritage</p>
          </div>
        </div>

        <section className="bg-red-800 rounded-xl p-8 border-2 border-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-white" />
            The Doncaster Rovers Story: Resilience & Renaissance
          </h2>
          <div className="space-y-6 text-red-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Founding & Early Years (1879-1930)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Interwar Success & First Glory Years</h3>
              <p>{clubData.history.interwarSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Postwar Decline & Financial Struggles</h3>
              <p>{clubData.history.postwarDecline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Non-League Exile & Near-Extinction</h3>
              <p>{clubData.history.nonLeagueExile}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Millennium Renaissance & Stadium Move</h3>
              <p>{clubData.history.millenniumRenaissance}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Championship Years & Attractive Football</h3>
              <p>{clubData.history.championshipYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Recent History & Play-off Success</h3>
              <p>{clubData.history.recentHistory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Community Identity & Yorkshire Pride</h3>
              <p>{clubData.history.communityIdentity}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-white">{clubData.recordSigning.player}</p>
              <p className="text-red-300 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-red-200 mt-2">Proven goalscorer • Sheffield United return</p>
            </div>
          </div>

          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-red-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-red-200 mt-2">Consistent goalscorer • 67 goals for Rovers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-red-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-red-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1929-30 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-red-200">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-red-200 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-red-300 text-sm">Defender • Local hero • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-red-200">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-red-800 rounded-xl p-8 border-2 border-white shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-white" />
            Honours & Historical Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-2 border-red-600">
                <h3 className="text-lg font-bold text-red-800 mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900 to-white rounded-lg border-2 border-red-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">FA Cup Semi-finalists 1956:</strong> Lost to Manchester City • Best FA Cup run • Historic achievement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Conference Champions 2003</strong>
            </div>
            <p className="text-white text-center">
              Return to Football League • Record 97 points • Dave Penney manager • Renaissance begins
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-red-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">League One Play-off Winners 2008:</strong> Beat Leeds 1-0 at Wembley • Promotion to Championship • James Hayter goal
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-red-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Football League Trophy 2007:</strong> Beat Bristol Rovers 3-2 • Millennium Stadium • First major trophy in 50 years
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-red-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Rovers Identity</strong>
            </div>
            <p className="text-white text-center">
              Red & white hoops since 1901 • Yorkshire pride • 'Rovers' nickname • Mining community heritage
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-red-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Eco-Power Stadium 2006:</strong> £32m stadium • Replaced Belle Vue • Modern community facility
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community Resilience</strong>
            </div>
            <p className="text-white text-center">
              Club Doncaster Foundation • Survived administration 1997 • Fan-owned period • Strong community ties
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-gray-900 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">145 Years of Football:</strong> One of England's oldest • Resilience through adversity • Championship football achieved
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-red-800 rounded-full text-xs font-bold">Founded 1879</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">Championship</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">Play-offs 2024</span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">The Rovers</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}