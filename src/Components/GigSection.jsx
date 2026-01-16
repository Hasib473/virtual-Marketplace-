import { useState } from "react";
import { useProfile } from "../Contexts/ProfileContext";

const GigSection = () => {
  const { profile, addGig } = useProfile();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!title || !price) return;
    addGig({ title, price });
    setTitle("");
    setPrice("");
  };

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
      <h3 className="text-lg font-semibold mb-4">My Gigs</h3>

      <div className="space-y-3 mb-4">
        {profile.gigs.map((gig, i) => (
          <div
            key={i}
            className="flex justify-between bg-black/40 p-3 rounded-xl"
          >
            <span>{gig.title}</span>
            <span className="text-emerald-400">${gig.price}</span>
          </div>
        ))}
      </div>

      <input
        placeholder="Gig title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-2 rounded-xl bg-black/40 border border-white/20 text-white"
      />

      <input
        placeholder="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-3 mb-2 rounded-xl bg-black/40 border border-white/20 text-white"
      />

      <button
        onClick={handleAdd}
        className="px-5 py-2 bg-emerald-500 rounded-xl hover:bg-emerald-600"
      >
        Add Gig
      </button>
    </div>
  );
};

export default GigSection;
