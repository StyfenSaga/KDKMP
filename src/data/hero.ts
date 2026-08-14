export interface CtaLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export const heroData = {
  headline: 'Membangun Ekonomi Desa, Mewujudkan Indonesia Mandiri',
  subheadline: 'Koperasi Desa/Kelurahan Merah Putih (KDKMP) adalah program strategis nasional yang bertujuan untuk mengentaskan kemiskinan dan memperkuat ekonomi pedesaan. Melalui pemberdayaan koperasi dan penguatan ekosistem ekonomi lokal, kami berkomitmen untuk menciptakan kesejahteraan yang merata di seluruh pelosok negeri.',
  ctaPrimary: { label: 'Portal Anggota (SIMKOPDES)', href: '#simkopdes' },
  ctaSecondary: { label: 'Pelajari Layanan', href: '#layanan' },
  stats: [
    { label: 'Desa Terjangkau', value: '15.000+' },
    { label: 'Anggota Aktif', value: '2.5 Juta' },
    { label: 'Unit Usaha', value: '8.400' },
    { label: 'Provinsi', value: '38' }
  ]
};
