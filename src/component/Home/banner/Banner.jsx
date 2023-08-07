import React from 'react'
import './Banner.css'

function BannerCard() {
    return (
        <>
            <div className='banner'>
                <div className="banner-image">
                    <img src="https://i.ibb.co/D5X390D/banner1.jpg" />
                </div>
                <div className="banner-content">
                    <div>
                        <h4>Shoes Fashion</h4>
                        <h2><span>Come and Get it!</span><br /><span>Brand New Shoes</span></h2>
                        <a href="#" className="primary-button-banner">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className='banner'>
                <div className="banner-image banner-image-gray">
                    <img src="https://i.ibb.co/yd9dwFr/banner2.jpg" />
                </div>
                <div className="banner-content">
                    <div>
                        <h4>Shoes Fashion</h4>
                        <h2><span>Come and Get it!</span><br /><span>Brand New Shoes</span></h2>
                        <a href="#" className="primary-button-banner">Shop Now</a>
                    </div>
                </div>
            </div></>
    )
}

export default function Banner() {
    return (
        <div className='container-o-h'>
            <div className="banner-box">
                <BannerCard></BannerCard>
            </div>
        </div>
    )
}
