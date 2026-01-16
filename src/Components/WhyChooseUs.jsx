// WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react"; // ✅ all icons safely imported

const features = [
  {
    id: 1,
    title: "Expert Team",
    description:
      "Our team consists of highly skilled professionals with years of experience.",
    icon: <LucideIcons.Users size={48} className="text-emerald-500" />,
  },
  {
    id: 2,
    title: "Fast & Efficient",
    description:
      "We deliver projects quickly without compromising on quality and performance.",
    icon: <LucideIcons.Zap size={48} className="text-emerald-500" />,
  },
  {
    id: 3,
    title: "Secure & Reliable",
    description:
      "Your data and workflow are completely safe with our top-notch security measures.",
    icon: <LucideIcons.Shield size={48} className="text-emerald-500" />,
  },
  {
    id: 4,
    title: "Proven Results",
    description:
      "Our solutions have helped numerous clients achieve their goals effectively.",
    icon: <LucideIcons.Star size={48} className="text-emerald-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20  w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Why <span className="text-emerald-400">Choose Us</span>
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Discover the reasons why hundreds of users trust our platform to
          enhance their skills, collaborate seamlessly, and achieve their goals.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className=" bg-slate-900/60  rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
