import React from 'react'

import useStyles from "./Styles.js"

function About() {
    const classes = useStyles()
    return (
        <div className={classes.about}>
            <h1>About me</h1>
            <div className={classes.identity}>
                <img className={classes.image} src="./r_Salim5x5Compressed.jpg" alt="salim D" />
                <h3>Salim D.</h3>
            </div>
            <div className={classes.skills}>
                <p>- Front-end software developer</p>
                <p>- Specialized in React JS</p>
                <p>- Founder of codewarrior.com</p>
            </div>
        </div>
    )
}

export default About
