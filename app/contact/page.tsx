export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact Us
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="mb-4">
          We're here to help. Please don't hesitate to reach out to us for any
          legal assistance or questions you may have.
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Phone:</strong>{' '}
            <a href="tel:+13126710751" className="text-blue-500 hover:underline">
              (312) 671-0751
            </a>
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@garrypaytonlaw.com" className="text-blue-500 hover:underline">
              contact@garrypaytonlaw.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Chicago, Illinois
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 