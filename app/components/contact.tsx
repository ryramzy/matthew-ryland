'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-midnight/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sandBeige sm:text-4xl">
            Let's Build Something Meaningful
          </h2>
          <p className="mt-4 text-lg text-tealBlue">
            Get in touch to discuss collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-sandBeige mb-4">Contact Information</h3>
              <div className="space-y-4 text-tealBlue">
                <p>
                  <a
                    href="tel:+19164614837"
                    className="hover:text-warmGold transition-colors"
                  >
                    (916) 461-4837
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:mramsay0@gmail.com"
                    className="hover:text-warmGold transition-colors"
                  >
                    mramsay0@gmail.com
                  </a>
                </p>
                <p>Sacramento, California</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sandBeige mb-4">Connect</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/matthew-r-72288390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sandBeige hover:text-warmGold transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/rammases2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sandBeige hover:text-warmGold transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ryramzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sandBeige hover:text-warmGold transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sandBeige">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-midnight/80 border-tealBlue/20 text-sandBeige shadow-sm focus:border-warmGold focus:ring-warmGold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sandBeige">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-midnight/80 border-tealBlue/20 text-sandBeige shadow-sm focus:border-warmGold focus:ring-warmGold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sandBeige">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-midnight/80 border-tealBlue/20 text-sandBeige shadow-sm focus:border-warmGold focus:ring-warmGold"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-sandBeige bg-softRed hover:bg-warmGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warmGold transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 