'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Eye } from 'lucide-react';

export default function HitCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const updateCount = async () => {
      try {
        // Increment the counter
        const { data, error } = await supabase.rpc('increment_visitor_count');
        
        if (error) {
          // If RPC doesn't exist, just fetch the count
          const { data: stats } = await supabase
            .from('site_stats')
            .select('visitor_count')
            .eq('id', 1)
            .single();
          
          if (stats) {
            setCount(stats.visitor_count);
          }
        } else {
          setCount(data);
        }
      } catch (err) {
        console.error('Counter error:', err);
      }
    };

    // Only count once per session
    if (!sessionStorage.getItem('counted')) {
      updateCount();
      sessionStorage.setItem('counted', 'true');
    } else {
      // Just fetch current count without incrementing
      const fetchCount = async () => {
        const { data } = await supabase
          .from('site_stats')
          .select('visitor_count')
          .eq('id', 1)
          .single();
        if (data) setCount(data.visitor_count);
      };
      fetchCount();
    }
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm py-4">
      <Eye className="w-4 h-4" />
      <span>{count.toLocaleString()} visitors</span>
    </div>
  );
}