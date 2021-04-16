import React from 'react';
import { connect } from 'react-redux';
import Indicator from './Indicator'
import { getSlidePlayingStatus, getActiveSlideBgMode, getSlidesLength } from '../state/selectors'
import { clickPlayButton } from '../state/actions'


const Indicators = ({ slidesLength, isSlidePlay, modeIsDark, clickPlayButton }) => {


    return (
        <div className="absolute inset-x-0 bottom-0 z-10 py-4 flex items-center justify-center">
            <div className={` ${modeIsDark ? "bg-white" : "bg-black"} px-2.5 md:p-0 flex items-center rounded-full md:rounded-none bg-opacity-10 md:bg-opacity-0`}>
                <div className="flex item-center space-x-1.5 md:space-x-6">
                    {[...Array(slidesLength)].map((_, index) => <Indicator key={index} slideIndex={index} />)}
                </div>
                <button onClick={() => clickPlayButton()} className={` ${modeIsDark ? "text-white" : "text-black"} ml-3 md:ml-4 md:pb-0.5 flex md:self-end rounded-md text-opacity-90 focus:outline-none`}>
                    <svg className={`h-6 ${isSlidePlay ? "" : "hidden"}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4.5h3v11H5v-11zm7 0h3v11h-3v-11z" /></svg>
                    <svg className={`h-6 ${isSlidePlay ? "hidden" : ""}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5.413a.8.8 0 011.212-.686l7.645 4.587a.8.8 0 010 1.372l-7.645 4.587A.8.8 0 015 14.587V5.413z" /></svg>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const isSlidePlay = getSlidePlayingStatus(state);
    const activeSlideBgMode = getActiveSlideBgMode(state);
    const slidesLength = getSlidesLength(state);
    return {
        slidesLength,
        isSlidePlay,
        modeIsDark: activeSlideBgMode === 'dark'
    }
}

export default connect(mapStateToProps, { clickPlayButton })(Indicators);

