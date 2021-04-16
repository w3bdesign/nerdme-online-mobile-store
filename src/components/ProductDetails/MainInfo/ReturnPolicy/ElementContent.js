import React from 'react';
import { Link } from 'react-router-dom';


const StrongElement = ({ content }) => {
    return <strong className="font-medium text-gray-900">{content}</strong>
}


// bad checking -- snippet from stackoverflow, will be changed later
const isUrlAbsolute = (url) => url.indexOf('http://') === 0 || url.indexOf('https://') === 0

const LinkElement = ({ content }) => {
    if (isUrlAbsolute(content.destinationUrl)) {
        return <a href={content.destinationUrl} className="text-blue-700 hover:text-blue-800 hover:underline focus:underline">{content.title}</a>
    }
    return <Link to={content.destinationUrl} className="text-blue-700 hover:text-blue-800 hover:underline focus:underline">{content.title}</Link>
}


const generateContent = (el) => {
    switch (el.type) {
        case 'text':
            return el.content;
        case 'link':
            return <LinkElement content={el.content} />;
        case 'strong':
            return <StrongElement content={el.content} />
    }
}

// maybe 'el' is not a good name, but i'll stick with that
export default (content) => content.map(el => generateContent(el));

