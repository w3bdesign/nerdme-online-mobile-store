import React from 'react';
import Gellary from './Gellary';
import HeroBox from './HeroBox';


const Header = () => {

    return (
        <section className='md:m-4 lg:m-0 sm:p-4 md:rounded-lg lg:rounded-none lg:flex items-center justify-around bg-white'>
            <Gellary  />
            <HeroBox />
        </section>
    );
};

export default Header;
