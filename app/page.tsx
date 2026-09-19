import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import RevealOnScroll from '../components/RevealOnScroll'
import { services } from '../data/services'
import { projects } from '../data/projects'

export const dynamic = 'force-static'

const whyUsItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Pengalaman Bertahun-tahun',
    desc: 'Tim profesional dengan lebih dari 10 tahun pengalaman di bidang konstruksi bangunan.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Hasil Terpercaya & Rapih',
    desc: 'Kualitas pengerjaan terjamin dengan standar tinggi dan detail finishing yang sempurna.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. RAB disajikan secara detail dan jelas sebelum proyek dimulai.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Tepat Waktu',
    desc: 'Proyek dikerjakan sesuai timeline yang disepakati. Ketepatan adalah prioritas kami.',
  },
]

export default function Home(){
  return (
    <div>
      <Hero />

      <section className="section-padding">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 text-jbk-dark text-sm font-semibold mb-4">
                🛠️ Layanan Unggulan
              </div>
              <h2 className="heading-lg text-balance">
                Layanan <span className="gradient-text">Kami</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Menyediakan solusi konstruksi lengkap untuk kebutuhan rumah dan bangunan Anda.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((s, i) => (
              <RevealOnScroll key={s.id} variant="up" delay={i * 100}>
                <ServiceCard
                  id={s.id}
                  title={s.title}
                  description={s.description}
                  href={`/layanan#${s.id}`}
                  delay={i * 50}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-jbk-gray/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-jbk-red/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 text-jbk-dark text-sm font-semibold mb-4">
                  🏗️ Proyek Kami
                </div>
                <h2 className="heading-lg text-balance">
                  Progres Proyek <span className="gradient-text">Terbaru</span>
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Beberapa proyek terbaru yang telah dan sedang kami kerjakan dengan penuh dedikasi.
                </p>
              </div>
              <a
                href="/portofolio"
                className="group inline-flex items-center gap-2 text-jbk-red font-semibold hover:gap-3 transition-all"
              >
                <span>Lihat Semua Portofolio</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {projects.map((p, i) => (
              <RevealOnScroll key={p.id} variant="up" delay={i * 120}>
                <ProjectCard
                  title={p.title}
                  location={p.location}
                  image={p.image}
                  progress={p.progress}
                  date={p.date}
                  delay={i * 60}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 text-jbk-dark text-sm font-semibold mb-4">
                ⭐ Keunggulan Kami
              </div>
              <h2 className="heading-lg text-balance">
                Kenapa <span className="gradient-text">Pilih Kami</span>?
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Berikut beberapa alasan mengapa ratusan klien mempercayakan proyek mereka kepada kami.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {whyUsItems.map((item, i) => (
              <RevealOnScroll key={item.title} variant="scale" delay={i * 120}>
                <div className="group relative bg-white rounded-2xl p-6 md:p-7 card-lift border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jbk-red/10 to-jbk-red/5 text-jbk-red flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-jbk-black mb-2 group-hover:text-jbk-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="container">
          <RevealOnScroll variant="scale">
            <div className="relative rounded-[2rem] overflow-hidden bg-jbk-gradient p-8 md:p-14 lg:p-16 shadow-jbk">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
                    Siap bangun rumah impian?
                  </h2>
                  <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-lg">
                    Konsultasikan rencana proyek Anda dengan kami secara GRATIS. Tim profesional kami siap membantu mewujudkan rumah idaman Anda.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:justify-end gap-4">
                  <a
                    href="https://wa.me/6282162881313"
                    className="group inline-flex items-center justify-center gap-2 bg-white text-jbk-red px-7 py-4 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    <span>Chat WhatsApp Sekarang</span>
                  </a>
                  <a
                    href="/kontak"
                    className="group inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 active:translate-y-0"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>Info Kontak</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}

