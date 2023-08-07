import React, { useEffect, useState } from 'react'
import OfferCard from '../../card/OfferCard'
import './Offer.css'

export default function Offer({ addCartFun }) {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const urls = `https://dummyjson.com/products?limit=8`;
        fetch(urls).then(res => res.json()).then(data => {
            setData(data.products);
        });
    }, []);

    return (
        <div className='container-o-h'>
            <div className="title-box">
                <div className="title-logo"></div>
                <div className="title">Best Offers</div>
            </div>
            <div className='offer-box'>
                {data.map((item) => {
                    return (
                        <OfferCard product={item} addCartFun={addCartFun}></OfferCard>
                    )
                })}

            </div>
            <div className='view-more'>
                <div className="more-btn">View all <i className="ri-arrow-right-line" style={{ paddingLeft: '5px' }}></i></div>
            </div>
        </div>
    )
}
