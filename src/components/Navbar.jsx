import { Menu, TrendingUp, Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-10 w-10 rounded-xl bg-sky-100 ring-1 ring-sky-200 flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-sky-600" />
          </div>
          <div className="leading-tight">
            <p className="text-slate-900 font-semibold text-lg tracking-tight">Talent Tracker</p>
            <p className="text-xs text-slate-500">Recruiter Performance Platform</p>
          </div>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Features", href: "#features" },
            { label: "Insights", href: "#insights" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Pricing", href: "#cta" },
          ].map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button className="hidden md:inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 text-slate-700 hover:border-sky-300 hover:text-slate-900 transition-colors shadow-sm">
            <TrendingUp className="h-4 w-4" />
            Live Demo
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 text-white shadow-[0_8px_30px_rgba(14,165,233,0.35)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.5)] transition-shadow">
            <Rocket className="h-4 w-4" />
            Get Started
          </button>
          <button className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-slate-200 text-slate-700 bg-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </nav>
    </div>
  );
}
