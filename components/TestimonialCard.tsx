"use client"
import { useEffect, useRef, useState } from 'react'
import type { Testimonial } from '../data/testimonials'

const STAR = (key: string | number) => (
  <svg key={key} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" className="shrink-0">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

export default function TestimonialCard({ t, delay = 0 }: { t: Testimonial; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl bg-white p-6 md:p-7 shadow-card border border-gray-100 card-lift h-full transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-5 right-5 text-jbk-red/8 opacity-30 pointer-events-none">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => STAR(`${t.id}-star-${i}`))}
      </div>

      <p className="text-gray-700 leading-relaxed text-[15px] md:text-base mb-6 relative z-10">
        “{t.text}”
      </p>

      <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-bold shadow-lg shrink-0`}>
          <span className="text-sm sm:text-base tracking-wider">{t.initial}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-bold text-jbk-black text-[15px] truncate">{t.name}</div>
          <div className="text-xs text-gray-500 truncate">{t.role}</div>
          <div className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="truncate">{t.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
