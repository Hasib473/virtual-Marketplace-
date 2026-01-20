import { FaPlus, FaBriefcase, FaUsers, FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router";

const ClientQuickAction = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <ActionCard
        icon={<FaPlus />}
        title="Post New Job"
        onClick={() => navigate("/post-job")}
      />

      <ActionCard
        icon={<FaBriefcase />}
        title="Manage Jobs"
        onClick={() => navigate("/manage-jobs")}
      />

      <ActionCard
        icon={<FaUsers />}
        title="Browse Freelancers"
        onClick={() => navigate("/freelancers")}
      />

      <ActionCard
        icon={<FaCrown />}
        title="Subscription"
        onClick={() => navigate("/subscription")}
      />

    </div>
  );
};

const ActionCard = ({ icon, title, onClick }) => (
  <div
    onClick={onClick}
    className="bg-slate-900/70 cursor-pointer rounded-2xl p-6 flex flex-col items-center justify-center hover:border hover:border-emerald-500 transition"
  >
    <div className="text-emerald-400 text-3xl mb-3">{icon}</div>
    <p className="font-semibold">{title}</p>
  </div>
);

export default ClientQuickAction;
