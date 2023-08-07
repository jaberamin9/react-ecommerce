import React from 'react'
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderC from "react-slick";


function MainSlide({ image }) {
    return (
        <div key={image.id}>
            <div class="slide">
                <div class="item">
                    <div class="image object-cover">
                        <img src={image.url} />
                    </div>
                    <div class="text-content flexcol">
                        <h4>Shoes Fashion</h4>
                        <h2><span>Come and Get it!</span><br /><span>Brand New Shoes</span></h2>
                        <a href="#" class="primary-button">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Next(props) {
    const { className, style, onClick } = props;
    return (
        <div className='fwd-btn' onClick={onClick}><i className="ri-arrow-right-s-line btn-icon"></i></div>
    );
}

function Prev(props) {
    const { className, style, onClick } = props;
    return (
        <div className='rev-btn' onClick={onClick}><i className="ri-arrow-left-s-line btn-icon"></i></div>
    );
}

export default function Slider() {
    const slideImage = [
        {
            id: 1,
            url: "https://i.ibb.co/XyZFPYx/slider2.jpg"
        },
        {
            id: 2,
            url: "https://i.ibb.co/MpR1TqK/slider1.jpg"
        },
        {
            id: 3,
            url: "https://i.ibb.co/RPRVsJY/slider0.jpg"
        },
        {
            id: 4,
            url: "https://i.ibb.co/Vth9HnS/slider3.jpg"
        }]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <Next />,
        prevArrow: <Prev />,
        lazyLoad: true,
        appendDots: dots => (
            <div style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40px',
                bottom: 0,
                zIndex: 20,
                width: '100%'
            }}>
                <div className='dot-bg'>
                    <div className='dot'>
                        {dots}
                    </div>
                </div>
            </div>
        ),
        customPaging: i => (
            <div className='dot-item'></div>
        )
    }
    return (
        <div className='container'>
            <div className='slider'>
                <SliderC {...settings}>
                    {slideImage.map((item) => {
                        return (<MainSlide image={item}></MainSlide>)
                    })}
                </SliderC>
            </div>
        </div>
    )
}
