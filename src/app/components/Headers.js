export default function Header() {
    return (
      <header
        style={{
          background: 'linear-gradient(90deg, #FFCC00 0%, #FFD633 100%)',
          padding: '3rem 1rem',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#000',
            marginBottom: '1rem',
            letterSpacing: '1px'
          }}
        >
        Celebrating 20 Years of YC
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#333',
            fontWeight: '500',
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          A tribute to the visionaries, innovators, and game-changers who launched their journeys with Y Combinator.
        </p>
      </header>
    );
  }
  