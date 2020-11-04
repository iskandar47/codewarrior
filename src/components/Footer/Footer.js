import React from 'react'
import useStyles from "./Style.js"


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.footerIcons}>
                
                <a href="https://www.linkedin.com/in/salim-driai-b850091b3/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/code_warrior47/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/DriaiSalim" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                
            </div>
            <div className={classes.footerText}>
                <p>All rights reserved / 2020</p>
                <p>salimdriai15@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer
