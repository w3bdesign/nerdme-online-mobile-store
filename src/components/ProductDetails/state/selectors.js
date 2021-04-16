import { createSelector } from "reselect";

// I fetched every single piece of data via redux to leave the components as they are so that if we change
// the structure of the reducer or the incoming API, all what we need to do is changing the selectors.


export const getProductDetailsState = (state) => state.productDetails;
export const getProductData = (state) => getProductDetailsState(state).productData;


// Header 

export const getProductId = (state) => getProductData(state).id
export const getProductTitle = (state) => getProductData(state).title
export const getProductPrice = (state) => getProductData(state).price
export const getProductInsteadOfPrice = (state) => getProductData(state).insteadOfPrice;
export const getProductExcerpt = (state) => getProductData(state).excerpt
export const getProductCounter = (state) => getProductDetailsState(state).productCounter


export const getHeroImageIndex = (state) => getProductDetailsState(state).heroImageIndex
export const getHeroImageUrl = (state) => getActiveProductImagesUrls(state)[getHeroImageIndex(state)];
export const getAvailableProducts = (state) => getProductData(state).availableProducts;
export const getAvailableProductColors = (state) => getAvailableProducts(state).map(p => p.color);
export const getActiveProductImagesColor = (state) => getProductDetailsState(state).activeProductImagesColor;
export const getActiveProductImagesUrls = (state) => getAvailableProducts(state).find(p => p.color === getActiveProductImagesColor(state)).imagesUrls;
export const getActiveProductImagesLength = (state) => getActiveProductImagesUrls(state).length;


// MainInfo

export const getVisibleSectionId = (state) => getProductDetailsState(state).visibleSectionId

export const getSpecificationsTables = (state) => getProductData(state).specificationsTables;
export const getReturnPolicySections = (state) => getProductData(state).returnPolicySections
export const getProductFAQs = (state) => getProductData(state).questionsAndAnswers;

export const getReviewsInfo = (state) => getProductData(state).reviewsInfo;
export const getCustomersRatings = (state) => getReviewsInfo(state).customersRatings;
export const getCustomersReviews = (state) => getReviewsInfo(state).customersReviews;
export const getTotalReviewersCount = (state) => getCustomersReviews(state).length;


export const getRatersCountByStarsCount = (state, starsCount) => getCustomersRatings(state).find(r => r.starsCount === starsCount).ratersCount



// export const getTotalRatersCount = (state) => getCustomersRatings(state).reduce((total, r) => total + r.ratersCount, 0);
export const getTotalRatersCount = createSelector(
    [getCustomersRatings],
    (customersRatings) => customersRatings.reduce((total, r) => total + r.ratersCount, 0)
)



// export const getTotalRatingScore = (state) => {
//     const totalRatersCount =  getTotalRatersCount(state);
//     const totalRatingScore = (getCustomersRatings(state).reduce((total, r) => total + r.ratersCount * r.starsCount, 0) / totalRatersCount).toFixed(1);
//     return totalRatingScore;
// }
export const getTotalRatingScore = createSelector(
    [getTotalRatersCount, getCustomersRatings],
    (totalRatersCount, customersRatings) => {
        const totalRatingScore = (customersRatings.reduce((total, r) => total + r.ratersCount * r.starsCount, 0) / totalRatersCount).toFixed(1)
        return totalRatingScore;
    }
)
