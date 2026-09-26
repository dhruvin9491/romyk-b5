import React from 'react';
import products from '../../data/products.json';

function CreamSec() {
    return (
        <section className="cream_section layout_padding" id="icecream">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="cream_taital">Our Featured Ice Cream</h1>
                        <p className="cream_text">tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="cream_section_2">
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-4" key={product.image + product.name}>
                                <div className="cream_box">
                                    <div className="cream_img"><img src={`/assets/images/${product.image}`} alt={product.name} /></div>
                                    <div className="price_text">$10</div>
                                    <h6 className="strawberry_text">{product.name}</h6>
                                    <div className="cart_bt"><a href="#contact">Add To Cart</a></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="seemore_bt"><a href="#">See More</a></div>
            </div>
        </section>
    );
}

export default CreamSec;