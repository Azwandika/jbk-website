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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border-b border-gray-100'
        : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Image src="/images/logo_baru.png" alt="SJB Kontraktor" width={170} height={52} priority className="object-contain" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`nav-link ${isActive('/') ? 'text-jbk-red' : ''}`}>
            Beranda
          </Link>
          <Link href="/layanan" className={`nav-link ${isActive('/layanan') ? 'text-jbk-red' : ''}`}>
            Layanan
          </Link>
          <Link href="/portofolio" className={`nav-link ${isActive('/portofolio') ? 'text-jbk-red' : ''}`}>
            Portofolio
          </Link>
          <Link href="/tentang" className={`nav-link ${isActive('/tentang') ? 'text-jbk-red' : ''}`}>
            Tentang
          </Link>
          <Link href="/kontak" className={`nav-link ${isActive('/kontak') ? 'text-jbk-red' : ''}`}>
            Kontak
          </Link>
          <a
            href="https://wa.me/6282162881313"
            className="group bg-jbk-gradient text-white px-6 py-2.5 rounded-xl font-semibold shadow-jbk transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            <span>Konsultasi Gratis</span>
          </a>
        </nav>

        <button
          onClick={()=>setOpen(!open)}
          aria-label="menu"
          className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-jbk-black rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-jbk-black rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-jbk-black rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-[500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}>
        <div className="container flex flex-col py-4 gap-1">
          {[
            { href: '/', label: 'Beranda' },
            { href: '/layanan', label: 'Layanan' },
            { href: '/portofolio', label: 'Portofolio' },
            { href: '/tentang', label: 'Tentang' },
            { href: '/kontak', label: 'Kontak' },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-jbk-red/5 text-jbk-red'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6282162881313"
            className="mt-2 mx-4 bg-jbk-gradient text-white px-5 py-3 rounded-xl font-semibold shadow-jbk text-center"
          >
            💬 Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

