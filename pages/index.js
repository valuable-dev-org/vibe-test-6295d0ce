export default function Home() {
  return (
    <div style={{ 
      padding: '4rem', 
      textAlign: 'center', 
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🎨 Hello from Vibe Coder!
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
        This app was generated and deployed automatically!
      </p>
      <p style={{ marginTop: '2rem', opacity: 0.7 }}>
        Prompt: "Create a simple hello world Next.js app"
      </p>
    </div>
  );
}