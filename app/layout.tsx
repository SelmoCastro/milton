import type { Metadata } from 'next'
import { Inter, Great_Vibes, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-great-vibes' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: "Milton's Barber Shop | Ribeirão Preto",
  description: 'A melhor barbearia de Ribeirão Preto. Cortes modernos, barba, visagismo e um ambiente exclusivo.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${greatVibes.variable} ${cinzel.variable} font-sans bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
