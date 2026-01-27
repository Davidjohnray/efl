'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ExternalLink, ChevronLeft, Filter, Search, Trophy } from 'lucide-react';

export default function OfficialWebsites() {
  const router = useRouter();
  const [activeLeague, setActiveLeague] = useState('league-one');
  const [searchTerm, setSearchTerm] = useState('');

  // League One Teams 2025-2026
  const leagueOneTeams = [
    { id: 1, name: 'AFC Wimbledon', website: 'https://www.afcwimbledon.co.uk', logo: '🎗️' },
    { id: 2, name: 'Barnsley', website: 'https://www.barnsleyfc.co.uk', logo: '🔴' },
    { id: 3, name: 'Blackpool', website: 'https://www.blackpoolfc.co.uk', logo: '🟠' },
    { id: 4, name: 'Bolton Wanderers', website: 'https://www.bwfc.co.uk', logo: '⚪' },
    { id: 5, name: 'Bradford City', website: 'https://www.bradfordcityafc.com', logo: '🟡' },
    { id: 6, name: 'Burton Albion', website: 'https://www.burtonalbionfc.co.uk', logo: '🟡' },
    { id: 7, name: 'Cardiff City', website: 'https://www.cardiffcityfc.co.uk', logo: '🔵' },
    { id: 8, name: 'Doncaster Rovers', website: 'https://www.doncasterroversfc.co.uk', logo: '🔴' },
    { id: 9, name: 'Exeter City', website: 'https://www.exetercityfc.co.uk', logo: '🔴' },
    { id: 10, name: 'Huddersfield Town', website: 'https://www.htafc.com', logo: '🔵' },
    { id: 11, name: 'Leyton Orient', website: 'https://www.leytonorient.com', logo: '🔴' },
    { id: 12, name: 'Lincoln City', website: 'https://www.weareimps.com', logo: '🔴' },
    { id: 13, name: 'Luton Town', website: 'https://www.lutontown.co.uk', logo: '🟠' },
    { id: 14, name: 'Mansfield Town', website: 'https://www.mansfieldtown.net', logo: '🟡' },
    { id: 15, name: 'Northampton Town', website: 'https://www.ntfc.co.uk', logo: '🍒' },
    { id: 16, name: 'Peterborough United', website: 'https://www.theposh.com', logo: '🔵' },
    { id: 17, name: 'Plymouth Argyle', website: 'https://www.pafc.co.uk', logo: '🟢' },
    { id: 18, name: 'Port Vale', website: 'https://www.port-vale.co.uk', logo: '⚪' },
    { id: 19, name: 'Reading', website: 'https://www.readingfc.co.uk', logo: '🔵' },
    { id: 20, name: 'Rotherham United', website: 'https://www.themillers.co.uk', logo: '🔴' },
    { id: 21, name: 'Stevenage', website: 'https://www.stevenagefc.com', logo: '🔴' },
    { id: 22, name: 'Stockport County', website: 'https://www.stockportcounty.com', logo: '🔵' },
    { id: 23, name: 'Wigan Athletic', website: 'https://wiganathletic.com', logo: '🔵' },
    { id: 24, name: 'Wycombe Wanderers', website: 'https://www.wycombewanderers.co.uk', logo: '🔵' }
  ];

  // League Two Teams 2025-2026
  const leagueTwoTeams = [
    { id: 25, name: 'Accrington Stanley', website: 'https://www.accringtonstanley.co.uk', logo: '🔴' },
    { id: 26, name: 'Barnet', website: 'https://www.barnetfc.com', logo: '🟠' },
    { id: 27, name: 'Barrow', website: 'https://www.barrowafc.com', logo: '🔵' },
    { id: 28, name: 'Bristol Rovers', website: 'https://www.bristolrovers.co.uk', logo: '🔵' },
    { id: 29, name: 'Bromley', website: 'https://www.bromleyfc.co.uk', logo: '🟠' },
    { id: 30, name: 'Cambridge United', website: 'https://www.cambridgeunited.com', logo: '🟡' },
    { id: 31, name: 'Cheltenham Town', website: 'https://www.ctfc.com', logo: '🔴' },
    { id: 32, name: 'Chesterfield', website: 'https://www.chesterfield-fc.co.uk', logo: '🔵' },
    { id: 33, name: 'Colchester United', website: 'https://www.cu-fc.com', logo: '🔵' },
    { id: 34, name: 'Crawley Town', website: 'https://www.crawleytownfc.com', logo: '🔴' },
    { id: 35, name: 'Crewe Alexandra', website: 'https://www.crewealex.net', logo: '🔴' },
    { id: 36, name: 'Fleetwood Town', website: 'https://www.fleetwoodtownfc.com', logo: '🔴' },
    { id: 37, name: 'Gillingham', website: 'https://www.gillinghamfootballclub.com', logo: '🔵' },
    { id: 38, name: 'Grimsby Town', website: 'https://www.grimsby-townfc.co.uk', logo: '⚫' },
    { id: 39, name: 'Harrogate Town', website: 'https://www.harrogatetownafc.com', logo: '🟡' },
    { id: 40, name: 'MK Dons', website: 'https://www.mkdons.com', logo: '⚪' },
    { id: 41, name: 'Newport County', website: 'https://www.newport-county.co.uk', logo: '🟡' },
    { id: 42, name: 'Notts County', website: 'https://www.nottscountyfc.co.uk', logo: '⚫' },
    { id: 43, name: 'Oldham Athletic', website: 'https://www.oldhamathletic.co.uk', logo: '🔵' },
    { id: 44, name: 'Salford City', website: 'https://salfordcityfc.co.uk', logo: '🔴' },
    { id: 45, name: 'Shrewsbury Town', website: 'https://www.shrewsburytown.com', logo: '🔵' },
    { id: 46, name: 'Swindon Town', website: 'https://www.swindontownfc.co.uk', logo: '🔴' },
    { id: 47, name: 'Tranmere Rovers', website: 'https://www.tranmererovers.co.uk', logo: '⚪' },
    { id: 48, name: 'Walsall', website: 'https://www.saddlers.co.uk', logo: '🔴' }
  ];

  // Filter teams based on search
  const filteredLeagueOne = leagueOneTeams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredLeagueTwo = leagueTwoTeams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentTeams = activeLeague === 'league-one' ? filteredLeagueOne : filteredLeagueTwo;

  const ClubCard = ({ club, league }) => {
    return (
      <a
        href={club.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 border-2 border-slate-700 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Club Logo */}
              <div className={`w-16 h-16 ${league === 'league-one' ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-purple-900 to-purple-800'} rounded-xl flex items-center justify-center shadow-lg`}>
                <span className="text-3xl">{club.logo}</span>
              </div>
              
              {/* Club Info */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {club.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${league === 'league-one' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'}`}>
                    {league === 'league-one' ? 'League One' : 'League Two'}
                  </span>
                  <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
                    Official Site
                  </span>
                </div>
              </div>
            </div>
            
            {/* External Link Icon */}
            <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-amber-600 transition-colors">
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/')}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Globe className="w-8 h-8 text-amber-400" />
                  Official Club Websites
                </h1>
                <p className="text-slate-300 mt-2">Direct links to all 48 EFL club websites</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* League Selection & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-3">
            <button
              onClick={() => setActiveLeague('league-one')}
              className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                activeLeague === 'league-one'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <Trophy className="w-5 h-5" />
              League One ({leagueOneTeams.length})
            </button>
            <button
              onClick={() => setActiveLeague('league-two')}
              className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                activeLeague === 'league-two'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <Trophy className="w-5 h-5" />
              League Two ({leagueTwoTeams.length})
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-4 rounded-xl border border-blue-700/50">
            <div className="text-2xl font-bold text-white">{leagueOneTeams.length}</div>
            <div className="text-slate-400 text-sm">League One Clubs</div>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-4 rounded-xl border border-purple-700/50">
            <div className="text-2xl font-bold text-white">{leagueTwoTeams.length}</div>
            <div className="text-slate-400 text-sm">League Two Clubs</div>
          </div>
          <div className="bg-gradient-to-r from-amber-900/30 to-yellow-800/20 p-4 rounded-xl border border-amber-700/50">
            <div className="text-2xl font-bold text-white">{leagueOneTeams.length + leagueTwoTeams.length}</div>
            <div className="text-slate-400 text-sm">Total Clubs</div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {activeLeague === 'league-one' ? 'League One Clubs' : 'League Two Clubs'}
            </h2>
            <div className="flex items-center gap-2 text-slate-400">
              <Filter className="w-5 h-5" />
              <span>{currentTeams.length} club{currentTeams.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {currentTeams.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No clubs found</h3>
              <p className="text-slate-400">Try a different search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentTeams.map((club) => (
                <ClubCard key={club.id} club={club} league={activeLeague} />
              ))}
            </div>
          )}

          {/* How to Use */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-amber-600 rounded-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">How to Use</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">➡️</span>
                <span>Click any club card to visit their official website</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">🔍</span>
                <span>Use search to quickly find specific clubs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">🏆</span>
                <span>Switch between League One and League Two tabs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-gradient-to-r from-slate-900/30 to-slate-800/30 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-4">Quick Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <div className="text-amber-400 font-bold mb-2">All Clubs Listed</div>
              <div className="text-slate-400 text-sm">All 48 EFL clubs included for 2025-26 season</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <div className="text-amber-400 font-bold mb-2">Direct Links</div>
              <div className="text-slate-400 text-sm">Links open official club websites in new tabs</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <div className="text-amber-400 font-bold mb-2">Search Function</div>
              <div className="text-slate-400 text-sm">Quickly find clubs by name</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <div className="text-amber-400 font-bold mb-2">Mobile Friendly</div>
              <div className="text-slate-400 text-sm">Responsive design works on all devices</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">
              © 2026 EFL Official Websites Directory • 48 clubs across League One & Two
            </p>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              All links open in new tabs
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}