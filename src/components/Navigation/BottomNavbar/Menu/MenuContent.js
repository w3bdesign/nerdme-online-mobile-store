import React from 'react';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';
import MenuHeroImg from './MenuHeroImg';
import { connect } from 'react-redux';
import { getActiveNavItemId, getNavIsSideDrawer } from '../../state/selectors';

const MenuContent = ({ navIsSideDrawer, isMenuActive, menuId }) => {


    return (
        <div className={` ${!navIsSideDrawer ? isMenuActive ? 'opcity-100 translate-y-0 delay-100 duration-400' : 'opacity-0 -translate-y-6 duration-200 pointer-events-none' : ''} transform transition-all`}>
            <MenuHeader menuId={menuId} />
            <div className="lg:relative lg:flex items-start justify-between">
                <MenuItems menuId={menuId} />
                <MenuHeroImg menuId={menuId} />
            </div>
        </div>
    );
}


const mapStateToProps = (state, { menuId }) => {
    const activeNavItemId = getActiveNavItemId(state);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    return { navIsSideDrawer, isMenuActive: activeNavItemId === menuId }
}

export default connect(mapStateToProps)(MenuContent);
