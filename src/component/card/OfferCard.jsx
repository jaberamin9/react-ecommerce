import React from 'react'
import './Card.css'
import ProgressBar from "@ramonak/react-progress-bar";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


export default function OfferCard({ product, addCartFun }) {

    const sold_product = Math.round(product.price / 2);
    const stock_product = product.stock;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <ul className="time">
                <li>00</li>
                <li>00</li>
                <li>00</li>
                <li>00</li>
            </ul>;
        } else {
            // Render a countdown
            return <ul className="time">
                <li>{days}</li>
                <li>{hours}</li>
                <li>{minutes}</li>
                <li>{seconds}</li>
            </ul>;
        }
    };

    let res = [];
    for (let i = 1; i <= Math.floor(product.rating); i++) {
        res.push(<i class="ri-star-fill"></i>)
    }
    if ((product.rating - Math.floor(product.rating)) > 0) {
        res.push(<i class="ri-star-half-fill"></i>)
    }
    const remaining = (5 - Math.floor(product.rating)) - (product.rating?.rate - Math.floor(product.rating));
    for (let i = 1; i <= remaining; i++) {
        res.push(<i class="ri-star-line"></i>)
    }
    return (
        <div className='offer-card' key={product.id}>
            <h3 className='offer-h1'>offer ends at</h3>
            <Countdown date="JUL 23, 2023 15:37:25" renderer={renderer}></Countdown>
            <div className="offer-img">
                <Link to={`/product-detail/${product?.id}`}>
                    <img src={product.thumbnail}></img>
                </Link>
                <div className="cart-sm" onClick={() => addCartFun(product, 1)}>
                    <i class="ri-shopping-cart-line"></i>
                </div>
            </div>
            <div>
                <div className="ratting" style={{ marginTop: '-5px', marginBottom: '10px' }}>
                    {res}
                    <p>{"(" + product.rating + ")"}</p>
                </div>
                <h1>{product.title}</h1>
                <div className="price">
                    <h2>${product.price}</h2>
                    <del>${product.price + product.price}</del>
                </div>
                <div className='info-oc'>
                    <p>Stock: <span>{stock_product}</span></p>
                    <p>Sold: <span>{sold_product}</span></p>
                </div>
                <ProgressBar completed={stock_product} maxCompleted={sold_product} height='3px' bgColor='#794afa' customLabel=' ' borderRadius='0px' baseBgColor='#e5e8ec' isLabelVisible={false} />
            </div>
        </div>
    )
}
