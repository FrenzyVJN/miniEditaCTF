import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CTF: Robots Rule',
  description: 'A CTF challenge about robots and search engines',
}

export default function Web1Page() {
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
        <h1>Welcome to "Robots Rule"</h1>
        <p>
          Somewhere in this site, the flag is hidden. But no page here seems to mention it...
        </p>
        <p><strong>Hint:</strong> Sometimes websites leave clues for search engines. 🕷️</p>
      </div>
    </div>
  )
}
