import React from 'react';
import RatingScore from './RatingScore';
import RatingFiveBars from './RatingFiveBars'; 
import RateMe from './RateMe';


const RatingHeader = () => {

    return (
        <div className="p-6 pt-14 sm:px-8 flex flex-wrap items-center lg:justify-around">
            <RatingScore />
            <RatingFiveBars />
            <RateMe />
            <div className="mt-8 w-full text-sm text-gray-700">Rating info is based on overall customer ratings</div>
        </div>
    );
}

export default RatingHeader;
