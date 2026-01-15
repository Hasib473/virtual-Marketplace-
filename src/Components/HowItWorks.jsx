import React from "react";
import { UserPlus, Brain, Briefcase } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Your Profile",
    description:
      "Sign up and build a strong profile by adding your skills, experience, and goals.",
    icon: <UserPlus size={32} />,
  },
  {
    id: 2,
    title: "AI Analyzes Your Skills",
    description:
      "Our AI analyzes your skill gaps, matches you with the right opportunities, and suggests improvements.",
    icon: <Brain size={32} />,
  },
  {
    id: 3,
    title: "Get Work & Grow",
    description:
      "Collaborate in real time, get paid securely, and track your growth with smart analytics.",
    icon: <Briefcase size={32} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-emerald-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start your journey in just a few simple steps with our AI-powered platform.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-emerald-500 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
