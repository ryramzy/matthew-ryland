'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matthew-r-72288390/',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/ryramzyx',
    icon: Twitter,
    color: 'from-sky-500 to-blue-600'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@ryramzy',
    icon: Youtube,
    color: 'from-red-600 to-red-700'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ryramzy',
    icon: Github,
    color: 'from-gray-700 to-gray-800'
  }
]

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+12092674701',
    href: 'tel:+12092674701',
    color: 'from-warmGold to-softRed'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mramsay0@gmail.com',
    href: 'mailto:mramsay0@gmail.com',
    color: 'from-tealBlue to-blue-600'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sacramento, California',
    href: '#',
    color: 'from-green-500 to-teal-500'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ type: 'loading', message: 'Sending message...' })

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' })
      }, 5000)
    }, 2000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-tealBlue/10 to-midnight">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-sandBeige mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-tealBlue/80 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss collaboration opportunities, share ideas, or explore how we can work together 
              to create meaningful impact? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-sandBeige mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-midnight/80 to-tealBlue/20 border border-tealBlue/20 hover:border-warmGold/40 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white shadow-lg`}>
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-tealBlue/60 text-sm font-medium">{info.label}</p>
                      <p className="text-sandBeige font-semibold group-hover:text-warmGold transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-sandBeige mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-midnight/90 to-tealBlue/20 rounded-2xl border border-tealBlue/20 p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-sandBeige mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sandBeige mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-midnight/50 border border-tealBlue/20 rounded-xl text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none focus:ring-2 focus:ring-warmGold/20 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sandBeige mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-midnight/50 border border-tealBlue/20 rounded-xl text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none focus:ring-2 focus:ring-warmGold/20 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-sandBeige mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-midnight/50 border border-tealBlue/20 rounded-xl text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none focus:ring-2 focus:ring-warmGold/20 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sandBeige mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-midnight/50 border border-tealBlue/20 rounded-xl text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none focus:ring-2 focus:ring-warmGold/20 transition-all duration-200 resize-none"
                      placeholder="Tell me more about your project or inquiry..."
                    />
                  </div>

                  {/* Form Status */}
                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        formStatus.type === 'success' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : formStatus.type === 'error'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle size={20} />
                      ) : formStatus.type === 'error' ? (
                        <AlertCircle size={20} />
                      ) : (
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      )}
                      <span className="text-sm font-medium">{formStatus.message}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!isFormValid || formStatus.type === 'loading'}
                    whileHover={isFormValid ? { scale: 1.02 } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isFormValid
                        ? 'bg-gradient-to-r from-warmGold to-softRed text-midnight hover:shadow-glow cursor-pointer'
                        : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {formStatus.type === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-midnight/80 to-tealBlue/20 rounded-2xl p-8 border border-tealBlue/20">
              <h3 className="text-2xl font-bold text-sandBeige mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-tealBlue/80 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can work together to create meaningful impact in your community or organization. 
                I'm always excited to explore new opportunities and partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+12092674701"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
                <a
                  href="mailto:mramsay0@gmail.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-warmGold text-warmGold font-semibold rounded-xl hover:bg-warmGold hover:text-midnight transition-all duration-300"
                >
                  <Mail size={20} className="mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 