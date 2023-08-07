import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
    return (
        <div className='news-letter-container'>
            <div className='container'>
                <div className="news-letter-box">
                    <div className="news-left">
                        <h1>Join Our Newsletter</h1>
                        <p>Get E-mail updates about our latest shop and <span>special offer</span></p>
                    </div>
                    <div className="news-right">
                        <div className="search news-letter-search">
                            <div className="search-box">
                                <form action="" className="search">
                                    <span className="icon"><i className="ri-mail-line"></i></span>
                                    <input type="search" placeholder="Search for products" />
                                    <button type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
