"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const stackImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    title: "Pusat Rantai Pasok",
    badge: "Infrastruktur"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1200&auto=format&fit=crop",
    title: "Potensi Agrikultur",
    badge: "Komoditas"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
    title: "Pemberdayaan Desa",
    badge: "Sosial"
  }
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % stackImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex items-center justify-center bg-white text-slate-900 pt-16 pb-14 lg:pt-24 lg:pb-20 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/40 via-white to-slate-50/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN (7 Kolom) ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left xl:pr-4 z-20">

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
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
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
              className="w-full bg-slate-50/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-slate-200 shadow-sm items-start"
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

          {/* ================= RIGHT COLUMN (5 Kolom - Stack Gambar Diperbesar Secara Signifikan) ================= */}
          <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px] lg:h-[600px] z-10 flex items-center justify-center mt-8 lg:mt-0">
            
            {/* Ukuran container diperbesar menggunakan max-w-2xl dan tinggi ditingkatkan hingga 440px */}
            <div className="relative w-full max-w-2xl h-[300px] sm:h-[370px] lg:h-[440px]">
              
              <AnimatePresence>
                {stackImages.map((image, index) => {
                  const relativeIndex = (index - activeIndex + stackImages.length) % stackImages.length;
                  
                  const isFront = relativeIndex === 0;
                  const isMiddle = relativeIndex === 1;
                  
                  return (
                    <motion.div
                      key={image.id}
                      className="absolute inset-0 rounded-[2.5rem] shadow-2xl origin-bottom-left overflow-hidden border-4 border-white bg-slate-100"
                      initial={false}
                      animate={{
                        opacity: isFront ? 1 : isMiddle ? 0.9 : 0.6,
                        scale: isFront ? 1 : isMiddle ? 0.95 : 0.9,
                        y: isFront ? 0 : isMiddle ? -22 : -44,
                        rotate: isFront ? 0 : isMiddle ? -3 : -6,
                        zIndex: isFront ? 30 : isMiddle ? 20 : 10,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                    >
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                      <div className="absolute top-5 left-5 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                        <ImageIcon className="w-4 h-4 text-red-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">
                          {image.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-end justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 shadow-sm">
                            {image.title}
                          </h3>
                          <p className="text-xs text-white/80 font-mono tracking-wider">
                            KDKMP LUBUK MANDARSAH
                          </p>
                        </div>
                        <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-xs font-mono">
                          0{image.id} / 03
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}