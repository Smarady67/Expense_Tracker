'use client';

import React from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#090A0C] font-sans text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* --- SIDEBAR NAVIGATION --- */}
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
          <Link href="/analytics" className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors">
            Analytics
          </Link>
          <Link href="/setting_privacy" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00D1B2]">
            Settings
          </Link>
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto w-full space-y-10">
          
          {/* Header Section */}
          <header className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Account</h1>
              <p className="text-sm font-semibold text-slate-500 mt-2">Hello, User!</p>
            </div>

            <Link href="/">
              <button className="bg-[#B90000] text-white px-8 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:opacity-80 transition-all">
                Delete
              </button>
            </Link>
          </header>

          {/* PROFILE INFORMATION CARD */}
          <div className="bg-[#111319] rounded-[24px] p-10 border border-white/5 space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF9F66] rounded-lg flex items-center justify-center text-black font-bold text-xl">
                L
              </div>
              <h2 className="text-3xl font-bold tracking-tight">User</h2>
            </div>

            <div className="space-y-8">
              {/* Username Input */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-white">Username:</label>
                <div className="w-full bg-[#D9D9D9] text-black px-6 py-3 rounded-full font-medium">
                  Username
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-white">Email:</label>
                <div className="w-full bg-[#D9D9D9] text-black px-6 py-3 rounded-full font-medium">
                  User123@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* PASSWORD MANAGEMENT CARD */}
          <div className="bg-[#111319] rounded-[24px] p-10 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-8 flex-1">
              <label className="text-sm font-bold text-white shrink-0">Password:</label>
              <div className="max-w-md w-full bg-[#D9D9D9] text-black px-6 py-3 rounded-full font-medium tracking-tighter">
                ****************
              </div>
            </div>
            
            <Link href="/reset">
              <button 
                type="button"
                className="bg-[#00D1B2] text-black px-6 py-3 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all ml-4"
              >
                Change Password
              </button>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}