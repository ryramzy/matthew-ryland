import { Header } from './components/header'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Approach } from './components/approach'
import { Contact } from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-sandBeige">
      <Header />
      <Hero />
      <Projects />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
