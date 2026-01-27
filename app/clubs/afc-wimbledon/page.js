'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Users2, Flag } from 'lucide-react';

export default function AFCWimbledonPage() {
  const clubData = {
    name: 'AFC Wimbledon',
    nickname: 'The Dons',
    founded: 2002,
    originalName: 'AFC Wimbledon',
    status: 'Greatest Phoenix Club Story',
    stadium: 'Plough Lane',
    capacity: '9,215',
    location: 'Wimbledon, London',
    league: 'League One',
    recordSigning: {
      player: 'Ali Al-Hamadi',
      fee: '£100,000',
      year: 2023,
      from: 'Wycombe Wanderers'
    },
    recordSale: {
      player: 'Ali Al-Hamadi',
      fee: '£2,000,000',
      year: 2024,
      to: 'Ipswich Town'
    },
    topScorer: {
      name: 'Lyle Taylor',
      goals: 44,
      seasonRecord: 20,
      years: '2017-2018'
    },
    mostAppearances: {
      name: 'Will Nightingale',
      apps: 246,
      years: '2014-2023'
    },
    honours: [
      { title: 'League Two Play-off Winners', years: ['2015-16'] },
      { title: 'Conference Premier Champions', years: ['2010-11'] },
      { title: 'Conference South Play-off Winners', years: ['2008-09'] },
      { title: 'Isthmian League Premier Division Champions', years: ['2008-09'] },
      { title: 'Isthmian League Division One Champions', years: ['2004-05'] },
      { title: 'Combined Counties League Champions', years: ['2003-04'] }
    ],
    history: {
      founding: "AFC Wimbledon was founded on 30 May 2002 by former Wimbledon FC supporters following the controversial decision by the Football Association to allow Wimbledon FC's relocation to Milton Keynes. The original Wimbledon FC had been founded in 1889 and famously won the FA Cup in 1988, beating Liverpool 1-0 in the final. After the relocation approval, over 4,500 supporters gathered at Wimbledon's Cannons pub to form a phoenix club. Starting in the Combined Counties League Premier Division (Level 9 of English football), AFC Wimbledon set out on one of the most remarkable journeys in football history. The club adopted the motto 'The Crazy Gang is dead, long live the Dons' and committed to remaining fan-owned and community-focused.",
      
      meteoricRise: "Under manager Dave Anderson, AFC Wimbledon won the Combined Counties League in their inaugural 2002-03 season, securing promotion to the Isthmian League Division One. This began an unprecedented rise through the football pyramid. In 2004-05, they won the Isthmian League Division One title. After narrowly missing promotion for several seasons, Terry Brown took over as manager in 2007 and guided the club to the Isthmian League Premier Division title in 2008-09, followed by Conference South promotion via the play-offs that same season. The 2010-11 season was historic—AFC Wimbledon won the Conference Premier title, securing promotion to the Football League just 9 years after formation. This completed 'The Rise'—from non-league to professional football in record time.",
      
      footballLeague: "AFC Wimbledon's first season in League Two (2011-12) saw them finish 16th, establishing themselves as a Football League club. Under manager Neal Ardley (a former Wimbledon FC player), the club continued to progress. The 2015-16 season brought historic achievement—AFC Wimbledon finished 7th in League Two and won the play-offs, defeating Plymouth Argyle 2-0 in the final at Wembley to secure promotion to League One. This marked a fairytale return to the third tier, just 14 years after forming in the 9th division. The 2016-17 season saw them finish 15th in League One, consolidating their position. Throughout this period, the club campaigned tirelessly to return to their spiritual home in Wimbledon, having played at Kingsmeadow (shared with Kingstonian and later Chelsea's women's team).",
      
      ploughLaneReturn: "After 18 years in exile, AFC Wimbledon achieved another dream on 3 November 2020—returning to Plough Lane. The new 9,215-seat stadium was built on the site of Wimbledon Greyhound Stadium, just 250 yards from where the original Plough Lane stood. The first match at the new stadium was a 2-2 draw with Doncaster Rovers. This homecoming represented the culmination of years of fan fundraising, campaigning, and determination. The stadium opened during the COVID-19 pandemic, initially without fans, but when supporters finally returned, it marked an emotional moment for the club and community. The new Plough Lane stands as a monument to fan power and community resilience in modern football.",
      
      fanOwnership: "AFC Wimbledon represents one of the most successful examples of fan ownership in world football. The club is owned by the Dons Trust, a supporters' trust with members who each have one vote in club decisions. This model has kept the club financially stable and true to its community roots. Key decisions, including the manager appointment, stadium move, and major investments, are voted on by members. The club's motto 'By the fans, for the fans' is lived daily. AFC Wimbledon's success has inspired fan groups worldwide and demonstrated that supporter-owned clubs can compete professionally while maintaining their soul. The club remains fiercely proud of its identity and continues to campaign against franchise football.",
      
      recentDevelopments: "Following their return to Plough Lane, AFC Wimbledon have continued to build on their unique fan-owned model. The club has focused on sustainable growth, community engagement, and developing young talent through their academy. The Dons Trust continues to grow its membership, ensuring the club remains true to its founding principles of fan ownership and community involvement. AFC Wimbledon's journey from non-league to League One stands as one of football's greatest modern stories, inspiring supporters' groups around the world.",
      
      futureOutlook: "Looking ahead, AFC Wimbledon aim to continue their progress while maintaining their unique fan-owned identity. The club has plans to potentially expand Plough Lane in the future and continues to focus on sustainable growth. With their commitment to community engagement and developing local talent, AFC Wimbledon represents a beacon of hope for football fans everywhere—proving that clubs can be successful while remaining true to their community and principles. The club's story continues to inspire those who believe in the power of fan ownership in modern football."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white border-b-4 border-yellow-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-blue-700">AFCW</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-blue-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-yellow-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-blue-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-700 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Calendar className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-slate-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-slate-400 text-xs mt-1">Phoenix club formed by fans</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-slate-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-slate-400 text-xs mt-1">Returned 2020 after 18 years</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-slate-400 text-xs mt-1">Expandable to 20,000</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-yellow-500 shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-slate-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-slate-400 text-xs mt-1">South London community</p>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border-2 border-yellow-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            The AFC Wimbledon Story: Greatest Phoenix Club
          </h2>
          <div className="space-y-6 text-slate-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Foundation & Fan Rebellion (2002)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Meteoric Rise Through 9 Divisions (2002-2011)</h3>
              <p>{clubData.history.meteoricRise}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Football League & Wembley Promotion (2011-2016)</h3>
              <p>{clubData.history.footballLeague}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Plough Lane Homecoming (2020)</h3>
              <p>{clubData.history.ploughLaneReturn}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Fan Ownership Model</h3>
              <p>{clubData.history.fanOwnership}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Recent Developments</h3>
              <p>{clubData.history.recentDevelopments}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3">Future Outlook</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-200">{clubData.recordSigning.player}</p>
              <p className="text-slate-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-200">{clubData.recordSale.player}</p>
              <p className="text-slate-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-400 text-sm">{clubData.topScorer.seasonRecord} goals in 2017-18 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-slate-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-yellow-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-slate-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-400 text-sm">Academy graduate • Club captain</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border-2 border-yellow-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-blue-900 rounded-lg p-4 border-2 border-blue-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-blue-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-900 to-yellow-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Greatest Phoenix Story:</strong> Formed 2002 after Wimbledon FC relocation • Rose from 9th tier to League One in 14 years • Fan-owned success
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-blue-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Historic Wembley Promotion (2016):</strong> Beat Plymouth Argyle 2-0 in League Two play-off final • Returned to third tier after 14-year journey
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-blue-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Plough Lane Return (2020):</strong> Returned to spiritual home after 18 years in exile • New 9,215-seat stadium • Fan-funded achievement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Users2 className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Fan Ownership Model</strong>
            </div>
            <p className="text-white text-center">
              Owned by Dons Trust • 3,000+ member owners • 'By the fans, for the fans' • Inspired supporter groups worldwide
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-blue-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Record Transfer Profit (2024):</strong> Sold Ali Al-Hamadi to Ipswich for £2m • Bought for £100k year earlier • Smart recruitment model
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-lg border-2 border-indigo-600">
            <div className="flex items-center justify-center mb-2">
              <Flag className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Against Franchise Football</strong>
            </div>
            <p className="text-white text-center">
              Formed in protest against MK Dons move • Campaign for football integrity • Beacon of hope for fan power
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-black rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Future Vision:</strong> Expand Plough Lane to 20,000 • Continue sustainable growth • Maintain fan ownership • Inspire football communities
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Phoenix Club</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">Fan Owned</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Plough Lane</span>
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">Community</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}