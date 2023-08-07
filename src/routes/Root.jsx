import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../component/Home/banner/Banner'
import NewsLetter from '../component/Home/newsletter/NewsLetter'
import Footer from '../common/footer/Footer'

export default function Root() {
    return (
        <>
            <Outlet></Outlet>
            <Banner></Banner>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>
    )
}
