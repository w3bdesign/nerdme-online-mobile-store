import React from 'react';
import FAQs from './FAQs';
import Reviews from './Reviews';
import Specifications from './Specifications';
import SectionsNavbar from './SectionsNavbar';
import ReturnPolicy from './ReturnPolicy';

const MainInfo = () => {

    return (
        <section className="flex items-center justify-center">
            <div className="my-10 md:mx-5 md:rounded-lg max-w-5xl w-full bg-white">
                <SectionsNavbar />
                <Specifications />
                <Reviews />
                <FAQs />
                <ReturnPolicy />
            </div>
        </section>
    );
}


export default MainInfo;
