import React, { useEffect } from 'react';
import Backdrop from './Backdrop'
import { connect } from 'react-redux'
import { switchNavMode } from '../state/actions';
import SideDrawerButtons from './Menu/SideDrawerButtons';
import NavItem from './NavItems/NavItem';
import { getNavIsSideDrawer, getNavItemsConfigs, getSideDrawerIsOpen } from '../state/selectors'


const BottomNavbar = (props) => {
    const { navItemsConfigs, navIsSideDrawer, sideDrawerIsOpen, switchNavMode } = props;

    useEffect(() => {
        const handleResize = () => {
            const toSideDrawerMode = window.innerWidth < 1024 && !navIsSideDrawer;
            const toTabViewMode = window.innerWidth > 1023 && navIsSideDrawer;
            if (toSideDrawerMode || toTabViewMode) {
                switchNavMode();
            }
        }
        window.addEventListener('resize', handleResize);
        return _ => window.removeEventListener('resize', handleResize)
    }, [navIsSideDrawer, switchNavMode])


    return (
        <nav>
            <Backdrop />
            <div className={`${navIsSideDrawer ? sideDrawerIsOpen ? 'translate-x-0' : '-translate-x-84' : ''} fixed lg:relative z-20 lg:z-auto inset-y-0 lg:inset-auto overflow-x-hidden lg:overflow-visible w-84 lg:w-auto lg:h-14 transform transition-all duration-300 ease-in bg-white`}>
                {navIsSideDrawer && <SideDrawerButtons />}
                <ul className="lg:flex justify-center space-y-1 lg:space-y-0 lg:h-full">
                    {navItemsConfigs.map((navItem, index) => <NavItem key={index} type={navItem.type} id={navItem.id} />)}
                </ul>
            </div>
        </nav>
    );
}


const mapStateToProps = (state) => {
    const navItemsConfigs = getNavItemsConfigs(state);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    const sideDrawerIsOpen = getSideDrawerIsOpen(state);
    return { navItemsConfigs, navIsSideDrawer, sideDrawerIsOpen }
}

export default connect(mapStateToProps, { switchNavMode })(BottomNavbar);

