import React from 'react';

const Feature = ({ feature }) => {
    return (
        <tr class="grid grid-cols-12">
            <td class="p-2 sm:px-4 sm:py-3 sm:font-medium break-words text-coolGray-700 border-r col-span-4 lg:col-span-3">
                {feature.name}
            </td>
            <td class="divide-y flex flex-col col-span-8 lg:col-span-9">
                {feature.info.map((info, index) => <div key={index} class="p-2 sm:px-4 sm:py-3 text-sm">{info}</div>)}
            </td>
        </tr>
    )
}

export default Feature
