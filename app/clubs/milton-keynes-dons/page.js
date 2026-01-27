'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Star } from 'lucide-react';

export default function MiltonKeynesDonsFC() {
  const clubData = {
    name: 'Milton Keynes Dons FC',
    nickname: 'The Dons',
    founded: 2004,
    originalName: 'Milton Keynes Dons FC',
    stadium: 'Stadium MK',
    capacity: '30,500',
    location: 'Milton Keynes, Buckinghamshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Aleksandar Tunchev',
      fee: '£750,000',
      year: 2012,
      from: 'CSKA Sofia'
    },
    recordSale: {
      player: 'Dele Alli',
      fee: '£5,000,000',
      year: 2015,
      to: 'Tottenham Hotspur'
    },
    topScorer: {
      name: 'Izale McLeod',
      goals: 60,
      seasonRecord: 21,
      years: '2004-2007'
    },
    mostAppearances: {
      name: 'Dean Lewington',
      apps: 850,
      years: '2004-present'
    },
    honours: [
      { title: 'League One Champions', years: ['2007-08'] },
      { title: 'League Two Play-off Winners', years: ['2007-08'] },
      { title: 'EFL Trophy Winners', years: ['2007-08'] },
      { title: 'League Two Runners-up', years: ['2005-06'] },
      { title: 'League One Runners-up', years: ['2014-15'] },
      { title: 'FA Cup Best Finish', years: ['Fifth Round 2022-23'] }
    ],
    history: {
      founding: "Milton Keynes Dons Football Club was founded on 21 June 2004 following the controversial relocation of Wimbledon F.C. to Milton Keynes. The club was established as a phoenix club after Wimbledon's move 56 miles north to Buckinghamshire. MK Dons played their first competitive match on 7 August 2004, losing 3-1 to Barnsley in the Football League One. The club inherited Wimbledon's Football League place but not its history, choosing to establish a new identity. Stadium MK, their current home, opened in 2007 and has since become one of the best stadiums in the lower leagues. The club's motto 'Standing on the Shoulders of Giants' acknowledges both the controversy of their formation and their ambition to build something new.",
      
      earlySuccess: "Under manager Paul Ince, MK Dons achieved their first major success by winning the Football League Trophy in 2007-08, defeating Grimsby Town 2-0 at Wembley Stadium. That same season, they secured promotion to the Championship by winning the League One title with 97 points—a remarkable achievement for a club just four years old. The 2007-08 season represented a historic treble for the club, having also won the Football League Trophy. This rapid rise through the divisions was unprecedented for a club of such recent origin. Key players during this period included captain Keith Andrews, striker Aaron Wilbraham, and defender Dean Lewington, who would become the club's all-time appearance record holder.",
      
      championshipYears: "MK Dons spent the 2008-09 season in the Championship but were relegated after finishing 23rd. They returned to League One where they would spend most of the next decade. Under manager Karl Robinson, appointed in 2010 as the youngest manager in the Football League at age 29, the club developed a reputation for attractive, possession-based football. The 2014-15 season saw MK Dons finish as League One runners-up with 91 points, securing automatic promotion back to the Championship. That season featured a memorable 4-0 victory over Manchester United in the League Cup second round—one of the biggest cup shocks in the club's history. Dele Alli, a product of the club's academy, was sold to Tottenham Hotspur for £5 million in February 2015, a then-record sale for the club.",
      
      deleAlliEra: "The development and sale of Dele Alli represents one of MK Dons' greatest successes. Alli joined the club's academy at age 11 and made his first-team debut at 16. His breakthrough 2014-15 season saw him score 16 goals from midfield and win the Football League Young Player of the Year award. His £5 million transfer to Tottenham (potentially rising to £10 million with add-ons) provided significant funds for the club. Alli would go on to become an England international and PFA Young Player of the Year, validating MK Dons' youth development model. Other academy graduates like Sam Baldock, George Williams, and Brendan Galloway also progressed to Premier League football.",
      
      recentHistory: "The club faced financial challenges in the late 2010s, leading to relegation to League One in 2016 and then to League Two in 2018. However, under manager Russell Martin (2019-2021), the club established a distinctive possession-based style, regularly recording over 70% possession in matches. This 'MK Dons way' became a hallmark of the club's identity. The 2020-21 season saw MK Dons reach the League One play-offs under Martin before his departure to Swansea City. In the 2021-22 season under Liam Manning, the club finished 3rd in League One with 89 points, narrowly missing automatic promotion and losing in the play-off semi-finals.",
      
      currentSituation: "The 2025-26 season sees MK Dons competing in League Two under manager Mike Williamson, who was appointed in October 2023. As of January 2026, the club sits 5th in League Two with 45 points from 27 matches, firmly in play-off contention. Stadium MK continues to be a venue for England international matches and major cup fixtures, having hosted England U21 matches and Women's FA Cup finals. The club's academy remains Category 2 status and continues to produce talented players. Off the field, the club has established strong community links in Milton Keynes, with average attendances consistently among the highest in League Two, reflecting the growing fanbase in the new city.",
      
      futureOutlook: "Looking ahead to 2026, MK Dons aim to secure promotion back to League One. The club's infrastructure—including Stadium MK, a Category 2 academy, and modern training facilities at Woughton-on-the-Green—provides a solid foundation for future growth. Ownership by Pete Winkelman, who has been chairman since the club's formation, provides stability. The club continues to navigate the unique challenge of building a fanbase in a city without traditional football heritage while maintaining its distinctive playing philosophy. With a blend of experienced professionals like Dean Lewington (still playing at age 41) and promising young talent, MK Dons represent a modern approach to football club development in 21st century England."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white">
      <header className="bg-gradient-to-r from-white to-gray-300 text-black border-b-4 border-yellow-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">MKD</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-black">{clubData.name}</h1>
                <p className="text-gray-700 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-gray-600 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-400 hover:to-red-400 text-white rounded-lg transition-all font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Calendar className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-gray-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
            <p className="text-gray-500 text-xs mt-1">Phoenix club formed in Milton Keynes</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Home className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-gray-600 text-sm">Stadium</p>
            <p className="text-black text-sm font-bold">Stadium MK</p>
            <p className="text-gray-500 text-xs mt-1">Opened 2007 • 30,500 capacity</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-gray-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-gray-500 text-xs mt-1">Largest in League Two</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-gray-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
            <p className="text-gray-500 text-xs mt-1">New city • Strong community links</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-yellow-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-500" />
            Club History (2004-2026)
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Foundation & Controversy (2004)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Immediate Success & Historic Treble (2004-2008)</h3>
              <p>{clubData.history.earlySuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Championship Years & Karl Robinson Era (2008-2016)</h3>
              <p>{clubData.history.championshipYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Dele Alli & Academy Success (2014-2015)</h3>
              <p>{clubData.history.deleAlliEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Possession Football & Recent Progress (2016-2023)</h3>
              <p>{clubData.history.recentHistory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Current Season 2025-26</h3>
              <p>{clubData.history.currentSituation}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">Future Outlook (2026 onwards)</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-gray-800">{clubData.recordSigning.player}</p>
              <p className="text-gray-600 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-gray-800">{clubData.recordSale.player}</p>
              <p className="text-gray-600 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-gray-500 mt-2">★ Became England international & PFA Young Player of the Year</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-gray-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-gray-500 text-sm">{clubData.topScorer.seasonRecord} goals in a season (club record)</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-500">{clubData.topScorer.goals}</p>
                <p className="text-gray-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-gray-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-gray-500 text-sm">Club captain since 2004 • Still active at age 41</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-500">{clubData.mostAppearances.apps}</p>
                <p className="text-gray-600">Games</p>
                <p className="text-xs text-gray-500 mt-1">English football record for one club</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-yellow-500 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-500" />
            Honours & Achievements (2004-2026)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg p-4 border-2 border-red-200">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-100 to-yellow-100 rounded-lg border-2 border-red-300">
            <p className="text-black text-center">
              <strong className="text-red-600">Historic Treble 2007-08:</strong> Won League One title (97 points), Football League Trophy, and promotion to Championship—all in the club's fourth season
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-300">
            <p className="text-black text-center">
              <strong className="text-blue-600">Dele Alli Development:</strong> Academy graduate sold to Tottenham for £5m in 2015, became England international and PFA Young Player of the Year
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg border-2 border-green-300">
            <p className="text-black text-center">
              <strong className="text-green-600">Manchester United 4-0 (2014):</strong> One of the biggest League Cup shocks—MK Dons thrashed Louis van Gaal's United at Stadium MK
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-300">
            <p className="text-black text-center">
              <strong className="text-purple-600">Stadium MK:</strong> 30,500-seater stadium opened in 2007—hosts England U21 matches & Women's FA Cup finals. Largest in League Two
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-300">
            <p className="text-black text-center">
              <strong className="text-orange-600">Possession Pioneers:</strong> Under Russell Martin, set English records for possession (84% vs Lincoln, 2021)—the 'MK Dons way'
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-lg border-2 border-gray-300">
            <p className="text-black text-center">
              <strong className="text-gray-700">Dean Lewington Record:</strong> 850+ appearances since 2004—English football record for most games at one club. Still playing in 2026
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg border-2 border-indigo-300">
            <p className="text-black text-center">
              <strong className="text-indigo-600">Current Season 2025-26:</strong> 5th in League Two • 45 points from 27 games • Play-off contenders under Mike Williamson
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-teal-100 to-green-100 rounded-lg border-2 border-teal-300">
            <p className="text-black text-center">
              <strong className="text-teal-600">Future Vision:</strong> Category 2 academy • Modern infrastructure • Building fanbase in new city • Promotion push to League One
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">2026 Target: Promotion</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Youth Development</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Community Growth</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}