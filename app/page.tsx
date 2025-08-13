import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Approach } from './components/approach'
import { Contact } from './components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <Hero />
      <Projects />
      <Approach />
      <Contact />
    </main>
  )
}
