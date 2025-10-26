import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: 'Nebula Commerce',
    tag: 'eCommerce · 3D product viewer',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Quantum Studio',
    tag: 'Portfolio · 3D interactions',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'CyberPulse',
    tag: 'SaaS · Realtime dashboard',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Astra Events',
    tag: 'Events · Ticketing platform',
    image: 'https://images.unsplash.com/photo-1724003450406-6a7c120a26ef?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE0Nzg1NDF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative bg-[#0a0a0b] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-white/70 max-w-2xl">A curated mix of high-impact projects that blend performance, motion, and modern aesthetics.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article key={i} className="project-card group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{p.tag}</p>
                </div>
                <a href="#" className="text-sm text-white/80 hover:text-white underline underline-offset-4">Case Study</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
