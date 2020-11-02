import React from 'react'
import ContactForm from "../components/Contact/ContactForm"
import About from "../components/Contact/About"
import "../index.css"


function Contact() {

    return (
        <div className="contact">
            <About />
            <ContactForm />
        </div>
    )
}

export default Contact
