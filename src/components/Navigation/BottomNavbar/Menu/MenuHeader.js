import React from 'react';
import { connect } from 'react-redux';
import { closeMenu } from '../../state/actions'
import { getNavItemTitleById } from '../../state/selectors'


const MenuHeader = ({ title, closeMenu }) => {

    return (
        <div className="px-4 lg:px-8 py-3 lg:py-6 lg:flex items-center justify-between text-blueGray-800">
            <h2 className="text-2xl lg:text-3xl font-medium">{title}</h2>
            <button onClick={closeMenu} className="hidden lg:block hover:bg-gray-100 rounded-full p-2 focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
    );
}

const mapStateToProps = (state, { menuId }) => {
    return { title: getNavItemTitleById(state, menuId) }
}

export default connect(mapStateToProps, { closeMenu })(MenuHeader);
