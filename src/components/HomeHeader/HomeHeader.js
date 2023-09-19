import NavbarComponent from "../Navbar/NavbarComponent";
import './HomeHeader.scss';

const HomeHeader = () => {
    return (
        <>
            <div className="header-container">
                <p>Bienvenido al</p>
                <h1>Polo de Innovación Tecnológica</h1>
                <p>Region Sur Mendoza</p>
                <div class="area" >

                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </div >


            <NavbarComponent />
        </>
    )
}

export default HomeHeader;