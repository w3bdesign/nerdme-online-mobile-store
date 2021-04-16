import React from 'react';
import ReviewText from './ReviewText';
import ReviewTopBar from './ReviewTopBar';
import ReviewFeedback from './ReviewFeedback';
import FiveStarsRating from '../../../../shared/FiveStarsRating';


const Review = ({ reviewData }) => {
    console.log(reviewData);
    const { reviewerName, reviewerImgUrl, reviewText, reviewDate, starsCount, reviewId } = reviewData;

    return (
        <div className="py-4 sm:py-6">
            <ReviewTopBar reviewerName={reviewerName} reviewerImgUrl={reviewerImgUrl} reviewId={reviewId} />
            <div className="flex items-center mt-3">
                <FiveStarsRating score={starsCount} isBigSize={true} />
                <time className="ml-2 text-sm text-gray-700" datetime="2021-03-16">{reviewDate}</time>
            </div>
            <ReviewText reviewText={reviewText} />
            <ReviewFeedback reviewId={reviewId} />
        </div>
    );
};

export default Review;
