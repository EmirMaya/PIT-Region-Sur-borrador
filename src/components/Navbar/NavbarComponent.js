
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Navbar.scss'
const NavbarComponent = () => {

    return (
        <>
            <div className="social-icons">
                <ul className="navbar-nav">
                    <li className="icon-li">
                        <NavLink target="_blank" to="https://www.facebook.com/pitsurmendoza">
                            <FontAwesomeIcon className='icon' icon={faSquareFacebook} size="xl" />
                        </NavLink>
                    </li>
                    <li className="icon-li">
                        <NavLink target="_blank" to="https://www.instagram.com/pitsurmendoza/">
                            <FontAwesomeIcon className='icon' icon={faSquareInstagram} size="xl" />
                        </NavLink>
                    </li>
                    <li className="icon-li">
                        <NavLink target="_blank">
                            <FontAwesomeIcon className='icon' icon={faLinkedin} size="xl" />
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Navbar collapseOnSelect expand="lg" className="navbar" sticky="top">
                <Container className='container-fluid '>
                    <Navbar.Brand className='navbar-brand' href="./">
                        <img
                            src="./img/pit-region-sur-blanco.png"
                            className="d-inline-block align-top pitLogo"
                            alt="PIT Region Sur Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='nav-cont' id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link className='nav-link' href="#deets">Inicio</Nav.Link>
                            <Nav.Link className='nav-link' href="#deets">Proyectos</Nav.Link>
                            <Nav.Link className='nav-link' href="#deets">Nosotros</Nav.Link>
                            <Nav.Link className='nav-link' href="#deets">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent