export interface ServiceFeature {
  id: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export const servicesData = {
  sectionTitle: 'Layanan Kami',
  sectionSubtitle: ' Mengembangkan layanan yang berangkat dari kebutuhan masyarakat dan potensi ekonomi Desa Lubuk Mandarsah.',
  services: [
    {
      id: 'srv-1',
      title: 'Sembako & Barang Bersubsidi',
      description: 'Penyediaan dan distribusi kebutuhan pokok serta barang bersubsidi dengan harga yang terjangkau. Kami memastikan ketersediaan pasokan yang stabil untuk kesejahteraan masyarakat desa.',
      icon: 'shopping-basket',
      color: '#C41E3A',
      features: [
        'Distribusi tepat sasaran',
        'Harga lebih stabil dan terjangkau',
        'Kualitas produk terjamin'
      ]
    },
    {
      id: 'srv-2',
      title: 'Simpan Pinjam',
      description: 'Layanan keuangan yang aman dan mudah diakses untuk mendukung permodalan usaha masyarakat desa. Berkomitmen untuk mendorong inklusi keuangan hingga ke pelosok.',
      icon: 'wallet',
      color: '#0E7C61',
      features: [
        'Proses pengajuan mudah',
        'Bunga kompetitif',
        'Pendampingan usaha'
      ]
    },
    {
      id: 'srv-3',
      title: 'Layanan Kesehatan',
      description: 'Akses layanan kesehatan yang terjangkau dan berkualitas bagi anggota koperasi. Bekerja sama dengan berbagai fasilitas kesehatan terpercaya.',
      icon: 'heart-pulse',
      color: '#2563EB',
      features: [
        'Program asuransi mikro',
        'Akses faskes terdekat',
        'Edukasi kesehatan rutin'
      ]
    },
    {
      id: 'srv-4',
      title: 'Logistik & Offtaking',
      description: 'Sistem logistik terintegrasi untuk menjamin penyerapan hasil panen dan produksi desa. Membuka akses pasar yang lebih luas dengan harga yang adil.',
      icon: 'truck',
      color: '#D97706',
      features: [
        'Penyerapan hasil panen',
        'Gudang penyimpanan modern',
        'Jaringan distribusi nasional'
      ]
    }
  ]
};
