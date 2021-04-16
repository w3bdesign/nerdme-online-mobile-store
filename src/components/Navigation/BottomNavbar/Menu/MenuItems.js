import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import MenuItemLinks from './MenuItemLinks';
import { getMenuItemsById } from '../../state/selectors'


const MenuItems = ({ menuItems, menuId }) => {

    const menuItemsList = menuItems.map((menuItem, index) => {
        return (
            <li key={index}>
                <MenuItem menuId={menuId} menuItemId={menuItem.id} />
                <MenuItemLinks menuId={menuId} menuItemId={menuItem.id} />
            </li>
        )
    })

    return (
        <div className="relative lg:w-2/3">
            <ul>{menuItemsList}</ul>
        </div>
    );
}


const mapStateToProps = (state, { menuId }) => {
    const menuItems = getMenuItemsById(state, menuId);
    return { menuItems }
}


export default connect(mapStateToProps)(MenuItems);
