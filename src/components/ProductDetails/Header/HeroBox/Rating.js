import React from 'react';
import { connect } from 'react-redux';
import FiveStarsRating from '../../shared/FiveStarsRating';
import { getTotalRatingScore, getTotalRatersCount } from '../../state/selectors'

const Rating = ({ totalRatingScore, totalRatersCount }) => {

    return (
        <div className="mt-3 flex">
            <FiveStarsRating score={totalRatingScore} isBigSize={true} />
            <span className="flex-auto ml-2 text-sm font-medium text-gray-700">{totalRatersCount} reviews</span>
        </div>
    );
}

const mapStateToProps = (state) => {
    const totalRatingScore = getTotalRatingScore(state);
    const totalRatersCount = getTotalRatersCount(state);
    return { totalRatingScore, totalRatersCount }
}

export default connect(mapStateToProps)(Rating);