import React, { useState } from 'react';
import { } from '../../state/actions'
import useOpen from './useOpen-hook';

// absolutely there are more enhancements

const SearchOptions = ({ options, setSelectedOptionId }) => {

    const [openerRef, ref, isOpen, setIsOpen] = useOpen(false)
    const [selectedTitle, setSelectedTitle] = useState(options[0].title)

    const handleOnOptionClick = ({ id, title }) => {
        setSelectedTitle(title);
        setSelectedOptionId(id);
        setIsOpen(false);
    }


    return (
        <div on className="w-36">
            <div ref={openerRef} onClick={() => setIsOpen(!isOpen)} className="px-4 py-1 w-full flex items-center justify-between text-sm font-medium cursor-pointer">
                <span>{selectedTitle}</span>
                <svg className={`${isOpen ? '' : 'rotate-180'} transform transition-all w-4 h-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            </div>

            <div ref={ref} className={`${isOpen ? 'opacity-100 scale-100 duration-150' : 'opacity-0 scale-95 duration-100 pointer-events-none'} transform transition origin-top absolute right-4 top-16 z-10 w-36 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5`}>
                <ul className="py-2 font-medium">
                    {options.map((option, index) => <li key={index} onClick={() => handleOnOptionClick(option)} className="px-4 py-2 text-sm hover:bg-blueGray-100 text-blueGray-700 hover:text-blueGray-900 cursor-pointer">{option.title}</li>)}
                </ul>
            </div>

        </div>
    );
}


export default SearchOptions;
