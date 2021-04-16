import React from 'react';
import SectionNavItem from './SectionNavItem';
import { MAIN_INFO_SECTIONS_CONFIGS } from '../../state/constants'

// I made it hard coded because I don't intend to change the style away from Specs Reviews FQAs Return Police
const sectionsIds = MAIN_INFO_SECTIONS_CONFIGS.map(sec => sec.id);

const SectionsNavbar = () => {

    return (
        <div className="border-b border-blueGray-200">
            <nav className="flex items-center sm:space-x-2 lg:space-x-4 mx-2 sm:mx-0 py-2 sm:p-3 md:p-6 overflow-x-auto whitespace-nowrap">
                {sectionsIds.map((id) => <SectionNavItem key={id} sectionId={id} />)}
            </nav>
        </div>
    );
}

export default SectionsNavbar;