import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Intro text animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo(ctaRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

    // Parallax tilt on move
    const handleMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(containerRef.current, {
        rotateX: y * 2,
        rotateY: -x * 2,
        transformPerspective: 800,
        transformOrigin: 'center',
        duration: 0.6,
      });
    };
    const el = containerRef.current;
    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full bg-[#0a0a0b] overflow-hidden">
      {/* Decorative gradients that don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] bg-fuchsia-700/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-32 w-[36rem] h-[36rem] bg-indigo-600/30 rounded-full blur-[140px]" />
      </div>

      {/* 3D Spline Scene */}
      <div ref={containerRef} className="relative h-[100svh] w-full">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Futuristic Web Experiences for bold brands
              </h1>
              <p ref={subtitleRef} className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
                I craft immersive, high-performance websites blending 3D, motion, and clean design. Let’s build something uniquely yours.
              </p>
              <div ref={ctaRef} className="mt-8 flex items-center gap-4">
                <a href="#work" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition-opacity">View Work</a>
                <a href="#contact" className="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
