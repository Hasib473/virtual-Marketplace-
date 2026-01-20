const RecentJobRow = ({ job }) => {
  return (
    <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl hover:bg-black/60 transition">

      <div>
        <h3 className="font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-400">{job.date}</p>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <span>{job.budget}</span>
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            job.status === "Active"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {job.status}
        </span>
        <button className="text-emerald-400 hover:underline">
          View
        </button>
      </div>

    </div>
  );
};

export default RecentJobRow;
