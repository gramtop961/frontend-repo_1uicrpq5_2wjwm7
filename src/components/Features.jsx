import { motion } from "framer-motion";
import { Gauge, Users, MailCheck, GitPullRequestCreate, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Performance scorecards",
    desc: "Track time-to-fill, response rates, and pipeline health for each recruiter in real time.",
  },
  {
    icon: Users,
    title: "Team benchmarks",
    desc: "Compare across teams and roles with smart, role-aware KPIs and leaderboards.",
  },
  {
    icon: MailCheck,
    title: "Outbound analytics",
    desc: "Measure outreach volume, reply rate, and quality to coach effectively.",
  },
  {
    icon: GitPullRequestCreate,
    title: "Funnel visibility",
    desc: "See pass-through at each stage and spot bottlenecks before they grow.",
  },
  {
    icon: BarChart3,
    title: "Forecasting",
    desc: "Predict hires per recruiter using historical conversion patterns.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Everything recruiters need to perform at their best
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900/60 p-6 ring-1 ring-inset ring-white/5 hover:border-blue-400/40"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-transform group-hover:scale-150" />
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 ring-1 ring-blue-400/30 grid place-items-center">
                <f.icon className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
