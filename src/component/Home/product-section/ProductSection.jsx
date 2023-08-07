import React, { useEffect, useState } from 'react'
import Cardsm from '../../card/Cardsm';
import './ProductSection.css'

export default function ProductSection({ url, name, addCartFun }) {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const urls = url;
        fetch(urls).then(res => res.json()).then(data => {
            setData(data.products);
        });
    }, []);

    return (
        <div className='container-o-h'>
            <div className="title-box">
                <div className="title-logo"></div>
                <div className="title">{name}</div>
            </div>
            <div className='product-section-box'>
                {data.map((item) => {
                    return (
                        <Cardsm product={item} addCartFun={addCartFun}></Cardsm>
                    )
                })}

            </div>
            <div className='view-more'>
                <div className="more-btn">View all <i className="ri-arrow-right-line" style={{ paddingLeft: '5px' }}></i></div>
            </div>
        </div>
    )
}
