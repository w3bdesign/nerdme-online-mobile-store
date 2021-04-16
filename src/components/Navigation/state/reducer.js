import {
    OPEN_SIDE_DRAWER,
    SWITCH_NAV_MODE,
    CLOSE_MENU,
    STOP_MENU_TRANSITION,
    CLOSE_SIDE_DRAWER,
    RESET_SIDE_DRAWER,
    OPEN_NAVITEM_MENU,
    ACTIVATE_MENU_ITEM,
    FETCH_NAVIGATION_START,
    FETCH_NAVIGATION_SUCCESS,
    FETCH_NAVIGATION_FAILURE,
} from './actionTypes'



import {
    activateMenuItem,
    openNavItemMenu,
    closeMenu,
    stopMenuTransition,
    openSideDrawer,
    closeSideDrawer,
    resetSideDrawer,
    switchNavMode,
    fetchNavigationStart,
    fetchNavigationSuccess,
    fetchNavigationFailure,
} from './utils'


 
const initialState = {
    navIsSideDrawer: window.innerWidth < 1024,
    sideDrawerIsOpen: false,
    isMenuTransitioned: true,
    activeNavItemId: '',
    navItems: [],
    activeMenuItemByIds: {},
}


const navigationReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_NAVIGATION_START: return fetchNavigationStart(state)
        case FETCH_NAVIGATION_SUCCESS: return fetchNavigationSuccess(state, action)
        case FETCH_NAVIGATION_FAILURE: return fetchNavigationFailure(state, action)
        
        case ACTIVATE_MENU_ITEM: return activateMenuItem(state, action)

        case OPEN_NAVITEM_MENU: return openNavItemMenu(state, action)
        case CLOSE_MENU: return closeMenu(state)
        case STOP_MENU_TRANSITION: return stopMenuTransition(state)

        case OPEN_SIDE_DRAWER: return openSideDrawer(state)
        case CLOSE_SIDE_DRAWER: return closeSideDrawer(state)
        case RESET_SIDE_DRAWER: return resetSideDrawer(state)

        case SWITCH_NAV_MODE: return switchNavMode(state)

        default: return state;
    }
}


export default navigationReducer;
