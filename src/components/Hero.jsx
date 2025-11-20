import { motion } from "framer-motion";
import { Sparkles, Target, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-900/50 px-3 py-1 text-xs text-blue-200/80"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              New: AI-powered recruiter scorecards
            </motion.div>

            <motion.h1
              className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              See recruiter performance clearly.
              <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                Act on insights instantly.
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-blue-100/80 max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Talent Tracker brings your pipeline, outreach, interviews, and offers into one beautiful dashboard with actionable KPIs for every recruiter and team.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 text-white shadow-[0_12px_45px_rgba(59,130,246,0.45)] hover:shadow-[0_14px_55px_rgba(59,130,246,0.6)]">
                Start Free Trial
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-xl border border-blue-400/30 bg-slate-900/40 px-6 text-blue-100 hover:text-white">
                See Sample Dashboard
              </button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-6 text-blue-200/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <div className="flex items-center gap-2"><Target className="h-4 w-4" /> 99.9% uptime</div>
              <div className="flex items-center gap-2"><LineChart className="h-4 w-4" /> Real-time KPIs</div>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative rounded-2xl border border-blue-400/20 bg-slate-900/60 p-3 shadow-2xl">
              <div className="rounded-xl bg-slate-800/60 ring-1 ring-blue-400/20 p-4">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-gradient-to-br from-slate-700/60 to-slate-800/60 p-4 ring-1 ring-blue-400/10">
                      <div className="h-20 w-full rounded-md bg-[linear-gradient(120deg,rgba(59,130,246,0.35),rgba(99,102,241,0.35))] opacity-60" />
                      <div className="mt-3 h-2 w-3/4 rounded bg-blue-400/30" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-blue-400/20" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-slate-800/70 p-4 ring-1 ring-blue-400/10">
                      <div className="h-32 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-blue-500/20 ring-1 ring-blue-400/40 backdrop-blur"
                animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
              <motion.div
                className="absolute -left-6 bottom-10 h-20 w-20 rounded-full bg-indigo-500/20 ring-1 ring-indigo-400/40 backdrop-blur"
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 7 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
