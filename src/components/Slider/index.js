import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import Arrow from './SlideControls/Arrow';
import SlideControls from './SlideControls/Indicators';
import Slide from './Slide';
import { NEXT, PREV } from './state/constants';
import { getSlidesLength } from './state/selectors'
import { showNextSlide, showPrevSlide, setSlideControlsStatus, initSlider } from './state/actions'


const Slider = (props) => {
  const { slidesLength, showNextSlide, showPrevSlide, setSlideControlsStatus, initSlider } = props;

  const [initOffset, setInitOffset] = useState({ offsetX: 0, offsetY: 0 });
  const slideRef = useRef();

  useEffect(() => initSlider(), [initSlider]);


  const handleOnMouseEvent = ({ type: eventType }) => {
    if (slideRef.current.clientWidth < 767) return // the breakpoint of siwtcing slider mode
    setSlideControlsStatus(eventType)
  }


  const getOffsetX = (e) => e.nativeEvent.touches?.[0].clientX || e.nativeEvent.offsetX;
  const getOffsetY = (e) => e.nativeEvent.touches?.[0].clientY || e.nativeEvent.offsetY;

  const resetOffset = () => setInitOffset({ offsetX: 0, offsetY: 0 })

  const showNewSlide = (oY, oX) => {
    if ((oY > 10 || oY < -10) && (oX < 10 || oX > -10)) return resetOffset();
    if (oX > 10) {
      showNextSlide();
      return resetOffset()
    }
    if (oX < -10) {
      showPrevSlide();
      return resetOffset()
    }
  }

  const onEventStart = e => setInitOffset({ offsetX: getOffsetX(e), offsetY: getOffsetY(e) });

  const onEventMove = e => {
    if (initOffset.offsetX === 0 || initOffset.offsetY === 0) return;
    const slideWidth = slideRef.current.clientWidth;
    const slideHeight = slideRef.current.clientHeight;
    const movingOffsetX = getOffsetX(e);
    const movingOffsetY = getOffsetY(e);
    const oX = ((movingOffsetX - initOffset.offsetX) / slideWidth) * 100;
    const oY = ((movingOffsetY - initOffset.offsetY) / slideHeight) * 100;
    showNewSlide(oY, oX);
  };

  
  return slidesLength ? (
    <div className='relative h-80-screen md:mt-8 md:mx-auto md:max-w-7xl md:h-96'>
      <div className='relative h-full'
        ref={slideRef}
        onMouseEnter={handleOnMouseEvent}
        onMouseLeave={handleOnMouseEvent}

        onMouseDown={onEventStart}
        onMouseMove={onEventMove}

        onTouchStart={onEventStart}
        onTouchMove={onEventMove}>

        {[...Array(slidesLength)].map((_, index) => <Slide key={index} slideIndex={index} />)}
        <Arrow direction={PREV} />
        <Arrow direction={NEXT} />
      </div>

      <SlideControls />
    </div>
  ) : null;


};



const mapStateToProps = (state) => ({ slidesLength: getSlidesLength(state) })

export default connect(mapStateToProps, { showNextSlide, showPrevSlide, setSlideControlsStatus, initSlider })(Slider);
