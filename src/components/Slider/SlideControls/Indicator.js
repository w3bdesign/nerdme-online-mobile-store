import React from 'react';
import { getActiveSlideBgMode, getSlidePlayingStatus, getActiveSlideIndex, getSlideTitleByIndex } from '../state/selectors'
import { setActiveSlide, showNextSlide } from '../state/actions'
import { connect } from 'react-redux';


const Indicator = ({ isSlidePlay, setActiveSlide, isActive, showNextSlide, modeIsDark, slideIndex, title }) => {

    const animationStatus = isSlidePlay ? '' : 'animation-play-paused';
    const bgColor = modeIsDark ? 'bg-white' : 'bg-black'
    const textColor = modeIsDark ? 'text-white' : 'text-black'

    return (
        <button onClick={() => setActiveSlide(slideIndex)} className='relative p-1 md:px-0 md:pt-5 md:pb-3 md:w-40 group focus:outline-none'>
            <div className={` ${textColor} hidden md:group-hover:block md:absolute inset-x-0 top-0 text-center text-xs font-medium text-opacity-80`}>
                {title}
            </div>
            <div className='md:relative flex md:h-0.5'>
                <span onAnimationEnd={() => showNextSlide()} className={` ${animationStatus} ${isActive ? 'animate-scale-circle' : ''} ${isActive ? 'bg-opacity-95' : 'bg-opacity-25'} ${bgColor} md:hidden p-1.5 rounded-full`}></span>
                
                <span className={`${isActive ? 'bg-opacity-40' : 'bg-opacity-20'} ${bgColor} hidden md:block md:absolute inset-0`}></span>
                <span onAnimationEnd={() => showNextSlide()} className={` ${animationStatus} ${isActive ? 'animate-scale-line' : ''} ${bgColor} hidden md:block md:absolute inset-0 bg-opacity-95 scale-0 transform origin-left`}></span>
            </div>
        </button>
    )
}


const mapStateToProps = (state, { slideIndex }) => {
    const title = getSlideTitleByIndex(state, slideIndex);
    const isSlidePlay = getSlidePlayingStatus(state);
    const activeSlideIndex = getActiveSlideIndex(state)
    const activeSlideBgMode = getActiveSlideBgMode(state);
    return {
        title,
        isSlidePlay,
        isActive: slideIndex === activeSlideIndex,
        modeIsDark: activeSlideBgMode === 'dark'
    }
}

export default connect(mapStateToProps, { showNextSlide, setActiveSlide })(Indicator);
