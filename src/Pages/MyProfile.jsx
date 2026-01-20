import React, { useEffect, useState } from "react";
import { FaEdit, FaSave, FaPlus, FaTrash } from "react-icons/fa";

const MyProfile = () => {
  /* ================= PROFILE ================= */
  const defaultProfile = {
    name: "Hasib Al Mamun",
    title: "MERN Stack Developer",
    bio: "I help clients build fast, scalable and modern web applications.",
    hourlyRate: 25,
    location: "Bangladesh",
    skills: ["React", "Node.js", "MongoDB"],
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [editProfile, setEditProfile] = useState(false);

  /* ================= GIGS ================= */
  const [gigs, setGigs] = useState([]);
  const [showGigForm, setShowGigForm] = useState(false);
  const [editingGigId, setEditingGigId] = useState(null);

  const emptyGig = {
    title: "",
    description: "",
    price: "",
    delivery: "",
    category: "",
  };

  const [gigForm, setGigForm] = useState(emptyGig);

  /* ================= LOAD LOCAL STORAGE ================= */
  useEffect(() => {
    const p = localStorage.getItem("profile");
    const g = localStorage.getItem("gigs");

    if (p) setProfile(JSON.parse(p));
    if (g) setGigs(JSON.parse(g));
  }, []);

  /* ================= SAVE PROFILE ================= */
  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditProfile(false);
  };

  /* ================= SAVE GIG ================= */
  const saveGig = () => {
    if (!gigForm.title || !gigForm.price) {
      alert("Title & Price required");
      return;
    }

    if (editingGigId) {
      setGigs(prev =>
        prev.map(g => (g.id === editingGigId ? { ...gigForm, id: g.id } : g))
      );
      setEditingGigId(null);
    } else {
      setGigs(prev => [
        { ...gigForm, id: Date.now(), status: "Active" },
        ...prev,
      ]);
    }

    setGigForm(emptyGig);
    setShowGigForm(false);
  };

  useEffect(() => {
    localStorage.setItem("gigs", JSON.stringify(gigs));
  }, [gigs]);

  /* ================= DELETE GIG ================= */
  const deleteGig = (id) => {
    if (confirm("Delete this gig?")) {
      setGigs(prev => prev.filter(g => g.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto text-white space-y-10">

      {/* ================= PROFILE ================= */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">My Profile</h2>
          {editProfile ? (
            <button onClick={saveProfile} className="bg-emerald-500 px-4 py-2 rounded flex items-center gap-2">
              <FaSave /> Save
            </button>
          ) : (
            <button onClick={() => setEditProfile(true)} className="bg-gray-700 px-4 py-2 rounded flex items-center gap-2">
              <FaEdit /> Edit
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input disabled={!editProfile} value={profile.name}
            onChange={e => setProfile({ ...profile, name: e.target.value })}
            className="bg-gray-800 p-2 rounded" />

          <input disabled={!editProfile} value={profile.title}
            onChange={e => setProfile({ ...profile, title: e.target.value })}
            className="bg-gray-800 p-2 rounded" />

          <textarea disabled={!editProfile} value={profile.bio}
            onChange={e => setProfile({ ...profile, bio: e.target.value })}
            className="bg-gray-800 p-2 rounded md:col-span-2" />

          <input disabled={!editProfile} value={profile.hourlyRate}
            onChange={e => setProfile({ ...profile, hourlyRate: e.target.value })}
            className="bg-gray-800 p-2 rounded" />

          <input disabled={!editProfile} value={profile.location}
            onChange={e => setProfile({ ...profile, location: e.target.value })}
            className="bg-gray-800 p-2 rounded" />

          <input disabled={!editProfile} value={profile.skills.join(",")}
            onChange={e => setProfile({ ...profile, skills: e.target.value.split(",") })}
            className="bg-gray-800 p-2 rounded md:col-span-2" />
        </div>
      </div>

      {/* ================= GIGS ================= */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">My Gigs / Services</h2>
          <button
            onClick={() => setShowGigForm(true)}
            className="bg-emerald-500 px-4 py-2 rounded flex items-center gap-2"
          >
            <FaPlus /> Create Gig
          </button>
        </div>

        {/* CREATE / EDIT GIG */}
        {showGigForm && (
          <div className="bg-gray-800 p-4 rounded-xl mb-6 space-y-3">
            <input placeholder="Gig Title" value={gigForm.title}
              onChange={e => setGigForm({ ...gigForm, title: e.target.value })}
              className="w-full p-2 bg-gray-700 rounded" />

            <textarea placeholder="Description" value={gigForm.description}
              onChange={e => setGigForm({ ...gigForm, description: e.target.value })}
              className="w-full p-2 bg-gray-700 rounded" />

            <div className="grid md:grid-cols-3 gap-3">
              <input placeholder="Price ($)" value={gigForm.price}
                onChange={e => setGigForm({ ...gigForm, price: e.target.value })}
                className="p-2 bg-gray-700 rounded" />

              <input placeholder="Delivery Days" value={gigForm.delivery}
                onChange={e => setGigForm({ ...gigForm, delivery: e.target.value })}
                className="p-2 bg-gray-700 rounded" />

              <input placeholder="Category" value={gigForm.category}
                onChange={e => setGigForm({ ...gigForm, category: e.target.value })}
                className="p-2 bg-gray-700 rounded" />
            </div>

            <div className="flex gap-3">
              <button onClick={saveGig} className="bg-emerald-500 px-4 py-2 rounded">Save</button>
              <button onClick={() => setShowGigForm(false)} className="bg-gray-600 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        )}

        {/* GIG LIST */}
        <div className="grid md:grid-cols-2 gap-5">
          {gigs.map(gig => (
            <div key={gig.id} className="bg-gray-800 p-4 rounded-xl">
              <div className="flex justify-between">
                <h3 className="font-semibold">{gig.title}</h3>
                <button onClick={() => deleteGig(gig.id)} className="text-red-400">
                  <FaTrash />
                </button>
              </div>

              <p className="text-gray-400 text-sm my-2">{gig.description}</p>

              <div className="flex justify-between text-sm text-gray-300">
                <span>💰 ${gig.price}</span>
                <span>⏱ {gig.delivery} days</span>
                <span className="text-emerald-400">{gig.status}</span>
              </div>
            </div>
          ))}

          {gigs.length === 0 && (
            <p className="text-gray-400">No gigs created yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
