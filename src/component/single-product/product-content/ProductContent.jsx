import React, { useState } from 'react'
import './ProductContent.css'

function DropDown({ item }) {
    const [data, setData] = useState(false);
    function OnOff() {
        setData(!data);
    }
    return (
        <div className="drop-down-product">
            <div className="drop-down-product-head" onClick={OnOff}>
                <span>{data ? '-' : '+'}</span><p>{item.name}</p>
            </div>
            <div className="drop-down-product-content" style={{ display: `${data ? 'block' : 'none'}` }}>
                <p>{item.details}</p>
            </div>
        </div>
    )
}

export default function ProductContent({ product, addCartFun }) {
    const [qun, setQun] = useState(1);

    const size = [6, 7, 8, 9];
    const color = ['rgb(114, 210, 226)', 'rgb(133, 114, 226)', 'rgb(226, 112, 122)']

    const mainData = [
        {
            name: "Information",
            details: "Discount Percentage : " + product.discountPercentage + "\n" + product.description
        }, {
            name: "Details",
            details: product.description
        }, {
            name: "Custom",
            details: "Discount Percentage : " + product.discountPercentage + "\n" + product.description
        }, {
            name: "Reviews",
            details: "jvkdjfv ifvdfbv idufhvi di diudhibudu i duiu d id hviduhfivdhiui  hd hivdh"
        }
    ]

    function increment() {
        setQun(qun + 1);
    }
    function decrement() {
        if (qun <= 1) setQun(1);
        else setQun(qun - 1);
    }

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
        <div className='product-content-box'>
            <h1>{product.title}</h1>
            <div className="ratting" style={{ marginTop: '-5px', marginBottom: '10px' }}>
                {res}
                <p>{"(" + product.rating + ")"}</p>
            </div>
            <div className='stock-box'>
                <div className="stock">In Stock</div>
                <p>SKU-56</p>
            </div>
            <div className="price">
                <h2>${product.price}</h2>
                <del>${product.price + product.price}</del>
            </div>
            <div className="color">
                <h3>Color</h3>
                <div className="color-element">
                    {color.map(item => <div className="element" style={{ backgroundColor: `${item}` }}></div>)}
                </div>
            </div>
            <div className="size">
                <h3>Size</h3>
                <div className="size-element">
                    {size.map(item => <div className="element">{item}</div>)}
                </div>
            </div>
            <div className="qun-and-btn-box">
                <div className="qun-box">
                    <div className="element" onClick={decrement}>-</div>
                    <input className="element-txt" value={qun} type='text' onInput={(e) => setQun(Number(e.target.value))} />
                    <div className="element" onClick={increment}>+</div>
                </div>
                <div className='bnt-box'>
                    <div className="btn btn1" onClick={() => addCartFun(product, qun)}>Add to cart</div>
                    <div className="btn btn2">Buy Now</div>
                </div>
            </div>
            <div className='share-box'>
                <div className="share"><i className="ri-share-line"></i> <span>Share</span></div>
            </div>
            <div className="drop-down-product-info">
                {mainData.map(item => {
                    return (
                        <DropDown item={item}></DropDown>
                    )
                })}
            </div>
        </div>
    )
}
