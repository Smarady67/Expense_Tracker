'use client';

import Link from 'next/link';
import React from 'react';

export default function NewPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* LEFT PANEL: Identity (Dark Charcoal #12141D) */}
      <div className="md:w-1/2 bg-[#12141D] p-10 md:p-24 flex flex-col justify-start text-white">
        <span className="text-2xl font-bold mb-32">Spendly</span>
        
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-10">
            Your security <br /> is our priority.
          </h1>
          <p className="text-lg font-medium leading-relaxed opacity-90">
            Choose a strong password that you haven’t used before. Once updated, 
            you’ll be able to sign back into your Spendly dashboard.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: New Password Input (Slate Blue #313B56) */}
      <div className="md:w-1/2 bg-[#313B56] p-10 md:p-24 flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">New Password</h2>
            <p className="text-[#8B95B3] text-sm font-semibold">Create a new, strong password</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">New Password</label>
              <input 
                type="password" 
                className="w-full bg-white rounded-lg p-4 text-slate-900 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">Confirm New Password</label>
              <input 
                type="password" 
                className="w-full bg-white rounded-lg p-4 text-slate-900 outline-none" />
            </div>
            
          <Link href="/dashboard" className="block w-full">
            <button type="submit" className="w-full bg-white text-[#313B56] py-3 rounded-lg font-bold text-sm tracking-widest mt-4 uppercase">
              Update Password
            </button>
          </Link>

          </form>
        </div>
      </div>
    </div>
  );
}