import React, { useRef } from 'react';
import MenuContent from './MenuContent'
import { connect } from 'react-redux'
import { stopMenuTransition } from '../../state/actions'
import { getActiveNavItemId, getIsMenuTransitioned, getNavIsSideDrawer } from '../../state/selectors';


const Menu = (props) => {
    const { stopMenuTransition, navIsSideDrawer, isMenuActive, isMenuTransitioned, menuId } = props;
    const menuRef = useRef();

    const handleOnTransitionEnd = ({ propertyName }) => {
        if (propertyName === 'height' && menuRef.current.clientHeight !== 0 && !navIsSideDrawer) {
            stopMenuTransition();
        } 
    }

    return (
        <div ref={menuRef} onTransitionEnd={handleOnTransitionEnd} className={`absolute bottom-0 top-14 w-full inset-x-0  lg:inset-y-auto lg:top-14 overflow-y-auto lg:overflow-hidden lg:bg-white ${isMenuTransitioned ? 'transition-all' : 'transition-none'} ${navIsSideDrawer ? isMenuActive ? 'opacity-100 left-0 duration-500' : 'opacity-0 left-84 duration-300 pointer-events-none' : isMenuActive ? 'h-lg duration-500' : 'h-0 duration-500'} `}>
            <MenuContent menuId={menuId} />
        </div>
    );
}


const mapStateToProps = (state, { menuId }) => {
    const activeNavItemId = getActiveNavItemId(state);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    const isMenuTransitioned = getIsMenuTransitioned(state);
    return { 
        navIsSideDrawer,
        isMenuActive: activeNavItemId === menuId,
        isMenuTransitioned,
    }
}


export default connect(mapStateToProps, { stopMenuTransition })(Menu);
