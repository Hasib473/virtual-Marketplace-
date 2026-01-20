import { NavLink } from "react-router";
import {
  FaHome,
  FaPlus,
  FaBriefcase,
  FaWallet,
  FaCrown,
} from "react-icons/fa";

const ClientSidebar = () => {
  return (
    <aside className="w-64 bg-slate-900/80 border-r border-white/10 p-6">
      <h2 className="text-2xl font-bold text-emerald-400 mb-8">
        Client Panel
      </h2>

      <nav className="space-y-4 text-gray-300">
        <SidebarLink to="/clientDashboard" icon={<FaHome />} label="Dashboard" />
        <SidebarLink to="/clientDashboard/post-job" icon={<FaPlus />} label="Post Job" />
        <SidebarLink to="/clientDashboard/my-jobs" icon={<FaBriefcase />} label="My Jobs" />
        <SidebarLink to="/clientDashboard/wallet" icon={<FaWallet />} label="Wallet" />
        <SidebarLink to="/clientDashboard/subscription" icon={<FaCrown />} label="Subscription" />
      </nav>
    </aside>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
        isActive
          ? "bg-emerald-500 text-black font-semibold"
          : "hover:bg-white/10"
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

export default ClientSidebar;
