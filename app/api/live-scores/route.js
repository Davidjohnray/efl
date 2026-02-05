import { NextResponse } from 'next/server';

const KEY = 'c56525a302b283561295aba8f804c48d';
let lastScores = {};

export async function GET() {
  try {
    // Fetch live matches from API-Sports
    const response = await fetch(
      'https://v3.football.api-sports.io/fixtures?live=41-42',
      { headers: { 'x-apisports-key': KEY } }
    );
    
    const data = await response.json();
    const liveMatches = data.response || [];

    for (const match of liveMatches) {
      const matchId = match.fixture.id;
      const currentScore = `${match.goals.home}-${match.goals.away}`;
      const lastScore = lastScores[matchId];

      if (lastScore && lastScore !== currentScore) {
        const oldScores = lastScore.split('-');
        const oldHome = parseInt(oldScores[0]);
        const oldAway = parseInt(oldScores[1]);
        
        let scoringTeam = '';
        if (match.goals.home > oldHome) {
          scoringTeam = match.teams.home.name;
        } else if (match.goals.away > oldAway) {
          scoringTeam = match.teams.away.name;
        }

        lastScores[matchId] = currentScore;

        return NextResponse.json({
          newGoal: true,
          team: scoringTeam,
          homeTeam: match.teams.home.name,
          awayTeam: match.teams.away.name,
          homeScore: match.goals.home,
          awayScore: match.goals.away
        });
      }

      lastScores[matchId] = currentScore;
    }

    return NextResponse.json({ newGoal: false });

  } catch (error) {
    console.error('Live scores error:', error);
    return NextResponse.json({ newGoal: false, error: error.message });
  }
}