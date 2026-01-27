'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function FleetwoodTownPage() {
  const clubData = {
    name: 'Fleetwood Town FC',
    nickname: 'The Cod Army / The Fishermen',
    founded: 1997,
    stadium: 'Highbury Stadium',
    capacity: '5,327',
    location: 'Fleetwood, Lancashire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Various modest fees', fee: 'Undisclosed', year: 'N/A', from: 'Various' },
    recordSale: { player: 'Jamie Vardy', fee: '£1,700,000', year: 2012, to: 'Leicester City' },
    topScorer: { name: 'Jamie Vardy', goals: '31 (2011-12)', years: '2011-2012' },
    mostAppearances: { name: 'Nathan Pond', apps: '498+', years: '2003-2018' },
    honours: [
      { title: 'League Two Play-off Winners', years: ['2013-14'] },
      { title: 'Conference National Champions', years: ['2011-12'] },
      { title: 'Northern Premier League Champions', years: ['2007-08'] },
      { title: 'North West Counties League Champions', years: ['2004-05'] }
    ],
    history: {
      original: "The original Fleetwood FC was founded in 1908 and won the Lancashire Combination in 1923-24, the club's greatest early honour. However, financial difficulties forced them to resign from the league in February 1928. Fleetwood Windsor Villa replaced them in the Lancashire Combination and won three consecutive Lancashire Combination Cups in 1933, 1934, and 1935. The club became a founder member of the newly created Northern Premier League in 1968, but folded in 1976 due to financial difficulties.",
      reform: "The club reformed in 1977 as Fleetwood Town and joined the North West Counties League in 1982. They won the First Division championship in 1983-84 and reached the FA Vase final in 1984-85 before folding again in 1997. The current incarnation came into existence in 1997 as Fleetwood Wanderers (briefly called Fleetwood Freeport due to sponsorship) and won the North West Counties League First Division in 1998-99. The name was reverted to Fleetwood Town in 2002, setting the stage for an unprecedented transformation.",
      pilley: "In 2004, local businessman Andy Pilley took over as chairman and transformed the club's fortunes with significant financial investment. When Pilley arrived, Highbury Stadium was falling apart and attendances were in the low hundreds. His vision and funding catalyzed an extraordinary rise: North West Counties League Premier Division champions in 2004-05, promotion from Northern Premier League First Division in 2005-06, and Northern Premier League Premier Division title in 2007-08. The stadium underwent a £2m complete rebuild between 2007-2011, with all four stands constructed for the first time since 1939.",
      vardy: "In August 2011, Fleetwood signed Jamie Vardy from FC Halifax for an undisclosed fee. The 2011-12 season proved historic: Vardy scored 31 league goals (Conference Premier top scorer), and Fleetwood won the Conference National title with a club record 103 points, securing their first-ever promotion to the Football League without even kicking a ball—a draw between Wrexham and Grimsby confirmed their promotion. In May 2012, Leicester City signed Vardy for £1m (rising to £1.7m with add-ons), a non-League record transfer. Vardy would go on to win the Premier League with Leicester and earn England caps—putting Fleetwood on the global football map.",
      sixPromotions: "The 2013-14 season delivered Fleetwood's sixth promotion in ten years. After finishing 4th in League Two, they beat York City in the play-off semi-final before defeating Burton Albion 1-0 at Wembley on May 26, 2014. Antoni Sarcevic's 75th-minute 30-yard free-kick—which Burton goalkeeper Dean Lyness misjudged—secured promotion to League One for the first time. In April 2016, Sir Alex Ferguson officially opened Fleetwood's £8m Poolfoot Farm training ground complex, featuring 12 grass pitches and two 4G artificial pitches. The club had risen from the 10th tier to the third tier in just a decade—one of English football's most remarkable ascents.",
      recent: "Fleetwood spent ten seasons in League One (2014-2024), reaching the League Cup third round multiple times and consistently competing in mid-table. However, in July 2023, Andy Pilley was convicted of fraud and jailed for 13 years for mis-selling energy contracts. Following his conviction, Pilley resigned as chairman. His son Jamie Pilley acquired 98% of the club's shares through Willows 96 Holdings Ltd in 2024, with EFL approval in May. Charlie Adam, the former Liverpool and Scotland midfielder, was appointed manager in December 2023 but couldn't prevent relegation. Fleetwood finished in the League One relegation zone in 2024, ending their ten-year stay in the third tier. They now compete in League Two for the 2025-26 season."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white border-b-4 border-red-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-red-600">FT</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <p className="text-red-100 text-xl mt-2">{clubData.nickname}</p>
                <p className="text-red-100 text-sm mt-1 italic">{clubData.season} Season - League Two</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-red-50 text-red-700 rounded-lg transition-colors font-bold"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Calendar className="w-8 h-8 text-red-700 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
            <p className="text-slate-500 text-xs">(4th incarnation)</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-base font-bold">Highbury</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-600 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-700" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Original Club & Early Years (1908-1997)</h3>
              <p>{clubData.history.original}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Reform & Rebirth (1997-2003)</h3>
              <p>{clubData.history.reform}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Andy Pilley Era Begins (2004-2010)</h3>
              <p>{clubData.history.pilley}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Jamie Vardy Fairytale (2011-2012)</h3>
              <p>{clubData.history.vardy}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Six Promotions in Ten Years (2014-2016)</h3>
              <p>{clubData.history.sixPromotions}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">League One Era & Recent Challenges (2014-2026)</h3>
              <p>{clubData.history.recent}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-base text-slate-700 font-semibold">{clubData.recordSigning.player}</p>
              <p className="text-slate-500 text-sm">Modest transfer fees throughout history</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSale.player}</p>
              <p className="text-slate-500 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-red-700 text-xs font-bold mt-2">Non-League record transfer - Vardy went on to win Premier League with Leicester!</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-700 mr-3" />
              <h3 className="text-2xl font-bold text-black">Memorable Season Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Conference Premier top scorer</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-700">{clubData.topScorer.goals}</p>
                <p className="text-slate-600">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Guinness World Record holder</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-red-600 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-700" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border-2 border-red-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-700 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Meteoric Rise:</strong> SIX promotions in TEN years (2004-2014) — from 10th tier North West Counties League to League One — one of the most remarkable ascents in English football history
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Nathan Pond - World Record:</strong> Appeared in SEVEN different divisions with Fleetwood (2003-2018) — Guinness World Record for most divisions played with a single club, making 498+ appearances through six promotions
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">The Vardy Effect:</strong> Jamie Vardy's 31-goal 2011-12 season secured Fleetwood's first Football League place. His £1.7m move to Leicester was a non-League record. Vardy went on to win the Premier League, earn England caps, and forever link Fleetwood to one of football's greatest fairytales
            </p>
          </div>
          <div className="mt-4 p-4 bg-red-100 rounded-lg border-2 border-red-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Wembley Glory:</strong> Antoni Sarcevic's 75th-minute free-kick in the 2014 League Two play-off final sealed a 1-0 victory over Burton Albion at Wembley, completing Fleetwood's sixth promotion in ten years and reaching League One for the first time
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}