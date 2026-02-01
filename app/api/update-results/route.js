import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const KEY = 'c56525a302b283561295aba8f804c48d';

export async function GET() {
  try {
    // Get all predictions that don't have results yet
    const { data: pendingPredictions, error: predError } = await supabase
      .from('predictions')
      .select('fixture_id')
      .is('actual_home', null);

    if (predError) throw predError;

    // Get unique fixture IDs
    const fixtureIds = [...new Set(pendingPredictions.map(p => p.fixture_id))];

    if (fixtureIds.length === 0) {
      return Response.json({ message: 'No pending predictions to update', updated: 0 });
    }

    let totalUpdated = 0;

    // Check each fixture for results
    for (const fixtureId of fixtureIds) {
      const res = await fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {
        headers: { 'x-apisports-key': KEY }
      });
      const data = await res.json();

      if (data.response && data.response[0]) {
        const match = data.response[0];
        const status = match.fixture.status.short;

        // Only update if match is finished
        if (status === 'FT' || status === 'AET' || status === 'PEN') {
          const actualHome = match.goals.home;
          const actualAway = match.goals.away;

          // Get all predictions for this fixture
          const { data: preds } = await supabase
            .from('predictions')
            .select('*')
            .eq('fixture_id', fixtureId)
            .is('actual_home', null);

          if (preds) {
            for (const pred of preds) {
              let points = 0;

              // Exact score = 3 points
              if (pred.home_score === actualHome && pred.away_score === actualAway) {
                points = 3;
              }
              // Correct result = 1 point
              else if (
                (pred.home_score > pred.away_score && actualHome > actualAway) ||
                (pred.home_score < pred.away_score && actualHome < actualAway) ||
                (pred.home_score === pred.away_score && actualHome === actualAway)
              ) {
                points = 1;
              }

              // Update prediction with actual result and points
              await supabase
                .from('predictions')
                .update({
                  actual_home: actualHome,
                  actual_away: actualAway,
                  points: points
                })
                .eq('id', pred.id);

              totalUpdated++;
            }
          }
        }
      }

      // Small delay to avoid API rate limits
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    return Response.json({ 
      message: 'Results updated successfully', 
      checked: fixtureIds.length,
      updated: totalUpdated 
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}