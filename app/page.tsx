export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Garry Payton Law
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          At Garry Payton Law, we provide exceptional legal representation with a
          commitment to excellence and integrity. Our experienced team is dedicated
          to serving our clients' needs with professionalism and dedication.
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Experienced legal professionals</li>
            <li>Personalized attention to each case</li>
            <li>Strong track record of success</li>
            <li>Clear communication and transparency</li>
            <li>Comprehensive legal solutions</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Ready to discuss your legal needs? Contact us today for a consultation.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+13126710751"
              className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Call: (312) 671-0751
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
