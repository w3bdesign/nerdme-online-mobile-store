import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { closeMenu, closeSideDrawer } from '../state/actions'
import { getActiveNavItemId, getNavIsSideDrawer, getSideDrawerIsOpen } from '../state/selectors';

const Backdrop = ({ closeMenu, closeSideDrawer, navIsSideDrawer, sideDrawerIsOpen, isAnyMenuActive }) => {
    const [backdropClasses, setBackdropClasses] = useState('');
    const backdropRef = useRef();

    const handleOnTransitionEnd = () => {
        const isClosingDone = backdropRef.current.classList.contains('opacity-0');
        setBackdropClasses(isClosingDone ? '' : 'fixed')
    }

    const handleOnBackdropEvent = ({ type }) => {
        if (type === 'mouseenter' && !navIsSideDrawer) closeMenu();
        if (type === 'click' && navIsSideDrawer) {
            closeSideDrawer();
            setTimeout(() => closeMenu(), 500);
        }
    }


    const backdrop = (
        <div ref={backdropRef} onMouseEnter={handleOnBackdropEvent} onClick={handleOnBackdropEvent} onTransitionEnd={handleOnTransitionEnd}
            className={`${(sideDrawerIsOpen && navIsSideDrawer) || (isAnyMenuActive && !navIsSideDrawer) ? 'fixed opacity-50' : 'opacity-0 pointer-events-none'} ${backdropClasses} inset-0 z-20 transition-all duration-300 lg:delay-100 lg:duration-500 bg-black`}>
        </div>
    );

    return ReactDom.createPortal(backdrop, document.getElementById('backdrop-hook'));

}



const mapStateToProps = (state) => {
    const activeNavItemId = getActiveNavItemId(state);
    const navIsSideDrawer = getNavIsSideDrawer(state);
    const sideDrawerIsOpen = getSideDrawerIsOpen(state);
    return { navIsSideDrawer, sideDrawerIsOpen, isAnyMenuActive: activeNavItemId !== '' }
}

export default connect(mapStateToProps, { closeMenu, closeSideDrawer })(Backdrop);
