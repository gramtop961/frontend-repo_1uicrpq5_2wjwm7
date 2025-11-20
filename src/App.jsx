import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Insights from "./components/Insights";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-50 text-slate-800 selection:bg-blue-200 selection:text-slate-900">
      {/* Background grid - light theme */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_55%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Insights />
      <CTA />

      <footer className="border-t border-slate-200 py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Talent Tracker. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
