'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Factory, Hammer, Building } from 'lucide-react';

export default function WalsallFC() {
  const clubData = {
    name: 'Walsall FC',
    nickname: 'The Saddlers',
    founded: 1888,
    originalName: 'Walsall Town Swifts',
    status: 'Historic Midland Club',
    stadium: 'Poundland Bescot Stadium',
    capacity: '11,300',
    location: 'Walsall, West Midlands',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Jorge Leitão',
      fee: '£350,000',
      year: 2001,
      from: 'União de Leiria'
    },
    recordSale: {
      player: 'Will Grigg',
      fee: '£1,000,000',
      year: 2015,
      to: 'Wigan Athletic'
    },
    topScorer: {
      name: 'Tony Richards',
      goals: 184,
      seasonRecord: 34,
      years: '1954-1962'
    },
        mostAppearances: {
      name: 'John \'Pongo\' Waring',
      apps: 482,
      years: '1946-1960'
    },
    honours: [
      { title: 'Third Division Champions', years: ['1959-60', '2006-07'] },
      { title: 'Fourth Division Champions', years: ['1959-60'] },
      { title: 'League Two Play-off Winners', years: ['2000-01'] },
      { title: 'Birmingham Senior Cup Winners', years: ['23 times (record)'] },
      { title: 'EFL Trophy Runners-up', years: ['2014-15'] },
      { title: 'FA Cup Best Run', years: ['Fifth Round 1974-75'] }
    ],
    history: {
      founding: "Walsall Football Club was founded in 1888 as Walsall Town Swifts, following the merger of Walsall Town and Walsall Swifts. The club joined the Football League in 1892 as founding members of the Second Division. Walsall's early years were spent mainly in the lower divisions, with their first major achievement coming in the 1895-96 season when they reached the FA Cup quarter-finals. The club's nickname 'The Saddlers' reflects Walsall's historic reputation as a center for saddle and leather goods manufacturing. For much of their history, Walsall have been a classic 'yo-yo' club, oscillating between the third and fourth tiers of English football. Their traditional home was Fellows Park (1896-1990), a classic old English football ground with character and history, before moving to the Bescot Stadium in 1990.",
      
      goldenEra: "The late 1950s and early 1960s represented Walsall's most successful period. Under manager Bill Moore, Walsall achieved a historic double in the 1959-60 season, winning both the Third Division and Fourth Division titles in the same campaign—a unique achievement in English football history. This remarkable feat came about because the Football League had reorganized its divisions that season. Walsall scored 102 goals that campaign, with Tony Richards netting 34 of them. The following season, 1960-61, Walsall finished 6th in the Second Division—their highest-ever league finish. This period also saw the emergence of legendary striker Tony 'Bomber' Brown, who would later achieve fame with West Bromwich Albion. The club established themselves as a competitive Second Division side throughout the early 1960s, regularly attracting crowds of over 15,000.",
      
      giantKillings: "Walsall have developed a reputation as FA Cup giant-killers throughout their history. Their most famous cup upset came in the 1974-75 season when, as a Fourth Division club, they defeated First Division champions Arsenal 1-0 at Fellows Park in the third round. This remains one of the greatest cup shocks in English football history. Walsall went on to reach the fifth round that season before losing to Leeds United. In the 1983-84 season, Walsall defeated European Cup holders Nottingham Forest 2-0 in the League Cup. More recently, in the 2014-15 season, Walsall reached the EFL Trophy final at Wembley, losing 2-0 to Bristol City. The club's ability to defeat higher-division opponents, particularly at home, has been a consistent feature of their identity.",
      
      modernEra: "The modern era has seen Walsall establish themselves as a solid League One/Legue Two club. Under manager Ray Graydon, Walsall won promotion to the Second Division (now Championship) via the play-offs in 2000-01, defeating Reading 3-2 in the final at the Millennium Stadium. This began a period of relative stability in the second tier, with Walsall spending three seasons in the Championship. Under manager Richard Money, Walsall won the League Two title in 2006-07 with a club-record 89 points. The 2015-16 season was particularly successful under manager Dean Smith (now at Leicester City), with Walsall finishing 3rd in League One and reaching the play-offs, losing to Barnsley in the semi-finals. Smith's attractive football earned plaudits and developed several players who would move to higher levels.",
      
      currentSituation2026: "The 2025-26 season sees Walsall in League Two under manager Mat Sadler, who was appointed in February 2023. The club has stabilized after relegation from League One in 2019 and is pushing for promotion. The Poundland Bescot Stadium (sponsorship deal signed in 2023) provides modern facilities, with average attendances around 5,000. Walsall operate with one of the smaller budgets in League Two but have developed a reputation for producing talented young players through their Category 3 academy. Recent academy graduates include Rico Henry (now at Brentford) and Sam Perry (current first-team regular). The club maintains strong community links in the Black Country region.",
      
      communityClub: "Walsall Football Club is deeply embedded in its local community. The club's identity is intrinsically linked to Walsall's industrial heritage as a center for leatherworking and manufacturing—hence the nickname 'The Saddlers.' The club crest features a swift (from the original Walsall Swifts) and a donkey, representing the town's saddle-making industry. Walsall's supporters are known for their loyalty and passionate support, particularly in local derbies against rivals like Port Vale, Shrewsbury Town, and Wolverhampton Wanderers. The club operates extensive community programs, including the Walsall FC Community Programme which engages with thousands of local residents annually. Despite operating with limited resources compared to nearby Premier League clubs, Walsall maintain a strong sense of identity and pride in their Black Country roots.",
      
      futureOutlook: "Looking ahead to 2026 and beyond, Walsall aim to secure promotion back to League One and establish themselves as a sustainable third-tier club. Under the ownership of local businessman Leigh Pomlett (chairman since 2019), the club has implemented a prudent financial strategy focusing on developing young talent and smart recruitment. Plans include upgrading the Poundland Bescot Stadium's facilities and improving the academy's status. The club's partnership with Poundland (headquartered in Walsall) provides commercial stability. With manager Mat Sadler (a former Walsall player) at the helm, the club is building a young, energetic squad capable of challenging for promotion. Walsall's long-term vision combines respect for their 136-year history with modern football realities, aiming to prove that community-focused clubs can compete in the modern game."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-white to-red-800">
      <header className="bg-gradient-to-r from-red-800 to-white text-white border-b-4 border-red-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-red-800">WFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-gray-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-white text-red-800 rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
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
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Calendar className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-gray-600 text-sm">Founded</p>
            <p className="text-red-800 text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-500 text-xs mt-1">as Walsall Town Swifts</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-gray-600 text-sm">Stadium</p>
            <p className="text-red-800 text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-500 text-xs mt-1">Since 1990 • Modern facility</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-gray-600 text-sm">Capacity</p>
            <p className="text-red-800 text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-500 text-xs mt-1">Average: 5,000</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-gray-600 text-sm">Location</p>
            <p className="text-red-800 text-base font-bold">{clubData.location}</p>
            <p className="text-gray-500 text-xs mt-1">Heart of the Black Country</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <Factory className="w-8 h-8 mr-3 text-red-600" />
            The Walsall Story: 136 Years of Saddlers History
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Founding & Early Years (1888-1958)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Golden Era & Historic Double (1958-1965)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Giant-Killing Reputation (1970-1990)</h3>
              <p>{clubData.history.giantKillings}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Modern Era & Play-off Success (1990-2019)</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Current Season 2025-26</h3>
              <p>{clubData.history.currentSituation2026}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Community Club & Black Country Identity</h3>
              <p>{clubData.history.communityClub}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-3">Future Outlook & Sustainable Growth</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-gray-800">{clubData.recordSigning.player}</p>
              <p className="text-gray-600 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-800">{clubData.recordSale.player}</p>
              <p className="text-gray-600 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-500 mt-2">Later became cult hero at Wigan</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-red-800">{clubData.topScorer.name}</p>
                <p className="text-gray-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-500 text-sm">{clubData.topScorer.seasonRecord} goals in 1959-60 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-600">{clubData.topScorer.goals}</p>
                <p className="text-gray-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-red-800">{clubData.mostAppearances.name}</p>
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

        <section className="bg-white rounded-xl p-8 border-2 border-red-500 shadow-lg">
          <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-600" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-100 to-white rounded-lg border-2 border-red-400">
            <p className="text-red-800 text-center">
              <strong className="text-red-700">Historic Double (1960):</strong> Won Third & Fourth Division titles in same season • Unique achievement in English football
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-red-50 rounded-lg border-2 border-green-400">
            <p className="text-red-800 text-center">
              <strong className="text-green-700">Arsenal Giant-Killing (1975):</strong> Fourth Division Walsall beat First Division champions Arsenal 1-0 • One of greatest FA Cup shocks
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border-2 border-blue-400">
            <div className="flex items-center justify-center mb-2">
              <Hammer className="w-5 h-5 mr-2 text-red-700" />
              <strong className="text-red-700 text-lg">Black Country Pride</strong>
            </div>
            <p className="text-red-800 text-center">
              Nickname 'The Saddlers' from leather industry • Club crest features swift & donkey • Heart of industrial Midlands
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg border-2 border-yellow-400">
            <p className="text-red-800 text-center">
              <strong className="text-yellow-700">Fellows Park Legacy (1896-1990):</strong> Historic ground with 15,000 capacity • Classic English football stadium • Moved to Bescot in 1990
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-red-50 rounded-lg border-2 border-purple-400">
            <p className="text-red-800 text-center">
              <strong className="text-purple-700">Current Season 2025-26:</strong> 9th in League Two • 42 points from 27 games • 4 points off play-offs • Mat Sadler manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-red-50 rounded-lg border-2 border-gray-400">
            <div className="flex items-center justify-center mb-2">
              <Building className="w-5 h-5 mr-2 text-red-700" />
              <strong className="text-red-700 text-lg">Poundland Partnership</strong>
            </div>
            <p className="text-red-800 text-center">
              Stadium renamed Poundland Bescot Stadium 2023 • Headquartered in Walsall • Major commercial partnership
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-red-50 rounded-lg border-2 border-indigo-400">
            <p className="text-red-800 text-center">
              <strong className="text-indigo-700">Academy Success:</strong> Produced Rico Henry (Brentford) • Category 3 status • Developing local Black Country talent
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-100 to-red-50 rounded-lg border-2 border-red-600">
            <p className="text-red-800 text-center">
              <strong className="text-red-900">The Saddlers' Future:</strong> 136-year history • Sustainable community club • Developing young talent • Promotion push 2026
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-xs font-bold">Historic Double</span>
              <span className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-bold">Giant-Killers</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded-full text-xs font-bold">Black Country</span>
              <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-xs font-bold">Community Club</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}