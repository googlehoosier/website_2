import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VenueSpaces from './components/Artists';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <VenueSpaces />
        <Schedule />
        <Venue />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;