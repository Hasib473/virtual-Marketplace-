import { BriefcaseBusiness, CircleDollarSign, House, LayoutDashboard, Podcast, Sprout, UserPen } from "lucide-react";
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
         <div className="flex items-center">
             <House /> Dashboard Home
         </div>
        </NavLink>

        <NavLink to="/dashboard/my-profile" className={linkClass}>
        <div className="flex items-center">
            <UserPen /> My Profile
        </div> 
        </NavLink>

        <NavLink to="jobsearch" className={linkClass}>
          <div className="flex items-center">
            <BriefcaseBusiness />
            Find work
          </div>
        </NavLink>

        <NavLink to="smartWallet" className={linkClass}>
          <div className="flex items-center"><CircleDollarSign /> Wallet</div>
        </NavLink>

        <NavLink to="subscription" className={linkClass}>
       <div className="flex items-center">
          <Podcast /> Subscription
       </div>
        </NavLink>

        <NavLink to="/dashboard/growth" className={linkClass}>
          <div className="flex items-center"><Sprout /> Growth</div>
        </NavLink>

        <NavLink to="/clientDashboard" className={linkClass}>
            <div className="flex items-center">
                <LayoutDashboard />
                Client Dashboard
            </div>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
