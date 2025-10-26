import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0b] text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative bg-[#0a0a0b] py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">About</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                I’m a frontend engineer and creative developer focused on crafting immersive, high-end web experiences. My toolkit blends modern frameworks with motion design and real-time 3D, always prioritizing performance and accessibility.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-white/80 text-sm">
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">React + Vite</li>
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">GSAP + ScrollTrigger</li>
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">Spline 3D</li>
                <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">Framer Motion</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-600/10 to-indigo-600/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
                <div className="grid grid-cols-2 gap-6">
                  <Stat label="Years Experience" value="5+" />
                  <Stat label="Projects Shipped" value="40+" />
                  <Stat label="Avg. Lighthouse" value="95+" />
                  <Stat label="Happy Clients" value="25+" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-white/60 text-sm mt-1">{label}</div>
    </div>
  );
}

export default App;
