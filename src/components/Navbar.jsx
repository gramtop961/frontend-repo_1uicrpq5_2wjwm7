import { Menu, TrendingUp, LineChart, Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 to-transparent" />
      <nav className="relative mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-10 w-10 rounded-xl bg-blue-500/10 ring-1 ring-blue-400/30 flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-blue-400" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold text-lg tracking-tight">Talent Tracker</p>
            <p className="text-xs text-blue-200/70">Recruiter Performance Platform</p>
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
              className="text-sm text-blue-100/80 hover:text-white transition-colors"
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
          <button className="hidden md:inline-flex h-10 items-center gap-2 rounded-xl border border-blue-400/30 bg-slate-900/40 px-4 text-blue-100 hover:border-blue-300/50 hover:text-white transition-colors">
            <TrendingUp className="h-4 w-4" />
            Live Demo
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-5 text-white shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] transition-shadow">
            <Rocket className="h-4 w-4" />
            Get Started
          </button>
          <button className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-blue-400/30 text-blue-100/80">
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </nav>
    </div>
  );
}
