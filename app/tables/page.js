'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function LeagueTables() {
  const router = useRouter();
  const [tab, setTab] = useState('l1');
  const [l1Table, setL1Table] = useState([]);
  const [l2Table, setL2Table] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  const get = async (url) => {
    const r = await fetch(url, { headers: { 'x-apisports-key': KEY }});
    const d = await r.json();
    console.log(url, '→', d.response?.length || 0, 'results');
    return d.response || [];
  };

  const loadTables = async () => {
    const [l1Data, l2Data] = await Promise.all([
      get('https://v3.football.api-sports.io/standings?league=41&season=2025'),
      get('https://v3.football.api-sports.io/standings?league=42&season=2025')
    ]);

    if (l1Data[0]?.league?.standings?.[0]) {
      setL1Table(l1Data[0].league.standings[0]);
    }
    if (l2Data[0]?.league?.standings?.[0]) {
      setL2Table(l2Data[0].league.standings[0]);
    }

    setLastUpdate(new Date());
  };

  useEffect(() => {
    const init = async () => {
      console.log('🚀 Loading League Tables...');
      await loadTables();
      console.log('✅ Done!');
      setLoading(false);
    };
    init();

    // Auto-refresh every 5 minutes
    const interval = setInterval(loadTables, 300000);
    return () => clearInterval(interval);
  }, []);

  const TableRow = ({ team, index }) => {
    const isPromotion = index < 2; // Top 2 auto promotion
    const isPlayoffs = index >= 2 && index < 6; // 3rd-6th playoffs
    const isRelegation = index >= 20; // Bottom 4 relegation

    return (
      <tr className="border-b border-slate-700 hover:bg-slate-700/50 transition">
        <td className="py-3 px-4">
          <div className="flex items-center">
            <span className={`font-bold mr-3 w-6 text-center ${
              isPromotion ? 'text-green-400' : 
              isPlayoffs ? 'text-blue-400' : 
              isRelegation ? 'text-red-400' : 
              'text-white'
            }`}>
              {team.rank}
            </span>
            <div className={`w-1 h-8 rounded mr-3 ${
              isPromotion ? 'bg-green-500' : 
              isPlayoffs ? 'bg-blue-500' : 
              isRelegation ? 'bg-red-500' : 
              'bg-transparent'
            }`} />
          </div>
        </td>
        <td className="py-3 px-2">
          <div className="flex items-center space-x-3">
            <img src={team.team.logo} alt="" className="w-6 h-6" />
            <span className="text-white font-medium">{team.team.name}</span>
          </div>
        </td>
        <td className="py-3 px-4 text-center text-slate-300">{team.all.played}</td>
        <td className="py-3 px-4 text-center text-green-400">{team.all.win}</td>
        <td className="py-3 px-4 text-center text-yellow-400">{team.all.draw}</td>
        <td className="py-3 px-4 text-center text-red-400">{team.all.lose}</td>
        <td className="py-3 px-4 text-center text-slate-300">{team.all.goals.for}</td>
        <td className="py-3 px-4 text-center text-slate-300">{team.all.goals.against}</td>
        <td className={`py-3 px-4 text-center font-bold ${
          team.goalsDiff > 0 ? 'text-green-400' : 
          team.goalsDiff < 0 ? 'text-red-400' : 
          'text-slate-300'
        }`}>
          {team.goalsDiff > 0 ? '+' : ''}{team.goalsDiff}
        </td>
        <td className="py-3 px-4 text-center">
          <span className="font-bold text-xl text-white">{team.points}</span>
        </td>
        <td className="py-3 px-4 text-center">
          {team.form && (
            <div className="flex space-x-1 justify-center">
              {team.form.slice(-5).split('').map((result, i) => (
                <span 
                  key={i} 
                  className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                    result === 'W' ? 'bg-green-500 text-white' : 
                    result === 'D' ? 'bg-yellow-500 text-white' : 
                    'bg-red-500 text-white'
                  }`}
                >
                  {result}
                </span>
              ))}
            </div>
          )}
        </td>
      </tr>
    );
  };

  const Table = ({ data, leagueName }) => (
    <div className="bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 border-b-4 border-blue-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">{leagueName}</h2>
          </div>
          {lastUpdate && (
            <span className="text-blue-200 text-sm">
              Updated: {lastUpdate.toLocaleTimeString('en-GB')}
            </span>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 bg-slate-900/50 border-b border-slate-700 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-slate-300">Automatic Promotion</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span className="text-slate-300">Playoff Promotion</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-slate-300">Relegation</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900 text-slate-400 text-xs uppercase">
            <tr>
              <th className="py-3 px-4 text-left">Pos</th>
              <th className="py-3 px-2 text-left">Team</th>
              <th className="py-3 px-4 text-center">P</th>
              <th className="py-3 px-4 text-center">W</th>
              <th className="py-3 px-4 text-center">D</th>
              <th className="py-3 px-4 text-center">L</th>
              <th className="py-3 px-4 text-center">GF</th>
              <th className="py-3 px-4 text-center">GA</th>
              <th className="py-3 px-4 text-center">GD</th>
              <th className="py-3 px-4 text-center">Pts</th>
              <th className="py-3 px-4 text-center">Form</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team, index) => (
              <TableRow key={team.team.id} team={team} index={index} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      <div className="p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-white">{data[0]?.team.name || '-'}</div>
          <div className="text-xs text-slate-400">League Leaders</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-400">
            {Math.max(...data.map(t => t.all.goals.for))}
          </div>
          <div className="text-xs text-slate-400">Most Goals Scored</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">
            {Math.min(...data.map(t => t.all.goals.against))}
          </div>
          <div className="text-xs text-slate-400">Best Defense</div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading league tables...</p>
          <p className="text-slate-400 text-sm mt-2">EFL League One & Two</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-800 border-b-4 border-purple-700 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">📊 League Tables</h1>
              <p className="text-purple-200 mt-2">EFL League One & League Two Standings</p>
              {lastUpdate && (
                <p className="text-purple-300 text-xs mt-1">
                  Last updated: {lastUpdate.toLocaleTimeString('en-GB')} • Auto-refresh: 5 min
                </p>
              )}
            </div>
            <button 
              onClick={() => router.push('/')} 
              className="px-6 py-3 bg-white text-purple-900 rounded-lg font-bold hover:bg-purple-50 transition shadow-lg"
            >
              ← Back Home
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          <button 
            onClick={() => setTab('l1')} 
            className={`px-8 py-4 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'l1' 
                ? 'bg-blue-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-5 h-5" />
            League One
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              tab === 'l1' ? 'bg-white text-blue-600' : 'bg-slate-700'
            }`}>
              {l1Table.length}
            </span>
          </button>

          <button 
            onClick={() => setTab('l2')} 
            className={`px-8 py-4 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'l2' 
                ? 'bg-purple-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-5 h-5" />
            League Two
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              tab === 'l2' ? 'bg-white text-purple-600' : 'bg-slate-700'
            }`}>
              {l2Table.length}
            </span>
          </button>
        </div>

        {/* Table Content */}
        {tab === 'l1' && l1Table.length > 0 && (
          <Table data={l1Table} leagueName="EFL League One" />
        )}

        {tab === 'l2' && l2Table.length > 0 && (
          <Table data={l2Table} leagueName="EFL League Two" />
        )}

        {/* Empty State */}
        {((tab === 'l1' && l1Table.length === 0) || (tab === 'l2' && l2Table.length === 0)) && (
          <div className="bg-slate-800 rounded-xl p-16 text-center border-2 border-slate-700">
            <Trophy className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-300 text-xl font-bold mb-2">No Table Data</p>
            <p className="text-slate-500">Table data not available</p>
          </div>
        )}
      </div>
    </div>
  );
}