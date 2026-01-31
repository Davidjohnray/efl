'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Trophy, ArrowLeft } from 'lucide-react';

export default function LeagueTables() {
  const router = useRouter();
  const [tab, setTab] = useState('l1');
  const [l1Table, setL1Table] = useState([]);
  const [l2Table, setL2Table] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  const get = async (url) => {
    const r = await fetch(url, { headers: { 'x-apisports-key': KEY }});
    const d = await r.json();
    console.log(url, '→', d.response?.length || 0, 'results');
    return d.response || [];
  };

  const loadTables = useCallback(async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    
    try {
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
      console.log('✅ Tables refreshed at', new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Error loading tables:', error);
    }
    
    if (showRefresh) setRefreshing(false);
  }, []);

  useEffect(() => {
    const init = async () => {
      console.log('🚀 Loading League Tables...');
      await loadTables();
      console.log('✅ Done!');
      setLoading(false);
    };
    init();

    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      console.log('⏰ Auto-refresh triggered');
      loadTables(true);
    }, 300000);
    
    return () => clearInterval(interval);
  }, [loadTables]);

  const handleManualRefresh = () => {
    loadTables(true);
  };

  const TableRow = ({ team, index }) => {
    const isPromotion = index < 2;
    const isPlayoffs = index >= 2 && index < 6;
    const isRelegation = index >= 20;

    return (
      <tr className="border-b border-slate-700 hover:bg-slate-700/50 transition">
        <td className="py-2 sm:py-3 px-2 sm:px-4">
          <div className="flex items-center">
            <span className={`font-bold mr-2 sm:mr-3 w-5 sm:w-6 text-center text-sm sm:text-base ${
              isPromotion ? 'text-green-400' : 
              isPlayoffs ? 'text-blue-400' : 
              isRelegation ? 'text-red-400' : 
              'text-white'
            }`}>
              {team.rank}
            </span>
            <div className={`w-1 h-6 sm:h-8 rounded mr-2 sm:mr-3 ${
              isPromotion ? 'bg-green-500' : 
              isPlayoffs ? 'bg-blue-500' : 
              isRelegation ? 'bg-red-500' : 
              'bg-transparent'
            }`} />
          </div>
        </td>
        <td className="py-2 sm:py-3 px-2">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src={team.team.logo} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-white font-medium text-xs sm:text-base truncate max-w-[100px] sm:max-w-none">{team.team.name}</span>
          </div>
        </td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-slate-300 text-xs sm:text-base">{team.all.played}</td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-green-400 text-xs sm:text-base">{team.all.win}</td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-yellow-400 text-xs sm:text-base">{team.all.draw}</td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-red-400 text-xs sm:text-base">{team.all.lose}</td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-slate-300 text-xs sm:text-base hidden sm:table-cell">{team.all.goals.for}</td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-slate-300 text-xs sm:text-base hidden sm:table-cell">{team.all.goals.against}</td>
        <td className={`py-2 sm:py-3 px-2 sm:px-4 text-center font-bold text-xs sm:text-base hidden sm:table-cell ${
          team.goalsDiff > 0 ? 'text-green-400' : 
          team.goalsDiff < 0 ? 'text-red-400' : 
          'text-slate-300'
        }`}>
          {team.goalsDiff > 0 ? '+' : ''}{team.goalsDiff}
        </td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
          <span className="font-bold text-lg sm:text-xl text-white">{team.points}</span>
        </td>
        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center hidden md:table-cell">
          {team.form && (
            <div className="flex space-x-1 justify-center">
              {team.form.slice(-5).split('').map((result, i) => (
                <span 
                  key={i} 
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full text-xs flex items-center justify-center font-bold ${
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 sm:p-6 border-b-4 border-blue-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            <h2 className="text-xl sm:text-3xl font-bold text-white">{leagueName}</h2>
          </div>
          {lastUpdate && (
            <span className="text-blue-200 text-xs sm:text-sm">
              {lastUpdate.toLocaleTimeString('en-GB')}
            </span>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="p-3 sm:p-4 bg-slate-900/50 border-b border-slate-700 flex flex-wrap gap-2 sm:gap-4 text-xs">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
          <span className="text-slate-300">Auto Promotion</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
          <span className="text-slate-300">Playoffs</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded"></div>
          <span className="text-slate-300">Relegation</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900 text-slate-400 text-xs uppercase">
            <tr>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left">Pos</th>
              <th className="py-2 sm:py-3 px-2 text-left">Team</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">P</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">W</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">D</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">L</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center hidden sm:table-cell">GF</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center hidden sm:table-cell">GA</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center hidden sm:table-cell">GD</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">Pts</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-center hidden md:table-cell">Form</th>
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
      <div className="p-3 sm:p-4 bg-slate-900/50 border-t border-slate-700 grid grid-cols-3 gap-2 sm:gap-4 text-center">
        <div>
          <div className="text-sm sm:text-2xl font-bold text-white truncate">{data[0]?.team.name || '-'}</div>
          <div className="text-xs text-slate-400">Leaders</div>
        </div>
        <div>
          <div className="text-sm sm:text-2xl font-bold text-green-400">
            {Math.max(...data.map(t => t.all.goals.for))}
          </div>
          <div className="text-xs text-slate-400">Most Goals</div>
        </div>
        <div>
          <div className="text-sm sm:text-2xl font-bold text-blue-400">
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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div>
              <h1 className="text-xl sm:text-4xl font-bold text-white">📊 League Tables</h1>
              <p className="text-purple-200 text-xs sm:text-base mt-1">EFL League One & League Two</p>
              {lastUpdate && (
                <p className="text-purple-300 text-xs mt-1">
                  Updated: {lastUpdate.toLocaleTimeString('en-GB')}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={handleManualRefresh}
                disabled={refreshing}
                className="px-3 sm:px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg font-bold transition flex items-center gap-2 text-sm disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">{refreshing ? 'Refreshing...' : 'Refresh'}</span>
              </button>
              <button 
                onClick={() => router.push('/')} 
                className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-purple-900 rounded-lg font-bold hover:bg-purple-50 transition shadow-lg text-sm sm:text-base flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back Home</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-8">
          <button 
            onClick={() => setTab('l1')} 
            className={`px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-bold transition flex items-center gap-2 text-sm sm:text-base ${
              tab === 'l1' 
                ? 'bg-blue-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            League One
          </button>

          <button 
            onClick={() => setTab('l2')} 
            className={`px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-bold transition flex items-center gap-2 text-sm sm:text-base ${
              tab === 'l2' 
                ? 'bg-purple-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            League Two
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
          <div className="bg-slate-800 rounded-xl p-8 sm:p-16 text-center border-2 border-slate-700">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-300 text-lg sm:text-xl font-bold mb-2">No Table Data</p>
            <p className="text-slate-500 text-sm">Table data not available</p>
          </div>
        )}
      </div>
    </div>
  );
}