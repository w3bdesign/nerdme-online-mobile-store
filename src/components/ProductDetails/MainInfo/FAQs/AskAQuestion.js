import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { askProductQuestion } from '../../state/actions'

const AskAQuestion = ({ askProductQuestion }) => {
    const inputRef = useRef();

    const handleOnButtonClick = () => {
        const question = inputRef.current.value;
        // validateQuestion(question) // uncreated 
        askProductQuestion(question);
    }


    return (
        <div className="p-4 sm:p-6 border-t">
            <div className="px-4 py-3 rounded flex flex-col sm:flex-row sm:items-center bg-gray-200">
                <input ref={inputRef} className="flex-auto px-3 mb-4 sm:mb-0 sm:mr-3 h-9 text-sm rounded ring-1 ring-transparent focus:ring-gray-300 placeholder-gray-500 focus:outline-none" type="text" placeholder="Ask a Question..." />
                <button onClick={handleOnButtonClick} className="px-4 h-9 rounded font-medium bg-gray-600 text-white focus:outline-none">Ask a Question </button>
            </div>
            <div className="mt-2 text-sm text-gray-600">Sorry, No questions asked yet!</div>
            <div className="mt-10 flex flex-col items-center">
                <svg className="h-28 w-28 text-gray-200" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.071 18.678L20.8 5.95l-.707-.707M8.072 18.678l-2.476-2.475m2.475 2.475l-4.596 2.475 2.121-4.95m0 0L16.203 5.596m2.828-1.414l-.707-.707-2.121 2.121m2.828-1.414l1.414-1.414 1.061 1.06-1.414 1.415m-1.06-1.061l1.06 1.06m-3.89.354l-1.06-1.06-3.889 3.889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <div className="mt-2 mb-4 font-medium">Have a question? ask our tech team</div>
                <button onClick={() => inputRef.current.focus()} className="px-4 h-9 rounded font-medium text-blueGray-700 hover:text-blueGray-800 border border-blueGray-600 focus:outline-none">Ask a Question</button>
            </div>
        </div>
    );
}

export default connect(null, { askProductQuestion })(AskAQuestion);
