import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

let lastScores = {};

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('efl-db');
    
    const liveMatches = await db.collection('matches')
      .find({ 
        status: 'live',
        league: { $in: ['League One', 'League Two'] }
      })
      .toArray();

    for (const match of liveMatches) {
      const matchId = match._id.toString();
      const currentScore = `${match.homeScore}-${match.awayScore}`;
      const lastScore = lastScores[matchId];

      if (lastScore && lastScore !== currentScore) {
        const oldScores = lastScore.split('-');
        const oldHome = parseInt(oldScores[0]);
        const oldAway = parseInt(oldScores[1]);
        
        let scoringTeam = '';
        if (match.homeScore > oldHome) {
          scoringTeam = match.homeTeam;
        } else if (match.awayScore > oldAway) {
          scoringTeam = match.awayTeam;
        }

        lastScores[matchId] = currentScore;

        return NextResponse.json({
          newGoal: true,
          team: scoringTeam,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
          homeScore: match.homeScore,
          awayScore: match.awayScore
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