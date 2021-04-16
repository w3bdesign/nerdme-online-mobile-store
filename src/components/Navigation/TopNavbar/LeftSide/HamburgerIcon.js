import React from 'react';
import { connect } from 'react-redux';
import { getNavIsSideDrawer } from '../../state/selectors'
import { openSideDrawer } from '../../state/actions'


const HamburgerIcon = ({ navIsSideDrawer, openSideDrawer }) => {

    const handleOnButtonClick = () => {
        if (navIsSideDrawer) openSideDrawer();
    }

    return (
        <button onClick={handleOnButtonClick} className="lg:hidden p-2 rounded text-blueGray-800 hover:bg-blueGray-50 focus:outline-none">
            <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20"><path d="M21 4H1m0 6h20m0 6H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
        </button>
    );
}

const mapStateToProps = (state) => ({ navIsSideDrawer: getNavIsSideDrawer(state) });

export default connect(mapStateToProps, { openSideDrawer })(HamburgerIcon);
