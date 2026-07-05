import './App.css';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Location from './components/Location';
import MenuHighlights from './components/MenuHighlights';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Specialties from './components/Specialties';
import WhatsappButton from './components/WhatsappButton';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
        <Specialties />
        <Reviews />
        <Gallery />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
