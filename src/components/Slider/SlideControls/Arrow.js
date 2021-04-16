import React from 'react';
import { connect } from 'react-redux';
import { getArrowVisibilityStatus } from '../state/selectors'
import { showNextSlide, showPrevSlide } from '../state/actions'
import { NEXT } from '../state/constants';

const Arrow = ({ isArrowVisible, showNextSlide, showPrevSlide, direction }) => {

    const handleOnArrowClick = () => direction === NEXT ? showNextSlide() : showPrevSlide();

    return (
        <button onClick={handleOnArrowClick} className={`${direction === NEXT ? 'right-3' : 'left-3'} ${isArrowVisible ? 'opacity-100' : 'opacity-0'} absolute z-10 top-1/2 -mt-8 hidden md:flex items-center justify-center w-9 h-9 rounded-full text-gray-100 bg-black bg-opacity-50 hover:bg-opacity-80 ring-1 ring-white ring-opacity-20 transition-all focus:outline-none`}>
            <svg className={`${direction === NEXT ? 'rotate-180 transform' : ''} w-5 h-5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
    )
}

const mapStateToProps = (state) => {
    return { isArrowVisible: getArrowVisibilityStatus(state) }
}

export default connect(mapStateToProps, { showNextSlide, showPrevSlide })(Arrow);
