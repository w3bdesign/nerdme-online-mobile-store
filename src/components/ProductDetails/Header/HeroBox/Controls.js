import React from 'react';
import ColorsList from './ColorsList';
import Counter from './Counter';
import { getProductId, getProductPrice, getProductInsteadOfPrice } from '../../state/selectors'
import { addToCart, addToWishlist } from '../../state/actions'
import { connect } from 'react-redux';

 

const Controls = (props) => {
    const { productId, price, insteadOfPrice, addToCart, addToWishlist } = props;

    return (
        <>
            <div className="flex flex-wrap">
                <div className="mt-3 mr-16 flex flex-col">
                    <div className="flex-1 text-lg font-semibold">Colors</div>
                    <ColorsList isBigSize={true} />
                </div>

                <div className="mt-3 flex flex-col">
                    <div className="flex-1 text-lg font-semibold">Quantity</div>
                    <Counter />
                </div>
            </div>


            <div className="mb-5 mt-2 flex flex-wrap items-center">
                <div className="mt-4 mr-10 flex items-end text-2xl font-medium">
                    ${price}
                    <span className="ml-1 mb-0.5 text-base line-through text-gray-500">${insteadOfPrice}</span>
                </div>

                <div className="mt-4 sm:max-w-md flex flex-auto">
                    <button onClick={() => addToCart(productId)} className="flex-auto py-2 px-8 rounded text-sm uppercase font-medium bg-blueGray-800 text-white flex items-center justify-center focus:outline-none">
                        Add to Cart
                        <svg className="flex-none ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    </button>

                    <button onClick={() => addToWishlist(productId)} className="ml-5 w-10 h-10 rounded bg-blueGray-100 text-blueGray-600 flex items-center justify-center focus:outline-none">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    const productId = getProductId(state);
    const price = getProductPrice(state);
    const insteadOfPrice = getProductInsteadOfPrice(state);
    return { productId, price, insteadOfPrice }
}

export default connect(mapStateToProps, { addToCart, addToWishlist })(Controls);