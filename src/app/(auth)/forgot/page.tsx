'use client';

import React from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#12141D] font-sans flex flex-col items-center">
      
      {/* --- HEADER --- */}
      <header className="w-full p-6 flex justify-end gap-4">
        <Link href="/login" className="bg-white text-[#12141D] px-8 py-2 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
          Sign in
        </Link>
        <Link href="/signup" className="bg-white text-[#12141D] px-8 py-2 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
          Sign up
        </Link>
      </header>

      {/* --- CENTERED FORM --- */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-md px-6">
        <h1 className="text-3xl font-bold text-white text-center mb-10">Forgot Password!</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-white uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              className="w-full bg-white rounded-lg p-4 text-slate-900 outline-none placeholder:text-slate-400 font-medium" 
              placeholder="Enter your email" 
              required
            />
          </div>

          {/* Navigates to the Verify Code Page */}
          <Link href="/verify" className="block w-full">
            <button 
              type="button" 
              className="w-full bg-white text-[#12141D] py-4 rounded-lg font-bold text-sm mt-4 uppercase tracking-widest hover:bg-slate-200 transition-all shadow-sm"
            >
              Confirm
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}