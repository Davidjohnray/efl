'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function GrimsbyTownFC() {
  const clubData = {
    name: 'Grimsby Town FC',
    nickname: 'The Mariners',
    founded: 1878,
    originalName: 'Grimsby Pelham FC',
    stadium: 'Blundell Park',
    capacity: '9,052',
    location: 'Cleethorpes, Lincolnshire',
    league: 'League Two',
    season: '2025-26',
    recordSigning: {
      player: 'Lee Ashcroft',
      fee: '£550,000',
      year: 1998,
      from: 'Preston North End'
    },
    recordSale: {
      player: 'John Oster',
      fee: '£1,500,000',
      year: 1997,
      to: 'Everton'
    },
    topScorer: {
      name: 'Pat Glover',
      goals: 180,
      seasonRecord: 42,
      years: '1930-1939'
    },
    mostAppearances: {
      name: 'John McDermott',
      apps: 754,
      years: '1987-2007'
    },
    honours: [
      { title: 'Second Division Champions', years: ['1933-34', '1900-01'] },
      { title: 'Third Division North Champions', years: ['1955-56'] },
      { title: 'Fourth Division Champions', years: ['1971-72'] },
      { title: 'Football League Trophy Winners', years: ['1997-98'] },
      { title: 'Division Two Play-off Winners', years: ['1997-98'] },
      { title: 'National League Play-off Winners', years: ['2021-22'] }
    ],
    history: {
      founding: "Grimsby Town Football Club was founded in 1878 after a meeting held at the Wellington Arms public house in Freeman Street, Grimsby. Several attendees included members of the local Worsley Cricket Club who wanted to form a football club to occupy the empty winter evenings after the cricket season had finished. The club was originally called Grimsby Pelham—the family name of the Earl of Yarborough, a significant landowner in the area—but changed its name to Grimsby Town the following year. In 1880 the club purchased land at Clee Park, relocated to Abbey Park in 1889, and moved to their present home Blundell Park in 1899. Grimsby became founder members of the Football League Division Two in 1892.",
      
      preWar: "Grimsby gained promotion to the First Division for the first time in 1901 but remained for only two seasons. After struggling in Division Two, the club was voted out of the Football League in 1910 and forced to join the Midland League, which they won at the first attempt before being re-elected to Division Two in 1911 at the expense of rivals Lincoln City. Following relegation in 1920, Grimsby appointed manager Wilf Gillow, who would serve for 12 years. On Boxing Day 1933, Grimsby famously beat Manchester United 7-3 at Old Trafford. This remarkable result heralded the start of Grimsby's golden era.",
      
      goldenEra: "The 1930s represented Grimsby Town's finest period. Under manager Frank Womack, the club won the Second Division championship in 1933-34, powered by Welsh international striker Pat Glover who scored an incredible 42 goals—a club record that still stands today. Glover would finish his Grimsby career with 180 goals, the club's all-time record. In 1934-35, Grimsby achieved their highest-ever league finish, placing 5th in the First Division—ahead of Liverpool and level on points with Derby County. The Mariners reached the FA Cup semi-final in 1936, losing 1-0 to eventual winners Arsenal at Leeds Road. Three years later, in 1939, Grimsby reached another FA Cup semi-final against Wolverhampton Wanderers at Old Trafford. A record crowd of 76,962 attended—a record that still stands at Manchester United's stadium today. Unfortunately, goalkeeper George Moulson was injured early in the match and with no substitutes allowed, Grimsby played with 10 men and an outfield player in goal, losing 5-0.",
      
      shankly: "Following relegation from the First Division in 1948, Grimsby appointed a young manager named Bill Shankly in July 1951. Shankly found a club that had dropped from First to Third Division in recent seasons. Despite budget constraints, he built a competitive side, and Grimsby finished as runners-up in Division Three North in 1951-52, missing promotion by just three points. Shankly later described this Grimsby team as 'pound for pound, and class for class, the best football team I have seen in England since the war.' However, frustrated by the board's unwillingness to invest in new players, Shankly left for Workington in January 1953. He would later guide Liverpool to three League titles, two FA Cups, and a UEFA Cup. In 1954, Grimsby made history by becoming the first English club to appoint a foreign manager—Hungarian Elemér Berkessy.",
      
      decline: "Grimsby slipped into the Fourth Division for the first time in 1968. The following season, the club finished second from bottom and had to apply for re-election. The lowest-ever attendance for a Football League match at Blundell Park was recorded that season—just 1,833 saw a 2-0 defeat to Brentford. Under Lawrie McMenemy, Grimsby won the Fourth Division championship in 1971-72, with 22,489 fans witnessing the crucial home victory against Exeter City. McMenemy left for Southampton in 1973, where he won the FA Cup in 1976.",
      
      buckley: "The late 1990s brought renewed success under manager Alan Buckley's third spell in charge. In an extraordinary season in 1997-98, Grimsby reached Wembley twice within seven weeks. On 18 April 1998, approximately 35,000 Mariners fans watched their team beat Bournemouth 2-1 to win the Football League Trophy. Then on 24 May 1998, around 25,000 traveled to see Grimsby defeat Northampton Town 1-0 in the Division Two play-off final to secure promotion to Division One (the second tier). This remarkable double Wembley triumph represented the club's highest point in modern times. Grimsby spent four seasons in the second tier before relegation in 2003.",
      
      modern: "Grimsby were relegated from the Football League in 2010, becoming just the fourth club (after Carlisle United, Oxford United, and Luton Town) to compete in all top five divisions of English football. After six years in the National League, Paul Hurst led Grimsby to the National League play-off final victory in 2016, returning them to the Football League. Following another relegation in 2021, Grimsby won the National League play-offs again in 2022 under Paul Hurst. On 27 August 2025, in one of the greatest cup upsets of all time, Grimsby eliminated Premier League giants Manchester United from the EFL Cup, winning 12-11 on penalties following a 2-2 draw at Blundell Park. They followed this with a 1-0 away victory over Championship side Sheffield Wednesday before losing 5-0 to Brentford in the fourth round. Currently competing in League Two for the 2025-26 season under manager David Artell, Grimsby sit 12th with 34 points from 24 matches."
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
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Calendar className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-slate-400 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-slate-500 text-xs mt-1">as {clubData.originalName}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-slate-400 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">Blundell Park</p>
            <p className="text-slate-500 text-xs mt-1">Since 1899</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <MapPin className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border-2 border-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Foundation & Early Years (1878-1920)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Pre-War Era & The 7-3 Victory (1920-1933)</h3>
              <p>{clubData.history.preWar}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Era (1933-1939)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Bill Shankly Years (1948-1954)</h3>
              <p>{clubData.history.shankly}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Decline & Recovery (1954-1990s)</h3>
              <p>{clubData.history.decline}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Alan Buckley & Double Wembley (1990s)</h3>
              <p>{clubData.history.buckley}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Era & Man United Upset (2000-2026)</h3>
              <p>{clubData.history.modern}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-slate-300">{clubData.recordSigning.player}</p>
              <p className="text-slate-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-slate-300">{clubData.recordSale.player}</p>
              <p className="text-slate-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
                <p className="text-slate-500 text-sm">{clubData.topScorer.seasonRecord} in 1933-34 (club record)</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">{clubData.topScorer.goals}</p>
                <p className="text-slate-400">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-slate-400 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-slate-500 text-sm">Club record holder</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-400">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border-2 border-white shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4 border-2 border-slate-500">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">2025 Manchester United Upset:</strong> Eliminated Premier League giants Manchester United from the EFL Cup, winning 12-11 on penalties following a 2-2 draw at Blundell Park on 27 August 2025—one of the greatest cup upsets of all time
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Old Trafford Record (1939):</strong> FA Cup semi-final vs Wolves drew 76,962 fans—a record that STILL STANDS at Manchester United's Old Trafford today. Grimsby lost 5-0 with 10 men after goalkeeper injured early
            </p>
          </div>
          <div className="mt-4 p-4 bg-green-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Golden Era (1930s):</strong> Finished 5th in First Division (1934-35), reached two FA Cup semi-finals (1936, 1939), and Pat Glover scored 42 goals in 1933-34—a club record that still stands
            </p>
          </div>
          <div className="mt-4 p-4 bg-purple-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Bill Shankly Era (1951-1953):</strong> Future Liverpool legend managed Grimsby, calling them "pound for pound...the best football team I have seen in England since the war"
            </p>
          </div>
          <div className="mt-4 p-4 bg-yellow-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Double Wembley (1998):</strong> Won Football League Trophy (2-1 vs Bournemouth) and Division Two Play-off Final (1-0 vs Northampton) within seven weeks—35,000 and 25,000 fans attended respectively
            </p>
          </div>
          <div className="mt-4 p-4 bg-orange-900 rounded-lg border-2 border-orange-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">First Foreign Manager in England:</strong> Appointed Hungarian Elemér Berkessy in 1954—the first English club to hire a foreign manager
            </p>
          </div>
          <div className="mt-4 p-4 bg-indigo-900 rounded-lg border-2 border-indigo-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Boxing Day Massacre (1933):</strong> Beat Manchester United 7-3 at Old Trafford—a result that heralded the start of Grimsby's golden era in the 1930s
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}