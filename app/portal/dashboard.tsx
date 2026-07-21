'use client'

import { logoutPortal } from '../actions/auth'
import { useRouter } from 'next/navigation'

export function VIPDashboard({ clientName }: { clientName: string }) {
  const router = useRouter()

  const handleLogout = async () => {
    await logoutPortal()
    router.refresh()
  }

  return (
    <div className="py-20 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-12 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-serif text-crispWhite tracking-tight">Client Portal</h1>
          <p className="text-silver font-mono text-sm mt-2">Welcome back, {clientName}.</p>
        </div>
        <button 
          onClick={handleLogout}
          className="text-xs font-mono text-silver hover:text-crispWhite underline decoration-border underline-offset-4"
        >
          Secure Exit
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xl font-serif text-crispWhite">Priority Booking</h2>
          <p className="text-silver text-sm leading-relaxed">
            Select a time for our upcoming deep-dive. This calendar is exclusively reserved for active partners.
          </p>
          <div className="aspect-[4/3] w-full border border-border bg-streetBlack/50 rounded flex flex-col items-center justify-center p-6 text-center space-y-4">
            <p className="text-silver text-xs font-mono">SECURE CALENDAR LINK</p>
            <a 
              href="https://calendly.com/ryramzyx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-crispWhite text-crispWhite hover:bg-crispWhite hover:text-streetBlack transition-colors text-sm uppercase tracking-widest w-full"
            >
              Open Booking
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-serif text-crispWhite">Direct Inquiry</h2>
          <p className="text-silver text-sm leading-relaxed">
            For secure document transfer or asynchronous updates, please use the form below. 
            Direct numbers are provided during active sprint engagements.
          </p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Secure message sent."); }}>
            <input type="text" placeholder="Subject" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-crispWhite text-crispWhite text-sm" />
            <textarea placeholder="Message Payload" rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-crispWhite text-crispWhite resize-none text-sm" />
            <button type="submit" className="w-full bg-crispWhite text-streetBlack font-bold py-3 uppercase tracking-widest text-sm hover:bg-silver transition-colors mt-4">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
