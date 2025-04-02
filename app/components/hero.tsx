import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Your Federal Criminal</span>
                <span className="block text-blue-600">Defense Expert</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Garry Payton Law fights for your rights in federal courts nationwide. From defense to sentence reduction, we're here 24/7 for emergencies and 9-5 for consultations.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="tel:+13126710751"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Call (312) 671-0751
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 