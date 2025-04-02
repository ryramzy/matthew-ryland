import { Header } from './components/header'
import { Hero } from './components/hero'
import { ServicesPreview } from './components/services-preview'

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="pt-16">
        <Hero />
        <ServicesPreview />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-500 dark:text-gray-400">
              Garry Payton Law |{' '}
              <a href="tel:+13126710751" className="text-blue-600 hover:text-blue-500">
                (312) 671-0751
              </a>{' '}
              | Serving clients nationwide | Emergency? Call anytime
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
