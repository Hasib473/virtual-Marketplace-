import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contactus from "../Pages/Contactus";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


import PrivetRoute from "../privetRoute/PrivetRoute";
import MyProfile from "../Pages/MyProfile";
import DashboardHome from "../Pages/DashboardHome";
import JobSearch from "../Pages/JobSearch";
import SmartWallet from "../Pages/SmartWallet";
import Subscription from "../Pages/Subscription";
import ClientDashboad from "../Pages/ClientdashboardHome";
import ClientDashboardLayout from "../Layout/ClientDashboardLayout ";
import PostJob from "../Pages/PostJobs";
import VoiceJobPost from "../Pages/VoiceJobPost";
import MyJobs from "../Pages/MyJob";
import FindWork from "../Pages/FindWork";
import HireFreelancer from "../Pages/HireFreelancer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: (
          <PrivetRoute>
            <Contactus />
          </PrivetRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path:'findwork', Component: FindWork
      },
      {
        path: 'hireFreelancer', Component: HireFreelancer
      }
    ],
  },

  // 🔥 Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> }, // /dashboard
      { path: "my-profile", element: <MyProfile /> },
      {path: "jobsearch" , Component: JobSearch } ,
      {path: "smartWallet", Component: SmartWallet},
      {path: "subscription", Component: Subscription}
    ]
  },

  {
    path:"/clientDashboard",
    element :( <PrivetRoute><ClientDashboardLayout/></PrivetRoute>),
    children: [
        {index: true, element : <ClientDashboad/>},
        {
          path:'postjobs', Component:PostJob },
          {
            path:'voicejob', Component: VoiceJobPost
          },
          {
            path:'myjobs', Component: MyJobs
          }
    ]
  }
]);
