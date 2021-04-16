import React, { useState } from 'react';


const TopBarIcon = ({ classes, dropdown, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    // meant to be for all screens
    return (
        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className={`${classes} relative ml-0.5 sm:ml-1 flex`}>
            {children}
            <div className={`${isOpen ? 'opacity-100 scale-100 duration-150' : 'opacity-0 scale-95 duration-100 pointer-events-none'} hidden lg:block sm:absolute right-0 top-10 z-20 transform transition`}>
                {dropdown}
            </div>
        </div>
    );
}

export default TopBarIcon;
