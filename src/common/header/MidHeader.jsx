import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Chaild() {
    return (<>
        <i className="ri-arrow-down-s-line"></i>
        <div className='box'>
            <div className='flex'>
                <div className='sub-box'>
                    <h4>Women's Clothing</h4>
                    <ul><li><a href="#">Dresses</a></li><li><a href="#">Tops &amp; Tees</a></li><li><a href="#">Jackets &amp; Coats</a></li><li><a href="#">Pants &amp; Capris</a></li><li><a href="#">Shorts</a></li><li><a href="#">Dresses</a></li><li><a href="#">Tops &amp; Tees</a></li><li><a href="#">Jackets &amp; Coats</a></li><li><a href="#">Pants &amp; Capris</a></li><li><a href="#">Shorts</a></li></ul>
                </div>
                <div className='sub-box'>
                    <h4>Jewelry</h4>
                    <ul><li><a href="#">Pants &amp; Capris</a></li><li><a href="#">Shorts</a></li><li><a href="#">Dresses</a></li><li><a href="#">Tops &amp; Tees</a></li><li><a href="#">Jackets &amp; Coats</a></li><li><a href="#">Pants &amp; Capris</a></li><li><a href="#">Shorts</a></li></ul>
                </div>
                <div className='sub-box'>
                    <h4>Beauty</h4>
                    <ul><li><a href="#">Tops &amp; Tees</a></li><li><a href="#">Jackets &amp; Coats</a></li><li><a href="#">Pants &amp; Capris</a></li><li><a href="#">Shorts</a></li><li><a href="#">Dresses</a></li><li><a href="#">Hermes</a></li><li><a href="#">Gucci</a></li><li><a href="#">Zara</a></li><li><a href="#">Nike</a></li></ul>
                </div>
                <div className='sub-box'>
                    <h4>Top Brand</h4>
                    <ul class="women-brands"><li><a href="#">Nike</a></li><li><a href="#">Louis Vuitton</a></li><li><a href="#">Hermes</a></li><li><a href="#">Gucci</a></li><li><a href="#">Zara</a></li><li><a href="#">Nike</a></li><li><a href="#">Louis Vuitton</a></li><li><a href="#">Hermes</a></li><li><a href="#">Gucci</a></li><li><a href="#">Zara</a></li><li><a href="#">Louis Vuitton</a></li></ul>
                </div>
            </div>
        </div>
    </>
    )
}

function SmallCart({ qunData, style }) {
    const value = style ? 'block' : 'none'
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //const [totalPrice, setTotalPrice] = useState(0);
    let totalPrice = 0;
    cart.map((item) => {
        totalPrice += (Number(item.price) * Number(item.quantity))
    });

    return (
        <div className='small-cart-box' style={{ display: `${value}` }}>
            <h5>{qunData} items in cart</h5>
            <div className='small-cart-product-container'>
                {cart.map((item) => {
                    return (
                        <div className='small-cart-product-box'>
                            <img src={item.thumbnail}></img>
                            <div className='small-cart-product-content'>
                                <p className='small-cart-product-title'>{item.title}</p>
                                <p className='small-cart-product-price'>${item.price} x {item.quantity}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p className='totall-title'>subtotal</p>
            <p className='small-cart-total-price'>${totalPrice}</p>
            <div className='btn1'>Checkout</div>
            <Link to={'/cart'}> <div className='btn2'>View Cart</div></Link>
        </div>
    )
}

export default function MidHeader({ qunData }) {
    const [style, setStyle] = useState(false);
    function ShowCart() {
        setStyle(!style)
    }

    return (
        <div className='container'>
            <div className='wrap flex p-0'>
                <div className="left-mh">
                    <ul className='flex-c link-g'>
                        <li className='logo'>LOGO</li>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><a href="#">Shope</a></li>
                        <li className='has-chaild'><a href="#">Woman <Chaild></Chaild></a></li>
                        <li><a href="#">Man</a></li>
                        <li><a href="#">Sports</a></li>
                    </ul>
                </div>
                <div className="right-mh" onClick={ShowCart}>
                    <i className="ri-shopping-cart-2-line"><span className='round'>{qunData}</span><SmallCart qunData={qunData} style={style}></SmallCart></i>
                </div>
            </div>
        </div>
    )
}
