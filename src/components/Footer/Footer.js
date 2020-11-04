import React from 'react'
import useStyles from "./Style.js"


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.footerIcons}>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <div className={classes.footerText}>
                <p>All rights reserved / 2020</p>
                <p>salimdriai15@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer
