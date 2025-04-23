'use client';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f8f8f3',
        padding: '2rem 1.5rem',
        borderTop: '1px solid #e0e0e0',
        marginTop: '3rem'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {/* YC Logo + Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/YC_logo.png" alt="YC" style={{ width: '32px', height: '32px' }} />
          <span style={{ fontWeight: 'bold', color: '#d35400', fontSize: '1.25rem' }}>
            Y Combinator
          </span>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a
            href="#founders"
            style={{
              textDecoration: 'none',
              color: '#333',
              fontWeight: '500'
            }}
          >
            Founders
          </a>
          <a
            href="#funded-startups"
            style={{
              textDecoration: 'none',
              color: '#333',
              fontWeight: '500'
            }}
          >
            Funded Startups
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666'
        }}
      >
        © 2025 Y Combinator Tribute. All rights reserved.
      </div>
    </footer>
  );
}
