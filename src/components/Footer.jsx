export default function Footer() {
  return (
    <footer id="contact" className="bg-[#09090a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-white text-2xl font-semibold">Let’s build something remarkable</h3>
            <p className="text-white/70 mt-3 max-w-xl">Available for freelance and collaborations. I love working on futuristic interfaces, 3D interactions, and performant web apps.</p>
          </div>
          <div className="md:justify-self-end">
            <a href="mailto:hello@yourdomain.com" className="inline-flex items-center gap-2 text-black bg-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              hello@yourdomain.com
            </a>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between text-sm text-white/50">
          <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
          <span>Built with React + Spline + GSAP</span>
        </div>
      </div>
    </footer>
  );
}
