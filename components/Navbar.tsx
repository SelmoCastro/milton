"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Scissors } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Serviços', href: '#services' },
        { name: 'Combos', href: '#combos' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#location' },
    ]

    return (
        <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Logo Recreated with Fonts */}
                            <div className="flex flex-col items-center justify-center -space-y-2">
                                <span className={`text-4xl text-white font-normal ${'font-great-vibes'}`} style={{ fontFamily: 'var(--font-great-vibes)' }}>
                                    Milton&apos;s
                                </span>
                                <span className={`text-[10px] tracking-[0.3em] text-amber-500 font-bold ${'font-cinzel'}`} style={{ fontFamily: 'var(--font-cinzel)' }}>
                                    BARBERSHOP
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-amber-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/+5516981108234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
                        >
                            Agendar Horário
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/+5516981108234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center mt-4 bg-amber-500 text-slate-950 block px-3 py-3 rounded-md text-base font-bold"
                        >
                            Agendar Agora
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
