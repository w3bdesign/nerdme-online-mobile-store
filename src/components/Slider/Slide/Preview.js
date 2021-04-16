import React from 'react';
import { connect } from 'react-redux';
import { getActiveSlideIndex, getSlidePreviewDataByIndex } from '../state/selectors'


const Preview = ({title, excerpt, destinationUrl, configs, isActive }) => {
    
    const modeIsDark = configs.bgMode === 'dark';

    return (
        <div className={` ${configs.textPosition === 'right' ? "right-0" : "left-0"} ${modeIsDark ? 'bg-black' : 'bg-white'} md:bg-transparent md:absolute px-4 md:w-2/5 h-2/5 md:h-full flex items-center justify-center`}>
            <div className={`${modeIsDark ? 'text-white' : 'text-black'} md:-mt-14 text-center md:text-left`}>
                <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
                <p className="mt-4 text-lg font-medium">{excerpt}</p>
                <a href={destinationUrl} className={` ${isActive ? "pointer-events-auto" : ""} mt-3 mx-auto md:mx-0 inline-flex items-center group focus:outline-none`}>
                    <span className="text-blue-600 font-medium group-hover:underline">Learn more</span>
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
  );
}


const mapStateToProps = (state, { slideIndex }) => {
    const activeSlideIndex = getActiveSlideIndex(state);
    const { title, excerpt, destinationUrl, configs } = getSlidePreviewDataByIndex(state, slideIndex)
    return { title, excerpt, destinationUrl, configs, isActive: activeSlideIndex === slideIndex }
}

export default connect(mapStateToProps)(Preview);
