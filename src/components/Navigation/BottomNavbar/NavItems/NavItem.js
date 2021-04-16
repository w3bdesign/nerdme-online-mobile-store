import React from 'react';
import MenuFullNavItem from './MenuFullNavItem';
import MenuLessNavItem from './MenuLessNavItem';

const NavItem = ({ type, id }) => type === 'menufull' ? <MenuFullNavItem id={id} /> : <MenuLessNavItem id={id} />

export default NavItem
