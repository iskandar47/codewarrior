import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./style.css"

function Navbar() {

    const [click, setClick] = useState(false)
    const [page, setPage] = useState("")

    function handleClick () {
        setClick(!click)
    }

    function closeMobileMenu (e) {
        setPage(e.target.name)
        setClick(false)
    }
    
    return (
        <div className="navbar">
            <div className="menuIcon" onClick={handleClick}>
                <h4>{page}</h4>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? "navbarList active" : "navbarList"}>
                    <li ><Link onClick={closeMobileMenu} name="Home" to="/"><i className="fas fa-home"></i></Link></li>
                    <li ><Link onClick={closeMobileMenu} name="Dev appareal" to="/devappareal">Dev appareal</Link></li>
                    <li ><Link onClick={closeMobileMenu} name="All Products" to="/allproducts">All Products</Link></li>
                    <li ><Link onClick={closeMobileMenu} name="Blogs" to="/blogs">Blogs</Link></li>
                    <li ><Link onClick={closeMobileMenu} name="About us" to="/aboutus">About us</Link></li>
                    <li ><Link onClick={closeMobileMenu} name="Contact" to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
