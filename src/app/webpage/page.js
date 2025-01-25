import Head from 'next/head';
import Link from 'next/link';


export default function LandingPage() {
  const categories = [
    { name: 'Loans', link: '/categories/loans' },
    { name: 'Savings', link: '/categories/savings' },
    { name: 'Insurance', link: '/categories/insurance' },
    { name: 'Investments', link: '/categories/investments' },
  ];

  return (
    <div className="container">
      <Head>
        <title>Saylani Microfinance</title>
        <meta name="description" content="Saylani Microfinance Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>Saylani Microfinance</h1>
      </header>

      <main className="main">
        <div className="grid">
          {categories.map((category, index) => (
            <div key={index} className="card">
              <h2>{category.name}</h2>
              <Link href={category.link} passHref>
                <button className="button">Proceed</button>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Saylani Microfinance. All rights reserved.</p>
      </footer>
    </div>
  );
}
