import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contactus from "../Pages/Contactus";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivetRoute from "../privetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element: <PrivetRoute><Contactus/></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element: <SignUp/>
            }
        ]
    },
])