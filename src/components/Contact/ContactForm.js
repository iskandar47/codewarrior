import React, {useState} from 'react'
import useStyles from "./Styles"
import {Button} from "@material-ui/core"
import {database} from "./firebase"

function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        
        database.collection("contact")
        .add({
            name: name,
            email: email,
            message: message
        })
        .then(()=>setLoading(false))
        .catch((error)=>{
            alert(error.message)
            setLoading(false)
        })
        setName("")
        setEmail("")
        setMessage("")
    }

    const classes = useStyles()
    return (
            <form className={classes.form} onSubmit={handleSubmit} > 
                <label className={classes.label} >Name</label>
                <input 
                className={classes.input} 
                type="text" 
                placeholder="your name" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required 
                />
                <label className={classes.label} >Email</label>
                <input 
                className={classes.input} 
                type="email" 
                placeholder="your email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required 
                />
                <label className={classes.label} >Message</label>
                <textarea 
                className={classes.messageArea} 
                placeholder="Leave your message here"  
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                required 
                />
                <Button 
                variant="outlined" 
                className={classes.btn} 
                type="submit"
                >
                {loading ? "submitting..." : "submit"}
                </Button>
            </form>
    )
}

export default ContactForm
