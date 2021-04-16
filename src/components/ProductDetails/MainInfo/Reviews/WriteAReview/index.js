import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { writeProductReview } from '../../../state/actions'


const WriteAReview = ({ writeProductReview }) => {
    const textareaRef = useRef();

    const onSubmitBtnClick = () => {
        const submittedReviewText = textareaRef.current.value;
        // validate() // uncreated
        // of course reviewerData will be fetched and sended via an API interceptor
        writeProductReview(submittedReviewText)
    }

    return (
        <div className="p-4 pb-8">
            <div className="p-4 flex flex-col sm:flex-row rounded bg-gray-200">
                <textarea ref={textareaRef} className="flex-auto sm:mr-3 p-2 h-24 rounded text-sm ring-1 ring-transparent focus:ring-gray-300 placeholder-gray-500 resize-none focus:outline-none" placeholder="Write a review..."></textarea>
                <button onClick={onSubmitBtnClick} className="sm:self-start mt-3 sm:mt-0 px-4 h-9 rounded text-sm font-medium tracking-wide text-white bg-gray-600 focus:outline-none">Write your review </button>
            </div>
            <div className="ml-1 mt-2 text-sm text-gray-600">Haven't reviewed yet? We in nerdme appreaciate your opinions.</div>
        </div>
    );
};


export default connect(null, { writeProductReview })(WriteAReview);
