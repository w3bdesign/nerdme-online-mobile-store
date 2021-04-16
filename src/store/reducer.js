import { combineReducers } from 'redux';
import navigationReducer from '../components/Navigation/state/reducer'
import productDetailsReducer from '../components/ProductDetails/state/reducer';
import sliderReducer from '../components/Slider/state/reducer';

const reducers = {
    navigation: navigationReducer,
    productDetails: productDetailsReducer,
    slider: sliderReducer 
}


// export default combineReducers({ navigation: navigationReducer, productDetails: productDetailsReducer });
export default combineReducers(reducers);
