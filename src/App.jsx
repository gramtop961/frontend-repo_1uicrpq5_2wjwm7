import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Insights from "./components/Insights";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50 selection:bg-blue-500/30 selection:text-white">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <Navbar />
      <Hero />
      <Features />
      <Insights />
      <CTA />

      <footer className="border-t border-blue-400/10 py-10 text-center text-blue-200/60">
        © {new Date().getFullYear()} Talent Tracker. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
