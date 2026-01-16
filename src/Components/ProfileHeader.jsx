import { useProfile } from "../Contexts/ProfileContext";

const ProfileHeader = () => {
  const { profile } = useProfile();

  return (
    <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
      <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-2xl font-bold">
        {profile.name ? profile.name[0] : "U"}
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          {profile.name || "Your Name"}
        </h2>
        <p className="text-gray-400">
          {profile.title || "Your professional title"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
