'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Trophy, Target, Users, AlertCircle, XCircle } from 'lucide-react';

export default function PlayerStatistics() {
  const router = useRouter();
  const [league, setLeague] = useState('l1');
  const [statType, setStatType] = useState('goals');
  const [l1Stats, setL1Stats] = useState({ goals: [], assists: [], yellow: [], red: [] });
  const [l2Stats, setL2Stats] = useState({ goals: [], assists: [], yellow: [], red: [] });
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  // ========== MANUAL PLAYER TRANSFERS & STAT MERGING ==========
  // For players who transferred mid-season, we merge their stats from both clubs
  // Format: { playerName, playerId (optional), newTeam, oldTeamIds (to merge stats from) }
  const PLAYER_TRANSFERS = [
    {
      name: 'R. Graydon',  // Correct spelling with 'o'
      // playerId: 12345, // Uncomment and add if name matching isn't reliable
      newTeam: {
        name: 'Salford City',
        logo: 'https://media.api-sports.io/football/teams/1834.png'
      },
      oldTeamIds: [1373] // Fleetwood Town ID - stats from here will be merged
    },
    // Add more transfers as needed:
    // {
    //   name: 'Player Name',
    //   newTeam: { name: 'New Club', logo: 'url' },
    //   oldTeamIds: [oldClubId1, oldClubId2]
    // }
  ];

  // Function to merge stats for transferred players
  const mergeTransferredPlayerStats = (players) => {
    const transferMap = new Map(PLAYER_TRANSFERS.map(t => [t.name, t]));
    const playerMap = new Map();
    
    // Debug: Log all player names to help identify correct naming
    console.log('📋 Players in list:', players.map(p => `${p.player.name} (${p.statistics[0].team.name})`));
    
    // Group players by name to find duplicates (same player at different clubs)
    players.forEach(player => {
      const name = player.player.name;
      if (!playerMap.has(name)) {
        playerMap.set(name, []);
      }
      playerMap.get(name).push(player);
    });

    const result = [];
    const processed = new Set();

    players.forEach(player => {
      const name = player.player.name;
      if (processed.has(name)) return;
      
      const transfer = transferMap.get(name);
      const allEntries = playerMap.get(name);

      if (transfer && allEntries.length >= 1) {
        console.log(`🔄 Merging stats for ${name} from ${allEntries.length} club(s):`, 
          allEntries.map(e => `${e.statistics[0].team.name} (${e.statistics[0].goals.total || 0} goals)`));
        
        // Merge stats from all clubs for this transferred player
        const mergedStats = {
          games: { appearences: 0, minutes: 0, rating: null },
          goals: { total: 0, assists: 0 },
          cards: { yellow: 0, red: 0 },
          penalty: { scored: 0, missed: 0 },
          shots: { total: 0, on: 0 },
          passes: { total: 0, accuracy: null }
        };

        let ratingSum = 0;
        let ratingCount = 0;

        allEntries.forEach(entry => {
          const s = entry.statistics[0];
          mergedStats.games.appearences += s.games.appearences || 0;
          mergedStats.games.minutes += s.games.minutes || 0;
          mergedStats.goals.total += s.goals.total || 0;
          mergedStats.goals.assists += s.goals.assists || 0;
          mergedStats.cards.yellow += s.cards.yellow || 0;
          mergedStats.cards.red += s.cards.red || 0;
          mergedStats.penalty.scored += s.penalty?.scored || 0;
          mergedStats.penalty.missed += s.penalty?.missed || 0;
          mergedStats.shots.total += s.shots?.total || 0;
          mergedStats.shots.on += s.shots?.on || 0;
          mergedStats.passes.total += s.passes?.total || 0;
          
          if (s.games.rating) {
            ratingSum += parseFloat(s.games.rating);
            ratingCount++;
          }
        });

        if (ratingCount > 0) {
          mergedStats.games.rating = (ratingSum / ratingCount).toFixed(2);
        }

        console.log(`✅ Merged total for ${name}: ${mergedStats.goals.total} goals, ${mergedStats.goals.assists} assists`);

        // Create merged player entry with new team info
        const mergedPlayer = {
          ...allEntries[0],
          statistics: [{
            ...allEntries[0].statistics[0],
            team: {
              id: transfer.newTeam.id,
              name: transfer.newTeam.name,
              logo: transfer.newTeam.logo
            },
            games: mergedStats.games,
            goals: mergedStats.goals,
            cards: mergedStats.cards,
            penalty: mergedStats.penalty,
            shots: mergedStats.shots,
            passes: mergedStats.passes
          }]
        };

        result.push(mergedPlayer);
        processed.add(name);
      } else {
        // No transfer record, keep as-is
        result.push(player);
        processed.add(name);
      }
    });

    return result;
  };

  // Re-sort players after merging (in case merged stats change rankings)
  const sortByStatType = (players, type) => {
    return [...players].sort((a, b) => {
      const aVal = type === 'goals' ? (a.statistics[0].goals.total || 0) :
                   type === 'assists' ? (a.statistics[0].goals.assists || 0) :
                   type === 'yellow' ? (a.statistics[0].cards.yellow || 0) :
                   (a.statistics[0].cards.red || 0);
      const bVal = type === 'goals' ? (b.statistics[0].goals.total || 0) :
                   type === 'assists' ? (b.statistics[0].goals.assists || 0) :
                   type === 'yellow' ? (b.statistics[0].cards.yellow || 0) :
                   (b.statistics[0].cards.red || 0);
      return bVal - aVal;
    });
  };
  // ============================================

  const get = async (url) => {
    const r = await fetch(url, { headers: { 'x-apisports-key': KEY }});
    const d = await r.json();
    console.log(url, '→', d.response?.length || 0, 'players');
    return d.response || [];
  };

  const loadStats = async () => {
    // League One Stats
    const [l1Goals, l1Assists, l1Yellow, l1Red] = await Promise.all([
      get('https://v3.football.api-sports.io/players/topscorers?league=41&season=2025'),
      get('https://v3.football.api-sports.io/players/topassists?league=41&season=2025'),
      get('https://v3.football.api-sports.io/players/topyellowcards?league=41&season=2025'),
      get('https://v3.football.api-sports.io/players/topredcards?league=41&season=2025')
    ]);

    // League Two Stats
    const [l2Goals, l2Assists, l2Yellow, l2Red] = await Promise.all([
      get('https://v3.football.api-sports.io/players/topscorers?league=42&season=2025'),
      get('https://v3.football.api-sports.io/players/topassists?league=42&season=2025'),
      get('https://v3.football.api-sports.io/players/topyellowcards?league=42&season=2025'),
      get('https://v3.football.api-sports.io/players/topredcards?league=42&season=2025')
    ]);

    // Apply stat merging for transferred players and re-sort
    setL1Stats({
      goals: sortByStatType(mergeTransferredPlayerStats(l1Goals), 'goals').slice(0, 20),
      assists: sortByStatType(mergeTransferredPlayerStats(l1Assists), 'assists').slice(0, 20),
      yellow: sortByStatType(mergeTransferredPlayerStats(l1Yellow), 'yellow').slice(0, 20),
      red: sortByStatType(mergeTransferredPlayerStats(l1Red), 'red').slice(0, 20)
    });

    setL2Stats({
      goals: sortByStatType(mergeTransferredPlayerStats(l2Goals), 'goals').slice(0, 20),
      assists: sortByStatType(mergeTransferredPlayerStats(l2Assists), 'assists').slice(0, 20),
      yellow: sortByStatType(mergeTransferredPlayerStats(l2Yellow), 'yellow').slice(0, 20),
      red: sortByStatType(mergeTransferredPlayerStats(l2Red), 'red').slice(0, 20)
    });

    setLastUpdate(new Date());
  };

  useEffect(() => {
    const init = async () => {
      console.log('🚀 Loading Player Statistics...');
      await loadStats();
      console.log('✅ Done!');
      setLoading(false);
    };
    init();

    // Auto-refresh every 10 minutes
    const interval = setInterval(loadStats, 600000);
    return () => clearInterval(interval);
  }, []);

  const PlayerCard = ({ player, index, type }) => {
    const stat = type === 'goals' ? player.statistics[0].goals.total :
                 type === 'assists' ? player.statistics[0].goals.assists :
                 type === 'yellow' ? player.statistics[0].cards.yellow :
                 player.statistics[0].cards.red;

    const isTopThree = index < 3;

    return (
      <div className={`bg-slate-800 rounded-lg p-4 border-2 transition hover:scale-105 ${
        isTopThree ? 'border-yellow-500 shadow-lg shadow-yellow-500/20' : 'border-slate-700 hover:border-slate-600'
      }`}>
        {/* Rank Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
            index === 0 ? 'bg-yellow-500 text-white' :
            index === 1 ? 'bg-gray-400 text-white' :
            index === 2 ? 'bg-orange-600 text-white' :
            'bg-slate-700 text-slate-300'
          }`}>
            {index + 1}
          </div>
          <img 
            src={player.statistics[0].team.logo} 
            alt="" 
            className="w-8 h-8"
          />
        </div>

        {/* Player Info */}
        <div className="flex items-center space-x-3 mb-3">
          <img 
            src={player.player.photo} 
            alt={player.player.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
            onError={(e) => e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="32" fill="%23334155"/></svg>'}
          />
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">{player.player.name}</h3>
            <p className="text-slate-400 text-sm">{player.statistics[0].team.name}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-slate-400">Age</div>
            <div className="text-white font-bold">{player.player.age}</div>
          </div>
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-slate-400">Nationality</div>
            <div className="text-white font-bold truncate">{player.player.nationality}</div>
          </div>
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-slate-400">Appearances</div>
            <div className="text-white font-bold">{player.statistics[0].games.appearences || 0}</div>
          </div>
          <div className="bg-slate-900 p-2 rounded">
            <div className="text-slate-400">Minutes</div>
            <div className="text-white font-bold">{player.statistics[0].games.minutes || 0}</div>
          </div>
        </div>

        {/* Main Stat */}
        <div className={`p-4 rounded-lg text-center ${
          type === 'goals' ? 'bg-green-900/50 border-2 border-green-500' :
          type === 'assists' ? 'bg-blue-900/50 border-2 border-blue-500' :
          type === 'yellow' ? 'bg-yellow-900/50 border-2 border-yellow-500' :
          'bg-red-900/50 border-2 border-red-500'
        }`}>
          <div className={`text-4xl font-bold mb-1 ${
            type === 'goals' ? 'text-green-400' :
            type === 'assists' ? 'text-blue-400' :
            type === 'yellow' ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {stat || 0}
          </div>
          <div className="text-slate-300 text-sm font-medium">
            {type === 'goals' ? '⚽ Goals' :
             type === 'assists' ? '🎯 Assists' :
             type === 'yellow' ? '🟨 Yellow Cards' :
             '🟥 Red Cards'}
          </div>
        </div>

        {/* Additional Stats for Goalscorers */}
        {type === 'goals' && (
          <div className="mt-3 pt-3 border-t border-slate-700 grid grid-cols-3 gap-2 text-xs text-center">
            <div>
              <div className="text-slate-400">Assists</div>
              <div className="text-white font-bold">{player.statistics[0].goals.assists || 0}</div>
            </div>
            <div>
              <div className="text-slate-400">Penalties</div>
              <div className="text-white font-bold">{player.statistics[0].penalty.scored || 0}</div>
            </div>
            <div>
              <div className="text-slate-400">Rating</div>
              <div className="text-white font-bold">{player.statistics[0].games.rating || '-'}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading player statistics...</p>
          <p className="text-slate-400 text-sm mt-2">EFL League One & Two</p>
        </div>
      </div>
    );
  }

  const currentStats = league === 'l1' ? l1Stats : l2Stats;
  const currentData = currentStats[statType] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-900 to-green-800 border-b-4 border-green-700 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">🏃 Player Statistics</h1>
              <p className="text-green-200 mt-2">Top Performers in EFL League One & Two</p>
              {lastUpdate && (
                <p className="text-green-300 text-xs mt-1">
                  Last updated: {lastUpdate.toLocaleTimeString('en-GB')} • Auto-refresh: 10 min
                </p>
              )}
            </div>
            <button 
              onClick={() => router.push('/')} 
              className="px-6 py-3 bg-white text-green-900 rounded-lg font-bold hover:bg-green-50 transition shadow-lg"
            >
              ← Back Home
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* League Tabs */}
        <div className="flex gap-3 mb-6">
          <button 
            onClick={() => setLeague('l1')} 
            className={`px-8 py-4 rounded-lg font-bold transition flex items-center gap-2 ${
              league === 'l1' 
                ? 'bg-blue-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-5 h-5" />
            League One
          </button>

          <button 
            onClick={() => setLeague('l2')} 
            className={`px-8 py-4 rounded-lg font-bold transition flex items-center gap-2 ${
              league === 'l2' 
                ? 'bg-purple-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-5 h-5" />
            League Two
          </button>
        </div>

        {/* Stat Type Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            onClick={() => setStatType('goals')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              statType === 'goals' 
                ? 'bg-green-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Target className="w-5 h-5" />
            Top Scorers
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              statType === 'goals' ? 'bg-white text-green-600' : 'bg-slate-700'
            }`}>
              {currentStats.goals.length}
            </span>
          </button>

          <button 
            onClick={() => setStatType('assists')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              statType === 'assists' 
                ? 'bg-blue-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Users className="w-5 h-5" />
            Top Assists
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              statType === 'assists' ? 'bg-white text-blue-600' : 'bg-slate-700'
            }`}>
              {currentStats.assists.length}
            </span>
          </button>

          <button 
            onClick={() => setStatType('yellow')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              statType === 'yellow' 
                ? 'bg-yellow-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <AlertCircle className="w-5 h-5" />
            Yellow Cards
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              statType === 'yellow' ? 'bg-white text-yellow-600' : 'bg-slate-700'
            }`}>
              {currentStats.yellow.length}
            </span>
          </button>

          <button 
            onClick={() => setStatType('red')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              statType === 'red' 
                ? 'bg-red-600 text-white scale-105 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <XCircle className="w-5 h-5" />
            Red Cards
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              statType === 'red' ? 'bg-white text-red-600' : 'bg-slate-700'
            }`}>
              {currentStats.red.length}
            </span>
          </button>
        </div>

        {/* Players Grid */}
        {currentData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentData.map((player, index) => (
              <PlayerCard 
                key={player.player.id} 
                player={player} 
                index={index}
                type={statType}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-800 rounded-xl p-16 text-center border-2 border-slate-700">
            <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-300 text-xl font-bold mb-2">No Player Data</p>
            <p className="text-slate-500">Statistics not available</p>
          </div>
        )}
      </div>
    </div>
  );
}