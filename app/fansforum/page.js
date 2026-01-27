'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, ArrowLeft, Search, Loader2 } from 'lucide-react';

export default function Forum() {
  const router = useRouter();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLeague, setActiveLeague] = useState('all');

  const KEY = 'c56525a302b283561295aba8f804c48d';

  useEffect(() => {
    loadClubs();
  }, []);

  const loadClubs = async () => {
    try {
      const [l1Res, l2Res] = await Promise.all([
        fetch(`https://v3.football.api-sports.io/teams?league=41&season=2025`, {
          headers: { 'x-apisports-key': KEY }
        }),
        fetch(`https://v3.football.api-sports.io/teams?league=42&season=2025`, {
          headers: { 'x-apisports-key': KEY }
        })
      ]);

      const l1Data = await l1Res.json();
      const l2Data = await l2Res.json();

      const l1Clubs = (l1Data.response || []).map(item => ({
        ...item.team,
        league: 'League One',
        leagueId: 41
      }));

      const l2Clubs = (l2Data.response || []).map(item => ({
        ...item.team,
        league: 'League Two',
        leagueId: 42
      }));

      setClubs([...l1Clubs, ...l2Clubs].sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.error('Error loading clubs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague = activeLeague === 'all' || 
      (activeLeague === 'l1' && club.leagueId === 41) ||
      (activeLeague === 'l2' && club.leagueId === 42);
    return matchesSearch && matchesLeague;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading clubs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b-4 border-orange-700 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white flex items-center gap-3">
                <MessageSquare className="w-10 h-10" />
                Club Forums
              </h1>
              <p className="text-orange-200 mt-2">Chat with fans from League One & League Two</p>
            </div>
            <button 
              onClick={() => router.push('/')} 
              className="px-6 py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 border-2 border-slate-700">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a club..."
                className="w-full pl-12 pr-4 py-3 bg-slate-900 text-white rounded-lg border-2 border-slate-700 focus:border-orange-500 outline-none"
              />
            </div>

            {/* League Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveLeague('all')}
                className={`px-4 py-3 rounded-lg font-bold transition ${
                  activeLeague === 'all' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveLeague('l1')}
                className={`px-4 py-3 rounded-lg font-bold transition ${
                  activeLeague === 'l1' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                League One
              </button>
              <button
                onClick={() => setActiveLeague('l2')}
                className={`px-4 py-3 rounded-lg font-bold transition ${
                  activeLeague === 'l2' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                League Two
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 rounded-lg p-4 border-2 border-slate-700 text-center">
            <p className="text-3xl font-bold text-white">{clubs.length}</p>
            <p className="text-slate-400 text-sm">Total Clubs</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border-2 border-slate-700 text-center">
            <p className="text-3xl font-bold text-orange-400">{clubs.filter(c => c.leagueId === 41).length}</p>
            <p className="text-slate-400 text-sm">League One</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border-2 border-slate-700 text-center">
            <p className="text-3xl font-bold text-blue-400">{clubs.filter(c => c.leagueId === 42).length}</p>
            <p className="text-slate-400 text-sm">League Two</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border-2 border-slate-700 text-center">
            <p className="text-3xl font-bold text-green-400">{filteredClubs.length}</p>
            <p className="text-slate-400 text-sm">Showing</p>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredClubs.map(club => (
            <button
              key={club.id}
              onClick={() => router.push(`/fansforum/${club.id}?name=${encodeURIComponent(club.name)}&logo=${encodeURIComponent(club.logo)}`)}
              className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700 hover:border-orange-500 transition group text-left"
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={club.logo} 
                  alt={club.name}
                  className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition"
                />
                <h3 className="text-white font-bold text-lg mb-1">{club.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  club.leagueId === 41 
                    ? 'bg-orange-900/50 text-orange-300' 
                    : 'bg-blue-900/50 text-blue-300'
                }`}>
                  {club.league}
                </span>
              </div>
            </button>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-xl">No clubs found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}