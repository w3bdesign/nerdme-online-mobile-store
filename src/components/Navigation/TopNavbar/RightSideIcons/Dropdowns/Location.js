import React, { useState } from 'react';
import Container from './shared/Container';
import Guide from './shared/Guide';
import Header from './shared/Header';
import Title from "./shared/Title";

const Location = () => {

    const [inputValue, setInputValue] = useState(''); // these are my first components || may look super ugly

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }
    const onClickHandler = (e) => { }


    return (
        <Container classes="w-84">
            <Header>
                <Title>Hi, Select Your Zone</Title>
                <Guide>Share Pincode for Faster Delivery by Local Sellers</Guide>
                <div className="mx-auto mt-4 px-2 py-2">
                    <div className="relative w-full h-10">
                        <div className="absolute inset-y-0 left-0 w-10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <input onChange={onChangeHandler} value={inputValue} className="px-12 w-full h-10 rounded-md bg-gray-100 focus:bg-gray-50 border border-gray-200 focus:border-transparent focus:ring-2 ring-black ring-opacity-20 placeholder-gray-400 focus:outline-none" placeholder="Enter Your Pincode" type="text" />
                    </div>
                    <button onClick={onClickHandler} className="mt-3 py-2 w-full h-10 font-medium rounded-md bg-gray-800 text-white focus:outline-none">Apply</button>
                </div>
            </Header>
        </Container>
    );
};

export default Location;
