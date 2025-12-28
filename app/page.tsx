import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Combos from '@/components/Combos'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950">
            <Navbar />
            <Hero />
            <Services />
            <Combos />
            <Testimonials />
            <Footer />
        </main>
    )
}
