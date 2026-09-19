export type Service = {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'bangun-rumah',
    title: 'Bangun Rumah Baru',
    description: 'Jasa pembangunan rumah tinggal 1-2 lantai, mulai dari pondasi hingga finishing.'
  },
  {
    id: 'renovasi',
    title: 'Renovasi',
    description: 'Renovasi atap, pengecoran lantai, perombakan ruang, dan perbaikan struktural.'
  },
  {
    id: 'pengawasan',
    title: 'Pengawasan Proyek',
    description: 'Supervisi harian, kontrol kualitas material, dan koordinasi subkontraktor.'
  },
  {
    id: 'ruko-gedung',
    title: 'Proyek Komersial (Ruko/2-3 lantai)',
    description: 'Pembangunan toko/ruko dan bangunan 2-3 lantai dengan desain modern.'
  }
]
