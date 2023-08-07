import React, { useState } from 'react'
import '../../../page/cart/Cart.css'

export default function CartItem({ cart, addCartFun, singellProductDelete }) {

    const [qun, setQun] = useState(Number(cart.quantity));
    function increment() {
        addCartFun(cart, Number(qun + 1))
        setQun(qun + 1);
    }
    function decrement() {

        if (qun <= 1) {
            setQun(1);
            addCartFun(cart, 1)
        } else {
            addCartFun(cart, Number(qun - 1))
            setQun(qun - 1);
        }
    }
    function IncAndDec(value) {
        if (value <= 0) {
            setQun(1);
            addCartFun(cart, 1)
        } else {
            setQun(value);
            addCartFun(cart, Number(value))
        }

    }


    return (
        <>
            <tr key={cart.id} className='table-row'>
                <td className='img-and-title'>
                    <img src={cart.thumbnail}></img>
                    {cart.title}
                </td>
                <td>${cart.price}</td>
                <td className='qun-btn-box'>
                    <div className='qun-btn'>
                        <span onClick={decrement} > -</span><input value={qun} onInput={(e) => IncAndDec(Number(e.target.value))} /><span onClick={increment}>+</span>
                    </div></td>
                <td className='subtotal-box'>
                    <div className='subtotal-box-element'>
                        ${Number(cart.price) * qun}<i className="ri-close-line" onClick={() => singellProductDelete(cart)}></i>
                    </div>
                </td>
            </tr >
        </>
    )
}
