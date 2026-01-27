'use client';

import React from 'react';
import { Home, Users, Trophy, TrendingUp, TrendingDown, Target, Calendar, MapPin, Award, Heart, Cross } from 'lucide-react';

export default function BarnsleyFC() {
  const clubData = {
    name: 'Barnsley FC',
    nickname: 'The Tykes / The Reds',
    founded: 1887,
    originalName: 'Barnsley St. Peter\'s',
    status: 'FA Cup Winners 1912',
    stadium: 'Oakwell',
    capacity: '23,009',
    location: 'Barnsley, South Yorkshire',
    league: 'League One',
    recordSigning: {
      player: 'Georgi Hristov',
      fee: '£1,500,000',
      year: 1997,
      from: 'Partizan Belgrade'
    },
    recordSale: {
      player: 'John Hendrie',
      fee: '£750,000',
      year: 1989,
      to: 'Newcastle United'
    },
    topScorer: {
      name: 'Ernie Hine',
      goals: 129,
      seasonRecord: 36,
      years: '1921-1926, 1931-1934'
    },
    mostAppearances: {
      name: 'Barry Murphy',
      apps: 514,
      years: '1962-1978'
    },
    honours: [
      { title: 'FA Cup Winners', years: ['1912'] },
      { title: 'Football League Trophy Winners', years: ['2015-16'] },
      { title: 'Second Division Play-off Winners', years: ['1996-97', '2005-06'] },
      { title: 'Third Division Champions', years: ['1933-34', '1938-39', '1954-55'] },
      { title: 'Fourth Division Champions', years: ['1967-68', '1980-81'] },
      { title: 'Yorkshire Cup Winners', years: ['1912', '1913', '1914'] }
    ],
    history: {
      founding: "Barnsley Football Club was founded in 1887 as Barnsley St. Peter's by Reverend Tiverton Preedy, the curate of St. Peter's Church. The club turned professional in 1898 and joined the Football League Second Division in 1898-99. Barnsley's early years were spent in the Second Division, with the club establishing itself as a competitive side. In 1910, Barnsley reached their first FA Cup final, losing 2-0 to Newcastle United after a replay. This began a period of cup success that would define the club's early history. The club's home since 1888 has been Oakwell, one of English football's oldest and most atmospheric stadiums, with its famous 'Ponty End' terrace becoming legendary among supporters.",
      
      faCupGlory: "The 1911-12 season brought Barnsley's greatest achievement—winning the FA Cup. After defeating the reigning champions Bradford City in the semi-final, Barnsley faced West Bromwich Albion in the final at Crystal Palace. The first match ended 0-0 after extra time, requiring a replay at Bramall Lane. In the replay, Barnsley triumphed 1-0 with an extra-time goal from Harry Tufnell, securing the club's only major trophy to date. The victorious team included goalkeeper Teddy Taylor, who kept clean sheets in both the final and replay. This FA Cup triumph made Barnsley one of only a few clubs from outside the top division to win the competition. The victory sparked wild celebrations in the mining town, with the team returning to a hero's welcome and parade through Barnsley's streets.",
      
      interwarSuccess: "The interwar period saw Barnsley establish themselves as a strong Second Division side. Under manager Arthur Fairclough, Barnsley won the Third Division North title in 1933-34 and 1938-39, showing consistent success. The club developed a reputation for producing talented players who would move to bigger clubs, including future England internationals. Barnsley's style of play during this era was characterized by physical, direct football suited to the challenging conditions at Oakwell. The club's fanbase grew significantly, with the working-class mining community of Barnsley passionately supporting their local team. Despite financial constraints compared to larger northern clubs, Barnsley remained competitive throughout this period, regularly finishing in the top half of the Second Division.",
      
      modernEra: "The late 20th century brought both struggles and successes for Barnsley. Relegation to the Fourth Division in 1965 was followed by promotion under manager Johnny Steele in 1967-68. The 1980-81 season saw Barnsley win the Fourth Division title under manager Norman Hunter, the former Leeds United defender. The 1996-97 season brought historic achievement—under manager Danny Wilson, Barnsley won promotion to the Premier League via the play-offs, defeating Bradford City 4-2 in the final at Wembley. This marked the club's first-ever top-flight season. Although Barnsley spent only one season in the Premier League (1997-98), it included memorable victories over Liverpool and Manchester United at Oakwell. The club returned to the Premier League briefly in 2021-22 under Valérien Ismaël.",
      
      recentHistory: "The 2015-16 season brought Barnsley's second major trophy—winning the Football League Trophy (Johnstone's Paint Trophy) at Wembley, defeating Oxford United 3-2. That same season, Barnsley also won promotion from League One via the play-offs, completing a remarkable Wembley double. Under manager Paul Heckingbottom, Barnsley established themselves as a competitive Championship side before his departure in 2018. The 2020-21 season saw Barnsley, under manager Valérien Ismaël, finish 5th in the Championship and reach the play-offs, losing to Swansea City in the semi-finals. Following relegation from the Championship in 2023, Barnsley have been competing in League One with the aim of returning to the second tier.",
      
      oakwellFortress: "Oakwell Stadium has been Barnsley's home since 1888, making it one of the oldest continuously used football grounds in England. The stadium's unique feature is the 'Oakwell Experience'—the passionate, vocal support from the stands, particularly the Ponty End terrace. Oakwell has undergone significant redevelopment while maintaining its character, with a current capacity of 23,009. The ground has hosted England under-21 internationals and various cup semi-finals. Barnsley's relationship with their stadium is deeply emotional—it represents the heart of the community and the club's identity. The 'Reds' (named for their traditional kit color) have one of the most loyal fanbases in English football, with average attendances regularly exceeding 12,000 despite the club's fluctuating fortunes.",
      
      futureOutlook: "Looking ahead, Barnsley aim to secure promotion back to the Championship and build toward a sustainable future. Under current ownership, the club has implemented a data-driven recruitment model focused on developing young talent. Plans include further development of Oakwell's facilities and strengthening community engagement. With strong local support, a historic stadium, and clear strategic planning, Barnsley FC continues to represent South Yorkshire with pride while honoring their rich history, including their famous FA Cup triumph and Premier League adventures."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900">
      <header className="bg-gradient-to-r from-black to-red-800 text-white border-b-4 border-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-red-800">BFC</span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white">{clubData.name}</h1>
                <div className="flex items-center mt-2">
                  <p className="text-red-200 text-xl">{clubData.nickname}</p>
                  <span className="ml-3 px-3 py-1 bg-yellow-600 text-white rounded-full text-xs font-bold">
                    {clubData.status}
                  </span>
                </div>
                <p className="text-red-300 text-sm mt-1 italic">Competing in League One</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/clubs'}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-red-800 rounded-lg transition-colors font-bold shadow-md"
            >
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Calendar className="w-8 h-8 text-red-400 mb-2" />
            <p className="text-red-300 text-sm">Founded</p>
            <p className="text-white text-2xl font-bold">{clubData.founded}</p>
            <p className="text-red-500 text-xs mt-1">as Barnsley St. Peter's</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Home className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-red-300 text-sm">Stadium</p>
            <p className="text-white text-sm font-bold">{clubData.stadium}</p>
            <p className="text-red-500 text-xs mt-1">Since 1888 • Historic ground</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-red-300 text-sm">Capacity</p>
            <p className="text-white text-2xl font-bold">{clubData.capacity}</p>
          </div>
          <div className="bg-black rounded-lg p-6 border-2 border-red-500 shadow-lg">
            <MapPin className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-red-300 text-sm">Location</p>
            <p className="text-white text-base font-bold">{clubData.location}</p>
            <p className="text-red-500 text-xs mt-1">South Yorkshire mining town</p>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-red-500 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 mr-3 text-red-400" />
            The Barnsley Story: FA Cup Winners & Yorkshire Pride
          </h2>
          <div className="space-y-6 text-red-100 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Foundation & Early Years (1887-1910)</h3>
              <p>{clubData.history.founding}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">FA Cup Glory & Historic Triumph (1910-1912)</h3>
              <p>{clubData.history.faCupGlory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Interwar Success & Division Titles (1919-1939)</h3>
              <p>{clubData.history.interwarSuccess}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Modern Era & Premier League (1960-2022)</h3>
              <p>{clubData.history.modernEra}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Recent History & Achievements</h3>
              <p>{clubData.history.recentHistory}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Oakwell Fortress & Community</h3>
              <p>{clubData.history.oakwellFortress}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Future Outlook & Ambitions</h3>
              <p>{clubData.history.futureOutlook}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Signing</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-400">{clubData.recordSigning.fee}</p>
              <p className="text-lg text-red-100">{clubData.recordSigning.player}</p>
              <p className="text-red-400 text-sm">From {clubData.recordSigning.from} ({clubData.recordSigning.year})</p>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingDown className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Record Sale</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-400">{clubData.recordSale.fee}</p>
              <p className="text-lg text-red-100">{clubData.recordSale.player}</p>
              <p className="text-red-400 text-sm">To {clubData.recordSale.to} ({clubData.recordSale.year})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">All-Time Top Scorer</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.topScorer.name}</p>
                <p className="text-red-300 text-lg">{clubData.topScorer.years}</p>
                <p className="text-red-500 text-sm">{clubData.topScorer.seasonRecord} goals in 1930-31 season</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-yellow-400">{clubData.topScorer.goals}</p>
                <p className="text-red-300">Goals</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl p-6 border-2 border-red-500 shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Most Appearances</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{clubData.mostAppearances.name}</p>
                <p className="text-red-300 text-lg">{clubData.mostAppearances.years}</p>
                <p className="text-red-500 text-sm">Midfielder • Club legend</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-purple-400">{clubData.mostAppearances.apps}</p>
                <p className="text-red-300">Games</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-black rounded-xl p-8 border-2 border-red-500 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-red-400" />
            Honours & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.honours.map((honour, index) => (
              <div key={index} className="bg-red-900 rounded-lg p-4 border-2 border-red-600">
                <h3 className="text-xl font-bold text-white mb-2">{honour.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {honour.years.map((year, yearIndex) => (
                    <span key={yearIndex} className="px-3 py-1 bg-red-800 text-white rounded-full text-sm">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-red-900 to-yellow-900 rounded-lg border-2 border-red-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">FA Cup Winners 1912:</strong> Defeated West Bromwich Albion 1-0 in replay • Only major trophy • Harry Tufnell scored winner in extra time
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-900 to-red-900 rounded-lg border-2 border-yellow-600">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Historic Oakwell</strong>
            </div>
            <p className="text-white text-center">
              Home since 1888 • 23,009 capacity • One of England's oldest grounds • Famous Ponty End terrace
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900 to-red-900 rounded-lg border-2 border-blue-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Premier League History:</strong> Promoted 1996-97 via play-offs • Beat Manchester United 3-2 at Oakwell • Only season in top flight
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-900 to-red-900 rounded-lg border-2 border-green-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Wembley Double 2016:</strong> Won Football League Trophy & League One play-offs • Beat Oxford United 3-2 in Trophy final
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-900 to-red-900 rounded-lg border-2 border-purple-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Championship Play-offs 2021:</strong> Finished 5th under Valérien Ismaël • Lost to Swansea in semi-finals • Best finish in 24 years
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-red-900 rounded-lg border-2 border-gray-600">
            <div className="flex items-center justify-center mb-2">
              <Cross className="w-5 h-5 mr-2 text-yellow-300" />
              <strong className="text-yellow-300 text-lg">Mining Town Pride</strong>
            </div>
            <p className="text-white text-center">
              Club founded by church curate • Deep roots in mining community • Known as 'The Tykes' (Yorkshire term)
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-indigo-900 to-red-900 rounded-lg border-2 border-indigo-600">
            <p className="text-white text-center">
              <strong className="text-yellow-300">Premier League Return 2022:</strong> Brief return to top flight under Valérien Ismaël • Continued development of young talent
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-red-900 to-black rounded-lg border-2 border-white">
            <p className="text-white text-center">
              <strong className="text-yellow-300">South Yorkshire's Pride:</strong> 139-year history • FA Cup winners • Premier League alumni • Community-focused club
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <span className="px-3 py-1 bg-red-800 text-red-200 rounded-full text-xs font-bold">FA Cup 1912</span>
              <span className="px-3 py-1 bg-yellow-800 text-yellow-200 rounded-full text-xs font-bold">Premier League</span>
              <span className="px-3 py-1 bg-green-800 text-green-200 rounded-full text-xs font-bold">Oakwell</span>
              <span className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-xs font-bold">The Tykes</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}