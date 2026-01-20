import { Link } from "react-router";

const JobCard = ({ job, mySkills }) => {
  const matched = job.requiredSkills.filter(skill =>
    mySkills.includes(skill)
  );

  const matchPercent = Math.round(
    (matched.length / job.requiredSkills.length) * 100
  );

  return (
    <div className="bg-slate-900/60  rounded-2xl shadow p-5 hover:shadow-xl transition">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg text-gray-300 font-bold">{job.title}</h3>
          <p className="text-sm text-gray-400">{job.category}</p>
        </div>
        <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
          {job.postedHours}h ago
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-200">
        <span>💰 {job.budget}</span>
        <span>📍 {job.location}</span>
      </div>

      {/* Skill match */}
      <div className="mt-4">
        <p className="text-sm mb-1 text-gray-300">
          Skill Match: <b>{matchPercent}%</b>
        </p>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-emerald-500 rounded"
            style={{ width: `${matchPercent}%` }}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {job.requiredSkills.map(skill => (
          <span
            key={skill}
            className={`px-2 py-1 text-xs rounded-full ${
              mySkills.includes(skill)
                ? "bg-emerald-100 text-emerald-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-3">
        <Link
          to={`/dashboard/job/${job.id}`}
          className="flex-1 text-center py-2 rounded-lg border border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition"
        >
          See Details
        </Link>

        <button className="flex-1 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
