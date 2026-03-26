'use client';

import React from 'react';

export default function AdBanner() {
  return (
    <div className="w-full flex justify-center items-center my-12 px-4">
      <div className="w-full max-w-[728px] h-[90px] bg-slate-50/10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center relative border border-slate-200/20 backdrop-blur-sm">
        <span className="absolute text-[10px] text-slate-400 uppercase tracking-widest z-0">Advertisement</span>
        <iframe 
          src="/adsterra-728x90.html"
          width="728"
          height="90"
          frameBorder="0"
          scrolling="no"
          className="relative z-10 w-full max-w-[728px] h-[90px] mx-auto"
          title="Advertisement"
        />
      </div>
    </div>
  );
}
