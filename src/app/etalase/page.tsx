"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData, ProductItem } from '@/data/products';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowUpRight, 
  Sparkles, 
  X,
  MessageSquare,
  Info
} from 'lucide-react';

export default function EtalasePage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return productsData.products.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />

      {/* ================= 1. HEADER & BREADCRUMBS ================= */}
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-red-600 transition-colors uppercase tracking-wider group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
                Etalase Komoditas &amp; <br />
                <span className="text-red-600">Produk Usaha Mandarsah</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Akses langsung ke rantai pasok hasil perkebunan, pertanian pangan, dan produk olahan binaan KDKMP Desa Lubuk Mandarsah.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex-shrink-0">
              <div className="text-center px-3 border-r border-slate-200">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">
                  {productsData.products.length}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Komoditas</span>
              </div>
              <div className="text-center px-3">
                <span className="block text-2xl font-extrabold text-red-600 font-mono">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rakyat Desa</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. CONTROLS (SEARCH & CATEGORY) ================= */}
      <section className="py-6 bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200/80 shadow-2xs">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari komoditas, sawit, beras, dusun..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {productsData.categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. PRODUCT GRID ================= */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-[2.5rem] border border-dashed border-slate-300 p-8 max-w-lg mx-auto">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Produk Tidak Ditemukan</h3>
              <p className="text-xs text-slate-500 mb-6">
                Tidak ada komoditas yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-red-600 transition-colors"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group relative bg-white border border-slate-200/80 rounded-[2.25rem] flex flex-col justify-between shadow-2xs hover:shadow-2xl hover:shadow-red-600/10 hover:border-red-300 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image Header */}
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

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

                      <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                        <span className="drop-shadow-sm">{product.origin}</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 lg:p-7 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-red-600 transition-colors leading-snug">
                          {product.name}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal mb-5 line-clamp-3">
                          {product.description}
                        </p>

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

                      <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
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

                        <div className="flex items-center justify-between gap-3 pt-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                            <span>Terverifikasi</span>
                          </div>

                          <button
                            onClick={() => setSelectedProductModal(product)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-red-600 transition-all duration-300 shadow-xs hover:shadow-md"
                          >
                            <span>{product.isOfftakeReady ? 'Kemitraan Pasok' : 'Pesan Komoditas'}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

      {/* ================= 4. MODAL DETAIL & ORDER DENGAN GAMBAR ================= */}
      <AnimatePresence>
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProductModal(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute right-5 top-5 w-9 h-9 rounded-full bg-white/90 text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors z-20 shadow-md"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image Header */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 -mt-1">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-red-600 px-3 py-1 rounded-full">
                    {selectedProductModal.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                  {selectedProductModal.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{selectedProductModal.origin}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {selectedProductModal.description}
                </p>

                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-0.5">Estimasi Harga</span>
                    <span className="text-sm font-extrabold text-slate-900">
                      {selectedProductModal.price} {selectedProductModal.unit}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-0.5">Kapasitas Pasok</span>
                    <span className="text-sm font-extrabold text-slate-900">
                      {selectedProductModal.productionCapacity}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50/60 border border-red-100 text-xs text-slate-600">
                  <Info className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Kemitraan pasok komoditas dikelola langsung melalui koperasi resmi KDKMP Mandarsah dengan standar mutu dan kepastian harga.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Pengurus%20KDKMP%20Mandarsah,%20saya%20tertarik%20dengan%20komoditas%20${encodeURIComponent(selectedProductModal.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-red-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/25 hover:bg-red-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Tutup
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}