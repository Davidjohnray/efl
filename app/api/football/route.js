import { NextResponse } from 'next/server';

const KEY = 'c56525a302b283561295aba8f804c48d';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  
  if (!endpoint) {
    return NextResponse.json({ error: 'Missing endpoint' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://v3.football.api-sports.io/${endpoint}`, {
      headers: {
        'x-apisports-key': KEY
      },
      cache: 'no-store'
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}