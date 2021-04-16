import React from 'react';
import { connect } from 'react-redux';
import { RATING_BARS_COLORS_ORDERED_DESC } from '../../../state/constants'
import { getTotalRatersCount, getRatersCountByStarsCount } from '../../../state/selectors'


const RatingBar = ({ totalRatersCount, ratersCountOfStarsCount, barBgColor, starsCount }) => {

    return (
        <div className="flex items-center bg-red-1000 mr-2">
            <span className="flex-none w-4 text-gray-800 font-medium">{starsCount}</span>
            <svg className="flex-none w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <div className="flex-none mx-5 relative bg-gray-200 h-2 w-52 rounded-full">
                <span style={{ width: `${ratersCountOfStarsCount / totalRatersCount * 100}%` }} className={` ${barBgColor} absolute inset-y-0 rounded`}></span>
            </div>
            <div className=" text-gray-800 font-medium">{ratersCountOfStarsCount}</div>
        </div>
    );
};


// not a selector
const getBarBgColorByStarsCount = (starsCount) => RATING_BARS_COLORS_ORDERED_DESC[starsCount - 1];

const mapStateToProps = (state, { starsCount }) => {
    const totalRatersCount = getTotalRatersCount(state)
    const ratersCountOfStarsCount = getRatersCountByStarsCount(state, starsCount)
    const barBgColor = getBarBgColorByStarsCount(starsCount); // not a selector
    return { totalRatersCount, ratersCountOfStarsCount, barBgColor, starsCount }
}

export default connect(mapStateToProps)(RatingBar);
