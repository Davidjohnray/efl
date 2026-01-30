'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function GillinghamFC() {
  const clubData = {
    name: 'Gillingham FC',
    nickname: 'The Gills',
    founded: 1893,
    originalName: 'New Brompton FC',
    stadium: 'MEMS Priestfield Stadium',
    capacity: '11,582',
    location: 'Gillingham, Kent',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Carl Asaba',
      fee: '£600,000',
      year: 1998,
      from: 'Reading'
    },
    recordSale: {
      player: 'Robert Taylor',
      fee: '£1,500,000',
      year: 1999,
      to: 'Manchester City'
    },
    topScorer: {
      name: 'Brian Yeo',
      goals: 149,
      league: 136,
      years: '1963-1975'
    },
    mostAppearances: {
      name: 'Ron Hillyard',
      apps: 657,
      years: '1974-1991'
    },
    honours: [
      { title: 'Fourth Division Champions', years: ['1963-64', '2012-13'] },
      { title: 'Second Division Play-off Winners', years: ['1999-2000'] },
      { title: 'Southern League Champions', years: ['1946-47', '1947-48'] },
      { title: 'Kent League Champions', years: ['1948-49'] }
    ],
    history: {
      founding: "Gillingham Football Club was founded on 18 May 1893 as New Brompton F.C., named after the settlement adjacent to Gillingham. The club's founders purchased the plot of land that became Priestfield Stadium through an issue of 1,500 £1 shares. The new club played its first match on 2 September 1893, losing 5-1 to Woolwich Arsenal's reserve side in front of a crowd of 2,000. The club initially played in the Southern League and became professional in 1894. In 1912, New Brompton F.C. was renamed Gillingham Football Club. Gillingham joined the Football League in 1920 as members of the Third Division South.",
      
      votedOut: "After 18 unsuccessful seasons in the Football League, Gillingham were voted out of the league in favour of Ipswich Town at the end of the 1937-38 season—one of only eight clubs to suffer this fate in Football League history. The club returned to the Southern League and won the championship in 1946-47 and 1947-48, followed by the Kent League title in 1948-49. Gillingham returned to the Football League in 1950 when the competition was expanded from 88 to 92 clubs. The club won the Fourth Division title in 1963-64 under manager Freddie Cox. Throughout the 1960s and 1970s, Gillingham remained in the lower divisions, with Brian Yeo establishing himself as the club's greatest-ever goalscorer, netting 149 goals including a club-record 31 league goals in the 1973-74 season.",
      
      cascarino: "In the mid-1980s, Gillingham's most famous signing occurred when they acquired Tony Cascarino from non-league Crockenhill in 1982—reportedly in exchange for a set of tracksuits. Cascarino scored 96 goals in 240 league appearances and later earned 88 caps for the Republic of Ireland, becoming one of the club's most celebrated success stories. In 1987, the Gills hit headlines when they won 8-1 at Southend United and 10-0 against Chesterfield on consecutive Saturdays—the latter remaining the club's record Football League victory. Under Keith Peacock, Gillingham reached the play-offs in 1986-87 but lost to Swindon Town after a replay. However, success proved short-lived as the club fell back to the Fourth Division by 1989.",
      
      survival: "In 1993, Gillingham faced their darkest hour, narrowly avoiding relegation to the Football Conference. Everything depended on the final home game against Halifax Town—billed as 'Judgement Day.' Whoever won stayed up; the loser would be relegated. In front of a packed Priestfield Stadium, goals from Tony Eeles and Paul Baker secured a crucial 2-0 victory, ensuring Gillingham's survival at Halifax's expense. The club went into administration in January 1995 and faced the threat of being expelled from the Football League. In June 1995, London-based businessman Paul Scally stepped in and bought the club for £1, appointing Tony Pulis as manager.",
      
      heartbreak: "Pulis led Gillingham to promotion in his first season, finishing second in the old Division Three. The club then embarked on an extraordinary journey to Wembley Stadium in 1999. Robert Taylor's 39 goals (including five in one match against Burnley in February) propelled the Gills to the Division Two play-off final against Manchester City on 30 May 1999. In front of 76,935 fans—the largest crowd ever to watch a Gillingham match—the Gills led 2-0 with goals from Carl Asaba and Robert Taylor with less than two minutes of normal time remaining. Incredibly, Manchester City scored through Kevin Horlock in the 90th minute, then equalized via Paul Dickov in the fifth minute of stoppage time. City won 3-1 on penalties after extra time in one of the most dramatic matches in play-off history. Soon after, Pulis was sacked for gross misconduct, and Peter Taylor was appointed manager. Robert Taylor was sold to Manchester City for £1.5 million in November 1999—the club's record transfer fee received.",
      
      triumph: "Twelve months later, with Peter Taylor at the helm, Gillingham returned to Wembley for the 2000 Division Two play-off final, backed by over 43,000 fans. Facing Wigan Athletic, the Gills found themselves trailing 2-1 going into the final six minutes of extra time. Substitutes Steve Butler (aged 38) and Andy Thomson scored with headers to secure a dramatic 3-2 victory and promotion to the second tier of English football for the first time in the club's 107-year history. Between 2000 and 2005, Gillingham enjoyed their only period in the second tier, achieving their highest-ever league finish of 11th place in 2002-03 under Andy Hessenthaler's player-managership.",
      
      modern: "After relegation to League One in 2005, Gillingham have spent most of the subsequent years in the third and fourth tiers. Martin Allen led the club to the League Two championship in 2012-13. Under Paul Scally's long chairmanship (1995-2022), the club's stadium was extensively redeveloped between 1995 and 2003. Priestfield also hosted Brighton & Hove Albion's home matches for two seasons (1997-99) while Brighton sought a permanent home after leaving the Goldstone Ground. In December 2022, American businessman Brad Galinson completed a takeover, with Paul Scally retaining a minority stake. Gareth Ainsworth was appointed manager in March 2025 on a contract until 2027. Currently in the 2025-26 season, Gillingham sit 16th in League Two with Ainsworth implementing a two-year plan to restore the club to League One."
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
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <Calendar className="w-8 h-8 text-blue-700 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
            <p className="text-slate-500 text-xs mt-1">as {clubData.originalName}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-sm font-bold">MEMS Priestfield Stadium</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-slate-600 text-sm">Capacity</p>
            <p className="text-black text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-600 shadow-lg">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-slate-600 text-sm">Location</p>
            <p className="text-black text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-600 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-blue-700" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Foundation & Early Years (1893-1920)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Voted Out & Return (1938-1964)</h3>
              <p>{clubData.history.votedOut}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Cascarino Era & Record Wins (1982-1989)</h3>
              <p>{clubData.history.cascarino}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Survival & Scally's Rescue (1993-1995)</h3>
              <p>{clubData.history.survival}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Wembley Heartbreak (1999)</h3>
              <p>{clubData.history.heartbreak}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Wembley Triumph (2000)</h3>
              <p>{clubData.history.triumph}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Modern Era & Current Status (2000-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSigning.player}</p>
              <p className="text-slate-500 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
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
          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-700 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">{clubData.topScorer.league} league goals</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-blue-700">{clubData.topScorer.goals}</p>
                <p className="text-slate-600">Total</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-blue-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.mostAppearances.name}</p>
                <p className="text-slate-600 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Goalkeeper - Club record</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-600">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-600">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 border-2 border-blue-600 shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-blue-700" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                <h3 className="text-xl font-bold text-black mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">1999 Wembley Heartbreak:</strong> Leading Manchester City 2-0 with 90 seconds left in the play-off final, Gillingham conceded twice (including a 95th-minute equalizer) and lost 3-1 on penalties in front of 76,935 fans—the largest crowd in Gillingham history
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">2000 Wembley Triumph:</strong> Trailing Wigan 2-1 in extra time, 38-year-old Steve Butler and Andy Thomson scored in the final six minutes to win 3-2 and reach the second tier for the first time in 107 years
            </p>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Tony Cascarino - Tracksuit Transfer:</strong> Signed from non-league Crockenhill in 1982 reportedly in exchange for a set of tracksuits. Scored 96 goals for the Gills and went on to earn 88 caps for Republic of Ireland
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-100 rounded-lg border-2 border-blue-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Record Wins (1987):</strong> Won 8-1 at Southend United and 10-0 vs Chesterfield on consecutive Saturdays—the latter remains the club's record Football League victory
            </p>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border-2 border-purple-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Voted Out of Football League (1938):</strong> One of only eight clubs ever voted out of the Football League. Spent 12 years in non-league before returning when the League expanded from 88 to 92 clubs in 1950
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}