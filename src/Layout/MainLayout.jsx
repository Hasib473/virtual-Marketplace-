import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import MyComponent from "../Components/MyComponent";
import Footer from "../Components/Footer";
import VantaBackground from "../Components/VantaBackground";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pt-4 ">
        <Navbar/>
      </div>
    
      
      {/* Vanta BG */}
      <VantaBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <MyComponent>
          <Outlet />
        </MyComponent>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
