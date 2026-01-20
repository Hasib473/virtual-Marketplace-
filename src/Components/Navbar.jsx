import React, { useContext } from 'react';
import MyComponent from './MyComponent';
import { Link, NavLink, useNavigate } from 'react-router';
import Active from './Active';
import { AuthContext } from '../Contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.config';
import { RingLoader } from 'react-spinners';
import logoimg from "../assets/logo.png"

const Navbar = () => {
  const { user, setUser,loading } = useContext(AuthContext);
  console.log(user);

  const nevigate = useNavigate();

  const handleSignout = () => {
      signOut(auth)
        .then(() => {
          setUser(null);
          toast.success('Signout successful');
          nevigate('/login');
        }).catch((err) => {
          console.log(err);
          toast.error(err.message);
        })
    }


  return (

    <MyComponent className="navbar border-b border-gray-400 w-full mx-auto  rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li>
              <a>About</a>
            </li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className='w-10 h-10 rounded-full' src={logoimg} alt="img" /></a>
         <p className='text-2xl font-extrabold text-white'><span className='text-emerald-400'>FREELANCER</span>-BANGLA</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Active to='/'>Home</Active></li>
          <li>
            <Active to='/about'>About</Active>
          </li>
         {
          user &&  <li><Active to='/contact'>Contact</Active></li>
         }
         {
          user && <li><Active to='/dashboard' >User Dashboard</Active></li>
         }
         <li><Active to='/hireFreelancer'>Hire Freelancer </Active></li>
         <li><Active to="/findwork">Find Work</Active></li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? <RingLoader color="#3b82f6" />:  user ? (
          <div className="relative">
            {/* Avatar Button */}
            <button
              className="btn btn-circle avatar"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              <img
                className="w-10 rounded-full"
                src={user.photoURL || "https://i.ibb.co/2kRZyq0/user.png"}
                alt="User"
              />
            </button>

            {/* Dropdown */}
            <ul
              id="popover-1"
              popover="auto"
              style={{ positionAnchor: "--anchor-1" }}
              className="dropdown menu ml-[-200px] w-50 rounded-box bg-base-100 shadow-lg p-4 mt-2"
            >
              <li className="text-sm font-semibold break-all mb-2">
                {user.email}
              </li>

              <li>
                
                <button
                  onClick={handleSignout}
                  className="btn btn-sm bg-emerald-400 text-white w-full"
                >
                  Sign Out
                </button>
              </li>
            </ul>
            
          </div>
        ) : (
          <NavLink to="/login" className="btn bg-emerald-400 text-white">
            Sign in
          </NavLink>
        )}
        </div>

    </MyComponent>
  );
};

export default Navbar;