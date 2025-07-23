import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hari - AI Product Developer & UX Designer',
  description: 'I\'m Hari, an AI Product Developer with 4+ years of UX expertise. I bridge accessibility-focused design with AI innovation to create technology that works for everyone.',
  keywords: ['AI', 'product development', 'UX design', 'accessibility', 'machine learning', 'web development', 'Hari Rajashekar'],
  authors: [{ name: 'Hari Rajashekar' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Hari - AI Product Developer & UX Designer',
    description: 'I\'m Hari, an AI Product Developer with 4+ years of UX expertise. I bridge accessibility-focused design with AI innovation to create technology that works for everyone.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hari - AI Product Developer & UX Designer',
    description: 'I\'m Hari, an AI Product Developer with 4+ years of UX expertise. I bridge accessibility-focused design with AI innovation to create technology that works for everyone.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1f2e" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 