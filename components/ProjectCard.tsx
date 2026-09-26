"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ProjectCardProps {
  title: string
  location: string
  image: string
  progress: number
  date?: string
  waCatalogUrl?: string
  delay?: number
}

export default function ProjectCard({ title, location, image, progress, date, waCatalogUrl, delay = 0 }: ProjectCardProps){
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group rounded-2xl bg-white shadow-card card-lift overflow-hidden border border-gray-100 w-full h-full flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-full aspect-[4/3] shrink-0 overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-end gap-2">
          <div className="text-white drop-shadow-md min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 sm:w-[14px] sm:h-[14px]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="truncate max-w-[160px] sm:max-w-[200px]">{location}</span>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm text-jbk-black px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md shrink-0">
            {progress}%
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h4 className="text-lg font-bold text-jbk-black group-hover:text-jbk-red transition-colors duration-300 mb-3 line-clamp-2">
          {title}
        </h4>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Progress</span>
            <span className="text-sm font-bold text-jbk-red">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-jbk-gradient progress-bar-fill"
              style={{ width: visible ? `${progress}%` : '0%' }}
            ></div>
          </div>
        </div>

        {date && (
          <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{new Date(date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}</span>
          </div>
        )}

        {waCatalogUrl && (
          <a
            href={waCatalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-sm shadow-[0_8px_24px_-8px_rgba(34,197,94,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="truncate">Lihat Katalog WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  )
}

