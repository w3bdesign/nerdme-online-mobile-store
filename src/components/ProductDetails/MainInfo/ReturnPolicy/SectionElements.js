import React from 'react';
import innerContent from './ElementContent';


export const H3 = ({ content }) => {
    return (
        <h3 className="mt-5 font-medium text-lg text-gray-900">
            {innerContent(content)}
        </h3>
    );
}

export const Paragraph = ({ content }) => {
    return (
        <p className="mb-4 text-gray-700">
            {innerContent(content)}
        </p>
    );
}


export const UnorderedList = ({ content }) => {
    return (
        <ul className=" mb-8 space-y-3 list-inside list-disc text-gray-700" >
            <ListItems itemsContent={content} />
        </ul>
    );
}


export const OrderedList = ({ content }) => {
    return (
        <ol className="mb-8 space-y-3 list-inside list-decimal text-gray-700">
            <ListItems itemsContent={content} />
        </ol>
    );
}


const ListItems = ({ itemsContent }) => {
    return itemsContent.map((content, index) => <li key={index}>{innerContent(content)}</li>)
}

