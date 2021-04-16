import React from 'react';
import { getActiveProductImagesColor, getAvailableProductColors } from '../../state/selectors'
import { setActiveProductImagesColor } from '../../state/actions'
import { connect } from 'react-redux';

const ColorsList = (props) => {

  const { availableColors, activeProductImagesColor, setActiveProductImagesColor, isBigSize } = props;

  const colorsList = availableColors.map((color, index) => {
    return (
      <button key={index} onClick={() => setActiveProductImagesColor(color)} className={` ${activeProductImagesColor === color ? `border-${color}` : ''} ${isBigSize ? 'p-1 border-2' : 'p-0.5 border'} rounded-full border-transparent focus:outline-none`}>
        <div className={`bg-${color} ${isBigSize ? 'w-7 h-7' : 'w-3.5 h-3.5'} rounded-full`}></div>
        {/* added these classes to keep them when purging, these colors will be added in separate file later, now its for show */}
        {false && <div className="bg-mysticGray border-mysticGray bg-mysticGreen border-mysticGreen bg-mysticBronze border-mysticBronze"></div>}
      </button>
    );
  });
  return <div className={` ${isBigSize ? 'mt-3 space-x-1.5' : 'space-x-1'} flex items-center`}>{colorsList}</div>;
};


const mapStateToProps = (state) => {
  const activeProductImagesColor = getActiveProductImagesColor(state);
  const availableColors = getAvailableProductColors(state)
  return { availableColors, activeProductImagesColor }
}

export default connect(mapStateToProps, { setActiveProductImagesColor })(ColorsList);

