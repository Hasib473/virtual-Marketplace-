import React from "react";
import { motion } from "framer-motion";

const RoleSelectionModal = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 text-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-2">
          Join As 👋
        </h2>
        <p className="text-gray-400 mb-6">
          Choose how you want to use the platform
        </p>

        <div className="space-y-4">
          <button
            onClick={() => onSelect("freelancer")}
            className="w-full py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            🚀 Freelancer
          </button>

          <button
            onClick={() => onSelect("client")}
            className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition"
          >
            🧑‍💼 Service Provider (Client)
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RoleSelectionModal;
