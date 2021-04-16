import React from 'react';
import QAndAList from './QAndAList';
import AskAQuestion from './AskAQuestion';
import { getVisibleSectionId } from '../../state/selectors'
import { FAQS_SECTION_ID } from '../../state/constants'
import { connect } from 'react-redux';

const FAQs = ({ isVisible }) => {
    return (
        <section className={`${isVisible ? '' : 'hidden'}  `}>
            <QAndAList />
            <AskAQuestion />
        </section>
    );
}


const mapStateToProps = (state) => {
    const  visibleSectionId = getVisibleSectionId(state); 
    return { isVisible: visibleSectionId === FAQS_SECTION_ID }
}

export default connect(mapStateToProps)(FAQs);
