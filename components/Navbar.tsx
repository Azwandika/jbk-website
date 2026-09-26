"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border-b border-gray-100'
        : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6 flex items-center justify-between gap-2 sm:gap-3" style={{height:'clamp(60px, 8vw, 80px)', paddingTop:'max(env(safe-area-inset-top), 0px)'}}>
        <Link href="/" className="flex items-center justify-start shrink-0 relative z-10 mr-auto" aria-label="Beranda SJB Kontraktor">
          <div className="transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-start">
            <Image
              src="/images/logo_baru.png"
              alt="SJB Kontraktor - Jaya Berkah Kontraktor"
              width={400}
              height={140}
              priority
              sizes="(max-width: 480px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
              className="w-[140px] sm:w-[170px] md:w-[200px] lg:w-[240px] xl:w-[260px] h-auto max-h-[56px] sm:max-h-[60px] md:max-h-[68px] lg:max-h-[76px] object-contain object-left select-none"
              draggable={false}
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 flex-1 min-w-0">
          <Link href="/" className={`nav-link ${isActive('/') ? 'text-jbk-red after:w-full' : ''}`}>
            Beranda
          </Link>
          <Link href="/layanan" className={`nav-link ${isActive('/layanan') ? 'text-jbk-red after:w-full' : ''}`}>
            Layanan
          </Link>
          <Link href="/portofolio" className={`nav-link ${isActive('/portofolio') ? 'text-jbk-red after:w-full' : ''}`}>
            Portofolio
          </Link>
          <Link href="/tentang" className={`nav-link ${isActive('/tentang') ? 'text-jbk-red after:w-full' : ''}`}>
            Tentang
          </Link>
          <Link href="/testimoni" className={`nav-link ${isActive('/testimoni') ? 'text-jbk-red after:w-full' : ''}`}>
            Testimoni
          </Link>
          <Link href="/kontak" className={`nav-link ${isActive('/kontak') ? 'text-jbk-red after:w-full' : ''}`}>
            Kontak
          </Link>
          <a
            href="https://wa.me/6282162881313"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-jbk-gradient text-white px-5 sm:px-6 py-2.5 rounded-xl font-semibold shadow-jbk transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 flex items-center gap-2 whitespace-nowrap"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>Konsultasi Gratis</span>
          </a>
        </nav>

        <button
          onClick={()=>setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-jbk-black rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-jbk-black rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-jbk-black rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
          </div>
        </button>
      </div>

      <div className={`lg:hidden fixed inset-x-0 bottom-0 top-[clamp(60px,8vw,80px)] bg-white z-[999] overflow-hidden transition-[opacity,visibility] duration-300 ease-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} style={{backgroundColor:'#ffffff',backdropFilter:'none',WebkitBackdropFilter:'none',willChange:'opacity'}}>
        <div className="h-full w-full overflow-y-auto px-4 py-4 sm:px-5 sm:py-6 bg-white" style={{backgroundColor:'#ffffff',paddingBottom:'calc(max(env(safe-area-inset-bottom), 1rem) + 5rem)'}}>
          <div className="flex flex-col gap-1">
            {[
              { href: '/', label: 'Beranda' },
              { href: '/layanan', label: 'Layanan' },
              { href: '/portofolio', label: 'Portofolio' },
              { href: '/tentang', label: 'Tentang' },
              { href: '/testimoni', label: 'Testimoni' },
              { href: '/kontak', label: 'Kontak' },
            ].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3.5 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between ${
                  isActive(item.href)
                    ? 'bg-jbk-red/8 text-jbk-red'
                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              >
                <span>{item.label}</span>
                {isActive(item.href) && (
                  <span className="w-2 h-2 rounded-full bg-jbk-red shrink-0"></span>
                )}
              </Link>
            ))}
            <a
              href="https://wa.me/6282162881313"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-jbk-gradient text-white px-5 py-4 rounded-2xl font-bold shadow-jbk text-center flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>💬 Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

