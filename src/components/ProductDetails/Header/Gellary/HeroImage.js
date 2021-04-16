import React, { useState } from 'react';
import { connect } from 'react-redux';
import Arrow from './Arrow';
import { getHeroImageUrl, getHeroImageIndex, getActiveProductImagesLength } from '../../state/selectors'
import { NEXT, PREV } from '../../state/constants'

const HeroImage = (props) => {
    const { heroImageUrl, heroImageIndex, imagesLength } = props
    const [isHeroHovered, setIsHeroHovered] = useState(false);

    const handleOnMouseEvent = ({ type }) => setIsHeroHovered(type === 'mouseenter');

    return (
        <div onMouseEnter={handleOnMouseEvent} onMouseLeave={handleOnMouseEvent} className="relative md:ml-4">

            <div className="h-96 md:w-lg md:h-lg lg:w-md lg:h-md xl:w-lg xl:h-lg">
                <img className="w-full h-full object-contain" src={heroImageUrl} alt={'pic-' + (heroImageIndex + 1)} />
            </div>

            <Arrow direction={PREV} isHeroArrow isHovered={isHeroHovered} />
            <Arrow direction={NEXT} isHeroArrow isHovered={isHeroHovered} />

            <div className="md:hidden mt-3 text-sm text-center font-medium">
                {heroImageIndex + 1} of {imagesLength}
            </div>

        </div>
    )
};

const mapStateToProps = (state) => {
    const heroImageUrl = getHeroImageUrl(state)
    const heroImageIndex = getHeroImageIndex(state)
    const imagesLength = getActiveProductImagesLength(state)
    return { heroImageUrl, heroImageIndex, imagesLength }
}

export default connect(mapStateToProps)(HeroImage);
