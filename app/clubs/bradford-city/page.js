'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function BradfordCityFC() {
  const clubData = {
    name: 'Bradford City AFC',
    nickname: 'The Bantams',
    founded: 1903,
    originalName: 'Bradford City Association Football Club',
    status: 'FA Cup Winners 1911',
    stadium: 'University of Bradford Stadium',
    capacity: '25,136',
    location: 'Bradford, West Yorkshire',
    league: 'League One',
    recordSigning: {
      player: 'David Hopkin',
      fee: '£2,500,000',
      year: 2000,
      from: 'Leeds United'
    },
    recordSale: {
      player: 'Dean Saunders',
      fee: '£2,900,000',
      year: 1991,
      to: 'Derby County'
    },
    topScorer: {
      name: 'Bobby Campbell',
      goals: 143,
      seasonRecord: 33,
      years: '1974-1980, 1981-1984'
    },
    mostAppearances: {
      name: 'Ces Podd',
      apps: 502,
      years: '1970-1984'
    },
    honours: [
      { title: 'FA Cup Winners', years: ['1911'] },
      { title: 'Second Division Champions', years: ['1907-08'] },
      { title: 'Third Division Champions', years: ['1984-85'] },
      { title: 'Third Division Play-off Winners', years: ['1995-96'] },
      { title: 'League Two Play-off Winners', years: ['2012-13'] },
      { title: 'Football League Trophy Winners', years: ['2023-24'] }
    ],
    history: {
      founding: "Bradford City Association Football Club was founded in 1903 to bring league football to Bradford, following Manningham Rugby Football Club's decision to switch codes. The club was elected directly into the Football League Second Division in 1903—a rare achievement for a newly-formed club. Bradford City took over Manningham's ground at Valley Parade, which has been their home ever since. The club's early years were remarkably successful, with promotion to the First Division achieved in 1907-08. Bradford City adopted claret and amber as their colors, inspired by the famous Aston Villa team of that era. The nickname 'The Bantams' originated from the small but fierce bantam bird, reflecting the club's fighting spirit despite their relatively small stature in football terms.",
      
      faCupGlory: "The 1910-11 season brought Bradford City's greatest achievement—winning the FA Cup. Under manager Peter O'Rourke, Bradford City defeated Newcastle United 1-0 in a replay at Old Trafford after a 0-0 draw at Crystal Palace. The winning goal was scored by Jimmy Speirs, the Scottish forward who captained the team to glory. This made Bradford City the first club from the Third Division of English football to win the FA Cup, a remarkable achievement that still stands as one of football's great cup shocks. The victory parade through Bradford attracted enormous crowds, with the team returning as heroes to the industrial city. This period also saw Bradford City establish themselves as a competitive First Division side, regularly finishing in mid-table and developing a reputation for attractive, attacking football.",
      
      valleyParadeFire: "May 11, 1985, remains the darkest day in Bradford City's history—and one of English football's greatest tragedies. During a match against Lincoln City to celebrate Bradford's Third Division championship, a fire broke out in the main stand at Valley Parade. Within minutes, the wooden stand was engulfed in flames. The disaster claimed 56 lives and injured at least 265 people. The tragedy led to major changes in football ground safety regulations across England, including the banning of wooden stands and the introduction of the Popplewell Inquiry recommendations. The disaster forged an unbreakable bond between the club and its community, with Bradford City rebuilding and returning to Valley Parade in 1986 with a new, modern all-seater stadium. The annual memorial service at Centenary Square remains a poignant reminder of the club's resilience.",
      
      modernSuccess: "The late 1990s and early 2000s brought Bradford City's most successful modern period. Under manager Paul Jewell, Bradford City won promotion to the Premier League via the play-offs in 1998-99, defeating Wolverhampton Wanderers 3-2 on aggregate in the semi-finals and then Ipswich Town 2-0 in the final. The 1999-2000 season saw Bradford City compete in the Premier League for the first time, famously surviving on the final day with a 1-0 victory over Liverpool. Key players included Stuart McCall, Dean Windass, and Italian striker Benito Carbone. Although relegated after two seasons, Bradford City established themselves as a competitive Championship side for several years. The club also reached the League Cup final in 2013, losing 5-0 to Swansea City at Wembley.",
      
      phoenixParkRise: "Following relegation from the Championship in 2004, Bradford City entered a difficult period that included administration in 2004 and 2012. However, the club demonstrated remarkable resilience. Under manager Phil Parkinson, Bradford City achieved promotion from League Two via the play-offs in 2012-13, defeating Northampton Town 3-0 in the final at Wembley. This began a period of stability and cup success. The 2014-15 season was particularly memorable, as Bradford City reached the FA Cup quarter-finals and defeated Chelsea 4-2 at Stamford Bridge in the fourth round—one of the greatest cup upsets in modern times. Bradford City also reached the League One play-off final in 2017, losing 1-0 to Millwall at Wembley.",
      
      recentHistory: "Bradford City have continued to be competitive in League Two while maintaining their cup pedigree. The club reached the League Two play-offs in 2023, losing to Carlisle United in the semi-finals. In the 2023-24 season, Bradford City won the Football League Trophy (now called the Bristol Street Motors Trophy), defeating Wycombe Wanderers 2-1 in the final at Wembley. This marked the club's first major trophy since their historic 1911 FA Cup win. The victory was particularly significant as it came in front of over 30,000 Bradford City supporters at Wembley, demonstrating the club's tremendous fan support despite their league position. The club continues to operate with one of the largest attendances in League Two, regularly filling the University of Bradford Stadium.",
      
      communityClub: "Bradford City is deeply embedded in its local community, with particularly strong connections to South Asian communities in Bradford. The club has been at the forefront of efforts to promote diversity and inclusion in football, with initiatives like the 'One in a Million' campaign. The University of Bradford Stadium (formerly Valley Parade) remains one of English football's most atmospheric grounds, with its steep stands creating an intimidating environment for visiting teams. Bradford City's supporters are known for their passionate loyalty, with the club maintaining average attendances well above 15,000 despite playing in the fourth tier—a testament to the club's special place in the city's identity. The club's community work extends through the Bradford City Community Foundation, which engages with thousands of local residents annually.",
      
      futureOutlook: "Looking ahead, Bradford City aim to secure promotion back to League One and eventually return to the Championship. Under current ownership and management, the club is focusing on sustainable growth, community engagement, and developing young talent through their academy. Plans include further development of the University of Bradford Stadium's facilities and strengthening commercial operations. With strong local support, a modern stadium, and a proud history that includes FA Cup glory and Premier League football, Bradford City are building toward a future that honors their past while embracing new opportunities. The club's resilience through tragedy and adversity has forged a unique bond with its supporters that continues to drive the club forward."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-claret-800 via-amber-900 to-claret-800">
      <header className="bg-gradient-to-r from-claret-800 to-amber-800 text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-claret-800">BCAFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-amber-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-amber-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-claret-800 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-claret-800 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Calendar className="w-8 h-8 text-amber-400 mb-2" />
            <p className="text-amber-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-amber-500 text-xs mt-1">Elected directly to Football League</p>
          </div>
          <div className="bg-claret-800 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-amber-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-amber-500 text-xs mt-1">Historic Valley Parade site</p>
          </div>
          <div className="bg-claret-800 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-amber-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-amber-500 text-xs mt-1">Largest in League Two</p>
          </div>
          <div className="bg-claret-800 rounded-lg p-6 border-2 border-amber-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-amber-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-amber-500 text-xs mt-1">West Yorkshire • Historic city</p>
          </div>
        </div>

        <section className="bg-claret-800 rounded-xl p-8 border-2 border-amber-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-amber-400" />
            The Bradford City Story: FA Cup Glory & Resilience
          </h2>
          <div className="space-y-6 text-amber-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Founding & Early Success (1903-1914)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">FA Cup Glory 1911 & First Division Era</h3>
              <p>{clubData.history.faCupGlory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Valley Parade Fire & Community Resilience (1985)</h3>
              <p>{clubData.history.valleyParadeFire}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Modern Success & Premier League Adventure (1990-2004)</h3>
              <p>{clubData.history.modernSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Phoenix Park Rise & Cup Giant-Killing (2004-2017)</h3>
              <p>{clubData.history.phoenixParkRise}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Recent History & Trophy Success</h3>
              <p>{clubData.history.recentHistory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Community Club & Diverse Fanbase</h3>
              <p>{clubData.history.communityClub}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Future Outlook & Ambitions</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-claret-800 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
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

          <div className="bg-claret-800 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-amber-100">{clubData.recordSale.player}</p>
              <p className="text-amber-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-amber-500 mt-2">Welsh international striker</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-claret-800 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-amber-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-amber-500 text-sm">{clubData.topScorer.seasonRecord} goals in 1976-77 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-amber-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-claret-800 rounded-xl p-6 border-2 border-amber-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-amber-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-amber-500 text-sm">Midfielder • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-amber-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-claret-800 rounded-xl p-8 border-2 border-amber-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-amber-400" />
            Honours & Historical Achievements
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
          
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-900 to-claret-900 rounded-lg border-2 border-amber-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">FA Cup Winners 1911:</strong> Defeated Newcastle United 1-0 in replay • First Third Division club to win FA Cup • Jimmy Speirs scored winner
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-claret-900 rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Flame className="w-5 h-5 mr-2 text-amber-300" />
              <strong className="text-amber-300 text-lg">Valley Parade Fire 1985</strong>
            </div>
            <p className="text-white text-center">
              56 lives lost • Football safety revolution • Club & community resilience • Rebuilt stadium 1986
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-claret-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Premier League Survival 2000:</strong> Beat Liverpool 1-0 on final day • David Wetherall scored winner • Two seasons in top flight
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-claret-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Chelsea Giant-Killing 2015:</strong> Won 4-2 at Stamford Bridge • FA Cup fourth round • One of greatest modern cup shocks
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-claret-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-amber-300" />
              <strong className="text-amber-300 text-lg">The Bantams Identity</strong>
            </div>
            <p className="text-white text-center">
              Claret & amber colors • Nickname from bantam bird • Fighting spirit • Strong community bonds
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-claret-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-amber-300">Wembley Trophy 2024:</strong> Won Football League Trophy • Beat Wycombe 2-1 • First major trophy since 1911
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-claret-900 rounded-lg border-2 border-gray-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-amber-300" />
              <strong className="text-amber-300 text-lg">Community & Diversity</strong>
            </div>
            <p className="text-white text-center">
              Strong South Asian fanbase • 'One in a Million' campaign • Community Foundation • Inclusive club
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-claret-900 to-black rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-amber-300">Bradford's Pride:</strong> 121-year history • FA Cup glory • Premier League alumni • Resilience through adversity
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-amber-800 text-amber-200 rounded-full text-xs font-bold">FA Cup 1911</span>
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">Resilience</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Premier League</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Community</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}