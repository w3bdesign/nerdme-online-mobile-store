import React from 'react';
import { getActiveProductImagesUrls, getHeroImageIndex } from '../../state/selectors'
import { setHeroImageIndex } from '../../state/actions'
import { connect } from 'react-redux';

const BarImages = ({ setHeroImageIndex, imagesUrls, heroImageIndex }) => {

    return (
        <div className="flex-auto flex md:flex-col items-center justify-center sm:space-x-2 md:space-x-0 md:space-y-2">
            {imagesUrls.map((imgUrl, index) => {
                return (
                    <button key={index} onClick={() => setHeroImageIndex(index)} className={`${heroImageIndex === index ? ' border-gray-400' : ''} border border-transparent w-18 h-18 sm:w-24 sm:h-24 focus:outline-none`}>
                        <img className='h-full w-full object-contain' src={imgUrl} alt={'pic-' + (index + 1)} />
                    </button>
                )
            })}
        </div>
    );
}


const mapStateToProps = (state) => {
    const imagesUrls = getActiveProductImagesUrls(state);
    const heroImageIndex = getHeroImageIndex(state)
    return { imagesUrls, heroImageIndex }
}

export default connect(mapStateToProps, { setHeroImageIndex })(BarImages);

