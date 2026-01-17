import { NavLink } from "react-router";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-emerald-100 ${
      isActive ? "bg-emerald-200 text-emerald-700 font-semibold" : "text-gray-600"
    }`;

  return (
    <aside className="w-64 shadow-lg p-5 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-400">AI Marketplace</h2>

      <nav className="space-y-3 text-gray-400">
        <NavLink to="/dashboard" className={linkClass}>
          🏠 Dashboard Home
        </NavLink>

        <NavLink to="/dashboard/my-profile" className={linkClass}>
          👤 My Profile
        </NavLink>

        <NavLink to="/dashboard/skills" className={linkClass}>
          🧠 Find the jobs
        </NavLink>

        <NavLink to="/dashboard/collaboration" className={linkClass}>
          🤝 Collaboration
        </NavLink>

        <NavLink to="/dashboard/voice-to-text" className={linkClass}>
          🎙 Voice to Text
        </NavLink>

        <NavLink to="/dashboard/wallet" className={linkClass}>
          💰 Wallet
        </NavLink>

        <NavLink to="/dashboard/nearby-jobs" className={linkClass}>
          📍 Nearby Jobs
        </NavLink>

        <NavLink to="/dashboard/growth" className={linkClass}>
          📈 Growth
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          ⚙ Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
