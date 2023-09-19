import React from 'react';
import './InfiniteCarousel.scss';
import { cardDetails } from "./carousel-config";
import CarouselItem from './CarouselItem';

const InfiniteCarousel = () => {

    return (
        <div className='inf-carousel-container'>
            <div className='carousel-track'>
                {Object.keys(cardDetails).map(detailKey => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}>

                        </CarouselItem>
                    )
                })}
                {Object.keys(cardDetails).map(detailKey => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}>
                        </CarouselItem>
                    )
                })}

            </div>
        </div>
    )
}

export default InfiniteCarousel