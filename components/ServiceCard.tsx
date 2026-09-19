import Link from 'next/link'

const serviceIcons: Record<string, JSX.Element> = {
  'bangun-rumah': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  'renovasi': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  'pengawasan': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  'ruko-gedung': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22V12h6v10M9 6h.01M9 10h.01M9 14h.01M9 18h.01M15 6h.01M15 10h.01M15 14h.01M15 18h.01"/>
    </svg>
  ),
}

interface ServiceCardProps {
  id?: string
  title: string
  description: string
  href?: string
  delay?: number
}

export default function ServiceCard({ id, title, description, href, delay = 0 }: ServiceCardProps){
  const Icon = id ? serviceIcons[id] : serviceIcons['bangun-rumah']

  return (
    <article
      className="group relative rounded-2xl bg-white border border-gray-100 p-6 md:p-7 card-lift overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-jbk-red/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-jbk-red to-jbk-accent text-white flex items-center justify-center shadow-jbk mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
          {Icon}
        </div>

        <h3 className="text-xl font-bold text-jbk-black mb-2 group-hover:text-jbk-red transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-jbk-red font-semibold text-sm group-hover:gap-3 transition-all duration-300"
          >
            <span>Selengkapnya</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-jbk-gradient origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
    </article>
  )
}

