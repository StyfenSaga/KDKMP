export interface Mission {
  id: string;
  text: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const aboutData = {
  sectionTitle: 'Tentang KDKMP',
  sectionSubtitle: 'Menjadi motor penggerak utama dalam pembangunan ekonomi kerakyatan melalui koperasi yang modern, inklusif, dan berdaya saing global.',
  visi: 'Menjadi Gerai Ritel Koperasi Desa yang modern, terpercaya, kompetitif, dan berkelanjutan sebagai pusat pelayanan kebutuhan anggota serta penggerak ekonomi masyarakat Desa Lubuk Mandarsah.',
  misi: [
    'Meningkatkan kapasitas dan kapabilitas SDM desa melalui pendidikan, pelatihan, dan pengembangan kompetensi perkoperasian.',
    'Membuka akses permodalan, teknologi, dan pasar yang lebih luas bagi anggota serta produk-produk unggulan desa.',
    'Membangun rantai pasok yang terintegrasi untuk mendukung ketersediaan barang, efisiensi distribusi, dan harga yang kompetitif bagi masyarakat.',
    'Mendorong pemanfaatan teknologi digital dan inovasi dalam tata kelola, pelayanan anggota, serta pengembangan usaha koperasi.'
  ],
  values: [
    {
      id: 'val-1',
      title: 'Pemberdayaan Ekonomi',
      description: 'Meningkatkan kapasitas anggota melalui pendidikan perkoperasian, pengembangan usaha, akses pasar, serta keterlibatan aktif dalam kegiatan koperasi.',
      icon: 'trending-up'
    },
    {
      id: 'val-2',
      title: 'Kesejahteraan Bersama',
      description: 'Mengembangkan potensi pertanian, perkebunan, UMKM, perdagangan, dan jasa lokal agar memberikan nilai tambah bagi masyarakat dan anggota koperasi.',
      icon: 'hand-coins'
    },
    {
      id: 'val-3',
      title: 'Kolaborasi & Sinergi',
      description: 'Membangun pengelolaan koperasi yang profesional, transparan, akuntabel, dan didukung pemanfaatan teknologi digital.',
      icon: 'users'
    }
  ]
};
