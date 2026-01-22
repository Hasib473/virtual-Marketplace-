import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Dummy freelancer data
const dummyFreelancers = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    rating: 4.8,
    reviews: 34,
    hourlyRate: "$40/hr",
    profilePic: "https://i.pravatar.cc/150?img=1",
    gigs: ["E-commerce Website", "Admin Dashboard", "REST API Development"],
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    rating: 4.6,
    reviews: 22,
    hourlyRate: "$35/hr",
    profilePic: "https://i.pravatar.cc/150?img=2",
    gigs: ["Mobile App Design", "Landing Pages", "Branding"],
  },
  {
    id: 3,
    name: "Charlie Lee",
    title: "Data Scientist",
    skills: ["Python", "Machine Learning", "Pandas"],
    rating: 4.9,
    reviews: 48,
    hourlyRate: "$50/hr",
    profilePic: "https://i.pravatar.cc/150?img=3",
    gigs: ["Data Analysis", "Prediction Models", "AI Automation"],
  },
  {
    id: 4,
    name: "Dana White",
    title: "Frontend Developer",
    skills: ["React", "TailwindCSS", "Next.js"],
    rating: 4.7,
    reviews: 29,
    hourlyRate: "$45/hr",
    profilePic: "https://i.pravatar.cc/150?img=4",
    gigs: ["Landing Page", "Portfolio Site", "E-commerce Site"],
  },
];

const HireFreelancer = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    // Replace with API fetch
    setFreelancers(dummyFreelancers);
  }, []);

  // Filter freelancers
  const filteredFreelancers = freelancers.filter(
    (freelancer) =>
      (freelancer.name.toLowerCase().includes(search.toLowerCase()) ||
        freelancer.skills.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        )) &&
      freelancer.rating >= minRating
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        Hire Freelancer
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-full md:w-2/3 bg-white/5 p-3 text-white rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition"
        />
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="input w-full md:w-1/3 bg-white/5 text-gray-300 p-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition"
        >
          <option value={0}>All Ratings</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
        </select>
      </div>

      {/* Freelancer Grid */}
      {filteredFreelancers.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          No freelancers found. Try adjusting your search or filter.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={freelancer.profilePic}
                  alt={freelancer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
                />
                <div>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    {freelancer.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {freelancer.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {freelancer.rating} ({freelancer.reviews})
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-3 flex flex-wrap gap-2">
                {freelancer.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Gigs */}
              <div className="mb-3">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Sample Gigs:
                </p>
                <ul className="list-disc list-inside text-sm text-slate-500 dark:text-slate-400">
                  {freelancer.gigs.map((gig, i) => (
                    <li key={i}>{gig}</li>
                  ))}
                </ul>
              </div>

              {/* Hourly Rate & Buttons */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {freelancer.hourlyRate}
                </span>
                <div className="flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-sm">
                    Hire
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded-lg text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HireFreelancer;
