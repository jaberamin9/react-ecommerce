import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Brand.css'

import SliderB from "react-slick";

function Slide({ item }) {
    return (
        <div className='brand-item' key={item.id}>
            <img src={item.url}></img>
        </div>
    )
}

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

export default function Brand() {

    const brandData = [
        {
            id: 1,
            name: "Evaly",
            url: "https://media.e-valy.com/cms/brands/logo/aad137b0-506b-4d64-a4c3-6a59b83a3513?h=350&w=350"
        },
        {
            id: 2,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/68d0a036-ce4f-4e19-a030-322d42adf702?h=350&w=350"
        },
        {
            id: 3,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/fd708ab5-d122-4915-a3b7-862f57cc3671?h=350&w=350"
        },
        {
            id: 4,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/7f4646c1-6e94-43ef-98d3-7def922409bc?h=350&w=350"
        },
        {
            id: 5,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/90aa9a07-f005-47eb-8ea6-dbc8e49cd86d?h=350&w=350"
        },
        {
            id: 6,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/21d527fd-a5a7-4245-ae05-54761c894849?h=350&w=350"
        },
        {
            id: 7,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/e14a1f3e-2e83-4b48-a8ed-552b1aee5841?h=350&w=350"
        },
        {
            id: 8,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/423c6dea-9338-4b94-9442-212d275409bd?h=350&w=350"
        },
        {
            id: 9,
            name: "Fogg",
            url: "https://media.e-valy.com/cms/brands/logo/63b04023-fdca-4364-afd2-3a29bc7ab4db?h=350&w=350"
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <Next />,
        prevArrow: <Prev />,
        className: "cu-slide",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='container'>
            <div className="title-box">
                <div className="title-logo"></div>
                <div className="title">Brands</div>
            </div>
            <div className='brand-box'>
                <SliderB {...settings}>
                    {
                        brandData.map((item) => {
                            return (
                                <div className='brand-item' key={item.id}>
                                    <img src={item.url}></img>
                                </div>
                            )
                        })

                    }
                </SliderB>
            </div>
            <div className='view-more'>
                <div className="more-btn">View all <i className="ri-arrow-right-line" style={{ paddingLeft: '5px' }}></i></div>
            </div>
        </div >
    )
}
