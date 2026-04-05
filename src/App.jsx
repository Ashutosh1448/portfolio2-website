import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scroll physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans w-full relative">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-muted-text bg-background">
        <div className="container mx-auto px-6">
          <p className="font-medium text-white/70 mb-2">Developed with ❤️ by Ashutosh Agrawal</p>
          <p className="text-sm text-muted-text">© {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
