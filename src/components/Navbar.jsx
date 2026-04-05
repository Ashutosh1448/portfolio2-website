import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-bold tracking-tighter text-white">
          AA<span className="text-primary">.</span>
        </Link>
        
        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link} to={link.toLowerCase()} smooth={true} duration={500} className="cursor-pointer text-muted-text hover:text-white transition-colors">
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 w-full flex flex-col items-center py-6 gap-4 border-t border-white/10">
          {links.map((link) => (
            <Link key={link} to={link.toLowerCase()} smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer text-white hover:text-primary transition-colors text-lg">
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
