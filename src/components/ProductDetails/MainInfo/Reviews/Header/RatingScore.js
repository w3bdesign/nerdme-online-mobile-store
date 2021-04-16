import React from 'react'; 
import { connect } from 'react-redux';
import { getTotalRatingScore, getTotalRatersCount } from '../../../state/selectors'


const RatingScore = ({ totalRatersCount, totalRatingScore }) => {

    return (
        <div className="flex flex-col sm:items-center justify-center w-full sm:w-5/12 lg:w-auto"> 
            <div className="flex items-end">
                <div className="text-6xl">{totalRatingScore}</div>
                <div className="text-3xl text-gray-600">/5</div>
            </div>
            <div className="mt-2 sm:mt-3 text-sm text-gray-800">{`Based on ${totalRatersCount} reviews`}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const totalRatersCount = getTotalRatersCount(state)
    const totalRatingScore = getTotalRatingScore(state)
    return { totalRatersCount, totalRatingScore }
}

export default connect(mapStateToProps)(RatingScore);
