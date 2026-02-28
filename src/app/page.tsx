'use client';

import React from 'react';
import Link from 'next/link';

export default function SpendlyLanding() {
  return (
    <div className="min-h-screen bg-[#0B0C10] font-sans text-white selection:bg-teal-500/30">
      
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-8 border-b border-white/5 sticky top-0 bg-[#0B0C10]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-teal-400 rounded-md shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
          <span className="text-lg font-bold tracking-[0.4em] uppercase">Spendly</span>
        </div>

        <div className="flex items-center gap-8 font-bold text-[10px] uppercase tracking-[0.3em]">
          <Link href="/login" className="text-slate-500 hover:text-white transition-colors">Sign In</Link>
          <Link href="/signup" className="bg-[#2DD4BF] text-[#0B0C10] px-6 py-2.5 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            Get Started →
          </Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block border border-teal-500/30 bg-teal-500/5 px-4 py-1.5 rounded-full mb-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-teal-400">Simplify your wealth today</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1]">
            Organize your wealth <br /> 
            and life, <span className="text-teal-400 italic">finally.</span>
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed tracking-wide">
            Spendly is a simple yet powerful financial management tool designed to help you stay focused, organized, and in control of your daily capital.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/signup" className="bg-[#2DD4BF] text-[#0B0C10] font-bold py-4 px-10 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all active:scale-95 shadow-[0_0_30px_rgba(45,212,191,0.15)]">
              Start free →
            </Link>
            <Link href="/login" className="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all">
              Sign in to account
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 bg-[#0B0C10] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight italic">Everything you need to stay productive</h2>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em]">Powerful features designed to help you manage capital efficiently</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Ledger Management" />
            <FeatureCard title="Global Categories" />
            <FeatureCard title="Smart Analysis" />
            <FeatureCard title="Secure Access" />
            <FeatureCard title="Growth Tracking" />
            <FeatureCard title="Privacy First" />
          </div>
        </div>
      </section>

      {/* --- Bottom CTA Section --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#134E4A] to-[#0B0C10] rounded-[40px] p-12 md:p-20 text-center border border-teal-500/20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Ready to get organized?</h2>
            <p className="text-teal-100/60 text-xs font-bold uppercase tracking-[0.3em] italic">Join thousands of users optimizing their productivity.</p>
            <Link href="/signup" className="inline-block bg-[#2DD4BF] text-[#0B0C10] font-bold py-4 px-12 rounded-full text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all">
              Create free Account →
            </Link>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-400/10 rounded-full blur-[80px]"></div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-white/5 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-teal-400/20 rounded"></div>
          <span className="text-slate-300">Spendly</span>
        </div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of use</Link>
        </div>
        <p className="text-slate-700 italic">
          Copyright © 2026 Spendly Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="bg-[#1A1C23] border border-white/5 p-10 rounded-[32px] hover:border-teal-500/30 transition-all group flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-teal-500/10 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_#2DD4BF]"></div>
      </div>
      <h3 className="text-lg font-light tracking-tight group-hover:text-teal-400 transition-colors italic">{title}</h3>
    </div>
  );
}