import { Header } from './components/header'
import { Hero } from './components/hero'

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="pt-16">
        <Hero />
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-neutral dark:prose-invert">
            <h1 className="text-3xl font-bold mb-8">Welcome to My World</h1>
            <p className="mb-6">
              I've always believed in the power of storytelling, innovation, and public service to create real impact. Whether it's through journalism, tech, or policy, my journey has been about bridging gaps—between communities, information, and opportunities. From co-founding Vngle, a decentralized news network, to researching global democratization, to building solutions at the intersection of technology and society, my work is driven by a commitment to making systems more inclusive, accessible, and effective.
            </p>
            <p className="mb-6">
              This site is a place to explore my projects, thoughts, and the work I've done across media, technology, and public service. If you're interested in collaboration or just want to connect, reach out—let's build something meaningful together.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-500 dark:text-gray-400">
              Matthew Ryland |{' '}
              <a href="tel:+13126710751" className="text-blue-600 hover:text-blue-500">
                (312) 671-0751
              </a>{' '}
              | Let's connect and push boundaries together
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
