'use client';

import React from 'react';
import ClubHeader from '@/app/components/ClubHeader';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Flame, Clover, Shield } from 'lucide-react';

export default function ExeterCityFC() {
  const clubData = {
    name: 'Exeter City FC',
    nickname: 'The Grecians',
    founded: 1904,
    originalName: 'Exeter City Football Club',
    status: 'League One Play-off Finalists 2024',
    stadium: 'St James Park',
    capacity: '8,541',
    location: 'Exeter, Devon',
    league: 'League One',
    recordSigning: {
      player: 'Matt Grimes',
      fee: '£400,000',
      year: 2014,
      from: 'Youth Academy'
    },
    recordSale: {
      player: 'Ollie Watkins',
      fee: '£1,800,000',
      year: 2017,
      to: 'Brentford'
    },
    topScorer: {
      name: 'Fred Whitlow',
      goals: 119,
      seasonRecord: 29,
      years: '1924-1933'
    },
    mostAppearances: {
      name: 'Tony Kellow',
      apps: 421,
      years: '1976-1980, 1984-1988, 1990-1991'
    },
    honours: [
      { title: 'Fourth Division Champions', years: ['1989-90'] },
      { title: 'Conference Premier Play-off Winners', years: ['2007-08'] },
      { title: 'League Two Play-off Winners', years: ['2017-18'] },
      { title: 'League Two Runners-up', years: ['2008-09', '2021-22'] },
      { title: 'FA Cup Quarter-finalists', years: ['1931', '1981', '2016'] },
      { title: 'Devon Professional Cup Winners', years: ['1934', '1935', '1936', '1937', '1938', '1939', '1946', '1947', '1948', '1949', '1950', '1951', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1979', '1980', '1981', '1982', '1984', '1985', '1986', '1991', '1992', '1993', '1994'] },
      { title: 'Devon Bowl Winners', years: ['1938', '1946', '1950', '1954', '1959', '1961', '1963', '1964', '1971', '1975', '1977', '1983', '1986', '1988', '1991', '1992', '1996', '1997', '1999', '2002', '2004', '2006', '2008', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2022', '2023'] }
    ],
    history: {
      founding: "Exeter City Football Club was founded in 1904, formed from the merger of two local clubs, St Sidwell's United and Exeter United. The club initially played at St James Park, a ground they have occupied throughout their entire history, making it one of English football's oldest continuously used grounds. The nickname 'The Grecians' has uncertain origins but is believed to derive either from the Grecian pub near the ground or from local children who were called 'Grecians' as a term of respect. Exeter City joined the Football League in 1920 as founding members of the Third Division, beginning their long association with the lower divisions of English football. The club's traditional colors of red and white were established early in their history.",
      
      earlyLeagueYears: "Exeter City's early Football League years saw them establish themselves as a solid Third Division South club. The 1930-31 season brought their first major FA Cup run, reaching the quarter-finals before losing to Sunderland. This period saw the emergence of local hero Fred Whitlow, who remains the club's all-time top scorer with 119 goals. The 1932-33 season was particularly memorable as Exeter City defeated Sunderland 4-2 in the FA Cup third round, with Sunderland being the reigning First Division champions at the time. Despite occasional cup successes, the club generally occupied mid-table positions in the Third Division South throughout the interwar period. World War II interrupted their progress, but the club maintained its community focus throughout.",
      
      postwarStruggles: "The post-World War II period was challenging for Exeter City. Financial difficulties plagued the club, and they spent most of the 1950s and 1960s in the lower reaches of the Third Division South (later Fourth Division). However, the club maintained a strong local identity and continued to produce homegrown talent. The 1963-64 season saw Exeter City finish 3rd in the Fourth Division under manager Jack Edwards, their highest league finish for many years. The late 1970s brought a brief resurgence under manager Brian Godfrey, with the club achieving promotion to the Third Division in 1976-77. This period also saw the emergence of Tony Kellow, who would become the club's record appearance maker and a legendary figure at St James Park.",
      
      financialCrisis: "The 1990s and early 2000s marked Exeter City's most difficult period. Relegation from the Football League in 1994 was a devastating blow, consigning the club to the Conference. Financial problems escalated, culminating in a crisis in 2003 when the club entered administration with debts exceeding £4 million. The club faced extinction, but a remarkable supporter-led initiative saved Exeter City. The Exeter City Supporters' Trust took control of the club in 2003, making Exeter City the first supporter-owned club in English football. This fan ownership model, while challenging financially, restored stability and reconnected the club with its community. The 2004-05 season saw Exeter City reach the FA Cup third round, drawing Manchester United in a memorable tie that generated crucial revenue.",
      
      trustOwnershipRenaissance: "Under supporter ownership, Exeter City underwent a remarkable transformation. The 2006-07 season saw the club reach the FA Cup third round again, drawing Premier League side Manchester United once more. The following season, under manager Paul Tisdale, Exeter City won promotion back to the Football League via the Conference play-offs, defeating Cambridge United 1-0 in the final at Wembley. This achievement was particularly significant as it came just five years after the club had nearly gone out of business. The 2008-09 season brought immediate success as Exeter City finished as League Two runners-up, securing back-to-back promotions and a return to League One after an 18-year absence.",
      
      youthDevelopmentSuccess: "Exeter City's greatest modern success has been their youth academy. Under manager Paul Tisdale and later Matt Taylor, the club developed a reputation for producing exceptional young talent. The academy produced players like Ollie Watkins (sold to Brentford for £1.8m), Matt Grimes (sold to Swansea City for £1.75m), and Ethan Ampadu (sold to Chelsea for £2.5m). This focus on youth development allowed the club to compete financially despite limited resources. The 2016-17 season saw Exeter City reach the League Two play-off final, losing to Blackpool. The following season, they returned to Wembley and defeated Coventry City 4-1 to win promotion to League One. This achievement was built almost entirely on homegrown talent and shrewd recruitment.",
      
      recentAchievements: "The 2021-22 season marked another high point as Exeter City finished as League Two runners-up under manager Matt Taylor, securing automatic promotion to League One. This achievement was particularly impressive given the club's continued reliance on youth development and modest budget. The 2023-24 season saw Exeter City reach the League One play-off final under manager Gary Caldwell, where they lost to Bolton Wanderers. Despite this disappointment, the season represented significant progress for a club operating with one of League One's smallest budgets. Throughout this period, Exeter City maintained their supporter-owned status and continued to prioritize youth development, with recent academy graduates including Josh Key and Cheick Diabate making significant impacts.",
      
      communityIdentity: "Exeter City's identity is deeply connected to its supporter ownership model and community roots. As England's oldest supporter-owned club (since 2003), Exeter City represents a unique model in English football. The club's famous 'Red Army' supporters are known for their passionate and loyal support, regularly filling away ends across the country. St James Park, with its distinctive Big Bank terrace, provides one of English football's most atmospheric lower-league grounds. The club has strong rivalries with local teams including Plymouth Argyle (the Devon Derby) and Torquay United. Exeter City's community work through the Exeter City Community Trust is extensive, engaging with thousands of local residents annually through football, education, and health programs."
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
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Calendar className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-red-300 text-xs mt-1">St James Park since 1904</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Home className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-red-300 text-xs mt-1">Oldest continuous ground</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <Users className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
            <p className="text-red-300 text-xs mt-1">Famous Big Bank terrace</p>
          </div>
          <div className="bg-red-800 rounded-lg p-6 border-2 border-white shadow-lg">
            <MapPin className="w-8 h-8 text-white mb-2" />
            <p className="text-red-200 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-red-300 text-xs mt-1">Devon • Historic cathedral city</p>
          </div>
        </div>

        <section className="bg-red-800 rounded-xl p-8 border-2 border-white shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-white" />
            The Exeter City Story: Supporter Ownership & Youth Development
          </h2>
          <div className="space-y-6 text-red-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Founding & Early League Years (1904-1939)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Interwar Years & FA Cup Success</h3>
              <p>{clubData.history.earlyLeagueYears}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Postwar Struggles & Fourth Division Era</h3>
              <p>{clubData.history.postwarStruggles}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Financial Crisis & Near-Extinction</h3>
              <p>{clubData.history.financialCrisis}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Trust Ownership Renaissance</h3>
              <p>{clubData.history.trustOwnershipRenaissance}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Youth Development Success & Academy Stars</h3>
              <p>{clubData.history.youthDevelopmentSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Recent Achievements & League One Progress</h3>
              <p>{clubData.history.recentAchievements}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Community Identity & Supporter Ownership</h3>
              <p>{clubData.history.communityIdentity}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-white">{clubData.recordSigning.player}</p>
              <p className="text-red-300 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
              <p className="text-xs text-red-200 mt-2">Academy graduate • Club captain</p>
            </div>
          </div>

          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-white">{clubData.recordSale.player}</p>
              <p className="text-red-300 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
              <p className="text-xs text-red-200 mt-2">Now Premier League & England star</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-red-200 text-lg">{clubData.topScorer.years}</p>
                <p className="text-red-300 text-sm">{clubData.topScorer.seasonRecord} goals in 1929-30 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-red-200">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-red-800 rounded-xl p-6 border-2 border-white shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-red-200 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-red-300 text-sm">Striker • Local hero • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-red-200">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-red-800 rounded-xl p-8 border-2 border-white shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-white" />
            Honours & Historical Achievements
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Major Honours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-2 border-red-600">
                <h4 className="text-lg font-bold text-red-800 mb-2">Fourth Division Champions</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[0].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-red-600">
                <h4 className="text-lg font-bold text-red-800 mb-2">League Two Play-off Winners</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[2].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-red-600">
                <h4 className="text-lg font-bold text-red-800 mb-2">Conference Play-off Winners</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[1].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-red-600">
                <h4 className="text-lg font-bold text-red-800 mb-2">FA Cup Quarter-finalists</h4>
                <div className="flex flex-wrap gap-1">
                  {clubData.honours[4].years.map((year, index) => (
                    <span key={index} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Devon Cups (Record Holders)</h3>
            <div className="bg-white rounded-lg p-4 border-2 border-red-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-2">Devon Professional Cup</h4>
                  <p className="text-red-700 text-sm mb-2">Record 47 wins: 1934-1994</p>
                  <p className="text-red-600 text-xs">Dominant force in Devon football for 60 years</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-2">Devon Bowl</h4>
                  <p className="text-red-700 text-sm mb-2">Record 36 wins: 1938-2023</p>
                  <p className="text-red-600 text-xs">Continuing dominance in local competitions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900 to-green-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center text-lg">
              <strong className="text-yellow-300">Supporter-Owned Since 2003:</strong> First fan-owned club in England • Saved from extinction • Community model
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Youth Academy Success</strong>
            </div>
            <p className="text-white text-center">
              Produced Ollie Watkins, Matt Grimes, Ethan Ampadu • Multi-million pound sales • Best academy in lower leagues
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-red-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">League Two Play-off Winners 2018:</strong> Beat Coventry 4-1 at Wembley • Promotion to League One • Built on youth
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-red-900 rounded-lg border-2 border-yellow-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">FA Cup Giant-Killers:</strong> Multiple Premier League scalps • Manchester United twice • Historic cup runs
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-red-900 rounded-lg border-2 border-purple-600">
            <div className="flex items-center justify-center mb-2">
              <Clover className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">The Grecians Identity</strong>
            </div>
            <p className="text-white text-center">
              Red & white colors • 'Grecians' nickname • St James Park since 1904 • Devon Derby vs Plymouth
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-red-900 rounded-lg border-2 border-gray-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">St James Park:</strong> Oldest continuously used ground • Famous Big Bank terrace • Atmospheric home
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-red-600">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <strong className="text-white text-lg">Community & Sustainability</strong>
            </div>
            <p className="text-white text-center">
              Supporter-owned model • Exeter City Community Trust • Sustainable through youth development • Fan engagement
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-gray-900 rounded-lg border-2 border-white">
            <p className="text-white text-center text-lg">
              <strong className="text-white">120 Years of Football:</strong> Supporter ownership success • Youth development excellence • Devon's football pride
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-white text-red-800 rounded-full text-xs font-bold">Founded 1904</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">Fan-Owned</span>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">Youth Academy</span>
              <span className="px-3 py-1 bg-red-600 text-white rounded-full text-xs font-bold">The Grecians</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}