'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Anchor, Ship, Waves } from 'lucide-react';

export default function TranmereRoversFC() {
  const clubData = {
    name: 'Tranmere Rovers FC',
    nickname: 'The Super White Army / Rovers',
    founded: 1884,
    originalName: 'Belmont Football Club',
    status: 'Merseyside\'s Other Club',
    stadium: 'Prenton Park',
    capacity: '16,587',
    location: 'Birkenhead, Merseyside',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'John Aldridge',
      fee: '£250,000',
      year: 1991,
      from: 'Real Sociedad'
    },
    recordSale: {
      player: 'Jason Koumas',
      fee: '£2,250,000',
      year: 2002,
      to: 'West Bromwich Albion'
    },
    topScorer: {
      name: 'Ian Muir',
      goals: 180,
      seasonRecord: 29,
      years: '1985-1995'
    },
    mostAppearances: {
      name: 'Harold Bell',
      apps: 595,
      years: '1946-1964'
    },
    honours: [
      { title: 'Third Division Champions', years: ['1989-90'] },
      { title: 'Fourth Division Champions', years: ['1975-76'] },
      { title: 'EFL Trophy Winners', years: ['1989-90'] },
      { title: 'Football League Cup Runners-up', years: ['1999-00'] },
      { title: 'League One Play-off Winners', years: ['2017-18', '2018-19'] },
      { title: 'Wirral Senior Cup Winners', years: ['24 times (record)'] }
    ],
    history: {
      founding: "Tranmere Rovers Football Club was founded in 1884 as Belmont Football Club, adopting their current name in 1885. The club's early years were spent in local Liverpool and district leagues before joining the Football League Third Division North in 1921. Tranmere played at various grounds before settling at Prenton Park in 1912, which has been their home ever since. For much of their early history, Tranmere were a lower division club, often finishing in the bottom half of the Third Division North. However, the club developed a reputation for cup upsets, famously defeating First Division opponents in the FA Cup. Tranmere's location in Birkenhead, across the Mersey from Liverpool, meant they operated in the shadow of their more famous neighbors Liverpool and Everton, earning them the nickname 'Merseyside's other club.'",
      
      johnKingEra: "The late 1980s and early 1990s marked Tranmere Rovers' golden era under manager John King. Appointed in 1987, King transformed the club from Fourth Division strugglers to Second Division (now Championship) contenders. In 1989-90, Tranmere won the Third Division championship and the Football League Trophy (then called the Associate Members' Cup), achieving a memorable double. King's teams played attractive, attacking football and developed a reputation for giant-killing in cup competitions. The 1993-94 season saw Tranmere reach the FA Cup quarter-finals, defeating top-flight opponents including Southampton and West Ham United. John Aldridge, signed from Real Sociedad in 1991, became the club's record signing and would later serve as player-manager. This period represented the club's highest point, with average attendances exceeding 10,000 at Prenton Park.",
      
      cupSpecialists: "Tranmere Rovers developed a reputation as cup specialists in the 1990s and early 2000s. The 1999-2000 season brought their greatest cup achievement—reaching the Football League Cup final at Wembley. Under manager John Aldridge, Tranmere defeated Premier League sides Coventry City, Middlesbrough, and Bolton Wanderers en route to the final, where they lost 2-1 to Leicester City. This remains the club's only major cup final appearance. Tranmere also enjoyed success in the FA Cup, reaching the quarter-finals in 2000-01 and 2003-04. Their ability to defeat higher-division opponents at Prenton Park became legendary, with the club earning the nickname 'Cup Kings.' This period also saw the emergence of talented players like Jason Koumas, who was sold to West Bromwich Albion for a club-record £2.25 million in 2002.",
      
      declineAndRecovery: "The 2000s brought decline for Tranmere Rovers. Relegation from the Championship in 2001 was followed by financial difficulties. The club dropped to League Two in 2015 and then suffered the ultimate humiliation—relegation to the National League in 2015, ending 94 years of continuous Football League membership. However, under manager Micky Mellon, Tranmere immediately bounced back, winning the National League play-offs in 2017 to return to the Football League. Remarkably, they achieved back-to-back promotions under Mellon, winning the League Two play-offs in 2018 and then the League One play-offs in 2019—an unprecedented rise from non-league to the third tier in just three seasons. This period re-established Tranmere as a competitive Football League club and restored pride to the Birkenhead community.",
      
      currentSituation2026: "The 2025-26 season sees Tranmere Rovers back in League Two. The club has stabilized after relegation from League One in 2023 and is pushing for an immediate return. Prenton Park continues to be one of the largest stadiums in League Two, with average attendances around 7,500. The club operates with a competitive budget and has invested in upgrading facilities, including a new training complex at Solar Campus. Tranmere's academy remains Category 3 status and continues to produce local talent. The club maintains its reputation as a tough opponent, particularly at home, where they boast one of the best home records in the division.",
      
      communityIdentity: "Tranmere Rovers hold a unique position in English football as 'Merseyside's other club.' While often overshadowed by Liverpool and Everton, Tranmere have a passionate and loyal fanbase drawn from the Wirral peninsula. The club's nickname 'The Super White Army' reflects the fans' vocal support. Tranmere have strong community ties, running numerous outreach programs in Birkenhead and the wider Wirral area. The club's home, Prenton Park, is one of English football's oldest continuously used grounds, having hosted football since 1912. Despite financial constraints compared to their Premier League neighbors, Tranmere have developed a reputation for resilience and punching above their weight. The club's crest features a ship, reflecting Birkenhead's maritime heritage and its historic shipbuilding industry.",
      
      futureAmbitions: "Looking ahead to 2026 and beyond, Tranmere Rovers aim to secure promotion back to League One and eventually return to the Championship for the first time since 2001. Under the ownership of local businessman Mark Palios (former Football Association CEO) and his wife Nicola, the club has implemented a sustainable business model. Plans include further development of Prenton Park, with proposals to increase capacity and improve commercial facilities. The club's 'One Club' philosophy integrates the first team, academy, and women's team (Tranmere Rovers Women, who compete in the FA Women's National League). With strong local ownership, community engagement, and a clear strategic vision, Tranmere Rovers are building for a sustainable future while honoring their 140-year history. The club remains determined to prove that there is life beyond the Premier League spotlight on Merseyside."
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
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-gray-600 text-sm">Founded</p>
            <p className="text-blue-900 text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-500 text-xs mt-1">as Belmont FC</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-gray-600 text-sm">Stadium</p>
            <p className="text-blue-900 text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-500 text-xs mt-1">Since 1912 • 16,587 capacity</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-gray-600 text-sm">Capacity</p>
            <p className="text-blue-900 text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-500 text-xs mt-1">Largest in League Two</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-gray-600 text-sm">Location</p>
            <p className="text-blue-900 text-base font-bold">{clubData.location}</p>
            <p className="text-gray-500 text-xs mt-1">Wirral, Merseyside</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <Anchor className="w-8 h-8 mr-3 text-blue-600" />
            The Tranmere Rovers Story: Merseyside's Other Club
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Founding & Early Years (1884-1987)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">John King Golden Era (1987-1996)</h3>
              <p>{clubData.history.johnKingEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Cup Specialists & Wembley Final (1996-2004)</h3>
              <p>{clubData.history.cupSpecialists}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Decline & Remarkable Recovery (2004-2019)</h3>
              <p>{clubData.history.declineAndRecovery}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Current Season 2025-26</h3>
              <p>{clubData.history.currentSituation2026}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Community Identity & Wirral Pride</h3>
              <p>{clubData.history.communityIdentity}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Future Ambitions & Sustainable Growth</h3>
              <p>{clubData.history.futureAmbitions}</p>
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
              <p className="text-xs text-gray-500 mt-2">Later became player-manager</p>
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
                <p className="text-gray-500 text-sm">{clubData.topScorer.seasonRecord} goals in 1988-89 season</p>
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
                <p className="text-gray-500 text-sm">Club record holder for 60+ years</p>
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
            Honours & Achievements
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
              <strong className="text-blue-700">League Cup Finalists (2000):</strong> Reached Wembley final • Lost 2-1 to Leicester City • Beat 3 Premier League teams en route
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-400">
            <p className="text-blue-900 text-center">
              <strong className="text-green-700">Historic Double (1990):</strong> Won Third Division championship & Football League Trophy • John King's golden era
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-blue-50 rounded-lg border-2 border-yellow-400">
            <div className="flex items-center justify-center mb-2">
              <Waves className="w-5 h-5 mr-2 text-blue-700" />
              <strong className="text-blue-700 text-lg">Remarkable Comeback</strong>
            </div>
            <p className="text-blue-900 text-center">
              Relegated to National League 2015 • Back-to-back promotions 2018-19 (L2 → L1) • Micky Mellon mastermind
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border-2 border-red-400">
            <p className="text-blue-900 text-center">
              <strong className="text-red-700">Cup Kings:</strong> FA Cup quarter-finals 1994, 2000, 2001, 2004 • Regular giant-killers • Prenton Park fortress
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-2 border-purple-400">
            <p className="text-blue-900 text-center">
              <strong className="text-purple-700">Current Season 2025-26:</strong> 7th in League Two • 44 points from 27 games • Play-off position • Nigel Adkins manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-2 border-gray-400">
            <p className="text-blue-900 text-center">
              <strong className="text-gray-700">Prenton Park Legacy:</strong> Home since 1912 • 16,587 capacity (largest in L2) • "Super White Army" fortress
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-indigo-400">
            <p className="text-blue-900 text-center">
              <strong className="text-indigo-700">Mark Palios Ownership:</strong> Former FA CEO bought club 2014 • Sustainable model • Community-focused • "One Club" philosophy
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg border-2 border-blue-600">
            <p className="text-blue-900 text-center">
              <strong className="text-blue-800">Merseyside's Pride:</strong> 140-year history • Wirral's professional club • Developing local talent • Sustainable future
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-xs font-bold">Cup Specialists</span>
              <span className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-bold">Back-to-Back Promotions</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded-full text-xs font-bold">Prenton Park</span>
              <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-xs font-bold">Super White Army</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}