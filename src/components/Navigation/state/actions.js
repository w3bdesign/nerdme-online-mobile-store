import axios from '../../../axios';
import {
    SWITCH_NAV_MODE,
    OPEN_SIDE_DRAWER,
    RESET_SIDE_DRAWER,
    CLOSE_MENU,
    STOP_MENU_TRANSITION,
    CLOSE_SIDE_DRAWER,
    OPEN_NAVITEM_MENU,
    ACTIVATE_MENU_ITEM,
    FETCH_NAVIGATION_START,
    FETCH_NAVIGATION_SUCCESS,
    FETCH_NAVIGATION_FAILURE,
} from './actionTypes';


export const activateMenuItem = (menuId, id) => ({ type: ACTIVATE_MENU_ITEM, menuId: menuId, id: id });

export const openNavItemMenu = (id) => ({ type: OPEN_NAVITEM_MENU, id: id });
export const closeMenu = () => ({ type: CLOSE_MENU });
export const stopMenuTransition = () => ({ type: STOP_MENU_TRANSITION });

export const openSideDrawer = () => ({ type: OPEN_SIDE_DRAWER });
export const closeSideDrawer = () => ({ type: CLOSE_SIDE_DRAWER });
export const resetSideDrawer = () => ({ type: RESET_SIDE_DRAWER });

export const switchNavMode = () => ({ type: SWITCH_NAV_MODE });

export const fetchNavigationFailure = (error) => ({ type: FETCH_NAVIGATION_FAILURE, error })
export const fetchNavigationSuccess = (navItems) => ({ type: FETCH_NAVIGATION_SUCCESS, navItems })
export const fetchNavigationStart = () => ({ type: FETCH_NAVIGATION_START })


export const initNavigation = () => {
    return async dispatch => {
        dispatch(fetchNavigationStart())
        try {
            const response = await axios.get('/nav-items.json')
            dispatch(fetchNavigationSuccess(response.data))
        } catch (error) {
            dispatch(fetchNavigationFailure(error))
        }
    }
}