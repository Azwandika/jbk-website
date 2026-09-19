import Image from 'next/image'
import Link from 'next/link'

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/sjb_kontraktor',
    label: '@sjb_kontraktor',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@sulistyojayabaru?_r=1&_t=ZS-99qwhTsUlui',
    label: '@sulistyojayabaru',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/19eeMCyEPx/',
    label: 'SJB Kontraktor',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
]

export default function Footer(){
  return (
    <footer className="relative overflow-hidden bg-dark-gradient text-white pt-20 pb-8 mt-20">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-jbk-red rounded-full blur-3xl"></div>
      </div>

      <div className="relative container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <Image src="/images/logo.svg" alt="SJB Kontraktor" width={160} height={48} className="brightness-0 invert" />
              <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
                <strong>Sulistyo Jaya Baru (SJB) Kontraktor</strong> — perusahaan kontraktor terpercaya yang spesialis dalam
                pembangunan rumah tinggal, renovasi, dan pengawasan proyek di wilayah Colomadu, Karanganyar, Solo dan sekitarnya.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6282162881313"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-jbk-gradient text-white px-5 py-2.5 rounded-xl font-semibold shadow-jbk hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
                <div className="flex items-center gap-2">
                  {SOCIALS.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={`${s.name}: ${s.label}`}
                      className="w-10 h-10 rounded-xl bg-white/10 text-white hover:bg-jbk-red hover:scale-110 flex items-center justify-center transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-jbk-gradient rounded-full"></span>
              Menu
            </h5>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/layanan', label: 'Layanan' },
                { href: '/portofolio', label: 'Portofolio' },
                { href: '/tentang', label: 'Tentang Kami' },
                { href: '/kontak', label: 'Kontak' },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all duration-200 text-jbk-red">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-jbk-gradient rounded-full"></span>
              Kontak
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jbk-red">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">WhatsApp (Sulistyo)</div>
                  <a href="https://wa.me/6282162881313" target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-jbk-red transition-colors">
                    +62 821-6288-1313
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jbk-red">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Lokasi</div>
                  <div className="font-medium text-gray-200 text-sm leading-snug">
                    Jl. Al Fatah 3, Pepe, Gedongan,<br/>
                    Colomadu, Karanganyar 57173
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jbk-red">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Jam Kerja</div>
                  <div className="font-medium text-gray-200">
                    Senin - Sabtu · 08:00 - 17:00
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sulistyo Jaya Baru (SJB) Kontraktor. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Dibuat dengan</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E30613">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>di Colomadu, Karanganyar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

