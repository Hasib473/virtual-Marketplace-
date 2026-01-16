import { useSkills } from "../Contexts/SkillContext";

const SkillList = () => {
  const { skills, removeSkill } = useSkills();

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-white/5 p-4 rounded-xl border border-white/10"
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <button
              onClick={() => removeSkill(skill.name)}
              className="text-red-400 text-sm"
            >
              Remove
            </button>
          </div>

          <div className="w-full bg-black/40 rounded-full h-2">
            <div
              className="bg-emerald-500 h-2 rounded-full"
              style={{ width: `${skill.level}%` }}
            />
          </div>

          <p className="text-xs text-gray-400 mt-1">
            Level: {skill.level}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
