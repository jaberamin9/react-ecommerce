import React from 'react'
import TopHeader from './TopHeader'
import MidHeader from './MidHeader'
import DownHeader from './DownHeader'

export default function Header({ isOff, qunData }) {

    return (
        <div>
            <TopHeader></TopHeader>
            <MidHeader qunData={qunData}></MidHeader>
            <DownHeader isOff={isOff} ></DownHeader>
        </div>
    )
}
