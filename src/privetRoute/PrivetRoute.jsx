import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {

    const location =useLocation();
    console.log('Current location:', location);

  const {user} = useContext(AuthContext);
   if(!user){
   return <Navigate to='/login' state={location.pathname}/>
   }
    return children;
};

export default PrivetRoute;