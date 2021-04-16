import React from 'react';
import { Link } from 'react-router-dom';
import TopBarIcon from './Icon';
import Help from './Dropdowns/Help'
import User from './Dropdowns/User'
import Cart from './Dropdowns/Cart'
import Wishlist from './Dropdowns/Wishlist'
import Location from './Dropdowns/Location' // commented 


const RightSideIcons = () => {

    return (
        <div className="lg:ml-4 xl:ml-8 flex-none flex items-center text-gray-700">

            {/* search icon */}
            <button className="lg:hidden p-2 rounded">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>


            <TopBarIcon dropdown={<Help />} classes="hidden lg:block">
                <Link to='/help' className="mx-2 px-4 py-2 flex font-medium text-gray-800">
                    Need a Help?
                </Link>
            </TopBarIcon>

            {/* <TopBarIcon dropdown={<Location />} classes="hidden sm:block">
                <Link to='/users' className="p-2 flex">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </Link>
            </TopBarIcon> */}

            <TopBarIcon dropdown={<User />} classes="hidden sm:block">
                <Link to='/users' className="p-2 flex">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </Link>
            </TopBarIcon>


            <TopBarIcon dropdown={<Wishlist />} classes="">
                <Link to='/wishlist' className="p-2 flex">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </Link>
            </TopBarIcon>


            <TopBarIcon dropdown={<Cart />} classes="">
                <Link to='/cart' className="p-2 flex">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </Link>
            </TopBarIcon>
        </div>
    );
}

export default RightSideIcons;