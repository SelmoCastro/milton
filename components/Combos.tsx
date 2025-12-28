import { Check } from 'lucide-react'

const combos = [
    {
        name: "Corte + Barba",
        price: "85,00",
        description: "O clássico completo. Corte moderno e barba com toalha quente.",
        featured: true,
    },
    {
        name: "Corte + Barba + Sobrancelha",
        price: "100,00",
        description: "Visual impecável nos mínimos detalhes.",
    },
    {
        name: "Barba + Pezinho",
        price: "55,00",
        description: "Manutenção rápida para manter o estilo.",
    },
    {
        name: "Barba + Sobrancelha",
        price: "60,00",
        description: "Alinhamento perfeito facial.",
    },
    {
        name: "Camuflagem + Barboterapia",
        price: "65,00",
        description: "Tingimento sutil e relaxamento completo.",
    },
]

export default function Combos() {
    return (
        <section id="combos" className="py-20 bg-slate-900 scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Combos Exclusivos</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Pacotes pensados para o homem moderno que valoriza seu tempo e imagem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {combos.map((combo, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col h-full bg-slate-800/50 border ${combo.featured ? 'border-amber-500 shadow-[0_0_20px_rgba(234,179,8,0.15)] scale-105 z-10' : 'border-slate-700 hover:border-slate-600'} rounded-2xl p-8 transition-all hover:translate-y-[-5px]`}
                        >
                            {combo.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-slate-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Mais Pedido
                                </div>
                            )}

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">{combo.name}</h3>
                                <p className="text-slate-400 text-sm mb-6">{combo.description}</p>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-lg text-slate-400 mr-1">R$</span>
                                    <span className="text-4xl font-bold text-amber-500">{combo.price}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-slate-300 text-sm">
                                        <Check className="h-4 w-4 text-emerald-500 mr-2" /> Agendamento Online
                                    </li>
                                    <li className="flex items-center text-slate-300 text-sm">
                                        <Check className="h-4 w-4 text-emerald-500 mr-2" /> Profissionais Experientes
                                    </li>
                                    <li className="flex items-center text-slate-300 text-sm">
                                        <Check className="h-4 w-4 text-emerald-500 mr-2" /> Ambiente Climatizado
                                    </li>
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/5516981108234?text=${encodeURIComponent(`Olá, gostaria de agendar: ${combo.name}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full mt-auto text-center py-3 rounded-xl font-bold transition-colors ${combo.featured
                                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                                    }`}
                            >
                                Agendar Agora
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
