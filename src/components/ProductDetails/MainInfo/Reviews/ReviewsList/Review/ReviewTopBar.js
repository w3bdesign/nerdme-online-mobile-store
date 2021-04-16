import React from 'react';

const ReviewTopBar = ({ reviewerName, reviewerImgUrl, reviewId }) => {

    const showMenu = () => {
        // there will be a pop-up menu with => Flag as inappropriate, Flag as spam (like google play apps' reviews)
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex-none flex items-center">
                <img className="h-8 w-8 object-cover rounded-full" src={reviewerImgUrl} alt={reviewerName} />
                <h3 className="ml-3 font-medium text-blueGray-800">{reviewerName}</h3>
            </div>
            <button onClick={showMenu} className="text-gray-700 focus:outline-none">
                {/* haven't decided yet */}
                {/* vertical dots */}
                <svg class="w-6 h-6 text-blueGray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                {/* horizontal dots */}
                {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg> */}
            </button>
        </div>
    );
}

export default ReviewTopBar;
