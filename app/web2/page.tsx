'use client'

import type { Metadata } from 'next'
import { useEffect, useState } from 'react'

// Note: We can't export metadata from client components, so we'll handle this differently
// export const metadata: Metadata = {
//   title: 'CTF: Cookie Monster',
//   description: 'A CTF challenge about cookie manipulation',
// }

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

function setCookie(name: string, value: string, days: number = 7) {
  if (typeof document === 'undefined') return
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export default function Web2Page() {
  const [user, setUser] = useState<string>('guest')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set page title
    document.title = 'CTF: Cookie Monster'
    
    // Check for existing cookie
    const existingUser = getCookie('user')
    if (existingUser) {
      setUser(existingUser)
    } else {
      // Set default cookie
      setCookie('user', 'guest')
      setUser('guest')
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
        <div 
          className="card" 
          style={{ 
            maxWidth: '700px', 
            margin: 'auto', 
            borderRadius: '8px', 
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)', 
            padding: '1.5rem' 
          }}
        >
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div 
        className="card" 
        style={{ 
          maxWidth: '700px', 
          margin: 'auto', 
          borderRadius: '8px', 
          boxShadow: '0 6px 18px rgba(0,0,0,0.08)', 
          padding: '1.5rem' 
        }}
      >
        <h1>Welcome to "Cookie Monster"</h1>
        <p>You are currently logged in as: <strong>{user}</strong></p>
        <p>Only <code>admin</code> can view the secret flag at <a href="/web2/flag" style={{ color: '#0066cc' }}>/web2/flag</a>.</p>
        <p><em>Hint: check your cookies 🍪</em></p>
      </div>
    </div>
  )
}
