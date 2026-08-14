"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, ctaLink } from '@/data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler Scroll yang Mulus & Handal
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Jika link mengarah ke anchor hash di halaman utama
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');

      if (pathname === '/') {
        // Jika sudah di Home, cari elemen dan scroll langsung
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Jika sedang di halaman lain (misal /etalase), pindah ke Home dulu
        router.push(href);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="px-6 md:px-12 lg:px-12 max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Brand */}
        <Link href="/" className="flex items-center gap-3 z-50 relative group">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-base tracking-tighter shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
              KDK<span className="text-red-600">MP</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold mt-0.5">
              LUBUK MANDARSAH
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 border border-slate-200/60 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs lg:text-sm text-slate-600 hover:text-red-600 font-semibold px-4 py-2 rounded-full transition-all hover:bg-white/80 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={ctaLink.href}
            onClick={(e) => handleNavClick(e, ctaLink.href)}
            className="group relative inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.25)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{ctaLink.label}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/80 shadow-2xl rounded-3xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">
                Navigasi Utama
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-700 hover:text-red-600 font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors text-base cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={ctaLink.href}
                  className="bg-red-600 text-white text-center px-6 py-3.5 rounded-2xl font-semibold shadow-md shadow-red-600/20 hover:bg-red-700 transition-colors text-sm cursor-pointer"
                  onClick={(e) => handleNavClick(e, ctaLink.href)}
                >
                  {ctaLink.label}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}