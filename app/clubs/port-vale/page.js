'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award } from 'lucide-react';

export default function PortValePage() {
  const clubData = {
    name: 'Port Vale',
    nickname: 'The Valiants',
    founded: 1879,
    stadium: 'Vale Park',
    capacity: '19,052',
    location: 'Burslem, Stoke-on-Trent',
    league: 'League One',
    currentManager: { name: 'Jon Brady', appointed: 'January 2026' },
    recordSigning: { player: 'Gareth Ainsworth', fee: '£500,000', year: 1997, from: 'Lincoln City' },
    recordSale: { player: 'Gareth Ainsworth', fee: '£2,000,000', year: 1998, to: 'Wimbledon' },
    topScorer: { name: 'Wilf Kirkham', goals: 164, years: '1923-1933' },
    mostAppearances: { name: 'Roy Sproson', apps: 842, years: '1950-1972' },
    honours: [
      { title: 'Football League Trophy', years: ['1992-93', '2000-01'] },
      { title: 'Third Division North Champions', years: ['1929-30', '1953-54'] },
      { title: 'Fourth Division Champions', years: ['1958-59'] },
      { title: 'League Two Play-off Winners', years: ['2021-22'] },
      { title: 'League Two Runners-up', years: ['2012-13'] },
      { title: 'Anglo-Italian Cup Runners-up', years: ['1995-96'] },
      { title: 'FA Cup Semi-Finalists', years: ['1953-54'] }
    ],
    history: {
      founding: "Founded in 1879 as an offshoot of Porthill Victoria, Port Vale took their name from the valley of canal ports along the Trent and Mersey Canal. They are one of the few English league clubs not named after a geographical location. The club joined the Football League as founder members of the Second Division in 1892.",
      goldenEra: "The 1950s marked Port Vale's finest era. In 1953-54, they reached the FA Cup semi-finals and set a Football League record with 30 clean sheets in 46 games, conceding just 21 league goals. Their defense, known as the 'Iron Curtain', allowed only 5 goals at Vale Park that season. They followed up with the Fourth Division title in 1958-59.",
      modernEra: "After Darren Moore led the club to promotion from League Two in 2024-25, Vale are celebrating their 150th anniversary season in League One. Following a difficult start to 2025-26, Moore departed after Boxing Day 2025, with former Northampton boss Jon Brady appointed in January 2026 to lead a survival battle.",
      notable: "Vale Park has been home since 1950, originally planned as an 80,000-capacity 'Wembley of the North'. The record attendance of 49,768 came against Aston Villa in 1960. Port Vale hold the unwanted record of most seasons (113) in the Football League without reaching the top division. Their fierce rivals are Stoke City (the Potteries Derby)."
    },
    currentSituation: {
      status: "Currently bottom of League One, 10 points from safety",
      season: "2025-26 (150th Anniversary Season)",
      recentChange: "Jon Brady appointed manager (January 2026) following Darren Moore's departure"
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
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Calendar className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-slate-400 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-slate-400 text-sm">Stadium</p>
            <p className="text-white text-xl font-bold">{clubData.stadium}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-slate-400 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <MapPin className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white text-lg font-bold">{clubData.location}</p>
          </div>
        </div>

        {/* Current Manager */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">Current Manager</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold text-yellow-400">{clubData.currentManager.name}</p>
              <p className="text-slate-400 mt-1">Appointed: {clubData.currentManager.appointed}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Previous: Darren Moore</p>
              <p className="text-slate-500 text-xs">(Departed Dec 2025)</p>
            </div>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-yellow-400" />
            Club History
          </h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Beginning</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">The Golden Era (1950s)</h3>
              <p>{clubData.history.goldenEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Times</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Notable Facts</h3>
              <p>{clubData.history.notable}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-xl text-white">{clubData.recordSigning.player}</p>
              <p className="text-slate-400">From {clubData.recordSigning.from} • {clubData.recordSigning.year}</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-xl text-white">{clubData.recordSale.player}</p>
              <p className="text-slate-400">To {clubData.recordSale.to} • {clubData.recordSale.year}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-slate-400 text-lg">{clubData.topScorer.years}</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-slate-400">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-slate-400 text-lg">{clubData.mostAppearances.years}</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-slate-400">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Records */}
        <section className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Notable Records</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
              <p className="text-yellow-400 font-bold">Football League Record</p>
              <p className="text-white">30 clean sheets in 46 games (1953-54)</p>
              <p className="text-slate-400 text-sm">Still stands today</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
              <p className="text-yellow-400 font-bold">Record Attendance</p>
              <p className="text-white">49,768 vs Aston Villa</p>
              <p className="text-slate-400 text-sm">FA Cup, February 1960</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
              <p className="text-yellow-400 font-bold">Most Seasons Without Top Flight</p>
              <p className="text-white">113 seasons in Football League</p>
              <p className="text-slate-400 text-sm">English record</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
              <p className="text-yellow-400 font-bold">Stadium Heritage</p>
              <p className="text-white">Vale Park since 1950</p>
              <p className="text-slate-400 text-sm">Originally planned for 80,000 capacity</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}