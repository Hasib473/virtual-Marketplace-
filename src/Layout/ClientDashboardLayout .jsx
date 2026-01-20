import { Outlet } from "react-router";
import ClientSidebar from "../Components/ClientSidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ClientDashboardLayout = () => {
  return (
    <>
    <div className="bg-black">
        
     <Navbar/>
    </div>
    <div className="min-h-screen flex bg-black text-white">


      {/* Sidebar */}
      <ClientSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>
    <div className="bg-black">
        <Footer/>
    </div>
    </>
  );
};

export default ClientDashboardLayout;
