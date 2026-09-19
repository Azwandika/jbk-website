import '../styles/globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Sulistyo Jaya Baru (SJB) Kontraktor | Jasa Bangun & Renovasi Rumah di Colomadu, Karanganyar',
  description: 'Jasa bangun rumah, renovasi, dan pengawasan proyek di Colomadu, Karanganyar, Solo dan sekitarnya. Profesional, tepat waktu, dan transparan.'
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
