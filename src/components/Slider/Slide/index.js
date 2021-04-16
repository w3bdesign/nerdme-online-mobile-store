import React from 'react';
import { connect } from 'react-redux';
import { getActiveSlideIndex } from '../state/selectors';
import Preview from './Preview';
import Image from './Image';


const Slide = ({ isActive, slideIndex }) => {

    return (
        <div className={` ${isActive ? "opacity-100 z-10" : "opacity-0"} absolute inset-0 w-full h-full transition-all duration-2000 pointer-events-none`}>
            <div className={`md:relative w-full h-full`}>
                <Preview slideIndex={slideIndex} />
                <Image slideIndex={slideIndex} />
            </div>
        </div>
    );
}



const mapStateToProps = (state, { slideIndex }) => {
    const activeSlideIndex = getActiveSlideIndex(state);
    return { isActive: activeSlideIndex === slideIndex }
}

export default connect(mapStateToProps)(Slide);
