import React from 'react'
import useStyles from "./Styles"
import {Button} from "@material-ui/core"

function ContactForm() {
    const classes = useStyles()
    return (
            <form className={classes.form}> 
                <label className={classes.label} >Name</label>
                <input className={classes.input} placeholder="your name" />
                <label className={classes.label} >Email</label>
                <input className={classes.input} placeholder="your email" />
                <label className={classes.label} >Message</label>
                <textarea className={classes.messageArea} placeholder="Leave your message here" />
                <Button variant="outlined" color="primary" className={classes.btn} type="submit">submit</Button>
            </form>
    )
}

export default ContactForm
