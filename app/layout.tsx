import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Milton's Barber Shop | Ribeirão Preto",
  description: 'A melhor barbearia de Ribeirão Preto. Cortes modernos, barba, visagismo e um ambiente exclusivo.',
  icons: {
    icon: '/favicon.ico', // We can add this later or use an emoji for now if needed, but keeping default assumption
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
