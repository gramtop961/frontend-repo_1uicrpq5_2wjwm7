import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-10 text-center shadow-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_50%)]" />
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to elevate your recruiting team?
          </h3>
          <p className="mt-3 text-slate-600">
            Start free for 14 days. No credit card required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 text-white shadow-[0_12px_45px_rgba(14,165,233,0.45)] hover:shadow-[0_14px_55px_rgba(14,165,233,0.6)]">
              Create your workspace
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 text-slate-700 hover:text-slate-900 shadow-sm">
              Talk to an expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
