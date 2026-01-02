import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-cyan selection:text-brand-dark flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;