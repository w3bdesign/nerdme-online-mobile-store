import React, { useState } from 'react';
import Arrow from './Arrow';
import BarImages from './BarImages';
import { NEXT, PREV } from '../../state/constants';


const Bar = () => {
    const [isBarHoverd, setIsBarHovered] = useState(false);

    const handleOnMouseEvent = ({ type }) => setIsBarHovered(type === 'mouseenter')

    return (
        <div onMouseEnter={handleOnMouseEvent} onMouseLeave={handleOnMouseEvent} className="mt-3 md:mt-0 md:h-lg lg:h-md xl:h-lg flex md:flex-col items-center">
            <Arrow direction={PREV} isHeroArrow={false} isHovered={isBarHoverd} />
            <BarImages />
            <Arrow direction={NEXT} isHeroArrow={false} isHovered={isBarHoverd} />
        </div>
    );
}

export default Bar;
