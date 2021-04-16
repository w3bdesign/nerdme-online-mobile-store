import React from 'react';
import { connect } from 'react-redux';
import { closeSideDrawer, closeMenu } from '../../state/actions'
import { getActiveNavItemId } from '../../state/selectors';

const SideDrawerButtons = ({ closeSideDrawer, closeMenu, isAnyMenuActive }) => {

    const handleOnCloseSideDrawer = () => {
        closeSideDrawer()
        setTimeout(() => closeMenu(), 500);
    }


    return (
        <div className="h-14 w-full flex items-center justify-between">
            <button onClick={() => closeMenu()} className={` bg-white ${isAnyMenuActive ? 'duration-500 opacity-100 left-0' : 'left-84 opacity-0 '} relative transition-all text-gray-800 rounded p-2 ml-2 mt-1 focus:outline-none`}>
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <div className="w-1/4 bg-white flex justify-end relative z-10">
                <button onClick={handleOnCloseSideDrawer} className="text-gray-800 rounded0 p-2 mr-4 or?mr-2 mt-1 focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const activeNavItemId = getActiveNavItemId(state);
    return { isAnyMenuActive: activeNavItemId !== '' }
}
export default connect(mapStateToProps, { closeSideDrawer, closeMenu })(SideDrawerButtons);
