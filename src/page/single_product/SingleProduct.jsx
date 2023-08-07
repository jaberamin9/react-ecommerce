import React from 'react'
import { useLoaderData } from "react-router-dom";
import Header from '../../common/header/Header';
import ProductContent from '../../component/single-product/product-content/ProductContent'
import ProductImage from '../../component/single-product/product-image/ProductImage'
import ProductSection from '../../component/Home/product-section/ProductSection'
import './SingleProduct.css'

export default function SingleProduct({ addCartFun, qunData }) {
    const product = useLoaderData();
    return (
        <>
            <Header isOff={true} qunData={qunData}></Header>
            <div className='container'>
                <div className="sp-box">
                    <div className="sp-left">
                        <ProductImage productImage={product.images}></ProductImage>
                    </div>
                    <div className="sp-right">
                        <ProductContent product={product} addCartFun={addCartFun}></ProductContent>
                    </div>
                </div>
            </div>
            <ProductSection url={"https://dummyjson.com/products/category/" + `${product.category}` + "?limit=11"} name={"Related Products"}></ProductSection>
        </>

    )
}
