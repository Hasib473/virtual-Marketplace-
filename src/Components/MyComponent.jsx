import React from 'react';

const MyComponent = ({className , children}) => {
    return (
        <div className={`${className} `}>
            {children}
        </div>
    );
};

export default MyComponent;