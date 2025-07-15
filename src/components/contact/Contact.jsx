import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0b81d001-e599-43a1-a7ac-257c1936f11c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I m currently available to take on new projects.Feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>sakshibhalla297@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>9264979364</p>

                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>India</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your Name"
                        autoComplete="name"
                        required
                    />

                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Enter your message"
                        autoComplete="off"
                        required
                    ></textarea>

                    <button type="submit" className='contact-submit'>Submit Now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
