import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-wider text-lg">/ your.name</a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
        <a href="#contact" className="ml-4 inline-flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
