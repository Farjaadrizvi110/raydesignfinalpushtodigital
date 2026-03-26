'use client';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import React, { useState } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60] max-w-[280px] sm:max-w-xs w-full animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden relative group hover:shadow-blue-500/10 transition-shadow duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 flex justify-between items-center">
          <span className="text-white font-bold text-[10px] sm:text-xs flex items-center gap-1 uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            Partner Offer
          </span>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close offer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-slate-700 text-xs sm:text-sm font-medium mb-4 leading-tight">
            Discover exclusive premium business growth tools and resources.
          </p>
          <a 
            href="https://www.profitablecpmratenetwork.com/teuthv79tu?key=e9a81126d7060aa560939dafd1f9e042" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-1.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-xl transition-all font-semibold text-xs sm:text-sm group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Unlock Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
