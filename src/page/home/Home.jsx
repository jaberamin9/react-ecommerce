import React from 'react'
import Slider from '../../component/Home/slider/Slider'
import Brand from '../../component/Home/brand/Brand'
import Offer from '../../component/Home/offer/Offer'
import ProductSection from '../../component/Home/product-section/ProductSection'
import Header from '../../common/header/Header'

export default function Home({ addCartFun, qunData }) {
    return (
        <>
            <Header isOff={false} qunData={qunData}></Header>
            <Slider></Slider>
            <Brand></Brand>
            <Offer addCartFun={addCartFun}></Offer >
            <ProductSection addCartFun={addCartFun} url={"https://dummyjson.com/products?limit=11&skip=10"} name={"Featured Products"}></ProductSection>
        </>
    )
}
