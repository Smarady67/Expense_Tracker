'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#090A0C] font-sans text-white flex flex-col md:flex-row">
      
      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="md:w-64 bg-[#111319] border-r border-white/5 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-16">
          {/* Solid Teal Logo Box */}
          <div className="w-8 h-8 bg-[#00D1B2] rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight">Spendly</span>
        </div>

        <nav className="flex flex-col gap-6">
          <Link href="/dashboard" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00D1B2]">
            Dashboard
          </Link>
          <Link href="/budget" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
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
      <main className="flex-1 p-8 md:p-16 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header Section */}
          <header className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Capital <span className="text-[#00D1B2]">Overview</span>
              </h1>
              <p className="text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider">
                Update: Feb 21, 2026
              </p>
            </div>
            {/* Reports Button - Rounded Pill Style */}
            <button className="bg-[#00D1B2] text-black px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
              Reports
            </button>
          </header>

          {/* Stats Grid - Dark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard label="Net Worth" value="$240,850" />
            <StatCard label="Monthly Revenue" value="$48,200" />
            <StatCard label="Expenses" value="$12,400" />
            <StatCard label="Savings Rate" value="74%" />
          </div>

          {/* Recent Ledger - Large Rounded Container */}
          <div className="bg-[#111319] rounded-[24px] p-10">
            <h3 className="text-xl font-bold text-white mb-10">Recent</h3>
            
            <div className="space-y-10">
              <LedgerRow 
                title="Apple Inc. Subscription" 
                date="Feb 20" 
                amount="-0.00$" 
              />
              <LedgerRow 
                title="Stripe Payout" 
                date="Feb 19" 
                amount="-0.00$" 
              />
              <LedgerRow 
                title="Equinox Membership" 
                date="Feb 18" 
                amount="-0.00$" 
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#1A1C23] p-8 rounded-[18px]">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-4">
        {label}
      </p>
      <h4 className="text-2xl font-bold tracking-tight text-white">{value}</h4>
    </div>
  );
}

function LedgerRow({ title, date, amount }: { title: string; date: string; amount: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-8 last:border-0 last:pb-0">
      <div className="space-y-1">
        <p className="text-base font-bold text-white tracking-wide">{title}</p>
        <p className="text-xs font-semibold text-slate-500 uppercase">{date}</p>
      </div>
      <span className="text-base font-bold text-white tracking-tight">
        {amount}
      </span>
    </div>
  );
}