import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)]" />
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Ready to elevate your recruiting team?
          </h3>
          <p className="mt-3 text-blue-100/80">
            Start free for 14 days. No credit card required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 text-white shadow-[0_12px_45px_rgba(59,130,246,0.45)] hover:shadow-[0_14px_55px_rgba(59,130,246,0.6)]">
              Create your workspace
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-blue-400/30 bg-slate-900/40 px-6 text-blue-100 hover:text-white">
              Talk to an expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
