import Footer from "../components/Footer/Footer"
import NavbarContent from "../components/Navbar/NavbarComponent"

const FullWidthLayout = ({ children }) => {
    return (
        <>
            <NavbarContent />
            {children}
            <Footer />
        </>
    )
}

export default FullWidthLayout