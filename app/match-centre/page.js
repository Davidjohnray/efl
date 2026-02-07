'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RefreshCw, Trophy, Calendar, Clock, TrendingUp, Target, BarChart3, Users, AlertTriangle, ArrowRightLeft, Star, Loader2, Radio } from 'lucide-react';

export default function MatchCentre() {
  const router = useRouter();
  const [tab, setTab] = useState('live');
  const [live, setLive] = useState([]);
  const [l1Live, setL1Live] = useState([]);
  const [l2Live, setL2Live] = useState([]);
  const [l1Results, setL1Results] = useState([]);
  const [l2Results, setL2Results] = useState([]);
  const [l1Fixtures, setL1Fixtures] = useState([]);
  const [l2Fixtures, setL2Fixtures] = useState([]);
  const [l1Table, setL1Table] = useState([]);
  const [l2Table, setL2Table] = useState([]);
  const [l1LiveTable, setL1LiveTable] = useState([]);
  const [l2LiveTable, setL2LiveTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [refreshingLive, setRefreshingLive] = useState(false);

  const KEY = 'c56525a302b283561295aba8f804c48d';

  const get = async (url) => {
    const endpoint = url.replace('https://v3.football.api-sports.io/', '');
    const r = await fetch(`/api/football?endpoint=${encodeURIComponent(endpoint)}`);
    const d = await r.json();
    console.log(endpoint, '→', d.response?.length || 0, 'matches');
    return d.response || [];
  };

  const date = (offset) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().split('T')[0];
  };

  const calculateLiveTable = (officialTable, liveMatches, leagueId) => {
    if (!officialTable || officialTable.length === 0 || !liveMatches || liveMatches.length === 0) return officialTable;

    const leagueMatches = liveMatches.filter(m => m.league.id === leagueId);
    if (leagueMatches.length === 0) return officialTable;

    const liveTable = JSON.parse(JSON.stringify(officialTable));

    leagueMatches.forEach(match => {
      const homeTeam = liveTable.find(t => t.team.id === match.teams.home.id);
      const awayTeam = liveTable.find(t => t.team.id === match.teams.away.id);

      if (!homeTeam || !awayTeam) return;

      const currentHomeGoals = match.goals.home || 0;
      const currentAwayGoals = match.goals.away || 0;

      homeTeam.all.goals.for += currentHomeGoals;
      homeTeam.all.goals.against += currentAwayGoals;
      awayTeam.all.goals.for += currentAwayGoals;
      awayTeam.all.goals.against += currentHomeGoals;

      homeTeam.goalsDiff = homeTeam.all.goals.for - homeTeam.all.goals.against;
      awayTeam.goalsDiff = awayTeam.all.goals.for - awayTeam.all.goals.against;

      if (currentHomeGoals > currentAwayGoals) {
        homeTeam.all.win += 1;
        homeTeam.points += 3;
        awayTeam.all.lose += 1;
      } else if (currentAwayGoals > currentHomeGoals) {
        awayTeam.all.win += 1;
        awayTeam.points += 3;
        homeTeam.all.lose += 1;
      } else if (match.fixture.status.elapsed > 0) {
        homeTeam.all.draw += 1;
        homeTeam.points += 1;
        awayTeam.all.draw += 1;
        awayTeam.points += 1;
      }

      homeTeam.all.played += 1;
      awayTeam.all.played += 1;
    });

    liveTable.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalsDiff !== a.goalsDiff) return b.goalsDiff - a.goalsDiff;
      return b.all.goals.for - a.all.goals.for;
    });

    liveTable.forEach((team, index) => {
      team.rank = index + 1;
    });

    return liveTable;
  };

  const loadTables = async () => {
  try {
    const [l1Data, l2Data] = await Promise.all([
      get('https://v3.football.api-sports.io/standings?league=41&season=2025'),
      get('https://v3.football.api-sports.io/standings?league=42&season=2025')
    ]);

    let table1 = [];
    let table2 = [];

    if (l1Data[0]?.league?.standings?.[0]) {
      table1 = l1Data[0].league.standings[0];
      setL1Table(table1);
    }
    if (l2Data[0]?.league?.standings?.[0]) {
      table2 = l2Data[0].league.standings[0];
      setL2Table(table2);
    }

    return { table1, table2 };  // ← ADD THIS
  } catch (error) {
    console.error('Error loading tables:', error);
    return { table1: [], table2: [] };  // ← ADD THIS
  }
};

  const loadLive = async (table1Data = null, table2Data = null) => {
  const l = await get('https://v3.football.api-sports.io/fixtures?live=41-42');
  
  const league1 = l.filter(m => m.league.id === 41);
  const league2 = l.filter(m => m.league.id === 42);
  
  setL1Live(league1);
  setL2Live(league2);
  setLive(l);
  setLastUpdate(new Date());

  // Use provided table data or fall back to state
  const table1 = table1Data || l1Table;
  const table2 = table2Data || l2Table;

  // Calculate live tables
  if (table1.length > 0) {
    const l1Lt = calculateLiveTable(table1, l, 41);
    setL1LiveTable(l1Lt);
  }
  if (table2.length > 0) {
    const l2Lt = calculateLiveTable(table2, l, 42);
    setL2LiveTable(l2Lt);
  }
};

  const loadResults = async () => {
    const l1 = [], l2 = [];
    for (let i = 1; i <= 14; i++) {
      const [m1, m2] = await Promise.all([
        get(`https://v3.football.api-sports.io/fixtures?date=${date(-i)}&league=41&season=2025`),
        get(`https://v3.football.api-sports.io/fixtures?date=${date(-i)}&league=42&season=2025`)
      ]);
      l1.push(...m1.filter(m => m.fixture.status.short === 'FT'));
      l2.push(...m2.filter(m => m.fixture.status.short === 'FT'));
    }
    setL1Results(l1.sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date)));
    setL2Results(l2.sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date)));
  };

  const loadFixtures = async () => {
    const l1 = [], l2 = [];
    for (let i = 0; i <= 14; i++) {
      const [m1, m2] = await Promise.all([
        get(`https://v3.football.api-sports.io/fixtures?date=${date(i)}&league=41&season=2025`),
        get(`https://v3.football.api-sports.io/fixtures?date=${date(i)}&league=42&season=2025`)
      ]);
      l1.push(...m1.filter(m => m.fixture.status.short === 'NS'));
      l2.push(...m2.filter(m => m.fixture.status.short === 'NS'));
    }
    setL1Fixtures(l1.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date)));
    setL2Fixtures(l2.sort((a, b) => new Date(a.fixture.date) - new Date(b.fixture.date)));
  };

  const loadMatchDetails = async (fixtureId) => {
    setLoadingStats(true);
    try {
      const [details, lineups, players] = await Promise.all([
        get(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`),
        get(`https://v3.football.api-sports.io/fixtures/lineups?fixture=${fixtureId}`),
        get(`https://v3.football.api-sports.io/fixtures/players?fixture=${fixtureId}`)
      ]);
      if (details && details[0]) {
        setSelectedMatch({
          ...details[0],
          lineups: lineups || [],
          playerStats: players || []
        });
      }
    } finally {
      setLoadingStats(false);
    }
  };

  const refreshLiveMatch = async (fixtureId) => {
    setRefreshingLive(true);
    try {
      const [details, lineups, players] = await Promise.all([
        get(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`),
        get(`https://v3.football.api-sports.io/fixtures/lineups?fixture=${fixtureId}`),
        get(`https://v3.football.api-sports.io/fixtures/players?fixture=${fixtureId}`)
      ]);
      if (details && details[0]) {
        setSelectedMatch({
          ...details[0],
          lineups: lineups || [],
          playerStats: players || []
        });
      }
    } finally {
      setRefreshingLive(false);
    }
  };

  useEffect(() => {
    if (!selectedMatch) return;
    
    const isLive = ['1H','2H','HT','LIVE'].includes(selectedMatch.fixture?.status?.short);
    if (!isLive) return;

    const interval = setInterval(() => {
      refreshLiveMatch(selectedMatch.fixture.id);
    }, 30000);

    return () => clearInterval(interval);
  }, [selectedMatch?.fixture?.id, selectedMatch?.fixture?.status?.short]);

  useEffect(() => {
  const init = async () => {
    console.log('🚀 Loading EFL League One (41) & League Two (42)...');
    
    // Load tables FIRST and get the data
    const { table1, table2 } = await loadTables();
    
    // Pass table data to loadLive
    await loadLive(table1, table2);
    
    await Promise.all([loadResults(), loadFixtures()]);
    console.log('✅ Done!');
    setLoading(false);
  };
  init();

  const interval = setInterval(loadLive, 30000);
  return () => clearInterval(interval);
}, []);

  const Card = ({ m, showStats = false }) => {
    const isLive = ['1H','2H','HT','LIVE'].includes(m.fixture.status.short);
    const isFT = m.fixture.status.short === 'FT';
    const homeWin = isFT && m.goals.home > m.goals.away;
    const awayWin = isFT && m.goals.away > m.goals.home;
    const isClickable = showStats && isFT || isLive;

    return (
      <div 
        onClick={() => isClickable && loadMatchDetails(m.fixture.id)}
        className={`bg-slate-800 p-4 rounded-lg border-2 transition ${
          isLive ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-slate-700 hover:border-slate-600'
        } ${isClickable ? 'cursor-pointer hover:scale-105' : ''}`}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-slate-400">{m.league.name}</span>
          {isLive && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded font-bold flex items-center animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
              LIVE
            </span>
          )}
          {!isLive && (
            <span className="text-xs text-slate-500">
              {new Date(m.fixture.date).toLocaleDateString('en-GB', {
                weekday: 'short',
                day: 'numeric',
                month: 'short'
              })}
            </span>
          )}
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex justify-between items-center">
            <span className={`text-white ${homeWin ? 'font-bold' : ''}`}>
              {m.teams.home.name}
            </span>
            <span className={`text-2xl font-bold ${
              homeWin ? 'text-green-400' : 'text-white'
            }`}>
              {m.goals.home ?? '-'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-white ${awayWin ? 'font-bold' : ''}`}>
              {m.teams.away.name}
            </span>
            <span className={`text-2xl font-bold ${
              awayWin ? 'text-green-400' : 'text-white'
            }`}>
              {m.goals.away ?? '-'}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {isLive && `${m.fixture.status.elapsed}'`}
            {isFT && 'Full Time'}
            {!isLive && !isFT && new Date(m.fixture.date).toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
          <span className="text-slate-500 truncate ml-2 max-w-[120px]">
            {m.fixture.venue.name}
          </span>
        </div>

        {showStats && isFT && (
          <div className="mt-2 pt-2 border-t border-slate-700 text-xs text-blue-400 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Click for match stats
          </div>
        )}

        {isLive && (
          <div className="mt-2 pt-2 border-t border-slate-700 text-xs text-green-400 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Click for live details
          </div>
        )}
      </div>
    );
  };

  const LiveTableCompact = ({ data, leagueName, originalData }) => {
    if (!data || data.length === 0) return null;

    const originalRanks = {};
    if (originalData) {
      originalData.forEach((team, idx) => {
        originalRanks[team.team.id] = idx + 1;
      });
    }

    return (
      <div className="bg-slate-800 rounded-xl overflow-hidden border-2 border-green-600 shadow-lg shadow-green-500/20">
        <div className="bg-gradient-to-r from-green-900 to-green-800 p-4 border-b-2 border-green-600">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-green-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white">{leagueName} - Live Table</h3>
          </div>
          <p className="text-green-200 text-xs mt-1">Updates every 30 seconds</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-slate-400 text-xs">
              <tr>
                <th className="py-2 px-2 text-left">Pos</th>
                <th className="py-2 px-2 text-left">Team</th>
                <th className="py-2 px-2 text-center">P</th>
                <th className="py-2 px-2 text-center">GD</th>
                <th className="py-2 px-2 text-center">Pts</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 10).map((team, index) => {
                const rankChange = originalRanks[team.team.id] ? originalRanks[team.team.id] - (index + 1) : 0;
                const isTop2 = index < 2;
                const isPlayoffs = index >= 2 && index < 6;

                return (
                  <tr key={team.team.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-1">
                        <span className={`font-bold text-sm ${
                          isTop2 ? 'text-green-400' : isPlayoffs ? 'text-blue-400' : 'text-white'
                        }`}>
                          {team.rank}
                        </span>
                        {rankChange !== 0 && (
                          <span className={`text-xs ${rankChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {rankChange > 0 ? '▲' : '▼'}{Math.abs(rankChange)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-2">
                        <img src={team.team.logo} alt="" className="w-5 h-5" />
                        <span className="text-white text-xs font-medium truncate max-w-[120px]">
                          {team.team.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center text-slate-300 text-xs">{team.all.played}</td>
                    <td className={`py-2 px-2 text-center text-xs font-bold ${
                      team.goalsDiff > 0 ? 'text-green-400' : team.goalsDiff < 0 ? 'text-red-400' : 'text-slate-300'
                    }`}>
                      {team.goalsDiff > 0 ? '+' : ''}{team.goalsDiff}
                    </td>
                    <td className="py-2 px-2 text-center">
                      <span className="font-bold text-white">{team.points}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="p-2 bg-slate-900/50 border-t border-slate-700 text-center text-xs text-slate-400">
          Showing top 10 • Full table in Tables section
        </div>
      </div>
    );
  };

  const StatsModal = ({ match, onClose, refreshingLive, onRefresh }) => {
    const [activeTab, setActiveTab] = useState('stats');
    
    if (!match) return null;

    const isLive = ['1H','2H','HT','LIVE'].includes(match.fixture.status.short);
    const homeStats = match.statistics?.[0]?.statistics || [];
    const awayStats = match.statistics?.[1]?.statistics || [];
    const homeLineup = match.lineups?.[0];
    const awayLineup = match.lineups?.[1];
    const homePlayerStats = match.playerStats?.[0]?.players || [];
    const awayPlayerStats = match.playerStats?.[1]?.players || [];

    const cards = match.events?.filter(e => e.type === 'Card') || [];
    const yellowCards = cards.filter(c => c.detail === 'Yellow Card');
    const redCards = cards.filter(c => c.detail === 'Red Card');
    
    const subs = match.events?.filter(e => e.type === 'subst') || [];

    const allPlayers = [...homePlayerStats, ...awayPlayerStats];
    const topRated = allPlayers
      .filter(p => p.statistics?.[0]?.games?.rating)
      .sort((a, b) => parseFloat(b.statistics[0].games.rating) - parseFloat(a.statistics[0].games.rating))
      .slice(0, 5);

    const StatBar = ({ stat, idx }) => {
      const homeVal = stat.value === null ? 0 : (typeof stat.value === 'string' ? parseInt(stat.value.replace('%', '')) : stat.value);
      const awayVal = awayStats[idx]?.value === null ? 0 : (typeof awayStats[idx]?.value === 'string' ? parseInt(awayStats[idx].value.replace('%', '')) : awayStats[idx]?.value);
      const total = homeVal + awayVal || 1;
      const homePercent = (homeVal / total) * 100;

      return (
        <div>
          <div className="flex justify-between text-sm text-slate-300 mb-2">
            <span className="font-bold w-16 text-left">{stat.value || 0}</span>
            <span className="text-slate-400 flex-1 text-center">{stat.type}</span>
            <span className="font-bold w-16 text-right">{awayStats[idx]?.value || 0}</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden flex">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all"
              style={{ width: `${homePercent}%` }}
            />
            <div 
              className="h-full bg-gradient-to-l from-red-600 to-red-400 transition-all"
              style={{ width: `${100 - homePercent}%` }}
            />
          </div>
        </div>
      );
    };

    const PlayerRow = ({ player, isHome }) => {
      const stats = player.statistics?.[0];
      const rating = stats?.games?.rating;
      const goals = stats?.goals?.total || 0;
      const assists = stats?.goals?.assists || 0;
      const shots = stats?.shots?.total || 0;
      const shotsOn = stats?.shots?.on || 0;
      const passes = stats?.passes?.total || 0;
      const passAcc = stats?.passes?.accuracy;
      const tackles = stats?.tackles?.total || 0;
      const duelsWon = stats?.duels?.won || 0;
      const duelsTotal = stats?.duels?.total || 0;

      return (
        <div className={`p-3 rounded-lg bg-slate-700/50 ${isHome ? 'border-l-4 border-blue-500' : 'border-r-4 border-red-500'}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">{player.player.name}</span>
              {goals > 0 && <span className="text-xs bg-green-600 px-1.5 py-0.5 rounded">⚽ {goals}</span>}
              {assists > 0 && <span className="text-xs bg-blue-600 px-1.5 py-0.5 rounded">🅰️ {assists}</span>}
            </div>
            {rating && (
              <span className={`px-2 py-1 rounded font-bold text-sm ${
                parseFloat(rating) >= 7.5 ? 'bg-green-600 text-white' :
                parseFloat(rating) >= 6.5 ? 'bg-yellow-600 text-white' :
                'bg-red-600 text-white'
              }`}>
                {parseFloat(rating).toFixed(1)}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2 text-xs text-slate-400">
            <div>
              <span className="text-slate-500">Shots:</span> {shotsOn}/{shots}
            </div>
            <div>
              <span className="text-slate-500">Passes:</span> {passes} {passAcc && `(${passAcc}%)`}
            </div>
            <div>
              <span className="text-slate-500">Tackles:</span> {tackles}
            </div>
            <div>
              <span className="text-slate-500">Duels:</span> {duelsWon}/{duelsTotal}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-slate-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 border-b border-slate-700 sticky top-0 bg-slate-800 z-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white">
                  {isLive ? 'Live Match' : 'Match Statistics'}
                </h2>
                {isLive && (
                  <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full font-bold flex items-center animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    LIVE {match.fixture.status.elapsed}'
                  </span>
                )}
                {isLive && (
                  <button 
                    onClick={() => onRefresh(match.fixture.id)}
                    disabled={refreshingLive}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg font-medium flex items-center gap-2 transition disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${refreshingLive ? 'animate-spin' : ''}`} />
                    {refreshingLive ? 'Updating...' : 'Refresh'}
                  </button>
                )}
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white text-3xl font-bold px-3">×</button>
            </div>
            
            {isLive && (
              <div className="text-xs text-slate-500 mb-2">
                Auto-refreshes every 30 seconds
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <img src={match.teams.home.logo} alt="" className="w-12 h-12" />
                <span className="text-xl font-bold text-white">{match.teams.home.name}</span>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">
                  {match.goals.home} - {match.goals.away}
                </div>
                {isLive && (
                  <div className="text-green-400 text-sm font-medium mt-1">
                    {match.fixture.status.short === 'HT' ? 'Half Time' : `${match.fixture.status.elapsed}'`}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-3 flex-1 justify-end">
                <span className="text-xl font-bold text-white">{match.teams.away.name}</span>
                <img src={match.teams.away.logo} alt="" className="w-12 h-12" />
              </div>
            </div>
            
            <div className="text-center text-slate-400 text-sm mt-2">
              {new Date(match.fixture.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} • {match.fixture.venue.name}
            </div>

            {match.score?.halftime && (match.score.halftime.home !== null) && (
              <div className="text-center text-slate-500 text-xs mt-1">
                Half-time: {match.score.halftime.home} - {match.score.halftime.away}
              </div>
            )}

            <div className="flex gap-2 mt-4 flex-wrap">
              {[
                { id: 'stats', label: 'Statistics', icon: BarChart3 },
                { id: 'events', label: 'Events', icon: Target },
                { id: 'lineups', label: 'Lineups', icon: Users },
                { id: 'players', label: 'Player Stats', icon: Star },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                    activeTab === t.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  <t.icon className="w-4 h-4" />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'stats' && (
            <div className="p-6">
              {homeStats.length > 0 ? (
                <div className="space-y-4">
                  {homeStats.map((stat, idx) => (
                    <StatBar key={idx} stat={stat} idx={idx} />
                  ))}
                </div>
              ) : (
                <div className="text-center text-slate-500 py-8">
                  <BarChart3 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No statistics available for this match</p>
                </div>
              )}

              {topRated.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Top Rated Players
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {topRated.map((p, idx) => (
                      <div key={idx} className="bg-slate-700/50 p-3 rounded-lg flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          idx === 0 ? 'bg-yellow-500 text-black' :
                          idx === 1 ? 'bg-slate-400 text-black' :
                          idx === 2 ? 'bg-amber-700 text-white' :
                          'bg-slate-600 text-white'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <div className="text-white font-medium">{p.player.name}</div>
                          <div className="text-xs text-slate-400">
                            {homePlayerStats.includes(p) ? match.teams.home.name : match.teams.away.name}
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded font-bold ${
                          parseFloat(p.statistics[0].games.rating) >= 7.5 ? 'bg-green-600' : 'bg-yellow-600'
                        } text-white`}>
                          {parseFloat(p.statistics[0].games.rating).toFixed(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="p-6 space-y-6">
              {match.events && match.events.filter(e => e.type === 'Goal' && e.detail !== 'Missed Penalty').length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-500" />
                    Goals
                  </h3>
                  <div className="space-y-2">
                    {match.events
                      .filter(e => e.type === 'Goal' && e.detail !== 'Missed Penalty')
                      .map((goal, idx) => {
                        const isHome = goal.team.id === match.teams.home.id;
                        return (
                          <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 ${isHome ? 'border-l-4 border-blue-500' : 'border-r-4 border-red-500 flex-row-reverse'}`}>
                            <span className="text-2xl">⚽</span>
                            <div className={`flex-1 ${!isHome && 'text-right'}`}>
                              <div className="text-white font-bold">{goal.player.name}</div>
                              <div className="text-sm text-slate-400">
                                {goal.time.elapsed}'{goal.time.extra && `+${goal.time.extra}`}
                                {goal.detail === 'Penalty' && ' (Pen)'}
                                {goal.detail === 'Own Goal' && ' (OG)'}
                                {goal.assist.name && ` • Assist: ${goal.assist.name}`}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {cards.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                    Cards ({yellowCards.length} Yellow, {redCards.length} Red)
                  </h3>
                  <div className="space-y-2">
                    {cards.map((card, idx) => {
                      const isHome = card.team.id === match.teams.home.id;
                      const isRed = card.detail === 'Red Card';
                      return (
                        <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 ${isHome ? 'border-l-4 border-blue-500' : 'border-r-4 border-red-500 flex-row-reverse'}`}>
                          <span className={`w-6 h-8 rounded ${isRed ? 'bg-red-600' : 'bg-yellow-500'}`}></span>
                          <div className={`flex-1 ${!isHome && 'text-right'}`}>
                            <div className="text-white font-semibold">{card.player.name}</div>
                            <div className="text-sm text-slate-400">
                              {card.time.elapsed}'{card.time.extra && `+${card.time.extra}`} • {card.detail}
                              {card.comments && ` (${card.comments})`}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {subs.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <ArrowRightLeft className="w-5 h-5 mr-2 text-blue-500" />
                    Substitutions
                  </h3>
                  <div className="space-y-2">
                    {subs.map((sub, idx) => {
                      const isHome = sub.team.id === match.teams.home.id;
                      return (
                        <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 ${isHome ? 'border-l-4 border-blue-500' : 'border-r-4 border-red-500 flex-row-reverse'}`}>
                          <div className="flex flex-col items-center">
                            <span className="text-green-500 text-lg">↑</span>
                            <span className="text-red-500 text-lg">↓</span>
                          </div>
                          <div className={`flex-1 ${!isHome && 'text-right'}`}>
                            <div className="text-green-400 font-medium">{sub.player.name} (On)</div>
                            <div className="text-red-400 font-medium">{sub.assist.name} (Off)</div>
                            <div className="text-xs text-slate-500">{sub.time.elapsed}'</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {match.events?.length === 0 && (
                <div className="text-center text-slate-500 py-8">
                  <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No events recorded for this match</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'lineups' && (
            <div className="p-6">
              {homeLineup && awayLineup ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={match.teams.home.logo} alt="" className="w-8 h-8" />
                      <div>
                        <h3 className="text-lg font-bold text-white">{match.teams.home.name}</h3>
                        <p className="text-sm text-slate-400">Formation: {homeLineup.formation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Starting XI</h4>
                      {homeLineup.startXI?.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-slate-700/50 rounded text-sm">
                          <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                            {p.player.number}
                          </span>
                          <span className="text-white">{p.player.name}</span>
                          <span className="text-slate-500 text-xs ml-auto">{p.player.pos}</span>
                        </div>
                      ))}
                      
                      <h4 className="text-sm font-semibold text-slate-400 mt-4 mb-2">Substitutes</h4>
                      {homeLineup.substitutes?.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-slate-700/30 rounded text-sm">
                          <span className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-xs">
                            {p.player.number}
                          </span>
                          <span className="text-slate-300">{p.player.name}</span>
                          <span className="text-slate-500 text-xs ml-auto">{p.player.pos}</span>
                        </div>
                      ))}

                      {homeLineup.coach && (
                        <div className="mt-4 p-2 bg-slate-700/30 rounded flex items-center gap-2">
                          <span className="text-slate-400 text-sm">Coach:</span>
                          <span className="text-white text-sm font-medium">{homeLineup.coach.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={match.teams.away.logo} alt="" className="w-8 h-8" />
                      <div>
                        <h3 className="text-lg font-bold text-white">{match.teams.away.name}</h3>
                        <p className="text-sm text-slate-400">Formation: {awayLineup.formation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Starting XI</h4>
                      {awayLineup.startXI?.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-slate-700/50 rounded text-sm">
                          <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                            {p.player.number}
                          </span>
                          <span className="text-white">{p.player.name}</span>
                          <span className="text-slate-500 text-xs ml-auto">{p.player.pos}</span>
                        </div>
                      ))}
                      
                      <h4 className="text-sm font-semibold text-slate-400 mt-4 mb-2">Substitutes</h4>
                      {awayLineup.substitutes?.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-slate-700/30 rounded text-sm">
                          <span className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-xs">
                            {p.player.number}
                          </span>
                          <span className="text-slate-300">{p.player.name}</span>
                          <span className="text-slate-500 text-xs ml-auto">{p.player.pos}</span>
                        </div>
                      ))}

                      {awayLineup.coach && (
                        <div className="mt-4 p-2 bg-slate-700/30 rounded flex items-center gap-2">
                          <span className="text-slate-400 text-sm">Coach:</span>
                          <span className="text-white text-sm font-medium">{awayLineup.coach.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-500 py-8">
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No lineup information available</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'players' && (
            <div className="p-6">
              {homePlayerStats.length > 0 || awayPlayerStats.length > 0 ? (
                <div className="space-y-8">
                  {homePlayerStats.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <img src={match.teams.home.logo} alt="" className="w-8 h-8" />
                        <h3 className="text-lg font-bold text-white">{match.teams.home.name}</h3>
                      </div>
                      <div className="space-y-2">
                        {homePlayerStats
                          .filter(p => p.statistics?.[0]?.games?.minutes)
                          .sort((a, b) => (parseFloat(b.statistics?.[0]?.games?.rating) || 0) - (parseFloat(a.statistics?.[0]?.games?.rating) || 0))
                          .map((p, idx) => (
                            <PlayerRow key={idx} player={p} isHome={true} />
                          ))}
                      </div>
                    </div>
                  )}

                  {awayPlayerStats.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <img src={match.teams.away.logo} alt="" className="w-8 h-8" />
                        <h3 className="text-lg font-bold text-white">{match.teams.away.name}</h3>
                      </div>
                      <div className="space-y-2">
                        {awayPlayerStats
                          .filter(p => p.statistics?.[0]?.games?.minutes)
                          .sort((a, b) => (parseFloat(b.statistics?.[0]?.games?.rating) || 0) - (parseFloat(a.statistics?.[0]?.games?.rating) || 0))
                          .map((p, idx) => (
                            <PlayerRow key={idx} player={p} isHome={false} />
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center text-slate-500 py-8">
                  <Star className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No player statistics available</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading matches...</p>
          <p className="text-slate-400 text-sm mt-2">EFL League One & Two</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 border-b-4 border-blue-700 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">⚽ Live Match Centre</h1>
              <p className="text-blue-200 mt-2">EFL League One & League Two</p>
              {lastUpdate && (
                <p className="text-blue-300 text-xs mt-1">
                  Last updated: {lastUpdate.toLocaleTimeString('en-GB')} • Auto-refresh: 30s
                </p>
              )}
            </div>
            <button 
              onClick={() => router.push('/')} 
              className="px-6 py-3 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg"
            >
              ← Back Home
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            onClick={() => setTab('live')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'live' ? 'bg-green-600 text-white scale-105 shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${tab === 'live' ? 'bg-white animate-pulse' : 'bg-slate-500'}`} />
            Live
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${tab === 'live' ? 'bg-white text-green-600' : 'bg-slate-700'}`}>
              {l1Live.length + l2Live.length}
            </span>
          </button>

          <button 
            onClick={() => setTab('l1-results')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'l1-results' ? 'bg-blue-600 text-white scale-105 shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4" />
            L1 Results
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${tab === 'l1-results' ? 'bg-white text-blue-600' : 'bg-slate-700'}`}>
              {l1Results.length}
            </span>
          </button>

          <button 
            onClick={() => setTab('l2-results')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'l2-results' ? 'bg-indigo-600 text-white scale-105 shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4" />
            L2 Results
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${tab === 'l2-results' ? 'bg-white text-indigo-600' : 'bg-slate-700'}`}>
              {l2Results.length}
            </span>
          </button>

          <button 
            onClick={() => setTab('l1-fixtures')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'l1-fixtures' ? 'bg-purple-600 text-white scale-105 shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Calendar className="w-4 h-4" />
            L1 Fixtures
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${tab === 'l1-fixtures' ? 'bg-white text-purple-600' : 'bg-slate-700'}`}>
              {l1Fixtures.length}
            </span>
          </button>

          <button 
            onClick={() => setTab('l2-fixtures')} 
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              tab === 'l2-fixtures' ? 'bg-pink-600 text-white scale-105 shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Calendar className="w-4 h-4" />
            L2 Fixtures
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${tab === 'l2-fixtures' ? 'bg-white text-pink-600' : 'bg-slate-700'}`}>
              {l2Fixtures.length}
            </span>
          </button>
        </div>

        {/* Live Tab with Matches and Tables */}
        {tab === 'live' && (
          <div className="space-y-8">
            {/* League One Live */}
            {(l1Live.length > 0 || l1LiveTable.length > 0) && (
              <div>
                <div className="flex items-center gap-3 mb-4 bg-blue-900/50 p-4 rounded-lg border-2 border-blue-700">
                  <Trophy className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-bold text-white">League One</h2>
                  {l1Live.length > 0 && (
                    <span className="ml-auto px-3 py-1 bg-green-500 text-white text-sm rounded-full font-bold flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {l1Live.length} Live
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Matches - 2 columns on large screens */}
                  <div className="lg:col-span-2">
                    {l1Live.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {l1Live.map(m => <Card key={m.fixture.id} m={m} />)}
                      </div>
                    ) : (
                      <div className="bg-slate-800 rounded-xl p-8 text-center border-2 border-slate-700">
                        <Clock className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                        <p className="text-slate-400">No live matches</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Live Table - 1 column on large screens */}
                  {l1LiveTable.length > 0 && (
                    <div className="lg:col-span-1">
                      <LiveTableCompact 
                        data={l1LiveTable} 
                        leagueName="League One"
                        originalData={l1Table}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* League Two Live */}
            {(l2Live.length > 0 || l2LiveTable.length > 0) && (
              <div>
                <div className="flex items-center gap-3 mb-4 bg-purple-900/50 p-4 rounded-lg border-2 border-purple-700">
                  <Trophy className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">League Two</h2>
                  {l2Live.length > 0 && (
                    <span className="ml-auto px-3 py-1 bg-green-500 text-white text-sm rounded-full font-bold flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {l2Live.length} Live
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Matches - 2 columns on large screens */}
                  <div className="lg:col-span-2">
                    {l2Live.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {l2Live.map(m => <Card key={m.fixture.id} m={m} />)}
                      </div>
                    ) : (
                      <div className="bg-slate-800 rounded-xl p-8 text-center border-2 border-slate-700">
                        <Clock className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                        <p className="text-slate-400">No live matches</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Live Table - 1 column on large screens */}
                  {l2LiveTable.length > 0 && (
                    <div className="lg:col-span-1">
                      <LiveTableCompact 
                        data={l2LiveTable} 
                        leagueName="League Two"
                        originalData={l2Table}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* No Live Matches at All */}
            {l1Live.length === 0 && l2Live.length === 0 && (
              <div className="bg-slate-800 rounded-xl p-16 text-center border-2 border-slate-700">
                <Clock className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-300 text-xl font-bold mb-2">No Live Matches</p>
                <p className="text-slate-500">Check back later or view upcoming fixtures</p>
              </div>
            )}
          </div>
        )}

        {/* Other Tabs */}
        {tab !== 'live' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tab === 'l1-results' && l1Results.map(m => <Card key={m.fixture.id} m={m} showStats={true} />)}
            {tab === 'l2-results' && l2Results.map(m => <Card key={m.fixture.id} m={m} showStats={true} />)}
            {tab === 'l1-fixtures' && l1Fixtures.map(m => <Card key={m.fixture.id} m={m} />)}
            {tab === 'l2-fixtures' && l2Fixtures.map(m => <Card key={m.fixture.id} m={m} />)}
          </div>
        )}
      </div>

      {loadingStats && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
            <p className="text-white font-medium">Loading match details...</p>
          </div>
        </div>
      )}

      {selectedMatch && (
        <StatsModal 
          match={selectedMatch} 
          onClose={() => setSelectedMatch(null)} 
          refreshingLive={refreshingLive}
          onRefresh={refreshLiveMatch}
        />
      )}
    </div>
  );
}