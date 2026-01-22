import React, { useState } from "react";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    jobType: "",
    employmentType: "",
    experience: "",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",
    location: "",
    skills: "",
    description: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (res.ok) {
        alert("🎉 Job posted successfully!");
        setFormData({
          title: "",
          category: "",
          jobType: "",
          employmentType: "",
          experience: "",
          salaryMin: "",
          salaryMax: "",
          currency: "USD",
          location: "",
          skills: "",
          description: "",
          deadline: "",
        });
      } else {
        alert("❌ Failed to post job");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Server error");
    }
  };

  return (
    // 🌍 Page Background
    <div className="min-h-screen bg-white/5 py-10 px-4">
      {/* 📦 Card */}
      <div className="max-w-5xl mx-auto p-8 rounded-xl shadow-lg bg-slate-900/80">

        <h1 className="text-2xl font-bold text-slate-800 mb-1">
          Post a New Job
        </h1>
        <p className="text-slate-500 mb-6">
          Reach top talents worldwide 🌍
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Job Title */}
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="input bg-white/5"
            required
          />

          {/* Category & Job Type */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input bg-white/5"
              required
            >
              <option value="">Select Category</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX</option>
              <option>Data Science</option>
            </select>

            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="input bg-white/5"
              required
            >
              <option value="">Job Type</option>
              <option>Remote</option>
              <option>Onsite</option>
              <option>Hybrid</option>
            </select>
          </div>

          {/* Employment & Experience */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="input bg-white/5"
              required
            >
              <option value="">Employment Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="input bg-white/5"
              required
            >
              <option value="">Experience Level</option>
              <option>Entry</option>
              <option>Mid</option>
              <option>Senior</option>
            </select>
          </div>

          {/* Salary */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="number"
              name="salaryMin"
              placeholder="Salary Min"
              value={formData.salaryMin}
              onChange={handleChange}
              className="input bg-white/5"
            />
            <input
              type="number"
              name="salaryMax"
              placeholder="Salary Max"
              value={formData.salaryMax}
              onChange={handleChange}
              className="input bg-white/5"
            />
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="input bg-white/5"
            >
              <option>USD</option>
              <option>BDT</option>
              <option>EUR</option>
            </select>
          </div>

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            value={formData.location}
            onChange={handleChange}
            className="input bg-white/5"
          />

          {/* Skills */}
          <input
            type="text"
            name="skills"
            placeholder="Skills (e.g. React, Node, MongoDB)"
            value={formData.skills}
            onChange={handleChange}
            className="input bg-white/5"
          />

          {/* Description */}
          <textarea
            name="description"
            rows="5"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            className="input resize-none bg-white/5"
            required
          />

          {/* Deadline */}
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="input bg-white/5"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 
            text-white py-3 rounded-lg font-semibold transition"
          >
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
