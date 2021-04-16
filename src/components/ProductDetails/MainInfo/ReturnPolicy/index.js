import React from 'react';
import { connect } from 'react-redux';
import ReturnPolicySection from './ReturnPolicySection';
import { getVisibleSectionId, getReturnPolicySections } from '../../state/selectors'
import { RETURN_POLICY_SECTION_ID } from '../../state/constants'

const ReturnPolicy = ({ isVisible, returnPolicySections }) => {
    return (
        <section className={` ${isVisible ? '' : 'hidden'} px-6 pt-4 md:px-10 divide-y`}>
            {returnPolicySections.map((data, index) => <ReturnPolicySection key={index} sectionData={data} />)}
        </section>
    );
}


const mapStateToProps = (state) => {
    const visibleSectionId = getVisibleSectionId(state);
    const returnPolicySections = getReturnPolicySections(state)
    return { returnPolicySections, isVisible: visibleSectionId === RETURN_POLICY_SECTION_ID }
}

export default connect(mapStateToProps)(ReturnPolicy);
