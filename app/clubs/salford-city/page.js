'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Users2, Film, Star } from 'lucide-react';

export default function SalfordCityFC() {
  const clubData = {
    name: 'Salford City FC',
    nickname: 'The Ammies',
    founded: 1940,
    originalName: 'Salford Central',
    status: 'Class of \'92 Owned Club',
    stadium: 'Peninsula Stadium',
    capacity: '5,106',
    location: 'Salford, Greater Manchester',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Brandon Thomas-Asante',
      fee: '£300,000',
      year: 2021,
      from: 'West Bromwich Albion'
    },
    recordSale: {
      player: 'Brandon Thomas-Asante',
      fee: '£500,000',
      year: 2022,
      to: 'West Bromwich Albion'
    },
    topScorer: {
      name: 'Adam Rooney',
      goals: 61,
      seasonRecord: 23,
      years: '2018-2021'
    },
    mostAppearances: {
      name: 'Liam Hogan',
      apps: 180,
      years: '2018-2022'
    },
    honours: [
      { title: 'National League Play-off Winners', years: ['2018-19'] },
      { title: 'National League North Champions', years: ['2017-18'] },
      { title: 'Northern Premier League Play-off Winners', years: ['2014-15'] },
      { title: 'FA Cup Best Run', years: ['Second Round 2020-21'] },
      { title: 'EFL Trophy Best Run', years: ['Quarter-finals 2021-22'] },
      { title: 'Manchester Premier Cup Winners', years: ['2013-14', '2014-15'] }
    ],
    history: {
      founding: "Salford City Football Club was founded in 1940 as Salford Central, originally representing the Salford Central Mission of the Methodist Church. The club adopted its current name in 1963 and spent most of its existence in the lower reaches of non-league football. For decades, Salford City played in local Manchester leagues, gradually climbing the football pyramid. The club's home since 1978 was Moor Lane (now Peninsula Stadium), a modest ground with basic facilities. Salford's fortunes began to change in the early 2010s when they gained promotion to the Northern Premier League Division One North in 2008. However, it was the events of 2014 that would transform the club's trajectory forever.",
      
      classOf92Takeover: "In March 2014, Salford City was purchased by former Manchester United players Ryan Giggs, Gary Neville, Phil Neville, Paul Scholes, and Nicky Butt—collectively known as the 'Class of '92.' Singaporean businessman Peter Lim joined as a co-owner shortly after. The takeover immediately brought national attention to the small club. The new owners outlined an ambitious 15-year plan to reach the Football League. They invested in infrastructure, professionalized operations, and increased the playing budget significantly. The documentary series 'Class of 92: Out of Their League' chronicled the early years of their ownership, bringing Salford City to a wider audience. This media exposure, combined with strategic investment, accelerated the club's progress dramatically.",
      
      meteoricRise: "Under manager Anthony Johnson and Bernard Morley (known as 'The Class of 92's Class of 92'), Salford achieved back-to-back promotions. In 2014-15, they won the Northern Premier League Division One North play-offs. The following season, they secured promotion to the National League North via the Northern Premier League play-offs. The 2017-18 season brought the National League North title with 92 points, securing promotion to the National League. Remarkably, Salford reached the National League in just four seasons under the new ownership. The 2018-19 season saw them achieve their ultimate goal—winning the National League play-off final against AFC Fylde at Wembley Stadium, securing promotion to the Football League for the first time in the club's 79-year history.",
      
      footballLeagueJourney: "Salford City's debut season in League Two (2019-20) saw them finish 11th, a respectable position for a newly-promoted club. The 2020-21 season brought a 8th-place finish, just missing the play-offs. Under manager Gary Bowyer, Salford reached the 2021-22 EFL Trophy quarter-finals and established themselves as a solid League Two side. The club continued to invest in infrastructure, upgrading the Peninsula Stadium to meet Football League standards and building a modern training complex at Carrington. Despite significant investment, promotion to League One proved elusive. The club changed managers frequently, with Richie Wellens, Gary Bowyer, Neil Wood, and Karl Robinson all having spells in charge as the owners sought the right formula for success.",
      
      currentSituation2026: "The 2025-26 season sees Salford City in their seventh consecutive season in League Two under manager Karl Robinson, appointed in December 2024 after Neil Wood's departure. The club continues to operate with one of the largest budgets in the division, funded by the ownership group. Peninsula Stadium has been expanded to 5,106 capacity, with average attendances around 2,800. While the initial goal of reaching the Football League was achieved, progress to League One has been slower than anticipated. The club faces criticism for its 'moneyball' approach and perceived lack of connection with the local community despite significant investment in community programs.",
      
      mediaAndBusiness: "Salford City has become one of English football's most media-exposed lower-league clubs. The documentary series continued for multiple seasons, and the club features regularly on Sky Sports and BBC due to its high-profile owners. Commercial revenue is strong, with sponsorship deals benefiting from the owners' connections. The club has developed a global following, particularly in Southeast Asia due to Peter Lim's connections. However, this media focus has sometimes created tension with traditional football fans who view Salford as a 'plastic club.' The ownership has invested over £30 million since 2014, transforming a small non-league club into a professional Football League outfit with modern facilities. The business model combines football investment with property development around the stadium.",
      
      futureAmbitions: "Looking ahead to 2026 and beyond, Salford City's primary objective remains promotion to League One. The owners' 15-year plan (2014-2029) originally targeted Championship football, but this timeline has been adjusted. Plans include further stadium expansion to 10,000 capacity and continued investment in the academy, which gained Category 3 status in 2023. The club aims to develop more local talent while maintaining its data-driven recruitment approach. Despite criticism, the ownership remains committed to their project, viewing Salford as a long-term investment rather than a vanity project. With continued financial backing and professional management, Salford City represents a new model of football club ownership—combining celebrity investment, media exposure, and strategic planning to accelerate a club's rise through the pyramid."
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
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Calendar className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-gray-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-400 text-xs mt-1">as Salford Central</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-gray-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-gray-400 text-xs mt-1">Since 1978 • Modernized</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-gray-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-400 text-xs mt-1">Expandable to 10,000</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-gray-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-gray-400 text-xs mt-1">Greater Manchester</p>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-red-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Film className="w-8 h-8 mr-3 text-red-400" />
            The Salford City Story: From Non-League to Football League
          </h2>
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Humble Beginnings (1940-2013)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Class of '92 Takeover (March 2014)</h3>
              <p>{clubData.history.classOf92Takeover}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Meteoric Rise Through Non-League (2014-2019)</h3>
              <p>{clubData.history.meteoricRise}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Football League Establishment (2019-2024)</h3>
              <p>{clubData.history.footballLeagueJourney}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Current Season 2025-26</h3>
              <p>{clubData.history.currentSituation2026}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Media Empire & Business Model</h3>
              <p>{clubData.history.mediaAndBusiness}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Future Ambitions & Legacy</h3>
              <p>{clubData.history.futureAmbitions}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSigning.player}</p>
              <p className="text-gray-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-200">{clubData.recordSale.player}</p>
              <p className="text-gray-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-500 mt-2">Profit of £200,000 in one year</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-gray-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-400 text-sm">{clubData.topScorer.seasonRecord} goals in 2018-19 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-gray-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-gray-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-400 text-sm">Captain during rise to Football League</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-red-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-900 rounded-lg p-4 border-2 border-red-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Class of '92 Ownership:</strong> Ryan Giggs, Gary & Phil Neville, Paul Scholes, Nicky Butt + Peter Lim • Transformed club from 8th tier to EFL in 5 years
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Users2 className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">The Owners</strong>
            </div>
            <p className="text-white text-center">
              Giggs • G. Neville • P. Neville • Scholes • Butt • Lim • Combined net worth: ~£1.5 billion • Invested £30M+ since 2014
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-red-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Historic Wembley Promotion (2019):</strong> Beat AFC Fylde 3-0 at Wembley to reach Football League for first time in 79-year history
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-red-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Documentary Series:</strong> 'Class of 92: Out of Their League' • 3 seasons on BBC • Global exposure • New model of football ownership
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-red-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Current Season 2025-26:</strong> 10th in League Two • 40 points from 27 games • 6 points off play-offs • Karl Robinson manager
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-red-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Financial Power:</strong> Largest budget in League Two • £4M annual wage bill • Professional facilities at Carrington training complex
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-900 to-red-900 rounded-lg border-2 border-indigo-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Controversy & Criticism:</strong> Called 'plastic club' by traditionalists • Accused of buying success • Low local support (2,800 average)
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Future Vision:</strong> Championship football target • 10,000 capacity stadium • Category 2 academy • Global brand development
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">Class of '92</span>
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Media Empire</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Financial Power</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Promotion Push</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}