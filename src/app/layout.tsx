import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import MatrixRain from '@/components/MatrixRain'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'JIAD ARABI | Cybersecurity Specialist & Network Engineer',
  description: 'Security & Network Engineer specializing in cybersecurity, penetration testing, and digital infrastructure. Access granted to secure digital solutions.',
  keywords: 'cybersecurity, network engineer, penetration testing, security specialist, hacker, digital security',
  authors: [{ name: 'Jiad Arabi' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} bg-black text-green-400 min-h-screen overflow-x-hidden`}>
        {/* Matrix Rain Background */}
        <div id="matrix-bg" className="fixed inset-0 z-0 opacity-10">
          <MatrixRain />
        </div>
        
        {/* Terminal Border */}
        <div className="fixed inset-0 z-10 pointer-events-none">
          <div className="w-full h-full border-2 border-green-400/20 rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.3)]">
            {/* Terminal Header */}
            <div className="h-8 bg-black/80 border-b border-green-400/20 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-green-400/70 text-xs font-mono">
                  JIAD_ARABI.SYS - SECURITY_TERMINAL_v2.1.0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="relative z-20 min-h-screen p-4 pt-12">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Terminal Cursor */}
        <div className="fixed bottom-4 right-4 z-30">
          <span className="text-green-400 font-mono text-sm animate-pulse">
            █
          </span>
        </div>
      </body>
    </html>
  )
}
