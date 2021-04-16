import React from 'react';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';


const LeftSide = () => {

  return (
    <div className="lg:mr-10 max-w-xs flex items-center">
      <HamburgerIcon />
      <Logo />
    </div>
  );
}


export default LeftSide;
