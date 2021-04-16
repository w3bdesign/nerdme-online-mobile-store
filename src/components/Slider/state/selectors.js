

export const getSliderState = (state) => state.slider

export const getSlides = (state) => getSliderState(state).slides;

export const getSlidesLength = (state) => getSlides(state)?.length;

export const getSlidePlayingStatus = (state) => {
    const { isSlideFrozen, isPlayButtonClicked } = getSliderState(state);
    return !isSlideFrozen && !isPlayButtonClicked;
}

export const getArrowVisibilityStatus = (state) => getSliderState(state).isArrowVisible;

export const getActiveSlideIndex = (state) => getSliderState(state).activeSlideIndex;

export const getSlideByIndex = (state, index) => getSlides(state)[index]

export const getActiveSlide = (state) => getSlideByIndex(state, getActiveSlideIndex(state))

export const getActiveSlideBgMode = (state) => getActiveSlide(state).configs.bgMode
export const getSlideTitleByIndex = (state, index) => getSlideByIndex(state, index).title;
export const getSlideImagesByIndex = (state, index) => getSlideByIndex(state, index).images


export const getSlidePreviewDataByIndex = (state, index) => {
    const { title, excerpt, destinationUrl, configs } = getSlideByIndex(state, index);
    return { title, excerpt, destinationUrl, configs }
}

