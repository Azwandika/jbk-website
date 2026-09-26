export type Project = {
  id: string
  title: string
  location: string
  image: string
  progress: number
  date: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Rumah tipe hook 2 lantai, atap limasan',
    location: 'Colomadu, Karanganyar',
    image: '/images/1.png',
    progress: 99,
    date: '2026-07-10'
  },
  {
    id: 'p2',
    title: 'Rumah dengan carport & teras klasik',
    location: 'Colomadu, Karanganyar',
    image: '/images/2.png',
    progress: 99,
    date: '2026-06-20'
  },
  {
    id: 'p3',
    title: 'Renovasi atap & pengecoran lantai 2',
    location: 'Gedongan, Colomadu',
    image: '/images/3.png',
    progress: 85,
    date: '2026-05-12'
  },
  {
    id: 'p4',
    title: 'Rumah ruko 3 lantai bergaya modern',
    location: 'Solo, Jawa Tengah',
    image: '/images/4.png',
    progress: 92,
    date: '2026-04-01'
  },
  {
    id: 'p5',
    title: 'Rumah tinggal 1 lantai dengan taman luas',
    location: 'Karanganyar, Jawa Tengah',
    image: '/images/5.png',
    progress: 100,
    date: '2026-03-15'
  }
]
