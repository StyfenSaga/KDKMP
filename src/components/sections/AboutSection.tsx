"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutData } from '@/data/about';
import { 
  ShieldCheck,
  MapPin,
  Users,
  Home,
  Target,
  ArrowUpRight,
  Sparkles,
  Layers
} from 'lucide-react';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'misi' | 'nilai'>('misi');

  return (
    <section id="tentang" className="py-24 lg:py-32 bg-slate-50 text-slate-900 border-t border-red-100 relative overflow-hidden">
      
      {/* Background Ambience: Eksklusif Merah & Putih */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Mengenal Lebih Dekat <br />
              <span className="text-red-600">KDKMP Lubuk Mandarsah</span>
            </h2>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Pusat penggerak ekonomi kerakyatan di Dusun Tanjung Pauh yang mengintegrasikan potensi lokal dengan tata kelola profesional dan transparan.
            </p>
          </div>
        </div>

        {/* ================= MAIN EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= KOLOM KIRI: VISI, DEMOGRAFI & LEGALITAS (5 COLS) ================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visi Card (Full Red Theme) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-600 text-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-white/10 blur-[50px] pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-200 flex items-center gap-2">
                    <Target className="w-4 h-4 text-white" />
                    Visi Koperasi
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                </div>
                
                <blockquote className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-white mb-8">
                  "{aboutData.visi}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-red-500/70 flex items-start gap-3 text-red-100 text-xs font-medium">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>Dusun Tanjung Pauh, Lubuk Mandarsah, Tengah Ilir, Kab. Tebo, Jambi</span>
              </div>
            </motion.div>

            {/* Statistik Demografi Desa & Legalitas dalam 1 Bento Rapi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-slate-200/80 rounded-[2.25rem] p-7 shadow-xs flex flex-col gap-6"
            >
              {/* Demografi */}
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Demografi Wilayah</span>
                  <Users className="w-4 h-4 text-red-600" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block mb-0.5">PENDUDUK DESA</span>
                    <span className="text-lg font-black text-slate-900">±7.077 <span className="text-xs font-normal text-slate-500">jiwa</span></span>
                  </div>
                  <div className="border-l border-slate-100 pl-4">
                    <span className="text-[9px] font-bold text-slate-400 block mb-0.5">KEPALA KELUARGA</span>
                    <span className="text-lg font-black text-slate-900">±1.923 <span className="text-xs font-normal text-slate-500">KK</span></span>
                  </div>
                </div>
              </div>

              {/* Legalitas */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Legalitas & Hukum</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-mono text-[10px]">NIK:</span>
                    <span className="font-mono font-bold text-slate-900">150******013</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-mono text-[10px]">SK AHU:</span>
                    <span className="font-mono font-bold text-slate-900">AHU-0034682.AH.01.29</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ================= KOLOM KANAN: MISI & NILAI INTI (7 COLS - Integrated Switcher) ================= */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-[2.5rem] p-8 lg:p-10 shadow-xs flex flex-col justify-between">
            
            <div>
              {/* Header Tab Switcher di Dalam Kartu Kanan */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Pilar & Strategi Utama
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Komitmen operasional dan landasan moral kelembagaan koperasi.
                  </p>
                </div>

                {/* Switcher Button */}
                <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200/80 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setActiveTab('misi')}
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === 'misi'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Misi ({aboutData.misi.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('nilai')}
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === 'nilai'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Nilai Inti ({aboutData.values.length})
                  </button>
                </div>
              </div>

              {/* Konten Tab Aktif */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  
                  {activeTab === 'misi' ? (
                    <motion.div
                      key="misi-list"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {aboutData.misi.map((item, idx) => (
                        <div
                          key={idx}
                          className="group p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-red-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
                        >
                          <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors border border-red-100">
                            0{idx + 1}
                          </div>
                          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal pt-1">
                            {item}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="nilai-list"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {aboutData.values.map((val, idx) => (
                        <div
                          key={val.id || idx}
                          className="group p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-red-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4"
                        >
                          <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-red-600 transition-colors">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                              {val.title}
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                              {val.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>

            {/* Footer Kartu Kanan */}
            <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-red-600" />
                <span>KDKMP Lubuk Mandarsah Ecosystem</span>
              </span>
              <a href="#beranda" className="text-red-600 hover:text-red-700 flex items-center gap-1">
                <span>Kembali ke atas</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}