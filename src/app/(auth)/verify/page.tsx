'use client';

import Link from 'next/link';
import React from 'react';

export default function VerifyCodePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* LEFT PANEL: Identity (Dark Charcoal #12141D) */}
      <div className="md:w-1/2 bg-[#12141D] p-10 md:p-24 flex flex-col justify-start text-white">
        <div className="flex items-center gap-3 mb-32">
          <div className="w-6 h-6 bg-teal-400 rounded-md shadow-[0_0_15px_rgba(45,212,191,0.5)] "></div>
          <span className="text-lg text-white font-bold tracking-[0.4em] uppercase ">Spendly</span>
        </div>
        
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight mb-10">
            Secure your <br /> financial future.
          </h1>
          <p className="text-lg font-medium leading-relaxed opacity-90">
            We’ve sent a 6-digit verification code to your email. Enter it on the right to verify 
            your identity and continue to reset your password.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: Verify Input (Slate Blue #313B56) */}
      <div className="md:w-1/2 bg-[#313B56] p-10 md:p-24 flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Verify Code</h2>
            <p className="text-[#8B95B3] text-sm font-semibold">Check your inbox for the reset code</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white">6-Digit Code</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-lg p-4 text-slate-900 outline-none text-center tracking-widest text-xl font-bold" 
              />
            </div>

            <Link href="/reset" className="block w-full">
              <button 
                type="button" 
                className="w-full bg-white text-[#313B56] py-3 rounded-lg font-bold text-sm tracking-widest mt-4 uppercase hover:bg-slate-200 transition-colors"
              >
                VERIFY
              </button>
            </Link>

            <div className="text-center mt-6">
              <button type="button" className="text-white text-sm font-semibold opacity-90 hover:underline">
                Didn't receive a code? Resend
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}