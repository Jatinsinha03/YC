'use client';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}
    >
      {/* Left: YC Logo and Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/YC_logo.png" alt="YC Logo" style={{ height: '32px', width: '32px' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d35400' }}>
          Y Combinator
        </span>
      </div>

      {/* Right: Navigation Links */}
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <a
          href="#founders"
          style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Founders
        </a>
        <a
          href="#funded-startups"
          style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Funded Startups
        </a>
      </div>
    </nav>
  );
}
