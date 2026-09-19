import '../styles/globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Sulistyo Jaya Baru (SJB) Kontraktor | Jasa Bangun & Renovasi Rumah di Colomadu, Karanganyar',
  description: 'Jasa bangun rumah, renovasi, dan pengawasan proyek di Colomadu, Karanganyar, Solo dan sekitarnya. Profesional, tepat waktu, dan transparan.',
  metadataBase: new URL('https://jbk-website.vercel.app'),
  openGraph: {
    title: 'Sulistyo Jaya Baru (SJB) Kontraktor',
    description: 'Jasa bangun rumah, renovasi, dan pengawasan proyek di Colomadu, Karanganyar, Solo dan sekitarnya.',
    url: 'https://jbk-website.vercel.app',
    siteName: 'SJB Kontraktor',
    images: [
      {
        url: '/images/logo_baru.png',
        width: 1200,
        height: 630,
        alt: 'SJB Kontraktor - Sulistyo Jaya Baru',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SJB Kontraktor - Sulistyo Jaya Baru',
    description: 'Jasa bangun rumah, renovasi, dan pengawasan proyek di Colomadu, Karanganyar, Solo.',
    images: ['/images/logo_baru.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/logo_baru.png', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
      { url: '/images/logo_baru.png' },
    ],
    shortcut: ['/favicon.svg'],
  },
  appleWebApp: {
    capable: true,
    title: 'SJB Kontraktor',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  applicationName: 'SJB Kontraktor',
  category: 'business',
}

export default function RootLayout({children}:{children:ReactNode}){
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
