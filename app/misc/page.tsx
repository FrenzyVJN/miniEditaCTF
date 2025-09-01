import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CTF: Find the Flag',
  description: 'A tiny web CTF - find the flag hidden in the HTML.',
}

export default function MiscPage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', padding: '2rem' }}>
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
        <h1>Welcome to "Source Sleuth"</h1>
        <p>
          There's a little secret hidden in this page's HTML. Your job: find the flag.
          When you've found it, submit it to your CTF scoreboard.
        </p>

        <p>
          If you want more of a clue: one representation of the flag is encoded and stored in an attribute of a non-visible element.
        </p>
      </div>
      
      <div 
        id="steg" 
        style={{ display: 'none' }} 
        data-flag="ZWRpdGFDVEZ7aGkxZGQzbl8xbl9wbGExbl9zMWdodH0="
      ></div>
      
      <div dangerouslySetInnerHTML={{
        __html: '<!-- FLAG (cleartext): editaCTF{hi1dd3n_1n_pla1n_s1ght} -->'
      }} />
    </div>
  )
}
