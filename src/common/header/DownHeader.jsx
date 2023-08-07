import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


function Menu({ visible }) {
    const value = visible ? 'block' : 'none';
    const [data, setData] = useState([]);
    const [hoverValue, setHoverValue] = useState(false);

    useEffect(() => {
        const urls = `https://dummyjson.com/products/categories`;
        fetch(urls).then(res => res.json()).then(data => {
            setData(data);
        });
    }, []);

    function hover() {
        setHoverValue(true)
    }
    function notHover() {
        setHoverValue(false)
    }

    return (
        <>
            <div className='menu' style={{ display: `${value}` }}>
                <ul>
                    {data.map((item, idx) => {
                        if (idx % 5 == 0) {
                            return (
                                <Link to={`/category/${item}`}>
                                    <li key={idx} onMouseOver={hover} onMouseLeave={notHover}>
                                        <a href="#">
                                            <div class="m-icon">
                                                <i class="ri-bear-smile-line"></i>
                                            </div>
                                            {item}
                                            <div class="s-icon">
                                                <i class="ri-arrow-right-s-line"></i>
                                            </div>
                                        </a>
                                    </li>
                                </Link>
                            )
                        } else if (idx % 5 == 1) {
                            return (
                                <Link to={`/category/${item}`}>
                                    <li key={idx}>
                                        <a href="#"><div class="m-icon"><i class="ri-bluetooth-connect-line"></i></div>{item}</a>
                                    </li>
                                </Link>
                            )
                        } else if (idx % 5 == 2) {
                            return (
                                <Link to={`/category/${item}`}>
                                    <li key={idx}>
                                        <a href="#"><div class="m-icon"><i class="ri-t-shirt-air-line"></i></div>{item}</a>
                                    </li>
                                </Link>
                            )
                        } else if (idx % 5 == 3) {
                            return (
                                <Link to={`/category/${item}`}>
                                    <li key={idx}>
                                        <a href="#"><div class="m-icon"><i class="ri-shirt-line"></i></div>{item}</a>
                                    </li>
                                </Link>
                            )
                        } else if (idx % 5 == 4) {
                            return (
                                <Link to={`/category/${item}`}>
                                    <li key={idx}>
                                        <a href="#"><div class="m-icon"><i class="ri-heart-pulse-line"></i></div>{item}</a>
                                    </li>
                                </Link>
                            )
                        }
                    })}
                </ul>
            </div>
            <Chaild hoverValue={hoverValue} setHoverValue={setHoverValue}></Chaild>
        </>
    )
}

function Chaild({ hoverValue, setHoverValue }) {
    const value = hoverValue ? 'block' : 'none';
    function hover() {
        setHoverValue(true)
    }
    function notHover() {
        setHoverValue(false)
    }
    return (<>
        <ul className='chaid-category' style={{ display: `${value}` }} onMouseOver={hover} onMouseLeave={notHover}>
            <li >
                <a href="#">Beauty</a>
            </li>
            <li>
                <a href="#">Electronic</a>
            </li>
            <li>
                <a href="#">Women's Fashion</a>
            </li>
            <li>
                <a href="#">Men's Fashion</a>
            </li>
            <li>
                <a href="#">Girls's Fashion</a>
            </li>
            <li>
                <a href="#">Boy's Fashion</a>
            </li>
            <li>
                <a href="#">Health & Household</a>
            </li>
            <li>
                <a href="#">Home & Kitchen</a>
            </li>
        </ul >
    </>)
}

export default function DownHeader({ isOff }) {

    const [visibility, setVisibility] = useState(!isOff);

    function visibilityControl() {
        setVisibility(!visibility);
    }

    return (
        <div className='bg-box'>
            <div className='container'>
                <div className='flex c-box'>
                    <div className="drop-down-category">
                        <div className='category'>
                            <div class="main-text">All Departments</div>
                            <div class="mini-text">Total 1059 Products</div>
                            {(isOff) ? <div class="dpt-trigger" onClick={visibilityControl}><i class="ri-menu-3-line ri-xl"></i></div> : ""}
                        </div>
                        <Menu visible={visibility}></Menu>
                    </div>
                    <div className="search">
                        <div class="search-box">
                            <form action="" class="search">
                                <span class="icon"><i class="ri-search-line"></i></span>
                                <input type="search" placeholder="Search for products" />
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
