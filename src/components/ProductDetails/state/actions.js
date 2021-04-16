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

import axios from '../../../axios'


export const setHeroImageIndex = (index) => ({ type: SET_HERO_IMAGE_INDEX, index })
export const setActiveProductImagesColor = (color) => ({ type: SET_ACTIVE_PRODUCT_IMAGES_COLOR, color })
export const setProductCounter = (counter) => ({ type: SET_PRODUCT_COUNTER, counter })


export const addToCart = (porductId) => ({ type: ADD_TO_CART, porductId })
export const addToWishlist = (porductId) => ({ type: ADD_TO_WISHLIST, porductId })
export const addToCompare = (porductId) => ({ type: ADD_TO_COMPARE, porductId })


export const setVisibleSection = (sectionId) => ({ type: SET_VISIBLE_SECTION, sectionId })

export const setProductRating = (starsCount) => ({ type: SET_PRODUCT_RATING, starsCount })
export const setReviewFeedback = (reviewId, status) => ({ type: SET_REVIEW_FEEDBACK, reviewId, status })
export const writeProductReview = (review) => ({ type: WRITE_PRODUCT_REVIEW, review })
export const askProductQuestion = (question) => ({ type: ASK_PRODUCT_QUESTION, question });


export const fetchProductStart = () => ({ type: FETCH_PRODUCT_START })
export const fetchProductSuccess = (productData) => ({ type: FETCH_PRODUCT_SUCCESS, productData })
export const fetchProductFailure = () => ({ type: FETCH_PRODUCT_FAILURE })


export const fetchProduct = () => {
    return async dispatch => {
        dispatch(fetchProductStart())
        try {
            const response = await axios.get('/product-data.json');
            dispatch(fetchProductSuccess(response.data))
        } catch (error) {
            dispatch(fetchProductFailure(error))
        }
    }
}


