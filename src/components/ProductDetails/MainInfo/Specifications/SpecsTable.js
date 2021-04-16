import React from 'react';
import Feature from './Feature'

const SpecsTable = ({ tableData }) => {

    return (
        <table class="w-full">
            <caption class="ml-1 mb-3 text-left text-xl md:text-2xl font-medium text-blueGray-700">{tableData.title}</caption>
            <tbody class="divide-y border">
                {tableData.features.map((feature, index) => <Feature key={index} feature={feature} />)}
            </tbody>
        </table>
    );
};

export default SpecsTable;
