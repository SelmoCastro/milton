import Image from 'next/image'

// Instruções:
// 1. Adicione as fotos do cliente na pasta 'public/gallery' (crie a pasta se não existir)
// 2. Renomeie os arquivos para foto1.jpg, foto2.jpg, etc.
// 3. Cadastre os nomes abaixo:

const photos = [
    { src: '/hero-bg.png', alt: 'Corte Clássico', span: 'col-span-1 md:col-span-2 row-span-2' }, // Foto Destaque
    { src: '/hero-bg.png', alt: 'Barba Feita', span: 'col-span-1 row-span-1' },
    { src: '/hero-bg.png', alt: 'Ambiente', span: 'col-span-1 row-span-1' },
    { src: '/hero-bg.png', alt: 'Detalhe do Corte', span: 'col-span-1 row-span-1' },
    { src: '/hero-bg.png', alt: 'Equipe', span: 'col-span-1 row-span-1' },
]

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-amber-500 font-bold uppercase tracking-wider text-sm">Nosso Trabalho</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Galeria de Estilo
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                    {photos.map((photo, index) => (
                        <div key={index} className={`relative rounded-xl overflow-hidden group ${photo.span}`}>
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold border border-amber-500 px-4 py-2 rounded-full backdrop-blur-sm">
                                    {photo.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
