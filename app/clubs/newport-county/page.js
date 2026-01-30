'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flag, Shield } from 'lucide-react';

export default function NewportCountyAFC() {
  const clubData = {
    name: 'Newport County AFC',
    nickname: 'The Exiles / The Ironsides',
    founded: 1912,
    originalName: 'Newport County AFC',
    reformed: 1989,
    stadium: 'Rodney Parade',
    capacity: '7,850',
    location: 'Newport, South Wales',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Kevin Ellison',
      fee: '£70,000',
      year: 2007,
      from: 'Chester City'
    },
    recordSale: {
      player: 'Reuben Reid',
      fee: '£150,000',
      year: 2008,
      to: 'West Bromwich Albion'
    },
    topScorer: {
      name: 'Tommy Tynan',
      goals: 119,
      seasonRecord: 31,
      years: '1975-1978'
    },
    mostAppearances: {
      name: 'John Relish',
      apps: 492,
      years: '1972-1984'
    },
    honours: [
      { title: 'Welsh Cup Winners', years: ['1980'] },
      { title: 'Third Division South Champions', years: ['1938-39'] },
      { title: 'Fourth Division Champions', years: ['1979-80'] },
      { title: 'Conference South Play-off Winners', years: ['2012-13'] },
      { title: 'FA Trophy Runners-up', years: ['2011-12'] },
      { title: 'EFL Trophy Runners-up', years: ['2023-24'] }
    ],
    history: {
      founding: "Newport County Association Football Club was founded in 1912 at the Riverina Hotel in Newport, joining the Southern League for the 1912–13 season. The club's early years were disrupted by World War I, but they were elected to the Football League Third Division South in 1920. Newport County became the first Welsh club to reach the quarter-finals of the FA Cup in 1949. The club enjoyed its golden era in the late 1930s, winning the Third Division South title in 1938-39 and reaching the quarter-finals of the FA Cup. However, World War II interrupted what promised to be their first season in the Second Division. Post-war, the club struggled and was relegated from the Third Division in 1962, beginning a long period of decline.",
      
      goldenEra: "The late 1970s and early 1980s marked Newport County's most successful period. Under manager Len Ashurst, the club won the Fourth Division championship in 1979-80 with a record 91 points. That same season, Newport achieved European qualification by winning the Welsh Cup, defeating Shrewsbury Town 4-1 in a replay. This earned them a place in the European Cup Winners' Cup for the 1980-81 season. In one of the most famous nights in Welsh football history, Newport defeated East German powerhouse Carl Zeiss Jena 4-0 at Somerton Park in the first leg of the first round. Although they lost the second leg 5-1 in East Germany, the aggregate 5-5 score meant Newport progressed on away goals—becoming the first Welsh club to eliminate East German opposition. They eventually lost to eventual finalists Lokomotive Leipzig in the second round.",
      
      financialCollapse: "Tragedy struck in the 1980s as financial mismanagement led to the club's collapse. Despite the European adventure, the club accumulated massive debts. In 1987, Newport were relegated from the Football League after finishing bottom of the Fourth Division. The final blow came in February 1989 when the club was expelled from the Football Conference and wound up with debts of £330,000. The last game of the original Newport County was a 1-1 draw with Scarborough on 25 February 1989. The club's demise was particularly poignant given their European exploits just eight years earlier. Supporters watched in despair as the club's assets, including Somerton Park, were sold off.",
      
      phoenixRising: "Just months after the original club's collapse, Newport County AFC was reformed in June 1989 by supporters. Starting in the Hellenic League Division One (Level 9 of English football), the phoenix club began the long journey back. The club played at Newport Stadium while working towards a return to Newport proper. After several promotions, Newport reached the Football Conference in 2010. Under manager Justin Edinburgh, Newport achieved promotion back to the Football League in 2013 via the Conference play-offs, defeating Wrexham 2-0 at Wembley. This marked a remarkable comeback—24 years after expulsion, Newport County were back in the Football League.",
      
      giantKillings: "Newport County have developed a reputation as FA Cup giant-killers in the modern era. In 2017-18, they defeated Leeds United 2-1 in the third round. The following season, they eliminated Leicester City 2-1 and Middlesbrough (after a replay) before taking Tottenham Hotspur to a replay in the fourth round. In 2018-19, they defeated Premier League Leicester City at Rodney Parade. Their most famous recent cup run came in 2022-23 when they reached the fourth round, defeating Luton Town and taking Tottenham to a replay. The club's ability to defeat higher-division opponents at Rodney Parade has become legendary, with the tight pitch and passionate atmosphere creating a formidable challenge for visiting teams.",
      
      currentSuccess: "The 2023-24 season was one of Newport's most successful in modern times. Under manager Graham Coughlan, Newport reached the EFL Trophy final at Wembley Stadium, losing 2-0 to Bolton Wanderers. They also finished 12th in League Two while maintaining their reputation as cup specialists. The 2024-25 season saw continued progress with a 10th-place finish. As of January 2026, Newport County sit 8th in League Two under Coughlan, with 42 points from 27 matches—just three points off the play-off places. The club continues to operate at Rodney Parade, sharing the ground with Newport RFC and Dragons rugby teams. Average attendances have grown to around 4,500, reflecting the club's resurgence in the community.",
      
      futureOutlook: "Looking to 2026 and beyond, Newport County aim to secure promotion to League One for the first time since 1987. The club has established financial stability under supporter ownership through the Newport County AFC Supporters' Trust. Plans are underway for a potential new stadium or significant redevelopment of Rodney Parade to improve facilities. The club's youth academy continues to produce talent, with several players progressing to the first team. Newport's unique identity as a Welsh club in the English football pyramid, combined with their remarkable survival story, makes them one of football's great phoenix tales. With strong community support and sustainable management, the Exiles look to build on their recent successes."
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
          <div className="bg-black rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Calendar className="w-8 h-8 text-amber-400 mb-2" />
            <p className="text-amber-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-amber-500 text-xs mt-1">Reformed {clubData.reformed}</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-amber-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-amber-500 text-xs mt-1">Shared with rugby teams</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-amber-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-amber-500 text-xs mt-1">Intimidating atmosphere</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-amber-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-amber-500 text-xs mt-1">Welsh club in English pyramid</p>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-amber-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-amber-400" />
            The Newport County Story (1912-2026)
          </h2>
          <div className="space-y-6 text-amber-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Foundation & Early Years (1912-1960)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Golden Era & European Adventure (1978-1981)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Financial Collapse & Expulsion (1987-1989)</h3>
              <p>{clubData.history.financialCollapse}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Phoenix Club & Return to League (1989-2013)</h3>
              <p>{clubData.history.phoenixRising}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Giant-Killing Reputation (2017-2023)</h3>
              <p>{clubData.history.giantKillings}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Current Success (2023-2026)</h3>
              <p>{clubData.history.currentSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Future Outlook</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-amber-100">{clubData.recordSigning.player}</p>
              <p className="text-amber-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-amber-100">{clubData.recordSale.player}</p>
              <p className="text-amber-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-amber-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-amber-500 text-sm">{clubData.topScorer.seasonRecord} goals in 1979-80 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-amber-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-amber-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-amber-500 text-sm">Club record holder</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-amber-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-amber-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-amber-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-amber-900 rounded-lg p-4 border-2 border-amber-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-amber-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-900 to-red-900 rounded-lg border-2 border-amber-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">European Glory (1980-81):</strong> Defeated East German giants Carl Zeiss Jena 4-0 at home in Cup Winners' Cup—first Welsh club to eliminate East German opposition
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-amber-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">The Great Escape:</strong> Reformed in 1989 by supporters after expulsion—returned to Football League in 2013 after 24-year journey
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-amber-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">FA Cup Giant-Killers:</strong> Defeated Leeds (2018), Leicester City (2019), Middlesbrough (2019)—took Tottenham to replays twice
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-amber-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Historic 1979-80 Season:</strong> Won Fourth Division with record 91 points + Welsh Cup for European qualification
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-amber-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Wembley 2024:</strong> Reached EFL Trophy final at Wembley—lost 2-0 to Bolton Wanderers
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-amber-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Current Form 2025-26:</strong> 8th in League Two • 42 points from 27 games • 3 points off play-offs under Graham Coughlan
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-900 to-orange-900 rounded-lg border-2 border-orange-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Supporter Ownership:</strong> Owned by Newport County AFC Supporters' Trust—true fan-owned club since reformation
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-amber-900 to-black rounded-lg border-2 border-amber-700">
            <p className="text-white text-center">
              <strong className="text-amber-300">Rodney Parade Fortress:</strong> Tight pitch and passionate atmosphere make it a nightmare for visiting teams
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-amber-800 text-amber-200 rounded-full text-xs font-bold">Giant-Killers</span>
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">European History</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Fan-Owned</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Phoenix Club</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}