import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ links }) => {

    return (
        <div className="py-3">
            {links.map((link, index) => {
                return (
                    <Link key={index} to={link.destinationUrl} className='px-6 py-2 flex items-center hover:bg-gray-100 text-gray-700 hover:text-gray-900'>
                        {link.svg}
                        <span className='ml-5'>{link.title}</span>
                    </Link>
                )
            })}
        </div>
    );

};


export default Links;
