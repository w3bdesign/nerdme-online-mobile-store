import React from 'react';
import ShareLinks from './ShareLinks';
import { getProductId } from '../../state/selectors'
import { addToCompare } from '../../state/actions'
import { connect } from 'react-redux';


const BottomBar = ({ productId, addToCompare }) => {

    return (
        <div className="mb-4 border-t flex flex-wrap items-center justify-between text-gray-600">
            <div className="mt-4 mr-5 flex items-center">
                <div className="mr-3 text-xs uppercase font-medium">Share</div>
                <ShareLinks />
            </div>

            <button onClick={() => addToCompare(productId)} className="mt-4 text-xs uppercase font-medium flex items-center focus:outline-none">
                <svg className="mr-1.5 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M166 108.857c0-2.482-.869-4.862-2.416-6.616-1.548-1.755-3.646-2.741-5.834-2.741h-16.5c-2.188 0-4.286.986-5.834 2.741-1.547 1.754-2.416 4.134-2.416 6.616v46.786c0 2.482.869 4.862 2.416 6.616 1.548 1.755 3.646 2.741 5.834 2.741h16.5c2.188 0 4.286-.986 5.834-2.741 1.547-1.754 2.416-4.134 2.416-6.616v-46.786zm-49.5-37.428c0-2.482-.869-4.862-2.416-6.617-1.548-1.755-3.646-2.74-5.834-2.74h-16.5c-2.188 0-4.287.985-5.834 2.74-1.547 1.755-2.416 4.135-2.416 6.617v84.214c0 2.482.87 4.862 2.416 6.616 1.547 1.755 3.646 2.741 5.834 2.741h16.5c2.188 0 4.286-.986 5.834-2.741 1.547-1.754 2.416-4.134 2.416-6.616V71.429zM67 43.357c0-2.481-.87-4.862-2.416-6.616C63.036 34.986 60.938 34 58.75 34h-16.5c-2.188 0-4.286.986-5.834 2.74C34.87 38.496 34 40.877 34 43.358v112.286c0 2.482.87 4.862 2.416 6.616 1.548 1.755 3.646 2.741 5.834 2.741h16.5c2.188 0 4.286-.986 5.834-2.741 1.547-1.754 2.416-4.134 2.416-6.616V43.357z" /></svg>
                Add to compare
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({ productId: getProductId(state) });

export default connect(mapStateToProps, { addToCompare })(BottomBar);

