import { Hero } from './components/hero'
import { CoreStack } from './components/core-stack'
import { Projects as Experience } from './components/projects'

export default function Home() {
  return (
    <div className="bg-streetBlack w-full">
      <Hero />
      <CoreStack />
      <Experience />
    </div>
  )
}
