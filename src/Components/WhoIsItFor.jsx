// WhoIsItFor.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Building2,
} from "lucide-react";

const audiences = [
  {
    title: "Freelancers",
    description:
      "Find smart job matches, track your growth, and get paid securely with AI-powered tools.",
    icon: <Users className="w-10 h-10 text-emerald-500" />,
  },
  {
    title: "Students & Learners",
    description:
      "Analyze your skill gaps, improve faster, and get real-world work opportunities.",
    icon: <GraduationCap className="w-10 h-10 text-emerald-500" />,
  },
  {
    title: "Employers",
    description:
      "Hire verified talent quickly, collaborate in real-time, and manage projects efficiently.",
    icon: <Building2 className="w-10 h-10 text-emerald-500" />,
  },
  {
    title: "Remote Teams",
    description:
      "Collaborate seamlessly with voice tools, live updates, and smart productivity features.",
    icon: <Briefcase className="w-10 h-10 text-emerald-500" />,
  },
];

const WhoIsItFor = () => {
  return (
    <section className="py-20  text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who Is This Platform For?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designed for everyone who wants to grow, collaborate, and succeed
            in the modern digital workforce.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="  bg-slate-900/60  backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
