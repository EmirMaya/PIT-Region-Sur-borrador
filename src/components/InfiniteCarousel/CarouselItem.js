import React from 'react';

const CarouselItem = ({ imgUrl, imgTitle }) => {
    return (
        <div className='carousel-card'>
            <img src={imgUrl} className='inf-carousel-img' alt={imgTitle} />
        </div>
    )
}

export default CarouselItem;