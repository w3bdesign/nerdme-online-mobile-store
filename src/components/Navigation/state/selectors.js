import { createSelector } from "reselect";



export const getNavigationState = (state) => state.navigation;


export const getNavIsSideDrawer = (state) => getNavigationState(state).navIsSideDrawer;
export const getSideDrawerIsOpen = (state) => getNavigationState(state).sideDrawerIsOpen;
export const getIsMenuTransitioned = (state) => getNavigationState(state).isMenuTransitioned;
export const getActiveNavItemId = (state) => getNavigationState(state).activeNavItemId;
export const getActiveMenuItemByIds = (state) => getNavigationState(state).activeMenuItemByIds;
export const getNavItems = (state) => getNavigationState(state).navItems;
 

export const getNavItemById = (state, id) => getNavItems(state).find(item => item.id === id);


// export const getNavItemsConfigs = (state) =>
//     getNavItems(state).map(item => ({ id: item.id, type: item.type }))

export const getNavItemsConfigs = createSelector(
    [getNavItems],
    (navItems) => navItems.map(item => ({ id: item.id, type: item.type }))
)



export const getNavItemTitleById = (state, id) => getNavItemById(state, id).title;


export const getMenuLessNavItemById = (state, id) => {
    const { title, destinationUrl } = getNavItemById(state, id);
    return { title, destinationUrl };
}


export const getMenuHeroImgById = (state, id) => {
    const { title, imgUrl, destinationUrl } = getNavItemById(state, id).menuData.menuHeroImg;
    return { title, imgUrl, destinationUrl };
}



export const getMenuItemsById = (state, id) => getNavItemById(state, id).menuData.menuItems;




export const getMenuItemByIds = (state, menuId, menuItemId) =>
    getMenuItemsById(state, menuId).find(menuItem => menuItem.id === menuItemId);




export const getMenuItemTitleByIds = (state, menuId, menuItemId) =>
    getMenuItemByIds(state, menuId, menuItemId).title;




export const getMenuItemLinksByIds = (state, menuId, menuItemId) =>
    getMenuItemByIds(state, menuId, menuItemId).menuItemLinks;



