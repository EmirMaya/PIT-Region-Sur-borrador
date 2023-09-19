import React from 'react';
import CarouselComponent from "../components/Carousel/CarouselComponent"
import InfiniteCarousel from "../components/InfiniteCarousel/InfiniteCarousel"
import HomeSection from "../components/Home/HomeSection"
import FullWidthLayout from "../layouts/FullWithLayout"

const Home = () => {
    return (

        <FullWidthLayout>
            <CarouselComponent />
            <HomeSection />
            <InfiniteCarousel />
        </FullWidthLayout>
    )
}

export default Home