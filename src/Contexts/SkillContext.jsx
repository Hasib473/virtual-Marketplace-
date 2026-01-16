import { createContext, useContext, useState, useEffect } from "react";

const SkillContext = createContext();

export const useSkills = () => useContext(SkillContext);

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);

  // load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("freelancer_skills");
    if (stored) setSkills(JSON.parse(stored));
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("freelancer_skills", JSON.stringify(skills));
  }, [skills]);

  const addSkill = (skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  const removeSkill = (name) => {
    setSkills((prev) => prev.filter((s) => s.name !== name));
  };

  return (
    <SkillContext.Provider value={{ skills, addSkill, removeSkill }}>
      {children}
    </SkillContext.Provider>
  );
};
