import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg hover:shadow-2xl"
    >
      <p className="text-sm text-gray-400 mb-2">{title}</p>

      <h2 className="text-3xl font-bold text-emerald-400">
        {value}
      </h2>
    </motion.div>
  );
};

export default StatCard;
