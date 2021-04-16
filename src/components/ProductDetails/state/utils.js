
export const setHeroImageIndex = (state, { index }) => {
    return {
        ...state,
        heroImageIndex: index,
    }
};

export const setActiveProductImagesColor = (state, { color }) => {
    return {
        ...state,
        activeProductImagesColor: color,
    }
};

export const setProductCounter = (state, { counter }) => {
    return {
        ...state,
        productCounter: counter,
    }
};

export const setVisibleSection = (state, { sectionId }) => {
    return {
        ...state,
        visibleSectionId: sectionId,
    }
};



export const fetchProductStart = (state) => {
    return {
        ...state,
        loading: true,
    }
}

export const fetchProductSuccess = (state, { productData }) => {
    const activeProductImagesColor = productData.availableProducts[0].color;
    return {
        ...state,
        loading: null,
        activeProductImagesColor: activeProductImagesColor,
        productData: productData
    }
}

export const fetchProductFailure = (state, { error }) => {
    return {
        ...state,
        loading: null,
        error: error
    }
}



export const addToCart = (state, { productId }) => ({ ...state});
export const addToWishList = (state, { productId }) => ({ ...state});
export const addToCompare = (state, { productId }) => ({ ...state});


export const setProductRating = (state, { starsCount }) => ({ ...state});
export const setReviewFeedback = (state, { reviewId, status }) => ({ ...state});
export const writeProductReview = (state, { review }) => ({ ...state});
export const askProductQuestion = (state, { productId, question }) => ({ ...state});
