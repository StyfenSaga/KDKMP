"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productsData } from '@/data/products';
import { 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles,
  PackageCheck,
  Building2,
  TrendingUp,
  Scale
} from 'lucide-react';

export function ProductsShowcase() {
  const featuredProducts = productsData.products.slice(0, 3);

  return (
<section 
  id="komoditas" 
  className="scroll-mt-24 py-24 lg:py-32 bg-slate-50/70 text-slate-900 border-t border-slate-200/80 relative overflow-hidden select-none"
  aria-label="Etalase Usaha dan Komoditas Unggulan Desa"
>
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance">
              Etalase Komoditas & <br />
              <span className="relative inline-block text-red-600">
                Produk Usaha Desa
                <span className="absolute left-0 -bottom-1 w-full h-[3.5px] bg-red-600/20 rounded-full" />
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {productsData.sectionSubtitle}
            </p>
          </div>
        </div>

        {/* ================= 2. FEATURED PRODUCTS GRID WITH IMAGES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group relative bg-white border border-slate-200/80 rounded-[2.25rem] flex flex-col justify-between shadow-2xs hover:shadow-2xl hover:shadow-red-600/10 hover:border-red-300 transition-all duration-400 overflow-hidden"
            >
              {/* IMAGE CONTAINER DENGAN FLOATING BADGES */}
              <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-white/40">
                    {product.categoryLabel}
                  </span>
                  {product.badge && (
                    <span className="text-[10px] font-bold text-white bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 border border-red-500/40">
                      <Sparkles className="w-2.5 h-2.5" />
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Image Info (Origin) */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span className="drop-shadow-sm">{product.origin}</span>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-6 lg:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-red-600 transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal mb-5 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER: METRICS & ACTION */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                  {/* Two-Column Stats Box */}
                  <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Estimasi Harga
                      </span>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {product.price}
                        <span className="text-[10px] font-normal text-slate-500 font-sans ml-0.5">{product.unit}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Kapasitas Pasok
                      </span>
                      <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {product.productionCapacity}
                      </div>
                    </div>
                  </div>

                  {/* Trust Status & Action Link */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                      <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                      <span>Terverifikasi</span>
                    </div>

                    <Link
                      href={`/etalase#${product.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-red-600 transition-all duration-300 shadow-xs hover:shadow-md"
                    >
                      <span>Lihat Detail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ================= 3. INTEGRATED BOTTOM ACTION DOCK ================= */}
        <div className="relative bg-white border border-slate-200/80 rounded-[2.25rem] p-6 lg:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-red-600/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  Katalog Komoditas Lengkap
                </h4>
                <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                  {productsData.products.length}+ Produk
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal">
                Tersedia komoditas sawit, pinang, getah karet, beras sawah, hingga olahan UMKM desa.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full sm:w-auto flex-shrink-0">
            <Link
              href="/etalase"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm font-bold shadow-lg shadow-slate-900/10 hover:bg-red-600 hover:shadow-red-600/25 transition-all duration-300"
            >
              <span>Lihat Semua Produk &amp; Komoditas</span>
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}