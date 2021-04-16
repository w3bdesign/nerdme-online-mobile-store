import React, { useRef, useState } from 'react';

const SearchField = ({ selectedOptionId }) => {
    const [onInputChange, setOnInputChange] = useState('');
    const inputRef = useRef()

    const clearText = () => {
        setOnInputChange('');
        inputRef.current.focus()
    }

    const handleOnInputChange = (e) => {
        setOnInputChange(e.target.value)
        console.log(selectedOptionId);
        // do searching here
    }


    return (
        <div className="relative pl-4 pr-3 flex-auto h-full rounded-md flex items-center justify-between">
            <div className="z-10 text-gray-500 pointer-events-none">
                <svg className={`${onInputChange !== '' ? '' : 'hidden'} w-6 h-6`} viewBox="0 0 38 38" stroke="currentColor" strokeOpacity=".5"><g fill="none" fillRule="evenodd"><g transform="translate(1 1)" strokeWidth="2"><circle strokeOpacity=".3" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
                <svg className={`${onInputChange === '' ? '' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <form className="absolute inset-0 group">
                <input onChange={handleOnInputChange} ref={inputRef} value={onInputChange} className="pl-14 pr-12 h-full w-full text-lg bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none" type="text" name="search" placeholder="Search..." />
            </form>
            <div className={`${onInputChange !== '' ? '' : 'hidden'} z-10 flex`}>
                <button onClick={clearText} className="text-gray-400 focus:outline-none">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    );
}



export default SearchField
