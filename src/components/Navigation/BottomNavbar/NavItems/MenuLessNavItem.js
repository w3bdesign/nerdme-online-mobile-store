import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu } from '../../state/actions'
import { getActiveNavItemId, getMenuLessNavItemById, getNavIsSideDrawer } from '../../state/selectors'

const MenuLessNavItem = ({ title, destinationUrl, navIsSideDrawer, closeMenu, isAnyMenuActive }) => {

    const handleOnMouseEnter = () => {
        if (navIsSideDrawer) return;
        closeMenu();
    }


    return (
        <li>
            <Link onMouseEnter={handleOnMouseEnter} to={destinationUrl} className={`relative group flex items-center lg:justify-center px-6 h-12 lg:h-full text-xl lg:text-base lg:font-medium text-gray-900 lg:text-gray-700 lg:hover:text-gray-900 transition-all ${navIsSideDrawer ? isAnyMenuActive ? 'opacity-0 -left-84 duration-300 pointer-events-none' : 'opacity-100 left-0 duration-500' : ''}`}>
                {title}
                <div className="hidden lg:block absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-blueGray-700 transition-colors"></div>
            </Link>
        </li>
    );
}


const mapStateToProps = (state, { id }) => {
    const { title, destinationUrl } = getMenuLessNavItemById(state, id);
    const activeNavItemId = getActiveNavItemId(state);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    return { title, destinationUrl, navIsSideDrawer, isAnyMenuActive: activeNavItemId !== '' }
}

export default connect(mapStateToProps, { closeMenu })(MenuLessNavItem)

