import Header from './components/Headers';
import StatsBanner from './components/StatsBanner';
import CompanyGrid from './components/CompanyGrid';
import FoundersCard from './components/FoundersCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header />
      <StatsBanner />
      <section id="founders">
        <FoundersCard />
      </section>

      <section id="funded-startups">
        <CompanyGrid />
      </section>

      <Footer/>
      <ScrollToTop/>
    </>
  );
}
