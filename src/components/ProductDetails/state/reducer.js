import {
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    SET_HERO_IMAGE_INDEX,
    SET_ACTIVE_PRODUCT_IMAGES_COLOR,
    SET_PRODUCT_COUNTER,
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    ADD_TO_COMPARE,
    SET_VISIBLE_SECTION,
    SET_PRODUCT_RATING,
    SET_REVIEW_FEEDBACK,
    WRITE_PRODUCT_REVIEW,
    ASK_PRODUCT_QUESTION,
} from './actionTypes';


import {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure,
    setHeroImageIndex,
    setActiveProductImagesColor,
    setProductCounter,
    addToCart,
    addToWishList,
    addToCompare,
    setVisibleSection,
    setProductRating,
    setReviewFeedback,
    writeProductReview,
    askProductQuestion,
} from './utils'

import { SPECIFICATIONS_SECTION_ID } from '../state/constants'


const initialState = {
    loading: null,
    error: null,
    heroImageIndex: 0,
    activeProductImagesColor: '',
    productCounter: 1,
    visibleSectionId: SPECIFICATIONS_SECTION_ID,
    productData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_PRODUCT_START: return fetchProductStart(state);
        case FETCH_PRODUCT_SUCCESS: return fetchProductSuccess(state, action);
        case FETCH_PRODUCT_FAILURE: return fetchProductFailure(state, action);

        case SET_HERO_IMAGE_INDEX: return setHeroImageIndex(state, action);
        case SET_ACTIVE_PRODUCT_IMAGES_COLOR: return setActiveProductImagesColor(state, action);
        case SET_PRODUCT_COUNTER: return setProductCounter(state, action);

        case ADD_TO_CART: return addToCart(state, action);
        case ADD_TO_WISHLIST: return addToWishList(state, action);
        case ADD_TO_COMPARE: return addToCompare(state, action);

        case SET_VISIBLE_SECTION: return setVisibleSection(state, action);

        case SET_PRODUCT_RATING: return setProductRating(state, action);
        case SET_REVIEW_FEEDBACK: return setReviewFeedback(state, action);
        case WRITE_PRODUCT_REVIEW: return writeProductReview(state, action);
        case ASK_PRODUCT_QUESTION: return askProductQuestion(state, action);

        default: return state;
    }
}





























