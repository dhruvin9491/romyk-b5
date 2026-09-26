import React from 'react';
import services from '../../data/services.json';

function ServicesSec() {
    return (
        <section className="services_section layout_padding" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="services_taital">Our Ice Cream Services</h1>
                        <p className="services_text">tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="services_section_2">
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-md-4" key={`${service.title}-${index}`}>
                                <div className="services_box">
                                    <h5 className="tasty_text"><span className="icon_img"><img src={`/assets/images/${service.icon}`} alt="" /></span>{service.title}</h5>
                                    <p className="lorem_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fat</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="seemore_bt"><a href="#contact">Read More</a></div>
            </div>
        </section>
    );
}

export default ServicesSec;
