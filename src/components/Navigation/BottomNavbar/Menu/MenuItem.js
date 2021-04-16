import React from 'react';
import { connect } from 'react-redux';
import { activateMenuItem } from '../../state/actions'
import { getActiveMenuItemByIds, getMenuItemTitleByIds, getNavIsSideDrawer } from '../../state/selectors'



const MenuItem = (props) => {
    const { meunItemTitle, isActive, navIsSideDrawer, activateMenuItem, menuId, menuItemId } = props

    const handleOnMouseEvent = ({ type }) => {
        if (type === 'mouseenter' && navIsSideDrawer) return;
        const itemId = isActive && navIsSideDrawer ? '' : menuItemId
        activateMenuItem(menuId, itemId);
    }


    return (
        <div onClick={handleOnMouseEvent} className={`${isActive ? 'font-medium text-blueGray-900' : 'text-blueGray-800'} cursor-pointer lg:cursor-auto arrange-it flex items-center justify-between px-8 py-2.5 lg:w-88`}>
            <span onMouseEnter={handleOnMouseEvent} className='text-lg lg:text-xl cursor-pointer'>{meunItemTitle}</span>
            <svg className={`transform transition-all w-6 h-6 stroke-1.5 lg:stroke-2 ${navIsSideDrawer ? isActive ? '-rotate-90' : 'rotate-90' : isActive ? 'opacity-100 translate-x-0 duration-100' : 'opacity-0 -translate-x-6 duration-0 pointer-events-none'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
        </div>
    );
}


const mapStateToProps = (state, { menuId, menuItemId }) => {
    const meunItemTitle = getMenuItemTitleByIds(state, menuId, menuItemId)
    const navIsSideDrawer = getNavIsSideDrawer(state);
    const activeMenuItemByIds = getActiveMenuItemByIds(state);
    return {
        meunItemTitle,
        navIsSideDrawer,
        isActive: activeMenuItemByIds[menuId] === menuItemId
    }
}



export default connect(mapStateToProps, { activateMenuItem })(MenuItem);
