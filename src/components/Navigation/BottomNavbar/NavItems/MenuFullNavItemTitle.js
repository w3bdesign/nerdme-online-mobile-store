import React from 'react';
import { connect } from "react-redux";
import { openNavItemMenu } from '../../state/actions';
import { getActiveNavItemId, getNavIsSideDrawer, getNavItemTitleById } from '../../state/selectors';


const MenuFullNavItemTitle = (props) => {
    const { title, navIsSideDrawer, isActive, isAnyMenuActive, openNavItemMenu, navItemId } = props;

    const triggerShowMenu = ({ type }) => {
        if (type === 'mouseenter' && navIsSideDrawer) return;
        openNavItemMenu(navItemId);
    }

    return (
        <div onClick={triggerShowMenu} onMouseEnter={triggerShowMenu} className={`relative flex items-center justify-between lg:justify-center px-6 bg-red-2000 h-12 lg:h-full text-xl lg:text-base lg:font-medium transition-all cursor-pointer ${navIsSideDrawer ? isAnyMenuActive ? 'opacity-0 -left-84 duration-300 pointer-events-none' : 'opacity-100 left-0 duration-500' : isActive ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
            <div>{title}</div>
            <div className={`${isActive ? 'bg-blueGray-700 duration-300' : ' bg-transparent duration-0'} transition-colors hidden lg:block absolute inset-x-0 bottom-0 h-0.5`}></div>
            { navIsSideDrawer && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>}
        </div>
    );
}


const mapStateToProps = (state, { navItemId }) => {
    const title = getNavItemTitleById(state, navItemId);
    const activeNavItemId = getActiveNavItemId(state);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    return {
        title,
        navIsSideDrawer,
        isActive: activeNavItemId === navItemId,
        isAnyMenuActive: activeNavItemId !== '',
    }
}

export default connect(mapStateToProps, { openNavItemMenu })(MenuFullNavItemTitle)
