
const prevSlideIndex = (state) => (state.activeSlideIndex - 1 + state.slides.length) % state.slides.length;
const nextSlideIndex = (state) => (state.activeSlideIndex + 1) % state.slides.length;


export const clickPlayButton = (state) => {
    return {
        ...state,
        isPlayButtonClicked: !state.isPlayButtonClicked,
    }
};


export const setSlideControlsStatus = (state, { eventType }) => {
    return {
        ...state,
        isArrowVisible: eventType === 'mouseenter',
        isSlideFrozen: eventType === 'mouseenter',
    }
};


export const setActiveSlide = (state, { slideIndex }) => {
    return {
        ...state,
        activeSlideIndex: slideIndex
    }
};


export const showNextSlide = (state) => {
    return {
        ...state,
        activeSlideIndex: nextSlideIndex(state)
    }
};


export const showPrevSlide = (state) => {
    return {
        ...state,
        activeSlideIndex: prevSlideIndex(state)
    }
};


export const fetchSliderStart = (state) => {
    return {
        ...state,
        loading: true,
    }
};

export const fetchSliderSuccess = (state, { slides }) => {
    return {
        ...state,
        slides: slides,
        loading: null,
    }
};

export const fetchSliderFailure = (state, { error }) => {
    return {
        ...state,
        loading: null,
        error: error,
    }
};

