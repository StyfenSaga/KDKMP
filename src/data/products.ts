export type ProductCategory = 'komoditas' | 'pertanian' | 'umkm' | 'olahan';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: string;
  unit: string;
  productionCapacity: string;
  origin: string;
  description: string;
  image: string;
  badge?: string;
  isOfftakeReady: boolean;
  tags: string[];
}

export interface ProductsDataSchema {
  sectionTag: string;
  sectionTitle: string;
  sectionSubtitle: string;
  categories: { id: string; label: string }[];
  products: ProductItem[];
}

export const productsData: ProductsDataSchema = {
  sectionTag: 'Katalog Komoditas & UMKM',
  sectionTitle: 'Etalase Usaha & Produk Unggulan Desa',
  sectionSubtitle: 'Menghubungkan komoditas perkebunan, hasil bumi, dan produk olahan warga Desa Lubuk Mandarsah langsung ke rantai pasok pasar yang adil dan berkelanjutan.',
  categories: [
    { id: 'all', label: 'Semua Produk' },
    { id: 'komoditas', label: 'Perkebunan Utama' },
    { id: 'pertanian', label: 'Pertanian & Holtikultura' },
    { id: 'olahan', label: 'Produk Olahan & UMKM' },
  ],
  products: [
    {
      id: 'prd-1',
      name: 'Tandan Buah Segar (TBS) Kelapa Sawit',
      category: 'komoditas',
      categoryLabel: 'Perkebunan Utama',
      price: 'Rp 2.450 - 2.700',
      unit: '/ kg',
      productionCapacity: '150+ Ton / Bulan',
      origin: 'Dusun Mandarsah Ulu',
      image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80',
      description: 'TBS sawit kualitas super dari perkebunan rakyat mandiri anggota koperasi, dipanen tepat waktu dengan rendemen standar pabrik.',
      badge: 'Komoditas Prioritas',
      isOfftakeReady: true,
      tags: ['Rendemen Tinggi', 'Offtaker Pabrik', 'Sortir Ketat']
    },
    {
      id: 'prd-2',
      name: 'Biji Pinang Kering Super (Betel Nut)',
      category: 'komoditas',
      categoryLabel: 'Perkebunan Utama',
      price: 'Rp 14.500 - 18.000',
      unit: '/ kg',
      productionCapacity: '25 Ton / Bulan',
      origin: 'Dusun Lubuk Bernai',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
      description: 'Pinang belah kering kadar air di bawah 12%, diproses dengan penjemuran alami siap memenuhi kebutuhan ekspor dan industri herbal.',
      badge: 'Kualitas Ekspor',
      isOfftakeReady: true,
      tags: ['Kadar Air <12%', 'Sortir Grade A', 'Kering Alami']
    },
    {
      id: 'prd-3',
      name: 'Karet Alam / Bokar Bersih',
      category: 'komoditas',
      categoryLabel: 'Perkebunan Utama',
      price: 'Rp 11.200 - 13.000',
      unit: '/ kg',
      productionCapacity: '40 Ton / Bulan',
      origin: 'Dusun Mandarsah Ilir',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
      description: 'Bahan olah karet (Bokar) bersih tanpa kontaminan tatal kayu, menggunakan asam semut standar industri pengolahan ban.',
      badge: 'Standar Pabrik',
      isOfftakeReady: true,
      tags: ['Lateks Alami', 'Bebas Kontaminan', 'Kadar Kering Tinggi']
    },
    {
      id: 'prd-4',
      name: 'Madu Hutan Sialang Asli Mandarsah',
      category: 'olahan',
      categoryLabel: 'Produk Olahan & UMKM',
      price: 'Rp 85.000',
      unit: '/ 500 ml',
      productionCapacity: '300 Botol / Bulan',
      origin: 'Kawasan Hutan Desa',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      description: 'Madu murni dari lebah Apis Dorsata pohon Sialang pedalaman hutan desa, dipanen higienis tanpa campuran dan pasteurisasi berlebih.',
      badge: '100% Organik',
      isOfftakeReady: false,
      tags: ['Murni Tanpa Gula', 'Kaya Enzim', 'Panen Lestari']
    },
    {
      id: 'prd-5',
      name: 'Keripik Pisang & Olahan Singkong Desa',
      category: 'olahan',
      categoryLabel: 'Produk Olahan & UMKM',
      price: 'Rp 15.000',
      unit: '/ pouch 250g',
      productionCapacity: '1.200 Pouch / Bulan',
      origin: 'KWT Mandarsah Mandiri',
      image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80',
      description: 'Camilan renyah produksi Kelompok Wanita Tani (KWT) dengan bahan baku pisang kepok dan singkong segar dari kebun anggota.',
      badge: 'Produk UMKM',
      isOfftakeReady: false,
      tags: ['P-IRT Terdaftar', 'Tanpa Pengawet', 'Bumbu Alami']
    },
    {
      id: 'prd-6',
      name: 'Beras Lokal Pandan Wangi & IR-64',
      category: 'pertanian',
      categoryLabel: 'Pertanian & Holtikultura',
      price: 'Rp 13.500',
      unit: '/ kg',
      productionCapacity: '15 Ton / Panen',
      origin: 'Lahan Sawah Rawa Mandarsah',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      description: 'Beras putih pulen hasil panen hamparan sawah warga dengan pengairan alami, digiling segar tanpa pemutih maupun pengawet kimia.',
      badge: 'Panen Baru',
      isOfftakeReady: true,
      tags: ['Tanpa Pemutih', 'Pulen Wangi', 'Kemasan 5kg & 10kg']
    }
  ]
};