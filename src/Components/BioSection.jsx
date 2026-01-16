import { useState } from "react";
import { useProfile } from "../Contexts/ProfileContext";

const BioSection = () => {
  const { profile, updateProfile } = useProfile();
  const [bio, setBio] = useState(profile.bio);

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
      <h3 className="text-lg font-semibold mb-2">About Me</h3>

      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows="4"
        placeholder="Write something about yourself..."
        className="w-full p-3 rounded-xl bg-black/40 border border-white/20 text-white"
      />

      <button
        onClick={() => updateProfile({ bio })}
        className="mt-3 px-5 py-2 bg-emerald-500 rounded-xl hover:bg-emerald-600"
      >
        Save Bio
      </button>
    </div>
  );
};

export default BioSection;
