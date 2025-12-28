import Image from 'next/image'
import { Calendar, MapPin } from 'lucide-react'

export default function Hero() {
    return (
        <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Milton's Barber Shop Interior"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-20">
                <div className="md:max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Aberto Agora em Ribeirão Preto</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Estilo que Define <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                            Sua Personalidade
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Mais que um corte, uma experiência de cavalheiros. Visagismo, barboterapia e cortes personalizados em um ambiente exclusivo no coração de Ribeirão.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://wa.me/+5516981108234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                        >
                            <Calendar className="w-5 h-5" />
                            Agendar Horário
                        </a>
                        <a
                            href="#location"
                            className="inline-flex items-center justify-center gap-2 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
                        >
                            <MapPin className="w-5 h-5 text-amber-500" />
                            Como Chegar
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-slate-400">
                        <div className="text-center md:text-left">
                            <p className="text-3xl font-bold text-white">5.0</p>
                            <p className="text-sm">Avaliação Google</p>
                        </div>
                        <div className="h-8 w-px bg-slate-700"></div>
                        <div className="text-center md:text-left">
                            <p className="text-3xl font-bold text-white">+6</p>
                            <p className="text-sm">Anos de Tradição</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
