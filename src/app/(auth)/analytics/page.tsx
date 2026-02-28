'use client';

import React from 'react';
import Link from 'next/link';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#090A0C] font-sans text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* --- SIDEBAR NAVIGATION (Standard Size) --- */}
      <aside className="md:w-64 bg-[#111319] border-r border-white/5 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 bg-[#00D1B2] rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight text-white">Spendly</span>
        </div>

        <nav className="flex flex-col gap-6">
          <Link href="/dashboard" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="/budget" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Budget Tracker
          </Link>
          <Link href="/analytics" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00D1B2]">
            Analytics
          </Link>
          <Link href="/setting_privacy" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Settings
          </Link>
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto w-full space-y-10">
          
          {/* Header Section */}
          <header>
            <h1 className="text-4xl font-bold tracking-tight">
              Data <span className="text-[#00D1B2]">Intelligence.</span>
            </h1>
            <p className="text-sm font-semibold text-slate-500 mt-2 uppercase tracking-tight">
              Quarterly Performance Audit
            </p>
          </header>

          {/* VISUAL TRENDS CARD (Medium Height) */}
          <div className="bg-[#111319] rounded-[24px] p-10 border border-white/5 relative">
            <div className="flex justify-end mb-8">
              <span className="text-[11px] font-bold text-[#00D1B2] uppercase tracking-widest">
                Visual Trends
              </span>
            </div>
            
            {/* The Bar Chart (Balanced at h-52) */}
            <div className="h-52 flex items-end justify-between gap-3 border-b border-white/10 pb-1">
              {[45, 25, 75, 65, 45, 25, 75, 65, 75, 55, 85, 40].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-[#134e48] hover:bg-[#00D1B2] transition-colors rounded-t-sm" 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* GROWTH & DEBT CARD */}
          <div className="bg-[#111319] rounded-[24px] p-12 border border-white/5 space-y-12">
            {/* Savings Growth Row */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-[#00D1B2] tracking-wide">Savings Growth</span>
                <span className="text-sm font-bold text-white">+12.4%</span>
              </div>
              <div className="h-[1px] w-full bg-white/5 relative">
                <div className="absolute top-0 left-0 h-full w-[80%] bg-[#00D1B2]"></div>
              </div>
            </div>

            {/* Recurring Debt Row */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white tracking-wide">Recurring Debt</span>
                <span className="text-sm font-bold text-white">-2.1%</span>
              </div>
              <div className="h-[1px] w-full bg-white/5 relative">
                <div className="absolute top-0 left-0 h-full w-[65%] bg-slate-600"></div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}