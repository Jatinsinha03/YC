'use client';

import { useState } from 'react';
import companies from '../../../public/data/yc_companies_combined.json';

const COMPANIES_PER_PAGE = 30;

export default function CompanyGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYears, setSelectedYears] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = newest to oldest
  const groupedByYear = {};

  const toggleYear = (year) => {
    setSelectedYears(prev =>
      prev.includes(year)
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };
  
  companies.forEach(company => {
    const year = company.batch?.match(/\d{2}/)?.[0];
    const fullYear = year ? `20${year}` : 'Unknown';

    if (!groupedByYear[fullYear]) groupedByYear[fullYear] = [];
    groupedByYear[fullYear].push(company);
  });

  const filteredSortedYears = Object.keys(groupedByYear)
  .filter(year => year !== 'Unknown')
  .filter(year => selectedYears.length === 0 || selectedYears.includes(year))
  .sort((a, b) => sortOrder === 'desc' ? b - a : a - b);


  const [currentPages, setCurrentPages] = useState(
    Object.fromEntries(filteredSortedYears.map(year => [year, 1]))
  );

  const handlePageChange = (year, direction) => {
    setCurrentPages(prev => ({
      ...prev,
      [year]: Math.max(1, prev[year] + direction)
    }));
  };

  const searchMatches = name =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div style={{ padding: '2rem' }}>
      <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
        }}
        >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000' }}>
            Our Funded Startups
        </h1>

        {/* Search */}
        <input
            type="text"
            placeholder="Search startups..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '250px'
            }}
        />

        {/* Filter: Years */}
        <div style={{ position: 'relative' }}>
            <details>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Filter by Year</summary>
            <div style={{
                position: 'absolute',
                zIndex: 1,
                background: '#fff',
                border: '1px solid #ccc',
                padding: '1rem',
                maxHeight: '200px',
                overflowY: 'scroll',
                width: '180px'
            }}>
                {[...Array(21)].map((_, i) => {
                const year = (2005 + i).toString();
                return (
                    <div key={year}>
                    <label>
                        <input
                        type="checkbox"
                        checked={selectedYears.includes(year)}
                        onChange={() => toggleYear(year)}
                        />
                        {' '}{year}
                    </label>
                    </div>
                );
                })}
            </div>
            </details>
        </div>

        {/* Sort */}
        <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            style={{
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc'
            }}
        >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
        </select>
        </div>


      {/* Grid by year */}
      {filteredSortedYears.map(year => {
        const allCompanies = groupedByYear[year].filter(c =>
          searchMatches(c.name)
        );

        if (allCompanies.length === 0) return null;

        const currentPage = currentPages[year] || 1;
        const totalPages = Math.ceil(allCompanies.length / COMPANIES_PER_PAGE);
        const startIndex = (currentPage - 1) * COMPANIES_PER_PAGE;
        const visibleCompanies = allCompanies.slice(
          startIndex,
          startIndex + COMPANIES_PER_PAGE
        );

        return (
          <section key={year} style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{year}</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: '1rem'
              }}
            >
              {visibleCompanies.map(c => (
                <div
                  key={c.id}
                  style={{
                    textAlign: 'center',
                    border: '1px solid #eee',
                    padding: '1rem',
                    background: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <img
                    src={
                      !c.small_logo_thumb_url ||
                      c.small_logo_thumb_url.includes('/company/thumb/missing.png')
                        ? '/no-img-found.png'
                        : c.small_logo_thumb_url
                    }
                    alt={c.name}
                    style={{
                      height: '40px',
                      width: '100%',
                      objectFit: 'contain',
                      marginBottom: '0.5rem',
                      maxWidth: '100px',
                      marginInline: 'auto',
                      display: 'block'
                    }}
                  />
                  <div style={{ fontSize: '0.9rem' }}>{c.name}</div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button
                  className="button-orange"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(year, -1)}
                  style={{ marginRight: '1rem' }}
                >
                  Prev
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="button-orange"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(year, 1)}
                  style={{ marginLeft: '1rem' }}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
