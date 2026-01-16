import BioSection from "../Components/BioSection";
import GigSection from "../Components/GigSection";
import ProfileHeader from "../Components/ProfileHeader";
import SkillList from "../Components/SkillList";


const MyProfile = () => {
  return (
    <div className="max-w-5xl mx-auto text-white">
      <ProfileHeader />
      <BioSection />
      <SkillList />
      <GigSection />
    </div>
  );
};

export default MyProfile;
