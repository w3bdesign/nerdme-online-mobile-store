
const getInitMenuItems = (navItems) =>
    navItems.reduce((object, item) => ({ ...object, [item.id]: item.menuData?.menuItems[0].id }), {})



export const switchNavMode = (state) => {
    const navIsSideDrawer = !state.navIsSideDrawer === true;
    return {
        ...state,
        navIsSideDrawer: navIsSideDrawer,
        activeNavItemId: '',
        sideDrawerIsOpen: false,
        activeMenuItemByIds: !navIsSideDrawer ? getInitMenuItems(state.navItems) : {}
    }
}


export const openSideDrawer = (state) => {
    return {
        ...state,
        sideDrawerIsOpen: true,
    }
};


export const closeSideDrawer = (state) => {
    return {
        ...state,
        sideDrawerIsOpen: false,
    }
};


export const resetSideDrawer = (state) => {
    return {
        ...state,
        activeNavItemId: '',
        activeMenuItemByIds: {}
    }
};


export const closeMenu = (state) => {
    const activeMenuItemByIds = !state.navIsSideDrawer ? getInitMenuItems(state.navItems) : {};
    return {
        ...state,
        isMenuTransitioned: true,
        activeNavItemId: '',
        activeMenuItemByIds: activeMenuItemByIds
    }
};


export const stopMenuTransition = (state) => {
    return {
        ...state,
        isMenuTransitioned: false
    }
};


export const openNavItemMenu = (state, { id }) => {
    return {
        ...state,
        activeNavItemId: id,
    }
};


export const activateMenuItem = (state, { menuId, id }) => {
    return {
        ...state,
        activeMenuItemByIds: {
            ...state.activeMenuItemByIds,
            [menuId]: id,
        }
    }
};



export const fetchNavigationStart = (state) => {
    return {
        ...state,
        loading: true,
    }
}

export const fetchNavigationSuccess = (state, { navItems }) => {
    const activeMenuItemByIds = !state.navIsSideDrawer ? getInitMenuItems(navItems) : {};
    return {
        ...state,
        loading: null,
        navItems: navItems,
        activeMenuItemByIds: activeMenuItemByIds
    }
}

export const fetchNavigationFailure = (state, { error }) => {
    return {
        ...state,
        loading: null,
        error: error,
    }
}

