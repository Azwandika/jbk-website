export type Testimonial = {
  id: string
  name: string
  role: string
  initial: string
  accent: string
  rating: number
  location: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Bapak Agung Priyambodo',
    role: 'Pemilik Rumah 2 Lantai',
    initial: 'AP',
    accent: 'from-jbk-red to-rose-500',
    rating: 5,
    location: 'Colomadu, Karanganyar',
    text: 'Hasilnya melebihi ekspektasi. Detail rapi, material sesuai RAB, dan progress selalu update via WA. Timnya jujur dan komunikatif, tidak seperti kontraktor lain yang sering sembunyi kalau ada masalah. Rumah saya jadi nyaman, keluarga senang.',
  },
  {
    id: 't2',
    name: 'Ibu Sri Wahyuni',
    role: 'Pemilik Kos & Ruko',
    initial: 'SW',
    accent: 'from-amber-500 to-orange-500',
    rating: 5,
    location: 'Sukoharjo, Jawa Tengah',
    text: 'Dari awal pengajuan RAB sampai selesai, semuanya jelas dan transparan. Ruko 3 lantai saya selesai 3 minggu lebih cepat dari target! Yang saya suka, site manager mau ngobrol kalau saya mau tambah ruang kecil. Puas banget.',
  },
  {
    id: 't3',
    name: 'Bapak Dodik Setyawan',
    role: 'Owner Cafe & Gudang',
    initial: 'DS',
    accent: 'from-emerald-500 to-teal-500',
    rating: 5,
    location: 'Ngawi, Jawa Timur',
    text: 'Meski lokasi saya di Ngawi (luar Solo), timnya mau datang survey dan kerjakan total renovasi cafe saya. Hasil sangat profesional, struktur gudangnya kokoh untuk beban palet. Harga sepadan dengan kualitas. Rekomendasi!',
  },
  {
    id: 't4',
    name: 'Ibu Rina Kartikasari',
    role: 'Ibu Rumah Tangga',
    initial: 'RK',
    accent: 'from-violet-500 to-purple-600',
    rating: 5,
    location: 'Klaten, Jawa Tengah',
    text: 'Awalnya takut renovasi atap bocor bakal ribet. Ternyata SJB team kerja cepat, 4 hari selesai, rumah saya bersih dari puing, dan ketika hujan deras seminggu setelahnya — BOCOR TIDAK ADA! Mantap, harganya juga masuk akal.',
  },
  {
    id: 't5',
    name: 'Bapak Hendro Prasetyo',
    role: 'Pengembang Proyek Perumahan',
    initial: 'HP',
    accent: 'from-sky-500 to-blue-600',
    rating: 5,
    location: 'Boyolali, Jawa Tengah',
    text: 'Saya sudah pakai jasa mereka untuk 3 unit rumah tipe di cluster saya. Semuanya selesai tepat waktu, buyer tidak ada yang komplain. Komunikasi lancar, laporan mingguan selalu dikirim. Partner terpercaya untuk proyek selanjutnya!',
  },
]
