import { useContext } from "react";
import FeatureGrid from "../Components/FeatureGrid";
import SkillList from "../Components/SkillList";
import SkillManager from "../Components/SkillManager";
import StatCard from "../Components/StatCard";
import { AuthContext } from "../Contexts/AuthContext";

const DashboardHome = () => {
    const {user,Loader} = useContext(AuthContext)
  return (
    <>
      <h1 className="text-3xl text-gray-400 font-bold mb-6">
        Welcome, {user.displayName} To Your Freelancing Dashboard 
      </h1>

      {/* Top Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Wallet Balance" value="$124.50" />
        <StatCard title="Skill Score" value="78%" />
        <StatCard title="Nearby Jobs" value="12" />
        <StatCard title="Verified Level" value="Gold" />
      </div>
      <SkillManager/>
      <SkillList/>

      {/* Core Features */}
      <FeatureGrid />
    </>
  );
};

export default DashboardHome;
