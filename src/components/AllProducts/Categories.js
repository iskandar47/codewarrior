import React, {useState} from 'react'
import "./Categories.css"

function Categories() {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    return (
        <div className="categories">
            <div className="dropDown">
                <h5 onClick={handleClick}>Categories <i className={open? "fas fa-chevron-up" :"fas fa-chevron-down"}></i></h5>
            </div>
            <ul className={open ? "categoriesList active" : "categoriesList"}>
                <li>Electronics</li>
                <li>Appareal</li>
                <li>Health & Beauty</li>
                <li>Accessories</li>
                <li>Other</li>
            </ul>
        </div>
    )
}

export default Categories
