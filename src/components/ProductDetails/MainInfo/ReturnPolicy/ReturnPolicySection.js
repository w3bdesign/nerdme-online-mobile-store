import React from 'react';
import { H3, Paragraph, UnorderedList, OrderedList } from './SectionElements'


const generateElement = (element) => {
    switch (element.type) {
        case 'h3': return <H3 content={element.content} />
        case 'p': return <Paragraph content={element.content} />;
        case 'ul': return <UnorderedList content={element.content} />;
        case 'ol': return <OrderedList content={element.content} />;
        default: return null;
    }
}


// I didn't put indexes as keys into elements

const ReturnPolicySection = ({ sectionData }) => {
    return (
        <div className="py-8 sm:pt-10">
            {sectionData.sectionTitle && <h2 className="mb-6 text-2xl font-semibold text-gray-900">{sectionData.sectionTitle}</h2>}
            {sectionData.sectionElements.map((element) => generateElement(element))}
        </div>
    )
}

export default ReturnPolicySection;
