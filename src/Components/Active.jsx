import React from 'react';
import { NavLink } from 'react-router';

const Active = ({to , className, children}) => {
    return (
        <NavLink to={to} className={({isActive})=> isActive ? `text-blue-500 ${className}` : className}>
            {children}
        </NavLink>
    );
};

export default Active;