import React from 'react';
import { connect } from 'react-redux';
import { setReviewFeedback } from '../../../../state/actions'
import { FEEDBACK_YES } from '../../../../state/constants'


const FeedbackYesOrNoButton = ({setReviewFeedback, status, reviewId, isClicked }) => {

    return (
        <button onClick={() => setReviewFeedback(reviewId, status)} className={`${isClicked ? 'bg-green-100 text-green-800 border-transparent' : 'border-gray-300 text-gray-500'} px-2.5 py-0.25 text-sm font-medium rounded-full border focus:outline-none`}>
            {status === FEEDBACK_YES ? 'Yes' : 'No'}
        </button>
    );
}


const mapStateToProps = (state) => {
    // not implemented yet, it needs relations between customers, products reviews ...etc, SQL is waiting 👽👀👀 
    return { isClicked: false }
}


export default connect(mapStateToProps, { setReviewFeedback })(FeedbackYesOrNoButton);
