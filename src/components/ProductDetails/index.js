import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MainInfo from './MainInfo';
import { fetchProduct } from './state/actions'
import { getProductData } from './state/selectors'


const ProductDetails = ({ productData, fetchProduct }) => {

    useEffect(() => fetchProduct(), [fetchProduct])

    return productData ? (
        <>
            <Header />
            <MainInfo />
        </>
    ) : null;
}



const mapStateToProps = (state) => {
    return { productData: getProductData(state) }
}


export default connect(mapStateToProps, { fetchProduct })(ProductDetails);
