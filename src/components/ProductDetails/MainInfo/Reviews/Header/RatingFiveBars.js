import React from 'react';
import RatingBar from './RatingBar';


const RatingFiveBars = () => {

    return (
        <div className="space-y-0.5 mt-6 sm:mt-0 w-full sm:w-7/12 lg:w-auto">
            {[...Array(5)].map((_, index) => <RatingBar key={index} starsCount={5 - index} />)}
        </div>
    );
};

export default RatingFiveBars
