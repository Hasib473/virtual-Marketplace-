import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaHome, FaPlus, FaBriefcase, FaWallet, FaCrown } from "react-icons/fa";

const ClientSidebar = () => {
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const navigate = useNavigate();

  const handlePostJobClick = () => {
    setShowPostJobModal(true);
  };

  const goToPostJobForm = () => {
    setShowPostJobModal(false);
    navigate("/clientDashboard/postjobs"); // Regular PostJob page
  };

  const gotTovoVoiceJobPost = () => {
    setShowPostJobModal(false);
    navigate("/clientDashboard/voicejob"); // Voice Job Post page
  }

  return (
    <>
      <aside className="w-64 bg-slate-900/80 border-r border-white/10 p-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-8">
          Client Panel
        </h2>

        <nav className="space-y-4 text-gray-300">
          <SidebarLink to="/clientDashboard" icon={<FaHome />} label="Dashboard" />
          <button
            onClick={handlePostJobClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left hover:bg-white/10 transition"
          >
            <FaPlus />
            Post Job
          </button>
          <SidebarLink to="/clientDashboard/myjobs" icon={<FaBriefcase />} label="My Jobs" />
          <SidebarLink to="/clientDashboard/wallet" icon={<FaWallet />} label="Wallet" />
          <SidebarLink to="/clientDashboard/subscription" icon={<FaCrown />} label="Subscription" />
        </nav>
      </aside>

      {/* Post Job Modal */}
      {showPostJobModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Post Job
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Do you want to use voice for posting or fill the form manually?
            </p>

            <div className="flex flex-col gap-3">
              {/* Redirect to regular PostJob form */}
              <button
                onClick={goToPostJobForm}
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg"
              >
                Fill Form & Post Job
              </button>
              <button
                onClick={gotTovoVoiceJobPost}
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg"
              >
                Use Voice & Post Job
              </button>

              {/* Optional: Close modal */}
              <button
                onClick={() => setShowPostJobModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
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
