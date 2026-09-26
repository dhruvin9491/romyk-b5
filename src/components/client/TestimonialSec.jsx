import React from 'react';
import testimonials from '../../data/testimonials.json';

function TestimonialSec() {
    return (
        <section className="testimonial_section layout_padding">
            <div className="container">
                <h1 className="testimonial_taital">Testimonial</h1>
                <div className="testimonial_section_2">
                    <div className="testimonial_box">
                        <div className="testimonial_track">
                            {testimonials.map((testimonial, index) => (
                                <div className="testimonial_slide" key={`${testimonial.name}-${index}`}>
                                    <p className="testimonial_text">{testimonial.text}</p>
                                    <h4 className="client_name">{testimonial.name}</h4>
                                    <div className="client_img"><img src="/assets/images/client-img.png" alt={testimonial.name} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSec;
