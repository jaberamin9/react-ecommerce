import React, { useState } from 'react'
import Header from '../../common/header/Header'
import './Cart.css'
import CartItem from '../../component/cart/cart-item/CartItem';

export default function Cart({ qunData, addCartFun, singellProductDelete }) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const [couponValue, setCouponValue] = useState('')
    const [discount, setDiscount] = useState(0);
    const [couponError, setCouponError] = useState({});

    const Coupon = [{
        id: 'ghsRTc',
        discount: 10
    },
    {
        id: 'lOCIcd',
        discount: 50
    },
    {
        id: 'NCudis',
        discount: 170
    }
    ]

    function GetCouponValue() {
        let flag = 1;
        Coupon.map((item) => {
            if (item.id === couponValue) {
                setDiscount(item.discount)
                flag = 0;
            }
        })
        if (flag) {
            setDiscount(0)
            setCouponError({
                borderLeft: '3px solid #ff6b6b',
                borderTop: '3px solid #ff6b6b',
                borderBottom: '3px solid #ff6b6b'
            })
        } else {
            setCouponError({
                borderLeft: '3px solid #0a021c',
                borderTop: '3px solid #0a021c',
                borderBottom: '3px solid #0a021c'
            })
        }
    }

    let totalPrice = 0;
    cart.map((item) => {
        totalPrice += (Number(item.price) * Number(item.quantity))
    });

    return (
        <>
            <Header isOff={true} qunData={qunData}></Header>
            <div className='container'>
                <div className='cart'>
                    <h1>Shopping Cart</h1>
                    <div className='cart-box'>
                        <div className="cart-box-left">
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                </tr>
                                {cart.map((item) => {
                                    return (
                                        <CartItem cart={item} addCartFun={addCartFun} singellProductDelete={singellProductDelete}></CartItem>
                                    )
                                }
                                )}
                            </table>
                        </div>
                        <div className="cart-box-right">
                            <div className="coupon-code-box">
                                <input style={couponError} type='text' placeholder='Enter coupon' onChange={(e) => setCouponValue(e.target.value)}></input>
                                <button type='submit' onClick={GetCouponValue}>Apply</button>
                            </div>
                            <div className="total-cost-box">
                                <div className="total-cost-item"><span className='sdt'>Subtotal</span> <span className='cost'>${totalPrice}</span></div>
                                <div className="total-cost-item"><span className='sdt'>Discount</span><span className='cost'>-${discount}</span></div>
                                <div className="total-cost-item"><span className='sdt'>Totall</span><span className='cost f-big'>${totalPrice - discount}</span></div>
                                <button className='check-out-btn'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
