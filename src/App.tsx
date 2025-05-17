import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Schedule } from './components/Schedule';
import { Instructors } from './components/Instructors';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Schedule />
        <Instructors />     
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;