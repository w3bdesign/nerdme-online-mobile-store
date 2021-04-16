import React, { useState } from 'react';

const QAndA = ({ question, answer }) => {
    const [isAnswerOpen, setIsAnswerOpen] = useState(false);

    return (
        <div className="py-4 sm:py-6 w-full text-gray-800 ">
            <div onClick={() => setIsAnswerOpen(!isAnswerOpen)} className="flex items-center justify-between w-full cursor-pointer">
                <span className="text-lg font-medium">{question}</span>
                <svg className={` ${isAnswerOpen ? 'rotate-180' : ''} transform transition-all duration-100 w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <p className={`${isAnswerOpen ? '' : 'hidden'} mt-4 sm:mt-6 text-gray-600`}>{answer}</p>
        </div>
    );
}

export default QAndA;
