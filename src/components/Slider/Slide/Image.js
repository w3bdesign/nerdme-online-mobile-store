import React from 'react';
import { connect } from 'react-redux';
import { getSlideImagesByIndex } from '../state/selectors'


const Image = ({ mobileImageUrl, desktopImageUrl, slideIndex }) => {

    return (
        <div className="h-3/5 md:w-full md:h-full">
            <img className="hidden md:block w-full h-full object-cover" src={desktopImageUrl} alt={`pic-` + slideIndex} />
            <img className="md:hidden h-full object-cover" src={mobileImageUrl} alt={`pic-` + slideIndex} />
        </div>
    );
}

const mapStateToProps = (state, { slideIndex }) => {
    const { mobileImageUrl, desktopImageUrl } = getSlideImagesByIndex(state, slideIndex);
    return { mobileImageUrl, desktopImageUrl }
}

export default connect(mapStateToProps)(Image);
