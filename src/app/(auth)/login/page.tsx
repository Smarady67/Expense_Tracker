'use client';

import React from 'react';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* LEFT PANEL: Branding */}
      <div className="md:w-1/2 bg-[#12141D] p-10 md:p-24 flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-32">
          <div className="w-6 h-6 bg-teal-400 rounded-md shadow-[0_0_15px_rgba(45,212,191,0.5)] "></div>
          <span className="text-lg text-white font-bold tracking-[0.4em] uppercase ">Spendly</span>
        </div>
        
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white leading-[1.1] mb-10 tracking-tight">
            Take control of your  <br /> money, finally.
          </h1>
          <p className="text-white text-xl font-medium leading-relaxed opacity-90">
             A smart, intuitive expense tracker designed to help you monitor your spending, 
             build better financial habits, and achieve your goals.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: Form */}
      <div className="md:w-1/2 bg-[#313B56] p-10 md:p-24 flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-[#8B95B3] text-sm font-semibold">Sign in to your account to continue</p>
          </div>

          <form className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-white">Email</label>
              <input type="email" className="w-full bg-white rounded-lg p-4 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-white">Password</label>
              </div>
              <input type="password" className="w-full bg-white rounded-lg p-4 text-slate-900 outline-none placeholder:text-slate-400" placeholder="••••••••" />
              <Link href="forgot" className="text-xs text-white opacity-70 hover:underline">Forgot password?</Link>
            </div>

            <Link href="/dashboard" className="block w-full">
                  <button type="button" className="w-full bg-white text-[#313B56] py-4 rounded-lg font-bold text-lg mt-6 shadow-sm hover:bg-slate-100 transition-colors uppercase tracking-widest">
                    Sign In
                  </button>                 
            </Link>

            <div className="text-center mt-6">
              <p className="text-white text-sm opacity-90">
                Don't have an account? <Link href="/signup" className="hover:underline">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}