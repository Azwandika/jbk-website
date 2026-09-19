import RevealOnScroll from '../../components/RevealOnScroll'
import Link from 'next/link'

export const dynamic = 'force-static'

const stats = [
  { value: '100+', label: 'Proyek Selesai' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '50+', label: 'Klien Puas' },
  { value: '3', label: 'Wilayah Layanan' },
]

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Kepercayaan',
    desc: 'Kami menjunjung tinggi kepercayaan yang diberikan klien dengan menjaga kualitas dan integritas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Kualitas',
    desc: 'Setiap detail pengerjaan diperhatikan dengan standar tinggi untuk hasil terbaik dan tahan lama.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Ketepatan Waktu',
    desc: 'Proyek dikerjakan sesuai timeline yang telah disepakati bersama tanpa mengorbankan kualitas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    ),
    title: 'Transparan',
    desc: 'Harga, material, dan progres proyek selalu dikomunikasikan secara jelas dan terbuka.',
  },
]

export default function Tentang(){
  return (
    <div>
      <section className="relative pt-20 pb-28 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-jbk-red/5 rounded-full blur-3xl"></div>
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
              👷 Tentang Kami
            </div>

            <h1 className="heading-xl text-balance max-w-3xl leading-[1.1]">
              Mengenal Lebih Dekat
              <span className="block gradient-text">Sulistyo Jaya Baru Kontraktor</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Perusahaan kontraktor profesional yang berkomitmen mewujudkan hunian dan bangunan berkualitas untuk keluarga Indonesia.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding -mt-16 relative z-10">
        <div className="container">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-card card-lift" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
            <RevealOnScroll variant="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-jbk-red/8 blur-3xl rounded-3xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-gray-100 aspect-[4/3] bg-gradient-to-br from-jbk-red/10 via-white to-jbk-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 mx-auto rounded-[2rem] bg-jbk-gradient text-white flex items-center justify-center shadow-jbk mb-6">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-jbk-black">
                      SJB Kontraktor
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Est. Sulistyo Jaya Baru · Colomadu, Karanganyar
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={150}>
              <div>
                <h2 className="heading-md mb-5">
                  Siapa <span className="gradient-text">Kami?</span>
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    <strong>Sulistyo Jaya Baru (SJB) Kontraktor</strong> adalah perusahaan kontraktor yang bergerak dalam pembangunan rumah tinggal, renovasi bangunan, dan pengawasan proyek konstruksi di wilayah Colomadu, Karanganyar, Solo dan sekitarnya.
                  </p>
                  <p>
                    Didirikan dengan semangat untuk menghadirkan bangunan berkualitas tinggi yang nyaman, aman, dan estetis. Didukung oleh tim profesional yang berpengalaman lebih dari 10 tahun di bidang konstruksi.
                  </p>
                  <p>
                    Kami percaya bahwa setiap rumah adalah tempat di mana kenangan keluarga dibangun. Oleh karena itu, kami selalu memberikan yang terbaik dalam setiap proyek yang kami kerjakan.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <RevealOnScroll variant="up" delay={100}>
              <div className="bg-gradient-to-br from-jbk-red to-jbk-accent rounded-3xl p-8 md:p-10 text-white shadow-jbk relative overflow-hidden h-full">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Visi Kami</h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Menjadi kontraktor unggulan yang menghadirkan hunian dan bangunan berkualitas, nyaman, dan terjangkau untuk keluarga Indonesia, serta dipercaya sebagai mitra konstruksi terbaik di wilayah Jawa Tengah dan Yogyakarta.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={200}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100 h-full">
                <div className="w-16 h-16 rounded-2xl bg-jbk-red/10 text-jbk-red flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-jbk-black mb-6">Misi Kami</h2>
                <ul className="space-y-4">
                  {[
                    'Memberikan hasil pekerjaan berkualitas dengan standar tinggi.',
                    'Menjalankan proyek tepat waktu sesuai kesepakatan.',
                    'Menerapkan transparansi biaya dan komunikasi yang jelas.',
                    'Mengelola proyek dengan pengawasan profesional.',
                    'Menghadirkan desain yang fungsional dan estetis.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-jbk-gradient text-white flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div className="text-gray-700 leading-relaxed">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 text-jbk-dark text-sm font-semibold mb-4">
                💎 Nilai-Nilai Kami
              </div>
              <h2 className="heading-lg text-balance">
                Prinsip Yang <span className="gradient-text">Kami Jaga</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} variant="up" delay={i * 100}>
                <div className="group bg-white rounded-2xl p-6 md:p-7 card-lift border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jbk-red/10 to-jbk-accent/10 text-jbk-red flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-jbk-black mb-2 group-hover:text-jbk-red transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

