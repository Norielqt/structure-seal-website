import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Systems from './components/Systems'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Systems />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
