import React from 'react';
import { connect } from 'react-redux';
import { setHeroImageIndex } from '../../state/actions'
import { getHeroImageIndex, getActiveProductImagesLength } from '../../state/selectors'
import { NEXT } from '../../state/constants';


const Arrow = (props) => {
  const { setHeroImageIndex, heroImageIndex, imagesLength, isHeroArrow, isHovered, direction } = props;

  const nextImgIndex = () => (heroImageIndex + 1) % imagesLength;
  const prevImgIndex = () => (heroImageIndex - 1 + imagesLength) % imagesLength;

  const handleOnArrowClick = () => {
    const newIndex = direction === NEXT ? nextImgIndex() : prevImgIndex();
    setHeroImageIndex(newIndex)
  }

  return (
    <button onClick={handleOnArrowClick} className={` ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isHeroArrow ? 'absolute top-1/2 -mt-3 hidden md:block p-3 rounded-full hover:bg-coolGray-100' : ''} ${isHeroArrow ? direction === NEXT ? 'right-2 rotate-180' : 'left-2' : direction === NEXT ? 'rotate-180 md:-rotate-90' : 'md:rotate-90'} transform transition-opacity text-coolGray-500 focus:outline-none`}>
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    </button>
  )
};


const mapStateToProps = (state) => {
  const heroImageIndex = getHeroImageIndex(state);
  const imagesLength = getActiveProductImagesLength(state);
  return { heroImageIndex, imagesLength }
}

export default connect(mapStateToProps, { setHeroImageIndex })(Arrow);
