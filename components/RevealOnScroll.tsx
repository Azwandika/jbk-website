"use client"
import { useEffect, useRef, ReactNode } from 'react'

type RevealVariant = 'up' | 'left' | 'right' | 'scale'

interface RevealOnScrollProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  threshold?: number
  className?: string
  once?: boolean
}

export default function RevealOnScroll({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.15,
  className = '',
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const getHiddenClass = () => {
      switch (variant) {
        case 'left': return 'reveal-hidden-left'
        case 'right': return 'reveal-hidden-right'
        case 'scale': return 'reveal-hidden-scale'
        default: return 'reveal-hidden'
      }
    }

    el.classList.add(getHiddenClass())
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('reveal-visible')
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [variant, delay, threshold, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
