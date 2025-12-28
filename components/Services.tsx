import { Scissors, Zap, User } from 'lucide-react'

const services = [
    { name: "Corte de Cabelo", icon: Scissors },
    { name: "Barba Completa", icon: User },
    { name: "Corte Americano", icon: Scissors },
    { name: "Low / Midi Taper", icon: Zap },
    { name: "Pezinho", icon: Scissors },
    { name: "Sobrancelha", icon: User },
    { name: "Progressiva", icon: Zap },
    { name: "Luzes / Platinado", icon: Zap },
    { name: "Camuflagem de Grisalhos", icon: User },
    { name: "Barboterapia", icon: User },
]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-950 scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-wider text-sm">Nossos Serviços</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                            Cuidado Completo para <br />
                            Seu Visual
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Não somos apenas uma barbearia, somos um espaço de renovação.
                            Trabalhamos com as melhores técnicas de visagismo para encontrar o corte ideal para o seu rosto e estilo.
                            Do clássico ao moderno, do corte na tesoura ao degradê perfeito.
                        </p>

                        <a href="#combos" className="text-amber-500 font-bold hover:text-amber-400 inline-flex items-center gap-2">
                            Ver Pacotes Promocionais &rarr;
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-colors group"
                            >
                                <service.icon className="h-8 w-8 text-slate-500 group-hover:text-amber-500 transition-colors mb-4" />
                                <h3 className="text-white font-medium">{service.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
