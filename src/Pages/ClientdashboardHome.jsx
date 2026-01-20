import StatCardc from "../Components/StatCardclient";

const ClientHome = () => {
  return (
    <div className="space-y-8">

      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome 👋 <span className="text-emerald-400">Client</span>
        </h1>
        <p className="text-gray-400 mt-1">
          Manage your jobs & freelancers efficiently
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCardc title="Posted Jobs" value="10" />
        <StatCardc title="Active Jobs" value="4" />
        <StatCardc title="Hired Freelancers" value="6" />
        <StatCardc title="Wallet Balance" value="৳12,500" />
      </div>

      {/* Info Card */}
      <div className="bg-slate-900/60 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-2">
          🚀 Quick Tips
        </h2>
        <p className="text-gray-400">
          Post clear job descriptions to get better AI matched freelancers.
        </p>
      </div>

    </div>
  );
};

export default ClientHome;
