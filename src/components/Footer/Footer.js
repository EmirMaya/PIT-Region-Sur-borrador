import './Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from 'react-router-dom'
const Footer = () => {

    return (
        <footer className="footer">
            <div className='icons-container'>
                <NavLink target="_blank" to="https://www.facebook.com/pitsurmendoza">
                    <FontAwesomeIcon className='foot-icon' icon={faSquareFacebook} size="xl" />
                </NavLink>
                <NavLink target="_blank" to="https://www.instagram.com/pitsurmendoza/">
                    <FontAwesomeIcon className='foot-icon' icon={faSquareInstagram} size="xl" />
                </NavLink>
                <NavLink target="_blank">
                    <FontAwesomeIcon className='foot-icon' icon={faLinkedin} size="xl" />
                </NavLink>
            </div>
            <p className='copyright'>©Copyright 2023 PIT región Sur Mendoza. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer