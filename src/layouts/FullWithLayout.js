import Footer from "../components/Footer/Footer"
import NavbarContent from "../components/Navbar/NavbarComponent"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import { useLocation } from "react-router-dom"

const FullWidthLayout = ({ children }) => {
    // igualamos a la ruta de home
    const location = useLocation();
    const isRoothPath = location.pathname === '/';

    return (
        <>
            {isRoothPath ? <HomeHeader /> : <NavbarContent />}
            {children}
            <Footer />
        </>
    )
}

export default FullWidthLayout