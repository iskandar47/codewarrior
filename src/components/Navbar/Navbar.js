import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./style.css"

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <div className="navbar">
            <div className="menuIcon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? "navbarList active":"navbarList"}>
                {/* <Router>
                <Route> */}
                    <li  onClick={closeMobileMenu}><Link to="/">Home</Link></li>
                    <li  onClick={closeMobileMenu}><Link to="/devappareal">Dev appareal</Link></li>
                    <li  onClick={closeMobileMenu}><Link to="/allproducts">All Products</Link></li>
                    <li  onClick={closeMobileMenu}><Link to="/blogs">Blogs</Link></li>
                    <li  onClick={closeMobileMenu}><Link to="/aboutus">About us</Link></li>
                    <li  onClick={closeMobileMenu}><Link to="/contact">Contact</Link></li>
                {/* </Route>
                </Router> */}
            </ul>
        </div>
    )
}

export default Navbar
