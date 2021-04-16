import React from 'react';
import FeedbackYesOrNoButton from './FeedbackYesOrNoButton';
import { FEEDBACK_YES, FEEDBACK_NO } from '../../../../state/constants'

const ReviewFeedback = ({ reviewId }) => {

    return (
        <div class="relative flex itmes-center justify-between mt-5 pt-2">
            <div>
                <div className="absolute top-0 w-20 h-0.25 bg-gray-300"></div>
                <div className=" text-gray-500 text-sm">Was this review helpful?</div>
            </div>
            <div class="flex items-center space-x-2">
                <FeedbackYesOrNoButton status={FEEDBACK_YES} reviewId={reviewId} />
                <FeedbackYesOrNoButton status={FEEDBACK_NO} reviewId={reviewId} />
            </div>
        </div>
    );
}

export default ReviewFeedback;