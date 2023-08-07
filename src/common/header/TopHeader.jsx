import React from 'react'
import "./Header.css"
import 'remixicon/fonts/remixicon.css'

export default function TopHeader() {
    return (
        <div className='container'>
            <div className='wrap flex'>
                <div className="left">
                    <i className="ri-facebook-box-line"></i>
                    <i className="ri-linkedin-box-line"></i>
                    <i className="ri-mail-line"></i>
                </div>
                <div className="right">
                    <ul className='flex-c link-g'>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">My Account</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
