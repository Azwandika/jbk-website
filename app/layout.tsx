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
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'SJB Kontraktor - Sulistyo Jaya Baru',
        type: 'image/svg+xml',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SJB Kontraktor - Sulistyo Jaya Baru',
    description: 'Jasa bangun rumah, renovasi, dan pengawasan proyek di Colomadu, Karanganyar, Solo.',
    images: ['/images/logo.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
      { url: '/images/logo.svg', type: 'image/svg+xml' },
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
    email: false,
    address: false,
  },
  applicationName: 'SJB Kontraktor',
  category: 'business',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
}

export default function RootLayout({children}:{children:ReactNode}){
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
