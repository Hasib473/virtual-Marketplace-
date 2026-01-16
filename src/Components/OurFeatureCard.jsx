// src/Components/OurFeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";

const OurFeatureCard = ({ title, description, icon, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className=" bg-slate-900/60  rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
    >
      {icon && (
        <div className="text-emerald-500 mb-4 text-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-20 mb-4 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default OurFeatureCard;
