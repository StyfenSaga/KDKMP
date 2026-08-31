"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex items-center justify-center bg-white text-slate-900 pt-20 pb-14 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      {/* Background Image of KDKMP building */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_right_-240px] md:bg-[center_right_-120px] lg:bg-right no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      
      {/* Premium Background Gradients for maximum text readability */}
      {/* On mobile: strong white overlay to make text readable. On desktop: smooth transition fade. */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 md:from-white md:via-white/80 md:to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN (8 Kolom) ================= */}
          <div className="lg:col-span-8 flex flex-col items-start text-left xl:pr-4 z-20">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[4rem] font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-6 text-balance"
            >
              Menggerakkan Ekonomi Desa
              <span className="text-red-600 relative inline-block">
                Bersama Koperasi Merah Putih
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-red-200/80 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                KDKMP Lubuk Mandarsah hadir sebagai wadah ekonomi masyarakat untuk menghubungkan kebutuhan anggota, potensi lokal, dan peluang usaha desa melalui tata kelola koperasi yang profesional, transparan, dan bertahap menuju ekosistem digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
            >
              <a
                href="#tentang"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl py-3.5 px-8 text-sm transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.2)] hover:-translate-y-0.5"
              >
                <span>Jelajahi Koperasi</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="/portal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl py-3.5 px-8 text-sm transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Portal Anggota
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-slate-200/80 shadow-sm items-start"
            >
              <div className="flex flex-col sm:pr-4">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Potensi Lokal</h4>
                <p className="text-[11px] text-slate-500 leading-snug">Optimalisasi sektor peternakan & pertanian desa.</p>
              </div>
              
              <div className="flex flex-col sm:px-4">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Tata Kelola Digital</h4>
                <p className="text-[11px] text-slate-500 leading-snug">Manajemen terintegrasi via platform Simkopdes.</p>
              </div>

              <div className="flex flex-col sm:pl-4">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">Ekonomi Inklusif</h4>
                <p className="text-[11px] text-slate-500 leading-snug">Pemberdayaan UMKM dan kesejahteraan warga.</p>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN (4 Kolom - Kosong agar gambar gedung di belakang terlihat jelas) ================= */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>
    </section>
  );
}