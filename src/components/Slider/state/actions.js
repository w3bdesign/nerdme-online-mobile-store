import axios from "../../../axios";

import {
    CLICK_PLAY_BUTTON,
    SET_SLIDE_CONTROLS_STATUS,
    SET_ACTIVE_SLIDE,
    SHOW_NEXT_SLIDE,
    SHOW_PREV_SLIDE,
    FETCH_SLIDER_START,
    FETCH_SLIDER_SUCCESS,
    FETCH_SLIDER_FAILURE,
} from "./actionTypes";


export const clickPlayButton = () => ({ type: CLICK_PLAY_BUTTON });
export const setSlideControlsStatus = (eventType) => ({ type: SET_SLIDE_CONTROLS_STATUS, eventType });
export const setActiveSlide = (slideIndex) => ({ type: SET_ACTIVE_SLIDE, slideIndex });
export const showNextSlide = () => ({ type: SHOW_NEXT_SLIDE });
export const showPrevSlide = () => ({ type: SHOW_PREV_SLIDE });



export const fetchSliderStart = () => ({ type: FETCH_SLIDER_START });
export const fetchSliderSuccess = (slides) => ({ type: FETCH_SLIDER_SUCCESS, slides });
export const fetchSliderFailure = (error) => ({ type: FETCH_SLIDER_FAILURE, error });



export const initSlider = () => {
    return async dispatch => {
        dispatch(fetchSliderStart()) // not handled
        try {
            const response = await axios.get('/slides.json');
            dispatch(fetchSliderSuccess(response.data))
        } catch (error) {
            dispatch(fetchSliderFailure(error)) // not handled
        }
    }
}


