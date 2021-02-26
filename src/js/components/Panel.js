import React from 'react';

const Panel = ({ children, className }) => {
    return <div className={`panel ${className}`}>
        {children}
    </div>;
}

export default Panel;