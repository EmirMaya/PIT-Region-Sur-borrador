import CarouselComponent from "../components/Carousel/CarouselComponent"
import HomeSection from "../components/Home/HomeSection"
import FullWidthLayout from "../layouts/FullWithLayout"

const Home = () => {
    return (
        <FullWidthLayout>
            <CarouselComponent/>
            <HomeSection/>

        </FullWidthLayout>
    )
}

export default Home