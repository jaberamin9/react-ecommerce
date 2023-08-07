import React from 'react'
import './Category.css'
import { useLoaderData } from "react-router-dom";
import Header from '../../common/header/Header';
import Cardsm from '../../component/card/Cardsm';

export default function Category({ qunData, addCartFun }) {
    const categoryProduct = useLoaderData();
    console.log(categoryProduct)

    const cdata = [
        {
            name: 'Category',
            ele: [{ it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }]
        }, {
            name: 'Brand',
            ele: [{ it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }, { it: 'Bag', co: 34 }]
        }, {
            name: 'Color',
            ele: ['#000', '#hhh', '#678', '#ddd']
        }
    ]

    return (
        <>
            <Header isOff={true} qunData={qunData}></Header>
            <div className='container'>
                <div className="category-box">
                    <div className="category-box-left">
                        {cdata.map((item) => {
                            return (
                                <>
                                    <div className="category-box-left-item">
                                        <h6>{item.name}</h6>
                                        {(item.name === 'Color') ?
                                            <div className='category-item'>
                                                <div className="color-element">
                                                    {item.ele.map((i) => {
                                                        return (
                                                            <div className="element" style={{ backgroundColor: `${i}` }}></div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            :
                                            item.ele.map((i) => {
                                                return (
                                                    <div className='category-item'>
                                                        <div style={{ display: 'flex' }}>
                                                            <input type='checkbox' ></input>
                                                            <p>{i.it}</p>
                                                        </div>
                                                        <p>{i.co}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        })}

                    </div>
                    <div className="category-box-right">
                        <h2 className='category-name'>{categoryProduct.products[0].category}</h2>
                        <div className="filter-box">
                            <div className="sort-box">
                                <select class="sort-select-input">
                                    <option>Sort by default</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div className="sort-box">
                                <select class="sort-select-input">
                                    <option>Show 10 per page</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className='category-product-box'>
                            {categoryProduct.products.map((item) => {
                                return (
                                    <Cardsm product={item} addCartFun={addCartFun}></Cardsm>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
