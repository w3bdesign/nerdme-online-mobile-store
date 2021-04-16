import React from 'react';
import SpecsTable from './SpecsTable';
import { getVisibleSectionId, getSpecificationsTables } from '../../state/selectors'
import { SPECIFICATIONS_SECTION_ID } from '../../state/constants';
import { connect } from 'react-redux';


const Specifications = ({ isVisible, specsTables }) => {

    return (
        <section className={`${isVisible ? '' : 'hidden'} px-4 py-10 sm:p-12 lg:py-14`}>
            <div className="space-y-14">
                {specsTables.map((tableData, index) => <SpecsTable key={index} tableData={tableData} />)}
            </div>
        </section>
    );
};


const mapStateToProps = (state) => {
    const visibleSectionId = getVisibleSectionId(state);
    const specsTables = getSpecificationsTables(state);
    return { specsTables, isVisible: visibleSectionId === SPECIFICATIONS_SECTION_ID }
}

export default connect(mapStateToProps)(Specifications);
