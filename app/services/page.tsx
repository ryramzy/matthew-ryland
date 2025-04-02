export default function ServicesPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Our Services
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          At Garry Payton Law, we offer comprehensive legal services to meet your needs.
          Our experienced team is dedicated to providing exceptional representation
          across various areas of law.
        </p>
        <div className="grid gap-8 mt-8">
          <div className="p-6 border rounded-lg dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Civil Litigation</h2>
            <p className="mb-4">
              We handle a wide range of civil litigation matters, including contract
              disputes, property disputes, and personal injury cases.
            </p>
          </div>
          <div className="p-6 border rounded-lg dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Business Law</h2>
            <p className="mb-4">
              Our business law services include contract drafting, business formation,
              mergers and acquisitions, and corporate governance.
            </p>
          </div>
          <div className="p-6 border rounded-lg dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Real Estate Law</h2>
            <p className="mb-4">
              We assist clients with property transactions, lease agreements,
              property disputes, and real estate development matters.
            </p>
          </div>
          <div className="p-6 border rounded-lg dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Estate Planning</h2>
            <p className="mb-4">
              Our estate planning services include wills, trusts, probate,
              and asset protection strategies.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Schedule a Consultation</h2>
          <p className="mb-4">
            Contact us today to discuss your legal needs and learn how we can help.
            We offer initial consultations to better understand your situation and
            provide tailored legal solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
} 