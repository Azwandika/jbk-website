import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from './RevealOnScroll'

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-jbk-red/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-jbk-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="container grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24">
          <RevealOnScroll variant="left" delay={100}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 border border-jbk-red/15 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jbk-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-jbk-red"></span>
                </span>
                <span className="text-sm font-semibold text-jbk-dark">Melayani Colomadu, Karanganyar & Sekitarnya</span>
              </div>

              <h1 className="heading-xl text-balance leading-[1.1]">
                Bangun Rumah
                <span className="block">
                  <span className="gradient-text">Impian Anda</span>
                </span>
                Bersama Kami
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                Jasa bangun rumah baru, renovasi, dan pengawasan proyek.
                <span className="block">Profesional, tepat waktu, dan transparan harga.</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/portofolio"
                  className="group inline-flex items-center gap-2 bg-jbk-gradient text-white px-7 py-4 rounded-2xl font-semibold shadow-jbk transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0"
                >
                  <span>Lihat Portofolio</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link
                  href="/kontak"
                  className="group inline-flex items-center gap-2 border-2 border-jbk-red text-jbk-red px-7 py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-jbk-red hover:text-white hover:shadow-jbk active:translate-y-0"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Hubungi Kami</span>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/60">
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-gray-500 mt-1">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-500 mt-1">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-500 mt-1">Kepuasan</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="right" delay={300}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-br from-jbk-red/15 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-20px_rgba(227,6,19,0.3)] ring-1 ring-white/60 aspect-[4/3] w-full">
                  <Image
                    src="/images/5.png"
                    alt="Proyek Rumah JBK"
                    fill
                    sizes="(max-width: 768px) 90vw, 50vw"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-2xl shadow-card-hover p-2 sm:p-4 flex items-center gap-2 sm:gap-3 animate-[float_5s_ease-in-out_infinite_0.5s] max-w-[calc(100%-1rem)]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-jbk-gradient flex items-center justify-center text-white shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-jbk-black truncate">Terpercaya</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 truncate">Kualitas Terjamin</div>
                  </div>
                </div>

                <div className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-2xl shadow-card-hover p-2 sm:p-4 flex items-center gap-2 sm:gap-3 animate-[float_5s_ease-in-out_infinite_1s] max-w-[calc(100%-1rem)]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-jbk-black truncate">Tepat Waktu</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 truncate">Sesuai Deadline</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  )
}

