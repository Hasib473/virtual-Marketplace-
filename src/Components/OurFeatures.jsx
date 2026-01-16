// src/Components/OurFeatures.jsx
import React from "react";
import OurFeatureCard from "./OurFeatureCard";
import * as LucideIcons from "lucide-react";

const featuresList = [
  {
    id: 1,
    title: "Skill Gap Analyzer",
    description:
      "Identify your skill gaps and get recommendations to improve efficiently.",
    icon: <LucideIcons.BarChart2 size={48} />,
  },
  {
    id: 2,
    title: "Real-Time Collaboration",
    description:
      "Work with your team seamlessly anytime, anywhere with live collaboration tools.",
    icon: <LucideIcons.Users size={48} />,
  },
  {
    id: 3,
    title: "Voice to Text",
    description:
      "Easily convert your spoken ideas into text for documentation and sharing.",
    icon: <LucideIcons.Mic size={48} />,
  },
  {
    id: 4,
    title: "Smart Wallet",
    description:
      "Manage your earnings, payments, and transactions effortlessly in one place.",
    icon: <LucideIcons.CreditCard size={48} />,
  },
  {
    id: 5,
    title: "Nearby Work",
    description:
      "Discover gigs and services close to your location for convenience and speed.",
    icon: <LucideIcons.MapPin size={48} />,
  },
  {
    id: 6,
    title: "Verified Badge",
    description:
      "Show your authenticity with a verified badge to build trust with clients and collaborators.",
    icon: <LucideIcons.CheckCircle size={48} />,
  },
  {
    id: 7,
    title: "Your Growth",
    description:
      "Track your progress, achievements, and overall growth to plan your career effectively.",
    icon: <LucideIcons.TrendingUp size={48} />, // ✅ Growth alternative
  },
  {
    id: 8,
    title: "AI-Powered Platform",
    description:
      "Leverage AI tools and intelligent recommendations to maximize productivity and results.",
    icon: <LucideIcons.Cpu size={48} />,
  },
];

const OurFeatures = () => {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-emerald-400">Features</span>
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12">
          Explore the powerful tools and services we provide to help you grow,
          collaborate, and achieve success in your career and projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature) => (
            <OurFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
