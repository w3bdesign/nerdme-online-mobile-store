import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ReviewsList from './ReviewsList';
import WriteAReview from './WriteAReview';
import { getVisibleSectionId } from '../../state/selectors'
import { REVIEWS_SECTION_ID } from '../../state/constants'


const DeviceReviews = ({ isVisible }) => {

    return (
        <section className={`${isVisible ? '' : 'hidden'}`}>
            <Header />
            <ReviewsList />
            <WriteAReview />
        </section>
    );
};


const mapStateToProps = (state) => {
    const  visibleSectionId = getVisibleSectionId(state); 
    return { isVisible: visibleSectionId === REVIEWS_SECTION_ID }
}

export default connect(mapStateToProps)(DeviceReviews);
