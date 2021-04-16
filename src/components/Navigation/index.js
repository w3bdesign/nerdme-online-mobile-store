import React, { useEffect } from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import { connect } from 'react-redux';
import { initNavigation } from './state/actions'


const Navigation = ({ initNavigation }) => {

  useEffect(() => initNavigation(), [initNavigation]);

  return (
    <header className="relative lg:z-30">
      <TopNavbar />
      <BottomNavbar />
    </header>
  );
};


export default connect(null, { initNavigation })(Navigation);
