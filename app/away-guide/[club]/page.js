'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Car, Train, Bus, Beer, Utensils, MapPin, Lightbulb, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AwayGuidePage() {
  const params = useParams();
  const router = useRouter();
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);

  const clubSlug = params.club;
  const clubName = clubSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  useEffect(() => {
    loadGuide();
  }, []);

  const loadGuide = async () => {
    const { data, error } = await supabase
      .from('away_guides')
      .select('*')
      .eq('club_name', clubName)
      .single();

    if (data) {
      setGuide(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-orange-400 animate-spin" />
      </div>
    );
  }

  const sections = guide ? [
    { icon: Car, title: 'By Car', content: guide.by_car, color: 'text-blue-400' },
    { icon: MapPin, title: 'Parking', content: guide.parking, color: 'text-green-400' },
    { icon: Train, title: 'By Train', content: guide.by_train, color: 'text-purple-400' },
    { icon: Bus, title: 'By Bus', content: guide.by_bus, color: 'text-sky-400' },
    { icon: Beer, title: 'Pubs for Away Fans', content: guide.pubs, color: 'text-orange-400' },
    { icon: Utensils, title: 'Food & Restaurants', content: guide.food, color: 'text-red-400' },
    { icon: Lightbulb, title: 'Tips for Away Fans', content: guide.tips, color: 'text-yellow-400' },
  ] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 border-b-4 border-orange-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-4xl font-bold text-white">🍺 Away Day Guide</h1>
              <p className="text-orange-200 text-sm sm:text-xl mt-1">{clubName}</p>
              {guide?.stadium && (
                <p className="text-orange-300 text-xs sm:text-sm mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> {guide.stadium}
                </p>
              )}
            </div>
            <button
              onClick={() => router.push('/clubs')}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-orange-900 rounded-lg font-bold hover:bg-orange-50 transition text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Clubs
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {!guide ? (
          <div className="bg-slate-800/50 rounded-2xl p-8 sm:p-12 border border-slate-700 text-center">
            <Beer className="w-16 h-16 text-slate-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Guide Coming Soon!</h2>
            <p className="text-slate-400 mb-6">
              We're working on the away day guide for {clubName}. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => (
              section.content && (
                <div key={index} className="bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <section.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${section.color}`} />
                    <h2 className="text-lg sm:text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </main>
    </div>
  );
}