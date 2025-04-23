'use client';

export default function FoundersCard() {
  const founders = [
    {
      name: 'Paul Graham',
      img: '/Paulgraham.jpg',
      desc: 'Paul Graham is the author of On Lisp (1993), ANSI Common Lisp (1995), and Hackers & Painters (2004). In 1995, he and Robert Morris started Viaweb, the first SaaS company, which in 1998 became Yahoo Store. In 2002 he discovered a simple spam filtering algorithm that inspired the current generation of filters. He has an AB from Cornell and a PhD in Computer Science from Harvard.',
      socials: {
        twitter: 'https://x.com/paulg?lang=en',
        website: 'https://www.paulgraham.com/'
      }
    },
    {
      name: 'Jessica Livingston',
      img: '/Jessica-Livingstone-380x360.jpeg',
      desc: 'Jessica Livingston was previously VP of marketing at investment bank Adams Harkness, where she managed an award-winning rebranding of the company. She is the author of Founders at Work (2007), a book of interviews with startup founders. She has a BA in English from Bucknell.',
      socials: {
        twitter: 'https://x.com/jesslivingston?lang=en',
        website: 'https://paulgraham.com/jessica.html'
      }
    }
  ];

  return (
    <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.9rem', marginBottom: '2.5rem' }}>Meet our Founders</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {founders.map((founder, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={founder.name}
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '2rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                background: '#fff',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={founder.img}
                alt={founder.name}
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  border: '3px solid #eee'
                }}
              />

              <div style={{ maxWidth: '400px', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.9rem', marginBottom: '0.5rem' }}>{founder.name}</h3>
                <p style={{ fontSize: '1rem', marginBottom: '1rem', lineHeight: '1.5' }}>{founder.desc}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={founder.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <img height="28" width="28" src="/twitter.png" alt="Twitter" />
                  </a>
                  <a href={founder.socials.website} target="_blank" rel="noopener noreferrer">
                    <img height="28" width="28" src="/web.png" alt="Website" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
