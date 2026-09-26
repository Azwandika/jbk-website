import RevealOnScroll from '../../components/RevealOnScroll'
import TestimonialCard from '../../components/TestimonialCard'
import Link from 'next/link'
import { testimonials } from '../../data/testimonials'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Testimoni Klien | SJB Kontraktor - Sulistyo Jaya Baru',
  description: 'Kumpulan testimoni dan ulasan dari klien SJB Kontraktor. Lihat lokasi kantor kami di Colomadu, Karanganyar via Google Maps.',
}

export default function TestimoniPage(){
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
              💬 Testimoni Klien
            </div>

            <h1 className="heading-xl text-balance max-w-4xl leading-[1.1]">
              Kisah Nyata <span className="gradient-text">Kepuasan Klien</span>
              <span className="block">Yang Telah Percaya Pada Kami</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Ratusan klien telah mempercayakan proyek pembangunan dan renovasi rumah mereka kepada SJB Kontraktor.
              Berikut adalah beberapa testimoni nyata dari klien kami di berbagai wilayah.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding -mt-16 relative z-10">
        <div className="container">
          <RevealOnScroll>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="flex items-center gap-4">
                <div className="px-5 py-2.5 rounded-xl bg-jbk-red text-white font-semibold shadow-jbk text-sm">
                  Semua Testimoni
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Total: <span className="text-jbk-black font-bold">{testimonials.length} testimoni</span>
                </div>
              </div>
              <a
                href="https://wa.me/6282162881313"
                className="inline-flex items-center gap-2 text-jbk-red font-semibold hover:gap-3 transition-all group"
              >
                <span>Ingin menjadi klien kami berikutnya?</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 mb-20">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.id} variant="up" delay={i * 80}>
                <TestimonialCard t={t} delay={i * 40} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll variant="scale">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-jbk-red/10 text-jbk-dark text-sm font-semibold mb-4">
                📍 Lokasi Kami
              </div>
              <h2 className="heading-lg text-balance">
                Kantor & <span className="gradient-text">Lokasi Perusahaan</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Kunjungi kantor kami atau hubungi via WhatsApp untuk konsultasi gratis.
                Kami siap melayani proyek di seluruh Jawa Tengah, Jawa Timur, dan wilayah lainnya sesuai kebutuhan.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            <RevealOnScroll variant="left" className="md:col-span-2">
              <div className="h-full bg-gradient-to-br from-jbk-red to-jbk-accent rounded-3xl p-8 md:p-10 text-white shadow-jbk relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Alamat & Kontak
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <div className="text-white/70 text-sm font-medium mb-1.5 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        </svg>
                        Alamat Lengkap
                      </div>
                      <div className="font-semibold leading-relaxed bg-white/5 rounded-2xl p-4 border border-white/10">
                        Jl. Al Fatah 3, Pepe, Gedongan,<br/>
                        Kec. Colomadu, Kabupaten Karanganyar,<br/>
                        Jawa Tengah 57173
                      </div>
                    </div>

                    <div>
                      <div className="text-white/70 text-sm font-medium mb-2">
                        📞 Kontak Langsung
                      </div>
                      <a
                        href="https://wa.me/6282162881313"
                        target="_blank"
                        rel="noreferrer"
                        className="block bg-white text-jbk-red px-5 py-3.5 rounded-2xl font-bold text-center hover:-translate-y-0.5 transition-all shadow-xl"
                      >
                        💬 WhatsApp: +62 821-6288-1313
                      </a>
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <div className="text-white/70 text-sm font-medium mb-2 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        Jam Kerja
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-white/90">
                          <span>Senin - Jumat</span>
                          <span className="font-semibold">08:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between text-white/90">
                          <span>Sabtu</span>
                          <span className="font-semibold">08:00 - 14:00</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>Minggu</span>
                          <span className="font-medium">Tutup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={150} className="md:col-span-3">
              <div className="h-full rounded-3xl overflow-hidden shadow-card-hover border border-gray-100">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[450px] bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps?q=Jl.+Al-Fatah+3,+Pepe,+Gedongan,+Kecamatan+Colomadu,+Kabupaten+Karanganyar,+Jawa+Tengah+57173&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor SJB Kontraktor - Colomadu, Karanganyar"
                  ></iframe>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={300}>
            <div className="mt-16 relative rounded-[2rem] overflow-hidden bg-jbk-gray/60 border border-gray-100 p-8 md:p-12 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-jbk-red/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-jbk-accent/10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative max-w-2xl mx-auto">
                <div className="text-5xl mb-4">🏠</div>
                <h2 className="heading-md mb-4">
                  Siap Membangun Rumah Impian Anda?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Jadilah bagian dari ratusan klien puas SJB Kontraktor. Konsultasi GRATIS untuk proyek Anda!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://wa.me/6282162881313"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-jbk-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-jbk hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    <span>Konsultasi Sekarang</span>
                  </a>
                  <Link
                    href="/portofolio"
                    className="inline-flex items-center gap-2 border-2 border-jbk-red text-jbk-red px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:bg-jbk-red hover:text-white hover:shadow-jbk transition-all duration-300"
                  >
                    <span>Lihat Portofolio</span>
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
