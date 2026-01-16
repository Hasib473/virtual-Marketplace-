import { useState } from "react";
import { useSkills } from "../Contexts/SkillContext";

const SkillManager = () => {
  const { addSkill } = useSkills();
  const [name, setName] = useState("");
  const [level, setLevel] = useState(50);

  const handleAdd = () => {
    if (!name) return;
    addSkill({ name, level });
    setName("");
    setLevel(50);
  };

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">Add Your Skill</h2>

      <input
        type="text"
        placeholder="Skill name (e.g. React)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 mb-4 rounded-xl bg-black/40 border border-white/20 text-white"
      />

      <label className="text-sm text-gray-400">
        Skill Level: {level}%
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="w-full mt-2"
      />

      <button
        onClick={handleAdd}
        className="mt-4 px-6 py-2 bg-emerald-500 rounded-xl font-semibold hover:bg-emerald-600"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillManager;
