import React, { useState } from 'react';
import Button from '../common/Button';
import InputField from '../common/InputField';

function ContactSec() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="contact_section layout_padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact_main">
                            <h1 className="contact_taital">Contact Us</h1>
                            <form onSubmit={handleSubmit}>
                                <InputField required unstyled type="text" className="form-group" inputClassName="email-bt" placeholder="Name" />
                                <InputField required unstyled type="email" className="form-group" inputClassName="email-bt" placeholder="Email" />
                                <InputField unstyled type="tel" className="form-group" inputClassName="email-bt" placeholder="Phone Number" />
                                <div className="form-group"><textarea required className="massage-bt" placeholder="Message" rows={5} /></div>
                                <div className="main_bt"><Button type="submit" unstyled>SEND</Button></div>
                            </form>
                            {submitted && <p className="form_message">Thanks, we will be in touch soon.</p>}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="location_text">
                            <ul>
                                <li><a href="#contact"><span className="padding_left_10 active"><i className="fa fa-map-marker" aria-hidden="true" /></span>Making this the first true</a></li>
                                <li><a href="tel:+011234567890"><span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true" /></span>Call : +01 1234567890</a></li>
                                <li><a href="mailto:demo@gmail.com"><span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true" /></span>Email : demo@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="mail_main">
                            <h3 className="newsletter_text">Newsletter</h3>
                            <form className="form-group" onSubmit={(event) => event.preventDefault()}>
                                <InputField required unstyled inputClassName="update_mail" type="email" placeholder="Enter Your Email" />
                                <div className="subscribe_bt"><Button type="submit" unstyled>Subscribe</Button></div>
                            </form>
                        </div>
                        <div className="footer_social_icon">
                            <ul>
                                <li><a href="#contact" aria-label="Facebook"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#contact" aria-label="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#contact" aria-label="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                <li><a href="#contact" aria-label="Instagram"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSec;
