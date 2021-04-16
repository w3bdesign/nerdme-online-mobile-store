import React from 'react';
import Review from './Review';
import { getCustomersReviews, getTotalReviewersCount } from '../../../state/selectors'
import { connect } from 'react-redux';


const ReviewsList = ({ reviews, totalReviewersCount }) => {

    return (
        <div className="p-4 sm:py-6 sm:px-8 border-t border-b">
            <div class="mb-2 text-xl font-medium text-blueGray-800">{`${totalReviewersCount} Reviews`}</div>
            <div className="divide-y">
                {reviews.map((review, index) => <Review key={index} reviewData={review} />)}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const totalReviewersCount = getTotalReviewersCount(state);
    const reviews = getCustomersReviews(state);
    return { reviews, totalReviewersCount }
}

export default connect(mapStateToProps)(ReviewsList);
