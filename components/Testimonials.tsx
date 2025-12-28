import { Star } from 'lucide-react'

const reviews = [
    {
        name: "Leonardo Sanches",
        text: "Excelente. Já faz 6 anos que sou cliente.",
        stars: 5,
    },
    {
        name: "Luís Felipe Beloni",
        text: "Corte de cabelo excelente com ótimo papo e custo benefício!",
        stars: 5,
    },
    {
        name: "H. Rodrigo G. Gomez",
        text: "Gosto muito do Ian e do Milton, são ótimos profissionais e dedicados. O salão tem higiene, ar condicionado e banco de espera confortável.",
        stars: 5,
    },
    {
        name: "Sheldon Pereira",
        text: "Ótimo atendimento preço justo e barbeiro super amigável recomendo.",
        stars: 5,
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    O que dizem nossos clientes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                            <div className="flex text-amber-500 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-slate-300 text-sm mb-4 leading-relaxed">&quot;{review.text}&quot;</p>
                            <p className="text-white font-bold text-sm">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
