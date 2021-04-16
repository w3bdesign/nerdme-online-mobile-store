import React from 'react';
import Excerpt from './Excerpt';
import Controls from './Controls';
import Rating from './Rating';
import Title from './Title';
import BottomBar from './BottomBar';

const HeroBox = () => {

    return (
        <div className="mt-6 lg:mt-0 p-4 lg:max-w-xl">
            <Title />
            <Rating />
            <Excerpt />
            <Controls />
            <BottomBar />
        </div>
    );
};

export default HeroBox;
