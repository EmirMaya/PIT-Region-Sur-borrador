import Carousel from 'react-bootstrap/Carousel';
import './CompaniesCarousel.scss';

const CompaniesCarousel = () => {
    return (
        <Carousel className='carousel-container' fade>
            <Carousel.Item className='carousel-item' >
                <img
                    className="d-block companies-img"
                    src="./img/logo-utn-frsr.png"
                    alt="companies-logos"
                />
               
                <img
                    className="d-block companies-img"
                    src="./img/logo-san-rafael.png"
                    alt="companies-logos"
                />
                <img
                    className="d-block companies-img"
                    src="./img/logo-delareta.png"
                    alt="companies-logos"
                />
                <img
                    className="d-block companies-img"
                    src="./img/logo-um.jpg"
                    alt="companies-logos"
                />
            </Carousel.Item>
            <Carousel.Item className='carousel-item' >
                <img
                    className="d-block companies-img"
                    src="./img/logo-alvear.png"
                    alt="companies-logos"
                />
                 <img
                    className="d-block companies-img"
                    src="./img/logo-inst.jpg"
                    alt="companies-logos"
                />
                   <img
                    className="d-block companies-img"
                    src="./img/logo-escuela-merin.jpg"
                    alt="companies-logos"
                />
                   <img
                    className="d-block companies-img"
                    src="./img/logo-colegio-san-antonio.png"
                    alt="companies-logos"
                />
            </Carousel.Item>
            <Carousel.Item className='carousel-item' >
                <img
                    className="d-block companies-img"
                    src="./img/logo-inta.jpg"
                    alt="companies-logos"
                />
                 <img
                    className="d-block companies-img"
                    src="./img/logo-camara-san-rafael.png"
                    alt="companies-logos"
                />
                 <img
                    className="d-block companies-img"
                    src="./img/logo-inti.jpg"
                    alt="companies-logos"
                />
                 <img
                    className="d-block companies-img"
                    src="./img/logo-malargue.jpg"
                    alt="companies-logos"
                />
            </Carousel.Item>
            
            
            
        </Carousel>
    );
}

export default CompaniesCarousel;