import React from 'react'
import Slider from "react-slick";

import './ProductImage.css'

function Next(props) {
    const { className, style, onClick } = props;
    return (
        <div className='fwd-b-btn' onClick={onClick}><i className="ri-arrow-right-s-line btn-icon"></i></div>
    );
}

function Prev(props) {
    const { className, style, onClick } = props;
    return (
        <div className='rev-b-btn' onClick={onClick}><i className="ri-arrow-left-s-line btn-icon"></i></div>
    );
}
export default function ProductImage({ productImage }) {

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={productImage[i]} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </a>
            );
        },
        dots: true,
        // dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "dot-product",
        nextArrow: <Next />,
        prevArrow: <Prev />,
        // className: "product-img",
    };

    return (
        <div className='product-box'>
            <Slider {...settings}>
                {productImage.map((item) => {
                    return (
                        <div className='product-item'>
                            <img src={item} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
