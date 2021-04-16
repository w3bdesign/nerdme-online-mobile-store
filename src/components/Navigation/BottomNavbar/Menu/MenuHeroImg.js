import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMenuHeroImgById } from '../../state/selectors'


const MenuHeroImg = ({ title, imgUrl, destinationUrl }) => {

    return (
        <div className="mt-14 mb-8 lg:mb-0 lg:mt-0 flex items-center justify-center lg:w-1/3 lg:border-l">
            <Link to={destinationUrl} className="inline-flex flex-col items-center">
                <div className="overflow-hidden rounded-3xl">
                    <img class="w-64 h-64 lg:w-72 lg:h-72 object-cover transform transition-all duration-400 hover:scale-105" src={imgUrl} alt={'hero-img'} />
                </div>
                <h3 className="mt-3 lg:mt-5 text-center font-medium text-blueGray-900 text-lg lg:text-xl">
                    {title.firstLine}<br />{title.secondLine}
                </h3>
            </Link>
        </div>
    )
}

const mapStateToProps = (state, { menuId }) => {
    const { title, imgUrl, destinationUrl } = getMenuHeroImgById(state, menuId);
    return { title, imgUrl, destinationUrl }
}

export default connect(mapStateToProps)(MenuHeroImg);
