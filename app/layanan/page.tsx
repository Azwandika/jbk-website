import { services } from '../../data/services'
import RevealOnScroll from '../../components/RevealOnScroll'
import ServiceCard from '../../components/ServiceCard'
import Link from 'next/link'

export const dynamic = 'force-static'

const serviceDetails: Record<string, { icon: JSX.Element; detailPoints: string[] }> = {
  'bangun-rumah': {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    detailPoints: [
      'Pembangunan rumah tinggal 1 lantai & 2 lantai',
      'Mulai dari pondasi, struktur, dinding, hingga finishing',
      'Desain modern atau klasik sesuai permintaan',
      'Penggunaan material berkualitas dan tahan lama',
      'Garis air, instalasi listrik & sanitasi lengkap',
    ],
  },
  'renovasi': {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    detailPoints: [
      'Renovasi atap (ganti genteng, rangka, atap bocor)',
      'Pengecoran lantai 2 & struktur tambahan',
      'Perombakan ruang (tambah kamar, kamar mandi, dapur)',
      'Perbaikan struktural & retak bangunan',
      'Re-finishing interior & exterior',
    ],
  },
  'pengawasan': {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    detailPoints: [
      'Supervisi harian ke lapangan',
      'Kontrol kualitas material & pekerjaan',
      'Koordinasi subkontraktor & tukang',
      'Laporan progres mingguan ke pemilik',
      'Memastikan sesuai RAB & desain',
    ],
  },
  'ruko-gedung': {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22V12h6v10M9 6h.01M9 10h.01M9 14h.01M9 18h.01M15 6h.01M15 10h.01M15 14h.01M15 18h.01"/>
      </svg>
    ),
    detailPoints: [
      'Pembangunan ruko/toko 2-3 lantai',
      'Desain modern & fungsional untuk usaha',
      'Struktur kokoh untuk beban komersial',
      'Parkiran & fasad menarik',
      'Siap pakai untuk beragam jenis usaha',
    ],
  },
}

export default function Layanan(){
  return (
    <div>
      <section className="relative pt-20 pb-28 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-jbk-red/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative">
          <RevealOnScroll>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-jbk-red transition-colors mb-6 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 text-jbk-dark text-sm font-semibold mb-5">
              🛠️ Layanan Kami
            </div>

            <h1 className="heading-xl text-balance max-w-3xl leading-[1.1]">
              Solusi <span className="gradient-text">Konstruksi</span> Lengkap
              <span className="block">Untuk Kebutuhan Anda</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Dari bangun rumah baru, renovasi, hingga pengawasan proyek.
              Layanan profesional dengan hasil terjamin dan harga transparan.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding -mt-16 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 md:hidden mb-12">
            {services.map((s, i) => (
              <RevealOnScroll key={s.id} variant="up" delay={i * 100}>
                <ServiceCard
                  id={s.id}
                  title={s.title}
                  description={s.description}
                  href={`#${s.id}`}
                />
              </RevealOnScroll>
            ))}
          </div>

          <div className="space-y-10 md:space-y-16">
            {services.map((s, i) => {
              const detail = serviceDetails[s.id]
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28"
                >
                  <RevealOnScroll variant={i % 2 === 0 ? 'left' : 'right'}>
                    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                      <div className="relative">
                        <div className={`absolute -inset-4 blur-3xl rounded-3xl ${i % 2 === 0 ? 'bg-jbk-red/8' : 'bg-jbk-black/5'}`}></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-gray-100 bg-white p-8 md:p-10">
                          <div className="w-20 h-20 rounded-3xl bg-jbk-gradient text-white flex items-center justify-center shadow-jbk mb-6">
                            {detail.icon}
                          </div>
                          <div className="text-xs font-bold uppercase tracking-widest text-jbk-red mb-2">
                            Layanan 0{i + 1}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-jbk-black mb-4">
                            {s.title}
                          </h2>
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {s.description}
                          </p>

                          <a
                            href="https://wa.me/6282162881313"
                            className="inline-flex items-center gap-2 bg-jbk-gradient text-white px-6 py-3 rounded-xl font-semibold shadow-jbk hover:-translate-y-0.5 transition-all duration-300"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                            </svg>
                            <span>Konsultasi Gratis</span>
                          </a>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-jbk-black mb-6">
                          Cakupan Layanan
                        </h3>
                        <ul className="space-y-4">
                          {detail.detailPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-4 group">
                              <div className="w-8 h-8 rounded-xl bg-jbk-red/10 text-jbk-red flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-jbk-red group-hover:text-white transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              </div>
                              <div className="text-gray-700 leading-relaxed pt-1">
                                {point}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

