import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Super Secret Area',
  description: 'You found the secret area!',
}

export default function SuperSecretPage() {
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
        <h1>🎯 Super Secret Area</h1>
        <p>
          Congratulations! You found the robots.txt file and discovered this hidden path.
        </p>
        <p>
          But you're not done yet... The flag is still hidden somewhere around here.
        </p>
        <p><strong>Hint:</strong> Look for a text file that might contain the flag. 📄</p>
        
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="/supersecret/flag.txt" 
            style={{ 
              color: '#0066cc', 
              textDecoration: 'underline'
            }}
          >
            📄 flag.txt
          </a>
        </div>
      </div>
    </div>
  )
}