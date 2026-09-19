"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ProjectCardProps {
  title: string
  location: string
  image: string
  progress: number
  date?: string
  delay?: number
}

export default function ProjectCard({ title, location, image, progress, date, delay = 0 }: ProjectCardProps){
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
      className="group rounded-2xl bg-white shadow-card card-lift overflow-hidden border border-gray-100"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
      </div>
    </div>
  )
}

