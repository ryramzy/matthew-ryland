import Link from 'next/link'

const services = [
  {
    title: 'Federal Defense',
    description: 'Aggressive representation for federal charges.',
    href: '/services#federal-defense',
  },
  {
    title: 'Sentence Reduction',
    description: 'Cutting federal time with proven strategies.',
    href: '/services#sentence-reduction',
  },
  {
    title: 'Nationwide Support',
    description: 'Legal help wherever you are in the U.S.',
    href: '/services#nationwide-support',
  },
]

export function ServicesPreview() {
  return (
    <div className="bg-white dark:bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Comprehensive legal solutions for federal criminal cases
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 