import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home/Home.jsx"
import SingelProduct from "./page/single_product/SingleProduct.jsx"
import { useState } from 'react';
import Root from './routes/Root';
import Cart from './page/cart/Cart'
import Category from './page/category/Category';

function App() {
  const cartTotallQuantity = Number(JSON.parse(localStorage.getItem('cart_qun')) || 0)
  const [data, setData] = useState(cartTotallQuantity)

  function AddToCart(singelProduct, singelItemQuantity) {
    let previousTotallQuantity = 0;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find((item) => item.id === singelProduct.id);

    if (isProductExist) {
      const updateCard = cart.map((item) => {
        if (item.id === singelProduct.id) {
          previousTotallQuantity = item.quantity
          return {
            ...item, quantity: singelItemQuantity
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updateCard))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...singelProduct, quantity: singelItemQuantity }]))
    }

    localStorage.setItem('cart_qun', JSON.stringify((cartTotallQuantity - previousTotallQuantity) + singelItemQuantity))
    setData((cartTotallQuantity - previousTotallQuantity) + singelItemQuantity)
  }

  function SingellProductDelete(singelProduct) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify(cart.filter(function (item) { return item.id != singelProduct.id; })))

    localStorage.setItem('cart_qun', JSON.stringify(cartTotallQuantity - Number(singelProduct.quantity)))
    setData((cartTotallQuantity - Number(singelProduct.quantity)))
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          index: true,
          element: <Home addCartFun={AddToCart} qunData={data}></Home>,
        }, {
          path: "/product-detail/:id",
          element: <SingelProduct addCartFun={AddToCart} qunData={data}></SingelProduct>,
          loader: function ({ params }) {
            return fetch(`https://dummyjson.com/products/${params.id}`);
          }
        }, {
          path: "/cart",
          element: <Cart qunData={data} addCartFun={AddToCart} singellProductDelete={SingellProductDelete}></Cart>,
        }, {
          path: "/category/:categoryName",
          element: <Category qunData={data} addCartFun={AddToCart}></Category>,
          loader: function ({ params }) {
            return fetch(`https://dummyjson.com/products/category/${params.categoryName}`);
          }
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
