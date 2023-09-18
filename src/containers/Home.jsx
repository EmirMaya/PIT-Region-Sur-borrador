import CarouselComponent from "../components/Carousel/CarouselComponent"
import CompaniesCarousel from "../components/CompaniesCarousel/CompaniesCarousel"
import HomeSection from "../components/Home/HomeSection"
import FullWidthLayout from "../layouts/FullWithLayout"

const Home = () => {
    return (

        <FullWidthLayout>
            <CarouselComponent />
            <HomeSection />
            <CompaniesCarousel />
        </FullWidthLayout>
    )
}

export default Home