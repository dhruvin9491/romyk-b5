import React from 'react';
import slides from '../../data/slides.json';

function HeroSec() {
    return (
        <section className="banner_section layout_padding" aria-label="Featured ice cream">
            <div className="container">
                <div className="hero_track">
                    {slides.map((slide) => (
                        <div className="hero_slide" key={slide.number}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="banner_taital">{slide.title}</h1>
                                    <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                                    <div className="started_text"><a href="#icecream">Order Now</a></div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="banner_img"><img src={`/assets/images/${slide.image}`} alt="Ice cream cone" /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSec;
