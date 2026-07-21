import { cookies } from 'next/headers'
import { LockScreen } from './lock-screen'
import { VIPDashboard } from './dashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Portal',
  robots: {
    index: false,
    follow: false,
  }
}

export default function PortalPage() {
  const cookieStore = cookies()
  const authCookie = cookieStore.get('vip_portal_auth')
  
  let isAuthenticated = false
  let clientName = ""

  if (authCookie) {
    try {
      const data = JSON.parse(authCookie.value)
      // Check if not expired logically
      if (Date.now() - data.timestamp < 60 * 60 * 24 * 1000) {
        isAuthenticated = true
        clientName = data.client
      }
    } catch (e) {
      // Invalid cookie
    }
  }

  return (
    <div className="container mx-auto px-4 min-h-[80vh]">
      {isAuthenticated ? (
        <VIPDashboard clientName={clientName} />
      ) : (
        <LockScreen />
      )}
    </div>
  )
}
