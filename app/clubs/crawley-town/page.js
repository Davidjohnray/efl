'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function CrawleyTownPage() {
  const clubData = {
    name: 'Crawley Town FC',
    nickname: 'The Red Devils',
    founded: 1896,
    stadium: 'Broadfield Stadium',
    capacity: '6,134',
    location: 'Crawley, West Sussex',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Richard Brodie', fee: '£275,000', year: 2011, from: 'Gateshead' },
    recordSale: { player: 'Tyrone Barnett', fee: '£1,100,000', year: 2012, to: 'Peterborough United' },
    topScorer: { name: 'Matt Tubbs', goals: '49 (league)', years: '2010-2012' },
    mostAppearances: { name: 'John Maggs', apps: '440+', years: '1970s-1990s' },
    honours: [
      { title: 'League Two Play-off Winners', years: ['2023-24'] },
      { title: 'League Two Runners-up', years: ['2011-12'] },
      { title: 'Conference Champions', years: ['2010-11'] },
      { title: 'Southern League Champions', years: ['2003-04'] },
      { title: 'Sussex Senior Cup Winners', years: ['1990', '1991'] }
    ],
    history: {
      founding: "Crawley Town was founded in 1896 as Crawley Football Club and became a founding member of the West Sussex League that same year. The club spent its early years in junior leagues, transferring to the Mid-Sussex League in 1901 where they won the title in their second season. However, the club disbanded at the end of the 1934-35 season. Three years later in 1938, Crawley was reformed and joined the Brighton, Hove & District League. They switched to the Sussex County League in 1951 and then the Metropolitan League in 1956.",
      professionalism: "In 1958, the club changed its name to Crawley Town Football Club. They turned semi-professional in 1962 and joined Division One of the Southern League in 1963. The club spent the next four decades in the Southern League, securing promotion to the Premier Division in 1983-84 where they remained for 21 seasons. During this period, they won the Sussex Senior Cup in 1990 and 1991. In 2003-04, Crawley won the Southern League Championship and earned promotion to the Conference.",
      nearCollapse: "The club turned fully professional in 2005 but immediately faced severe financial difficulties. By August 2006, Crawley Town came within one hour of being liquidated, with debts of £1.8 million. A last-minute rescue package saved the club, though they were deducted 10 points for entering administration. They survived by just one point in 2006-07, then were deducted another 6 points in 2007-08 for financial irregularities. Steve Evans was appointed manager in May 2007 and began the club's remarkable turnaround.",
      rapidRise: "In 2010-11, backed by owner Bruce Winfield, Crawley broke Conference transfer records by signing Richard Brodie for £275,000 (still a Conference record), Matt Tubbs for £70,000, and Sergio Torres. The investment paid off spectacularly. Crawley enjoyed a famous FA Cup run, defeating Championship side Derby County before losing 1-0 to Manchester United at Old Trafford (with Brodie hitting the bar in the final minutes). Just 19 days after Winfield's death from cancer in March 2011, Crawley secured the Conference title by beating Tamworth 3-0, reaching the Football League for the first time in the club's 115-year history.",
      backToBack: "In their first Football League season (2011-12), Crawley achieved the remarkable feat of back-to-back promotions, finishing runners-up in League Two to reach League One. They enjoyed another memorable FA Cup run, defeating Championship clubs Bristol City and Hull City before losing to Premier League's Stoke City in the fifth round. However, the sales of Matt Tubbs (£800,000 to AFC Bournemouth) and Tyrone Barnett (£1.1m to Peterborough) mid-season contributed to a dip in form. Crawley spent three seasons in League One before relegation in 2015.",
      modern: "After nine seasons in League Two, Crawley won the play-offs in 2024 under Scott Lindsey, defeating Crewe Alexandra 2-0 at Wembley to return to League One. However, they were immediately relegated back to League Two at the end of the 2024-25 season. In August 2025, a new investor syndicate led by Raphael Khalili acquired full ownership. Currently competing in League Two for the 2025-26 season, Crawley continue to play at Broadfield Stadium, which they moved to in 1997 after 48 years at Town Mead."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white border-b-4 border-red-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-red-600">CT</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-red-100 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-red-100 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-red-50 text-red-600 rounded-lg transition-colors font-bold"
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
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-base font-bold">Broadfield</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-sm font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-600" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Early Years & Reformation (1896-1958)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Professionalism & Southern League Era (1958-2004)</h3>
              <p>{clubData.history.professionalism}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Near Liquidation & Survival (2005-2007)</h3>
              <p>{clubData.history.nearCollapse}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Miracle Season: Conference Champions (2010-11)</h3>
              <p>{clubData.history.rapidRise}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Back-to-Back Promotions & League One (2011-2015)</h3>
              <p>{clubData.history.backToBack}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Modern Era & Yo-Yo Years (2015-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSigning.player}</p>
              <p className="text-slate-500 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-red-600 text-xs font-bold mt-2">Still a Conference record signing</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSale.player}</p>
              <p className="text-slate-500 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Prolific Striker</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Conference Top Scorer 2010-11</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-600">49</p>
                <p className="text-slate-600">League Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-500 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-600" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">FA Cup Giant-Killing (2010-11):</strong> Defeated Championship side Derby County and played Manchester United at Old Trafford, hitting the bar in the final minutes
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Back-to-Back Promotions:</strong> Conference Champions 2010-11, then immediately promoted to League One as League Two runners-up 2011-12—just 2 years in Football League to reach third tier
            </p>
          </div>
          <div className="mt-4 p-4 bg-red-100 rounded-lg border-2 border-red-500">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Near-Death Experience:</strong> Came within one hour of liquidation in August 2006, saved by last-minute rescue package—went from administration to Conference champions in just 5 years
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}