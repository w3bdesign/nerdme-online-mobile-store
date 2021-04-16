import React from 'react';
import { connect } from 'react-redux';
import { getVisibleSectionId } from '../../state/selectors'
import { setVisibleSection } from '../../state/actions'
import { MAIN_INFO_SECTIONS_CONFIGS } from '../../state/constants'



const SectionNavItem = ({ sectionTitle, sectionId, isActive, setVisibleSection }) => {

    return (
        <div onClick={() => setVisibleSection(sectionId)} className={` ${isActive ? 'text-blueGray-900 bg-blueGray-100' : 'text-blueGray-700 hover:text-blueGray-900 hover:bg-blueGray-100 '} relative px-4 py-3 sm:px-6 md:px-8 md:py-4 lg:px-10 sm:text-lg md:text-xl font-medium rounded sm:rounded-lg cursor-pointer group`}>
            {sectionTitle}
            <div className={`${isActive ? 'w-full' : ''} absolute inset-x-0 bottom-0 -mb-2 sm:-mb-3 md:-mb-6 mx-auto w-0 h-0.5 rounded-full transition-all duration-200 ease-out bg-blueGray-600`}></div>
        </div>
    );
}


const getSectionTitleById = (id) => MAIN_INFO_SECTIONS_CONFIGS.find(sec => sec.id === id).title;

const mapStateToProps = (state, { sectionId }) => {
    const visibleSectionId =  getVisibleSectionId(state);
    const sectionTitle = getSectionTitleById(sectionId); // not a selector
    return { sectionTitle, sectionId, isActive: visibleSectionId === sectionId }
}

export default connect(mapStateToProps, { setVisibleSection })(SectionNavItem)
