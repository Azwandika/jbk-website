export type Project = {
  id: string
  title: string
  location: string
  image: string
  progress: number
  date: string
  waCatalogUrl: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Rumah tipe hook 2 lantai, atap limasan',
    location: 'Colomadu, Karanganyar',
    image: '/images/1.png',
    progress: 99,
    date: '2026-07-10',
    waCatalogUrl: 'https://wa.me/p/37280443301598927/6282162881313'
  },
  {
    id: 'p2',
    title: 'Rumah dengan carport & teras klasik',
    location: 'Colomadu, Karanganyar',
    image: '/images/2.png',
    progress: 99,
    date: '2026-06-20',
    waCatalogUrl: 'https://wa.me/p/23962725280081000/6282162881313'
  },
  {
    id: 'p3',
    title: 'Renovasi atap & pengecoran lantai 2',
    location: 'Gedongan, Colomadu',
    image: '/images/3.png',
    progress: 85,
    date: '2026-05-12',
    waCatalogUrl: 'https://wa.me/p/9950448858401120/6282162881313'
  },
  {
    id: 'p4',
    title: 'Rumah ruko 3 lantai bergaya modern',
    location: 'Solo, Jawa Tengah',
    image: '/images/4.png',
    progress: 92,
    date: '2026-04-01',
    waCatalogUrl: 'https://wa.me/p/23881150478193830/6282162881313'
  },
  {
    id: 'p5',
    title: 'Rumah tinggal 1 lantai dengan taman luas',
    location: 'Karanganyar, Jawa Tengah',
    image: '/images/5.png',
    progress: 100,
    date: '2026-03-15',
    waCatalogUrl: 'https://wa.me/p/9910121655751680/6282162881313'
  },
  {
    id: 'p6',
    title: 'Rumah minimalis 2 lantai dengan rooftop',
    location: 'Ngawi, Jawa Timur',
    image: '/images/6.png',
    progress: 100,
    date: '2026-02-08',
    waCatalogUrl: 'https://wa.me/p/9740663816060714/6282162881313'
  },
  {
    id: 'p7',
    title: 'Renovasi total rumah tua menjadi modern',
    location: 'Sukoharjo, Jawa Tengah',
    image: '/images/1.png',
    progress: 95,
    date: '2026-01-20',
    waCatalogUrl: 'https://wa.me/p/9046849272008786/6282162881313'
  },
  {
    id: 'p8',
    title: 'Pembangunan gudang & rumah usaha 2 lantai',
    location: 'Klaten, Jawa Tengah',
    image: '/images/2.png',
    progress: 90,
    date: '2025-12-10',
    waCatalogUrl: 'https://wa.me/p/7867929379962822/6282162881313'
  }
]
