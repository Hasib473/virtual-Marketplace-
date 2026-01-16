import React from 'react';
import Sidebar from '../Components/Sidebar';
import DashboardHome from '../Pages/DashboardHome';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const DashboardLayout = () => {
    return (
        <>
        <div className='bg-black'>
            <Navbar/>
        </div>
            
        
        <div className="flex min-h-scree bg-black">
            
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet/>
      </main>
    
    </div>
    <div className='bg-black'>
          <Footer/>
    </div>
  
    </>
    );
};

export default DashboardLayout;