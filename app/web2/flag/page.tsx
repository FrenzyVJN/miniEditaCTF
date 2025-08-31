'use client'

import { useEffect, useState } from 'react'

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

export default function Web2FlagPage() {
  const [user, setUser] = useState<string>('guest')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set page title
    document.title = 'CTF: Cookie Monster - Flag'
    
    // Check for existing cookie
    const existingUser = getCookie('user')
    setUser(existingUser || 'guest')
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
        {user === 'admin' ? (
          <>
            <h1>🎉 Congratulations!</h1>
            <p>Here is your flag: <strong>editaCTF{'{'}cookies_can_be_tasty{'}'}</strong></p>
            <p>You successfully manipulated the cookie to gain admin access!</p>
          </>
        ) : (
          <>
            <h1>❌ Access Denied</h1>
            <p>Only admins can view the flag!</p>
            <p>Current user: <strong>{user}</strong></p>
            <p><a href="/web2" style={{ color: '#0066cc' }}>Go back</a></p>
          </>
        )}
      </div>
    </div>
  )
}
