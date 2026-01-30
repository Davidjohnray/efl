'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function CreweAlexandraPage() {
  const clubData = {
    name: 'Crewe Alexandra FC',
    nickname: 'The Railwaymen',
    founded: 1877,
    stadium: 'Mornflake Stadium',
    capacity: '10,153',
    location: 'Crewe, Cheshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: { player: 'Rodney Jack', fee: '£650,000', year: 1998, from: 'Torquay United' },
    recordSale: { player: 'Seth Johnson / Dean Ashton / Nick Powell', fee: '£3,000,000', year: '1999 / 2005 / 2012', to: 'Derby / Norwich / Man Utd' },
    topScorer: { name: 'Bert Swindells', goals: 128, years: '1927-1937' },
    mostAppearances: { name: 'Tommy Lowry', apps: 482, years: '1965-1977' },
    honours: [
      { title: 'Football League Trophy Winners', years: ['2012-13'] },
      { title: 'Second Division Play-off Winners', years: ['1996-97'] },
      { title: 'Welsh Cup Winners', years: ['1935-36', '1936-37'] },
      { title: 'League Two Play-off Runners-up', years: ['2023-24'] }
    ],
    history: {
      founding: "Crewe Alexandra was formed in August 1877 as an offshoot of Crewe Alexandra Cricket Club (established in 1866 by railway workers), named after Princess Alexandra of Denmark. They played their first match against North Staffs that same year, drawing 1-1. Nicknamed 'The Railwaymen' due to Crewe's importance as a railway hub, the club reached the FA Cup semi-finals in 1888 and were a founding member of the Football League Second Division in 1892. However, after just five seasons, they failed to be re-elected in 1896 and dropped into non-league football.",
      struggles: "Crewe rejoined the Football League in 1921 as founding members of the Third Division North. They won their first major honours by claiming the Welsh Cup in 1936 and 1937 (English clubs near the Welsh border were invited to compete). In 1936, Bert Swindells scored his 100th league goal for Crewe and would finish with a club record 128 goals that still stands today. However, the period from the 1950s to early 1980s was largely unsuccessful—Crewe finished bottom of the Football League eight times between 1894 and 1982, more than any other club. In 1955, they went a dismal 56 matches without an away win.",
      gradi: "In June 1983, Dario Gradi was appointed manager when Crewe had just avoided being voted out of the Football League. The Milan-born Gradi revolutionized the club by building a youth academy focused on technical, attractive football. His philosophy was to develop players who could be sold to fund the academy system. Early successes included David Platt (signed for £200,000 in 1985, sold to Aston Villa for £200,000 in 1988), Geoff Thomas, and Rob Jones. Under Gradi, Crewe won promotion in 1989, were relegated in 1991, then promoted again in 1994.",
      goldenEra: "In 1997, Crewe won the Second Division play-off final against Brentford to reach the First Division for the first time in 101 years. They spent eight of the next nine seasons at the second tier (renamed the Championship in 2004), reaching a highest-ever finish of 11th in 1997-98. The academy flourished, producing England internationals Danny Murphy (sold to Liverpool for £1.5m), Seth Johnson (sold to Derby for £3m in 1999), and Dean Ashton (sold to Norwich for £3m in 2005). Gradi celebrated his 1,000th game in charge in 2001 and became the longest-serving manager in Football League history. He stepped down as manager in 2007 after 24 years, having transformed Crewe into a model for youth development.",
      modern: "Steve Davis led Crewe to the League Two play-offs in 2012, winning 2-0 against Cheltenham at Wembley with goals from academy graduates Nick Powell and Byron Moore. In 2013, Crewe won the Football League Trophy, defeating Southend United 2-0 at Wembley—their first and only major Football League honour. After relegation from League One in 2016, David Artell led promotion back to League One in 2020. They finished a creditable 12th in 2020-21 but were relegated again in 2022.",
      current: "Lee Bell took over as manager in November 2022. In the 2023-24 season, Crewe finished 6th in League Two and reached the play-off final at Wembley, where they lost 2-0 to Crawley Town. In the 2024-25 season, Crewe finished 13th. Currently competing in League Two for the 2025-26 season, Crewe continue to play at the Mornflake Stadium (known as Gresty Road until 2021), which has been their home since 1906 and was completely rebuilt in the 1990s with a capacity of 10,153."
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
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Calendar className="w-8 h-8 text-red-700 mb-2" />
            <p className="text-slate-600 text-sm">Founded</p>
            <p className="text-black text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-red-600 shadow-lg">
            <Home className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-slate-600 text-sm">Stadium</p>
            <p className="text-black text-base font-bold">Mornflake</p>
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
              <h3 className="text-xl font-bold text-black mb-3">Formation & Early Years (1877-1920)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Struggles & Welsh Cup Success (1921-1982)</h3>
              <p>{clubData.history.struggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">The Dario Gradi Revolution (1983-1994)</h3>
              <p>{clubData.history.gradi}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Golden Era & Academy Excellence (1997-2007)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Trophy Success & Yo-Yo Years (2008-2022)</h3>
              <p>{clubData.history.modern}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Recent Times & Play-off Heartbreak (2022-2026)</h3>
              <p>{clubData.history.current}</p>
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
              <p className="text-2xl font-bold text-green-600">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-700">{clubData.recordSigning.player}</p>
              <p className="text-slate-500 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Record Sales</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600">{clubData.recordSale.fee}</p>
              <p className="text-base text-slate-700 font-semibold">{clubData.recordSale.player}</p>
              <p className="text-slate-500 text-sm">To {clubData.recordSale.to}</p>
              <p className="text-red-700 text-xs font-bold mt-2">Three £3m sales from academy</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-red-600 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-700 mr-3" />
              <h3 className="text-2xl font-bold text-black">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-black">{clubData.topScorer.name}</p>
                <p className="text-slate-600 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">Record still stands</p>
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
                <p className="text-slate-500 text-sm">Club legend - 12 seasons</p>
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
              <strong className="text-black">Dario Gradi Era (1983-2007):</strong> 24-year managerial tenure—longest-serving manager in Football League history—transforming Crewe into a model for youth development and attractive football
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Academy Excellence:</strong> Produced England internationals David Platt, Danny Murphy, Seth Johnson, Dean Ashton, and Rob Jones—generating over £20m in transfer fees while playing attractive, technical football
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <p className="text-slate-800 text-center">
              <strong className="text-black">Historic Achievement:</strong> Reached the First Division (second tier) in 1997 for the first time in 101 years, then spent 8 of 9 seasons at that level—remarkable for a small railway town club
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}