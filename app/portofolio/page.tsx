import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import RevealOnScroll from '../../components/RevealOnScroll'
import Link from 'next/link'

export const dynamic = 'force-static'

export default function Portofolio(){
  const sorted = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div>
      <section className="relative pt-20 pb-28 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-jbk-red/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-40 w-[400px] h-[400px] bg-jbk-accent/5 rounded-full blur-3xl"></div>
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
              🏗️ Portofolio Proyek
            </div>

            <h1 className="heading-xl text-balance max-w-4xl leading-[1.1]">
              Kumpulan <span className="gradient-text">Proyek</span>
              <span className="block">Yang Sudah Kami Kerjakan</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Beberapa hasil proyek pembangunan dan renovasi rumah, ruko, serta bangunan komersial di wilayah Colomadu, Karanganyar, Solo dan sekitarnya.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding -mt-16 relative z-10">
        <div className="container">
          <RevealOnScroll>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="px-5 py-2.5 rounded-xl bg-jbk-red text-white font-semibold shadow-jbk text-sm">
                  Semua Proyek
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Total: <span className="text-jbk-black font-bold">{sorted.length} proyek</span>
                </div>
              </div>
              <a
                href="https://wa.me/6282162881313"
                className="inline-flex items-center gap-2 text-jbk-red font-semibold hover:gap-3 transition-all group"
              >
                <span>Ingin proyek Anda di sini?</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
            {sorted.map((p, i) => (
              <RevealOnScroll key={p.id} variant="up" delay={i * 80}>
                <ProjectCard
                  title={p.title}
                  location={p.location}
                  image={p.image}
                  progress={p.progress}
                  date={p.date}
                  waCatalogUrl={p.waCatalogUrl}
                  delay={i * 40}
                />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={400}>
            <div className="mt-20 relative rounded-[2rem] overflow-hidden bg-dark-gradient p-8 md:p-12 text-center text-white shadow-card-hover">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-jbk-red rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-jbk-accent rounded-full blur-3xl"></div>
              </div>
              <div className="relative max-w-2xl mx-auto">
                <div className="text-5xl mb-4">🏠</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Jadikan proyek Anda selanjutnya bersama kami
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Percayakan pembangunan rumah impian Anda pada kontraktor profesional yang terpercaya dan berpengalaman.
                </p>
                <a
                  href="https://wa.me/6282162881313"
                  className="inline-flex items-center gap-2 bg-jbk-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-jbk hover:-translate-y-1 transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>Konsultasi Sekarang</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}

