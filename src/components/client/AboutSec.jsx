import React from 'react';

function AboutSec(props) {
    return (
        <section className="about_section layout_padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_img"><img src="/assets/images/about-img.png" alt="Ice cream bowl" /></div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="about_taital">About Icecream</h1>
                        <p className="about_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euconsectetur adipiscing esequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                        <div className="read_bt_1"><a href="#contact">Read More</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSec;