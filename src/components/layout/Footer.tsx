import React from 'react';
import Link from 'next/link';
import { navLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C41E3A] to-[#9B1B30]"></div>

      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tight text-white">
                KDK<span className="text-[#C41E3A]">MP</span>
              </span>
            </Link>
            <p className="text-slate-400 font-medium text-lg">
              Koperasi Desa/Kelurahan Merah Putih
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Membangun kemandirian ekonomi desa melalui digitalisasi dan koperasi modern untuk kesejahteraan rakyat.
            </p>
          </div>

          {/* Tautan Cepat */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Tautan Cepat</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Layanan</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Sembako
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Simpan Pinjam
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Kesehatan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Logistik
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Kontak</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="text-slate-400">
                Lubuk Mandarsah<br />
                Jambi, Indonesia
              </li>
              <li>
                <a href="tel:+6281234567890" className="text-slate-400 hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@kdkmp.id" className="text-slate-400 hover:text-white transition-colors">
                  info@kdkmp.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 KDKMP. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
