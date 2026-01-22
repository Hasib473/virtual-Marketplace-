import React, { useState, useEffect } from "react";

// Dummy jobs data
const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer Needed",
    category: "Web Development",
    jobType: "Remote",
    employmentType: "Full-time",
    salary: "1000-1500 USD",
    deadline: "2026-02-28",
    skills: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    category: "UI/UX",
    jobType: "Onsite",
    employmentType: "Contract",
    salary: "800-1200 USD",
    deadline: "2026-03-10",
    skills: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 3,
    title: "Data Scientist",
    category: "Data Science",
    jobType: "Hybrid",
    employmentType: "Full-time",
    salary: "1500-2000 USD",
    deadline: "2026-01-31",
    skills: ["Python", "Machine Learning", "Pandas"],
  },
  {
    id: 4,
    title: "Backend Developer with Node.js",
    category: "Web Development",
    jobType: "Remote",
    employmentType: "Full-time",
    salary: "1200-1800 USD",
    deadline: "2026-02-20",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

const FindWork = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    // Replace this with API fetch in production
    setJobs(dummyJobs);
  }, []);

  // Filtered jobs based on search & category
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "" || job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-300 dark:text-slate-100">
        Find Work
      </h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by skills or job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-full md:w-2/3 bg-white/5 text-white p-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="input w-full md:w-1/3 bg-white/5 p-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition"
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          No jobs found. Try adjusting your search or filter.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                {job.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Category: <span className="font-medium">{job.category}</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Type: <span className="font-medium">{job.jobType}</span> |{" "}
                <span className="font-medium">{job.employmentType}</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Salary: <span className="font-medium">{job.salary}</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Deadline: <span className="font-medium">{job.deadline}</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Skills:{" "}
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                  >
                    {skill}
                  </span>
                ))}
              </p>

              <div className="flex gap-3 mt-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-sm">
                  Apply
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded-lg text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindWork;
