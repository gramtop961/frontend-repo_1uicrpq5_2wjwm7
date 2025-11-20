import { motion } from "framer-motion";

export default function Insights() {
  return (
    <section id="insights" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Turn activity into insights, insights into outcomes
            </h2>
            <p className="mt-4 text-slate-600">
              Automatically capture sourcing, outreach, interviews, and offers to produce clean, trustworthy metrics your leaders will actually use.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["+32% response rate", "-21% time-to-fill", "+18% pass-through", "+3 hires / recruiter"]
                .map((stat, i) => (
                  <motion.div
                    key={stat}
                    className="rounded-2xl border border-slate-200 bg-white p-5 ring-1 ring-inset ring-slate-100 shadow-sm"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <p className="text-lg font-semibold text-slate-900">{stat}</p>
                    <p className="text-xs text-slate-500">after 60 days on Talent Tracker</p>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-4">
                <div className="h-40 rounded-xl bg-gradient-to-r from-sky-200 to-indigo-200" />
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                      <div className="h-24 rounded-md bg-gradient-to-br from-sky-200/70 to-indigo-200/70" />
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-sky-200 ring-1 ring-sky-300 backdrop-blur"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
