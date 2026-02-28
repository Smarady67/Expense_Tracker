'use client';

import React from 'react';
import Link from 'next/link';

export default function BudgetTrackerPage() {
  // Budget Data based on your screenshot
  const budgets = [
    { category: 'Housing', spent: 1200, limit: 1500, percentage: 80 },
    { category: 'Food & Dining', spent: 310, limit: 300, percentage: 80 },
    { category: 'Transport', spent: 150, limit: 400, percentage: 80 },
  ];

  return (
    <div className="min-h-screen bg-[#090A0C] font-sans text-white flex flex-col md:flex-row">
      
      {/* --- SIDEBAR NAVIGATION (Matches Dashboard) --- */}
      <aside className="md:w-64 bg-[#111319] border-r border-white/5 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 bg-[#00D1B2] rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight text-white">Spendly</span>
        </div>

        <nav className="flex flex-col gap-6">
          <Link href="/dashboard" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="/budget" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00D1B2]">
            Budget Tracker
          </Link>
          <Link href="/analytics" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Analytics
          </Link>
          <Link href="/setting_privacy" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Settings
          </Link>
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 p-8 md:p-16 overflow-y-auto flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
          
          {/* Header Section */}
          <header className="flex justify-between items-start mb-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight uppercase">
                Budget <span className="text-[#00D1B2]">Tracker</span>
              </h1>
              <p className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Update: Feb 21, 2026
              </p>
            </div>
            <button className="bg-[#00D1B2] text-black px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
              Reports
            </button>
          </header>

          {/* CENTERED ALLOCATIONS BOX */}
          <div className="flex-1 flex items-start justify-center">
            <div className="w-full max-w-4xl bg-[#111319] rounded-[24px] p-12">
              <h3 className="text-xl font-bold text-white mb-12">Allocations</h3>
              
              <div className="space-y-12">
                {budgets.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-lg font-bold text-white tracking-wide">{item.category}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase mt-1">
                          ${item.spent} of ${item.limit}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-white">
                        {item.percentage}%
                      </span>
                    </div>

                    {/* Thick Progress Bar style from image */}
                    <div className="h-2 w-full bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#00D1B2] transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}