import React from 'react';
import Menu from '../Menu/Menu';
import MenuFullNavItemTitle from './MenuFullNavItemTitle';

const MenuFullNavItem = ({ id }) => {

    return (
        <li>
            <MenuFullNavItemTitle navItemId={id} />
            <Menu menuId={id} />
        </li>
    );
}

export default MenuFullNavItem;
