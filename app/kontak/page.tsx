import RevealOnScroll from '../../components/RevealOnScroll'
import Link from 'next/link'

export const dynamic = 'force-static'

const waMessage = encodeURIComponent('Halo Sulistyo Jaya Baru Kontraktor, saya ingin konsultasi mengenai proyek pembangunan/renovasi.')

const contactInfos = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+62 821-6288-1313 (Sulistyo)',
    href: `https://wa.me/6282162881313?text=${waMessage}`,
    cta: 'Chat Sekarang',
    color: 'from-green-400 to-green-600',
    shadow: 'shadow-green-500/25',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@sjb_kontraktor',
    href: 'https://instagram.com/sjb_kontraktor',
    cta: 'Lihat IG',
    color: 'from-pink-500 via-red-500 to-yellow-500',
    shadow: 'shadow-pink-500/25',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
    label: 'TikTok',
    value: '@sulistyojayabaru',
    href: 'https://www.tiktok.com/@sulistyojayabaru?_r=1&_t=ZS-99qwhTsUlui',
    cta: 'Kunjungi',
    color: 'from-gray-900 via-black to-gray-700',
    shadow: 'shadow-black/25',
  },
]

export default function Kontak(){
  return (
    <div>
      <section className="relative pt-20 pb-28 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-jbk-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-jbk-accent/5 rounded-full blur-3xl"></div>
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
              📞 Kontak Kami
            </div>

            <h1 className="heading-xl text-balance max-w-3xl leading-[1.1]">
              Mari <span className="gradient-text">Konsultasi</span>
              <span className="block">Rencana Proyek Anda</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Tim kami siap membantu mewujudkan rumah impian Anda. Konsultasi GRATIS untuk wilayah Colomadu, Karanganyar, Solo dan sekitarnya.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding -mt-16 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16">
            {contactInfos.map((info, i) => (
              <RevealOnScroll key={info.label} variant="up" delay={i * 100}>
                <a
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block relative bg-white rounded-3xl p-6 md:p-7 card-lift border border-gray-100 h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} text-white flex items-center justify-center shadow-lg ${info.shadow} mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                    {info.icon}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                    {info.label}
                  </div>
                  <div className="text-xl font-bold text-jbk-black mb-1 group-hover:text-jbk-red transition-colors break-all">
                    {info.value}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-jbk-red font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>{info.cta}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8 mb-16">
            <RevealOnScroll variant="left" className="md:col-span-2 min-w-0">
              <div className="h-full bg-gradient-to-br from-jbk-red to-jbk-accent rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-jbk relative overflow-hidden min-w-0" style={{paddingBottom:'calc(1rem + max(env(safe-area-inset-bottom), 0px))'}}>
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative min-w-0 w-full">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Alamat & Jam Kerja
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <div className="text-white/70 text-sm font-medium mb-1.5 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        </svg>
                        Alamat
                      </div>
                      <div className="font-semibold leading-relaxed bg-white/5 rounded-2xl p-4 border border-white/10">
                        Jl. Al Fatah 3, Pepe, Gedongan,<br/>
                        Kec. Colomadu, Kabupaten Karanganyar,<br/>
                        Jawa Tengah 57173
                      </div>
                    </div>

                    <div>
                      <div className="text-white/70 text-sm font-medium mb-2">
                        📍 Wilayah Layanan
                      </div>
                      <div className="flex flex-wrap gap-2 w-full min-w-0" style={{display:'flex',flexWrap:'wrap'}}>
                        {['Seluruh Jateng', 'Ngawi (Jatim)', 'Colomadu', 'Karanganyar', 'Solo', 'Sukoharjo', 'Boyolali', 'Klaten', 'Fleksibel sesuai klien'].map(w => (
                          <span key={w} className="px-2.5 py-1.5 bg-white/10 rounded-full text-[11px] sm:text-xs font-medium border border-white/10 shrink-0">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/20 pb-16 sm:pb-4 pr-14 sm:pr-0">
                      <div className="text-white/70 text-sm font-medium mb-2 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        Jam Kerja
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-white/90 gap-2">
                          <span>Senin - Jumat</span>
                          <span className="font-semibold whitespace-nowrap">08:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between text-white/90 gap-2">
                          <span>Sabtu</span>
                          <span className="font-semibold whitespace-nowrap">08:00 - 14:00</span>
                        </div>
                        <div className="flex justify-between text-white/60 gap-2">
                          <span>Minggu</span>
                          <span className="font-medium whitespace-nowrap">Tutup</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="text-white/80 text-sm mb-3">Konsultasi cepat? Klik tombol di bawah 👇</div>
                    <a
                      href={`https://wa.me/6282162881313?text=${waMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-white text-jbk-red px-6 py-3.5 rounded-2xl font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 active:translate-y-0"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right" delay={150} className="md:col-span-3 min-w-0">
              <div className="h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-card-hover border border-gray-100 bg-gray-100">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] sm:min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps?q=Jl.+Al-Fatah+3,+Pepe,+Gedongan,+Kecamatan+Colomadu,+Kabupaten+Karanganyar,+Jawa+Tengah+57173&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Sulistyo Jaya Baru Kontraktor"
                  ></iframe>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant="scale">
            <div className="relative rounded-[2rem] overflow-hidden bg-jbk-gray/60 border border-gray-100 p-8 md:p-12 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-jbk-red/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-jbk-accent/10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative max-w-2xl mx-auto">
                <div className="text-5xl mb-4">💬</div>
                <h2 className="heading-md mb-4">
                  Ada pertanyaan? Kami siap membantu
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Jangan ragu untuk menghubungi kami. Tim profesional siap memberikan solusi terbaik untuk kebutuhan konstruksi Anda.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={`https://wa.me/6282162881313?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-jbk-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-jbk hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    <span>Chat WhatsApp</span>
                  </a>
                  <a
                    href="tel:+6282162881313"
                    className="inline-flex items-center gap-2 border-2 border-jbk-red text-jbk-red px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:bg-jbk-red hover:text-white hover:shadow-jbk transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>Telepon</span>
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
