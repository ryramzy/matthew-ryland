'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-midnight text-white p-8">
      <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
      <p className="text-xl mb-8">Something went wrong on our end.</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-warmGold text-midnight px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Try Again
        </button>
        <Link 
          href="/" 
          className="bg-tealBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 