import React from 'react';
import { NavLink } from 'react-router';

const Active = ({to , className, children}) => {
    return (
        <NavLink to={to} className={({isActive})=> isActive ? `text-emerald-400 ${className}` : `text-white`}>
            {children}
        </NavLink>
    );
};

export default Active;