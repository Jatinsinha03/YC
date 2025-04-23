'use client';

import CountUp from 'react-countup';
import companies from '../../../public/data/yc_companies_combined.json';

export default function StatsBanner() {
  const totalCompanies = companies.length;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        padding: '2rem'
      }}
    >
      {/* Companies Card */}
      <div
        style={{
          background: '#fff',
          padding: '2rem 3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          minWidth: '280px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#d35400', marginBottom: '0.5rem' }}>
          <CountUp end={totalCompanies} duration={1.5} separator="," />+
        </h2>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#d35400' }}>
          Companies Funded
        </p>
      </div>

      {/* Valuation Card */}
      <div
        style={{
          background: '#fff',
          padding: '2rem 3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          minWidth: '280px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#d35400', marginBottom: '0.5rem' }}>
          <CountUp end={600} duration={1.5} suffix="B+" separator="," />
        </h2>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#d35400' }}>
          Combined Valuation ($)
        </p>
      </div>
    </div>
  );
}
