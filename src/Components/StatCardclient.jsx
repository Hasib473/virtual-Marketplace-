const StatCardc = ({ title, value }) => {
  return (
    <div className="bg-slate-900/70 rounded-2xl p-5 shadow hover:shadow-xl transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2 text-emerald-400">
        {value}
      </h2>
    </div>
  );
};

export default StatCardc;
