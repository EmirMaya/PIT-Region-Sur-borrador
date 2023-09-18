import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss'
const CarouselComponent = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="./img/carousel1.jpg"
                    alt="PIT Region Sur Logo"
                />
                <Carousel.Caption className='caraousel-caption'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="./img/carousel2.jpg"
                    alt="PIT Region Sur Logo"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="./img/carousel3.jpg"
                    alt="PIT Region Sur Logo"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent