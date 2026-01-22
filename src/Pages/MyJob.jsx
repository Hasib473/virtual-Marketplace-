import React, { useState, useEffect } from "react";

const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "Web Development",
    jobType: "Remote",
    employmentType: "Full-time",
    salary: "1000-1500 USD",
    status: "Open",
    deadline: "2026-02-28",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    category: "UI/UX",
    jobType: "Onsite",
    employmentType: "Contract",
    salary: "800-1200 USD",
    status: "Pending",
    deadline: "2026-03-10",
  },
  {
    id: 3,
    title: "Data Scientist",
    category: "Data Science",
    jobType: "Hybrid",
    employmentType: "Full-time",
    salary: "1500-2000 USD",
    status: "Closed",
    deadline: "2026-01-31",
  },
];

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // TODO: Replace with API fetch
    setJobs(dummyJobs);
  }, []);

  // Delete job
  const handleDelete = (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    // TODO: replace with API delete request
    setJobs((prev) => prev.filter((job) => job.id !== jobId));
    alert("Job deleted successfully!");
  };

  // Edit job (demo alert)
  const handleEdit = (job) => {
    // In production, redirect to PostJob page with prefilled data
    alert(`Edit Job: ${job.title} (Functionality to be implemented)`);
  };

  // View details (demo alert)
  const handleView = (job) => {
    alert(`Viewing details for: ${job.title}`);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        My Jobs
      </h1>

      {jobs.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          No jobs found. Post a new job to get started!
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
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
              <p className="text-sm mb-3">
                Status:{" "}
                <span
                  className={`font-semibold px-2 py-1 rounded-full text-xs ${
                    job.status === "Open"
                      ? "bg-emerald-500 text-white"
                      : job.status === "Pending"
                      ? "bg-yellow-400 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {job.status}
                </span>
              </p>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleView(job)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-sm"
                >
                  View
                </button>
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-lg text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyJobs;
