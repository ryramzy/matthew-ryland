'use client'

import { useState, useTransition } from 'react'
import { authenticatePIN } from '../actions/auth'
import { useRouter } from 'next/navigation'

export function LockScreen() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    startTransition(async () => {
      const res = await authenticatePIN(pin)
      if (res.success) {
        router.refresh() // Reload page to see dashboard
      } else {
        setError(res.error || 'Access denied.')
      }
    })
  }

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-8 border border-border bg-streetBlack/50 backdrop-blur-sm rounded-lg shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-silver rounded mx-auto mb-4 flex items-center justify-center">
             <span className="text-streetBlack font-bold font-serif text-sm">MR</span>
          </div>
          <h1 className="text-2xl font-serif text-crispWhite tracking-tight mb-2">Private Access</h1>
          <p className="text-silver/70 font-mono text-sm">Enter your VIP access code to proceed.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••"
              className="w-full bg-transparent border-b border-border py-3 text-center text-2xl tracking-[0.5em] text-crispWhite focus:outline-none focus:border-crispWhite transition-colors"
              maxLength={6}
              required
            />
          </div>
          {error && <p className="text-red-500 text-center text-sm font-mono">{error}</p>}
          <button
            type="submit"
            disabled={isPending || pin.length < 4}
            className="w-full bg-crispWhite text-streetBlack font-bold py-3 uppercase tracking-widest text-sm hover:bg-silver transition-colors disabled:opacity-50"
          >
            {isPending ? 'Verifying...' : 'Unlock'}
          </button>
        </form>
      </div>
    </div>
  )
}
