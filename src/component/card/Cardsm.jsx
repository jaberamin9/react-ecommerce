import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export default function Cardsm({ product, addCartFun }) {

    const sold_product = Math.round(product.price / 2);
    const stock_product = product.stock;

    let res = [];
    for (let i = 1; i <= Math.floor(product.rating); i++) {
        res.push(<i class="ri-star-fill"></i>)
    }
    if ((product.rating - Math.floor(product.rating)) > 0) {
        res.push(<i class="ri-star-half-fill"></i>)
    }
    const remaining = (5 - Math.floor(product.rating)) - (product.rating - Math.floor(product.rating));
    for (let i = 1; i <= remaining; i++) {
        res.push(<i class="ri-star-line"></i>)
    }

    return (
        <div className='card-sm' key={product?.id}>
            <div className="card-sm-left">
                <Link to={`/product-detail/${product?.id}`}>
                    <img src={product.thumbnail}></img>
                </Link>
                <div className="cart-sm" onClick={() => addCartFun(product, 1)}>
                    <i class="ri-shopping-cart-line"></i>
                </div>
            </div>
            <div className="card-sm-right">

                <h1>{product.title}</h1>
                <div className="ratting">
                    {res}
                    <p>{"(" + product.rating + ")"}</p>
                </div>
                <div className="price">
                    <h2>${product.price}</h2>
                    <del>${product.price + product.price}</del>
                </div>
                <div className="extra-bbox">
                    <div className="extra">
                        {sold_product} sold<br />
                        Free Shipping<br />
                        <span>Stock: {stock_product} left</span>
                    </div>
                    <div className='cart-sm-box'>
                        {/* <div className="cart-sm">
                            <i class="ri-shopping-cart-line"></i>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
