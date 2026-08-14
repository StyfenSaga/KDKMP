export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '/#beranda' },
  { label: 'Tentang', href: '/#tentang' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Komoditas', href: '/#komoditas' },
];

export const ctaLink: NavLink = {
  label: 'Kontak',
  href: '/#kontak',
};