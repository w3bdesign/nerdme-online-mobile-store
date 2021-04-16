import React, { useState } from 'react';

const ReviewTopBar = ({ reviewText }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <p onClick={() => setIsOpen(!isOpen)} className={` ${isOpen ? '' : 'line-clamp-3'} mt-3  lg:line-clamp-none  lg:w-11/12 text-sm text-gray-700`}>{reviewText}</p>
}

export default ReviewTopBar;
