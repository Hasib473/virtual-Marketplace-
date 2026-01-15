import React from 'react';

const MyComponent = ({className , children}) => {
    return (
        <div className={`${className} container mx-auto`}>
            {children}
        </div>
    );
};

export default MyComponent;