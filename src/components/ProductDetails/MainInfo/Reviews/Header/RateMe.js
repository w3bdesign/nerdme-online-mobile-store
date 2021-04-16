import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setProductRating } from '../../../state/actions'


const RateMe = ({ setProductRating }) => {

    const [activeStarsCount, setActiveStarsCount] = useState(0)
    const [isRated, setIsRated] = useState(false)

    const setRating = (starIndex) => {
        if (isRated) return;
        setActiveStarsCount(starIndex)
    }

    const handleOnRateClick = (starIndex) => {
        // I think it's more convenient to reflect rating state then update the server -- if failed, then revert
        setIsRated(true); // order matters
        setActiveStarsCount(starIndex);
        setProductRating(activeStarsCount);
    }

    const ratingStars = [...Array(5)].map((_, index) => {
        return (
            <svg
                key={index}
                onClick={() => handleOnRateClick(index + 1)}
                onMouseEnter={() => setRating(index + 1)}
                className={` ${activeStarsCount >= index + 1 ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-75 w-9 h-9`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        );
    })

    return (
        <div className="flex flex-col items-start mt-6 sm:mt-8 lg:mt-0 w-full lg:w-auto">
            <div className="text-lg sm:text-2xl font-medium">Your opinion matters to us!</div>
            <div className="mt-1 text-sm text-gray-700">Does this device deserve five star ratings?</div>
            <div onMouseLeave={() => setRating(0)} className="flex item-center space-x-0.5 mt-2 sm:mt-4 cursor-pointer">
                {ratingStars}
            </div>
        </div>
    );
};


export default connect(null, { setProductRating })(RateMe);
