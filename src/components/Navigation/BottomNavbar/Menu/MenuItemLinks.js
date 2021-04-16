import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getActiveMenuItemByIds, getActiveNavItemId, getMenuItemLinksByIds, getNavIsSideDrawer } from '../../state/selectors'



const MenuItemLinks = ({ menuItemLinksData, isActive, navIsSideDrawer }) => {


    const menuItemLinks = menuItemLinksData.map((item, index) => {
        return (
            <li>
                <Link key={index} to={item.destinationUrl} className={`flex items-center mx-4 lg:mx-0 py-2 px-4 lg:p-3 rounded-xl lg:text-lg text-blueGray-700 hover:text-blueGray-900 hover:bg-blueGray-100`}>
                    <img class="flex-none w-12 h-12 lg:w-14 lg:h-14 object-contain" src={item.imgUrl} alt={item.title} />
                    <h3 className="ml-2 lg:ml-4">{item.title}</h3>
                </Link>
            </li>
        )
    })

    return (
        <div className={`lg:absolute top-0 left-88 right-0 my-2 lg:my-0 lg:pl-5 lg:pr-20 transform transition-all ${navIsSideDrawer ? isActive ? 'block' : 'hidden' : isActive ? 'opacity-100 translate-x-6 duration-400 delay-100' : 'opacity-0 translate-x-0 duration-0 pointer-events-none'} `}>
            <ul>{menuItemLinks}</ul>
        </div>
    );
}



const mapStateToProps = (state, { menuId, menuItemId }) => {
    const menuItemLinksData = getMenuItemLinksByIds(state, menuId, menuItemId);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    const activeMenuItemByIds = getActiveMenuItemByIds(state);
    const activeNavItemId = getActiveNavItemId(state);
    // the second condition is for keeping translate-x active of menuItemLinks when menu open for the first time
    return {
        menuItemLinksData,
        navIsSideDrawer,
        isActive: activeMenuItemByIds[menuId] === menuItemId && activeNavItemId === menuId
    }
}

export default connect(mapStateToProps)(MenuItemLinks);

