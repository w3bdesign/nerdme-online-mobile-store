import {
  SHOW_NEXT_SLIDE,
  SHOW_PREV_SLIDE,
  CLICK_PLAY_BUTTON,
  SET_ACTIVE_SLIDE,
  SET_SLIDE_CONTROLS_STATUS,
  FETCH_SLIDER_START,
  FETCH_SLIDER_SUCCESS,
  FETCH_SLIDER_FAILURE,
} from './actionTypes';


import {
  clickPlayButton,
  setActiveSlide,
  setSlideControlsStatus,
  showNextSlide,
  showPrevSlide,
  fetchSliderStart,
  fetchSliderSuccess,
  fetchSliderFailure,
} from './utils';


const initialState = {
  loading: null, // not handled
  error: null, // not handled
  isArrowVisible: false,
  isSlideFrozen: false,
  isPlayButtonClicked: false,
  activeSlideIndex: 0,
  slides: null,
}


const sliderReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SLIDER_START: return fetchSliderStart(state);
    case FETCH_SLIDER_SUCCESS: return fetchSliderSuccess(state, action);
    case FETCH_SLIDER_FAILURE: return fetchSliderFailure(state, action);

    case CLICK_PLAY_BUTTON: return clickPlayButton(state);

    case SHOW_NEXT_SLIDE: return showNextSlide(state);
    case SHOW_PREV_SLIDE: return showPrevSlide(state);

    case SET_ACTIVE_SLIDE: return setActiveSlide(state, action);
    case SET_SLIDE_CONTROLS_STATUS: return setSlideControlsStatus(state, action);

    default: return state;
  }
}

export default sliderReducer;
