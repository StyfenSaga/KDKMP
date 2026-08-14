"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/services';
import { 
  ShoppingBasket, 
  Wallet, 
  HeartPulse, 
  Truck, 
  Check, 
  ArrowUpRight, 
  ShieldCheck,
  ChevronRight,
  UserCheck,
  Building2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'shopping-basket': ShoppingBasket,
  'wallet': Wallet,
  'heart-pulse': HeartPulse,
  'truck': Truck
};

export function ServicesGrid() {
  const [activeIdx, setActiveIdx] = useState<number>(1); // Default modul ke-2 (Simpan Pinjam)

  return (
    <section 
      id="layanan" 
      className="py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden select-none"
      aria-label="Layanan dan Fasilitas Koperasi"
    >
      {/* Background Ambience: Subtle Red Mesh Glow & Precise Grid */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= SISI KIRI: PROFESSIONAL EDITORIAL NARRATIVE (5 COLS) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full font-sans space-y-8 lg:space-y-0 py-1">
            
            {/* 1. Header, Eyebrow & Hero Copy */}
            <div className="space-y-6">
            

              {/* Main Headline */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance">
                  Layanan Utama <br />
                  <span className="relative inline-block text-red-600">
                    KDKMP Mandarsah
                    <span className="absolute left-0 -bottom-1 w-full h-[3.5px] bg-red-600/20 rounded-full" />
                  </span>
                </h2>
              </div>

              {/* Subtitle Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
                {servicesData.sectionSubtitle}
              </p>

              {/* Interactive Quick-Nav Mini Tabs */}
              <div className="pt-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2.5">
                  Pilih Cepat Modul Layanan:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {servicesData.services.map((item, i) => {
                    const isSelected = activeIdx === i;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveIdx(i)}
                        onMouseEnter={() => setActiveIdx(i)}
                        className={`text-left px-3 py-2 rounded-xl border text-xs font-semibold transition-all duration-300 flex items-center justify-between group ${
                          isSelected
                            ? 'bg-red-600 text-white border-red-600 shadow-sm shadow-red-600/20 font-bold'
                            : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-white hover:border-red-200'
                        }`}
                      >
                        <span className="truncate">0{i + 1}. {item.title.split('&')[0]}</span>
                        <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform ${isSelected ? 'text-white translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* 2. Panduan Akses Layanan (Sub-info Bawah) */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5 text-red-600 font-mono font-bold text-xs">
                  <UserCheck className="w-4 h-4" />
                  <span>AKSES ANGGOTA</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Terbuka untuk seluruh warga Desa Lubuk Mandarsah terdaftar.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5 text-red-600 font-mono font-bold text-xs">
                  <Building2 className="w-4 h-4" />
                  <span>LAYANAN FISIK</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Kunjungi kantor balai koperasi untuk pelayanan &amp; konsultasi langsung.
                </p>
              </div>
            </div>

          </div>

          {/* ================= SISI KANAN: SMOOTH VERTICAL PILL CARDS (7 COLS) ================= */}
          <div 
            className="lg:col-span-7 w-full h-[580px] lg:h-[640px] flex gap-3 sm:gap-4 items-stretch"
            role="tablist"
            aria-orientation="horizontal"
          >
            {servicesData.services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              const isExpanded = activeIdx === idx;

              return (
                <motion.div
                  key={service.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isExpanded}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  className={`relative cursor-pointer overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    isExpanded
                      ? 'flex-[7] bg-red-600 text-white rounded-[3rem] shadow-2xl shadow-red-600/30'
                      : 'flex-1 bg-slate-100 hover:bg-slate-200/70 text-slate-700 rounded-full items-center py-8 px-2'
                  }`}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26
                  }}
                >
                  {/* ================= KONDISI EXPANDED ================= */}
                  {isExpanded ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="flex flex-col h-full justify-between w-full min-w-0"
                    >
                      {/* 1. Header Card (Ikon Putih & Badge Nomor) */}
                      <div className="flex items-center justify-between w-full flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-white text-red-600 flex items-center justify-center shadow-md">
                          {Icon && <Icon className="w-7 h-7" />}
                        </div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest bg-white/20 text-white px-4 py-1.5 rounded-full backdrop-blur-md">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* 2. Body Card (Judul, Deskripsi, Fitur) */}
                      <div className="my-auto py-4 flex flex-col justify-center min-w-0">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-red-200 block mb-1.5">
                          MODUL KOPERASI
                        </span>
                        
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3 break-words">
                          {service.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-red-50 leading-relaxed font-normal mb-6 break-words">
                          {service.description}
                        </p>

                        {/* List Fitur */}
                        <div className="space-y-2.5">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-3 min-w-0">
                              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white">
                                <Check className="w-3 h-3" strokeWidth={3} />
                              </div>
                              <span className="text-xs sm:text-sm text-white font-medium break-words leading-snug">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3. Footer Action */}
                      <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white flex-shrink-0">
                        <span className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-white flex-shrink-0" />
                          Layanan Terverifikasi
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* ================= KONDISI COLLAPSED ================= */
                    <div className="flex flex-col items-center justify-between h-full w-full select-none py-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>

                      {/* Vertically Rotated Title */}
                      <div className="my-auto flex items-center justify-center">
                        <span className="[writing-mode:vertical-lr] rotate-180 text-xs sm:text-sm font-bold text-slate-700 tracking-wider whitespace-nowrap uppercase">
                          {service.title}
                        </span>
                      </div>

                      {/* Ikon Collapsed Bawah */}
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 shadow-xs">
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}