import { MapPin, Phone, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Milton<span className="text-amber-500">&apos;s</span></h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Tradição e modernidade em cada corte. O ambiente perfeito para o homem que se cuida.
                        </p>
                    </div>

                    {/* Contact */}
                    <div id="location">
                        <h4 className="text-white font-bold mb-6">Contato & Localização</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-slate-400">
                                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                <span>
                                    Av. Portugal, 1558 <br />
                                    Santa Cruz do Jose Jacques <br />
                                    Ribeirão Preto - SP
                                </span>
                            </li>
                            <li className="flex items-center text-slate-400">
                                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                                <a href="https://wa.me/+5516981108234" className="hover:text-white transition-colors">
                                    (16) 9-8110.8234
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Horário de Funcionamento</h4>
                        <ul className="space-y-2 text-slate-400 text-sm mb-6">
                            <li className="flex justify-between">
                                <span>Segunda - Sexta</span>
                                <span className="text-white">09:00 - 19:30</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábado</span>
                                <span className="text-white">09:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingo</span>
                                <span className="text-amber-500">Fechado</span>
                            </li>
                        </ul>

                        <a
                            href="https://www.instagram.com/miltons.barbershop1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
                        >
                            <Instagram className="h-5 w-5" />
                            Siga no Instagram
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-center">
                    <p className="text-slate-600 text-sm">
                        &copy; {new Date().getFullYear()} Milton&apos;s Barber Shop. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
