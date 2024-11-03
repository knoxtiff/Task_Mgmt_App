import React from "react"; 
import NavBar from "../Components/NavBar";
import './contact.css'

function ContactUs() {
    return (
    <div>
        <NavBar />
        <h1>Need to Reach Out?</h1>
        <h3>You're in the right place!</h3>
        <form className="contactUs-form">
            <div>
                <input className="contactUs-input" placeholder="First Name" type="text" required />
            </div>
            <div>
                <input className="contactUs-input" placeholder="Last Name" type="text" required />
            </div>
            <div>
                <input className="contactUs-input" placeholder="Email Address" type="email" required />
            </div>
            <div>
                <textarea className="contactUs-textarea" placeholder="Comments or Questions" typeof="text" rows="4" required /> 
            </div>
                <button type="submit" className="contact-submit">Submit</button>
        </form>
    </div>
    );
}

export default ContactUs;