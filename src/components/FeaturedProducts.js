import React, {useState, useCallback, useEffect} from 'react'

import { Product } from './'
import '../styles/slider.css'
import {get} from "../api/ecwid";

import forwardIcon from '../images/forward-icon.png'
// import product_cover from '../images/default_product_cover.png'
import backwardIcon from '../images/backward-icon.png'
import vertical_line_white from '../images/vertical_line_white.png'

// const products_carousel = [
//     {
//         name: 'Loading',
//         price: 0,
//         image: product_cover,
//     },{
//         name: 'Loading',
//         price: 0,
//         image: product_cover
//     },{
//         name: 'Loading',
//         price: 0,
//         image: product_cover
//     },{
//         name: 'Loading',
//         price: 0,
//         image: product_cover
//     }
// ];

function FeaturedProducts () {
    const [pages, setPages] =  useState([1]);
    const [products, setProducts] =  useState([]);
    const [position, setPosition] = useState(0)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const products_pages = [];
        get('categories', '52986347').then(res => {
            setProducts(res.productIds);
            for (let i = 0; i < res.productIds.length / 4; i++) {
                products_pages.push(i)
            }
        })
        setPages(products_pages)
    }

    const handleBackNextProducts = useCallback((type) => {
        if (type === 'next') {
            setPosition(position + 4)
        } else {
            setPosition(position - 4)
        }
    }, [position]);

    return (
        <div className='section-products-slider'>
            <div className='section-products-slider-container row-center'>
                {pages.map(p => (
                    <div className={`section-products-slider-left-bar row-center ${p*4 === position ? 'section-products-slider-active': 'section-products-slider-hide'}`} key={p}>
                        {products.slice(p*4, p*4+4).map((item, i) =>(
                            <Product slider={true} key={i} id={item} />
                        ))}
                    </div>
                ))}
                <div className='section-products-slider-right-bar'>
                    <p>pages</p>
                    {pages.map(i => (
                        <button className={`section-products-slider-active-page ${position === i*4 && 'active-products-slider-page'}`} key={i} onClick={() => setPosition(i*4)}>
                            <p>0{i+1}</p>
                            {position === i*4 && <img className='section-products-slider-active-page-line' src={vertical_line_white} alt='vertical_line_white' />}
                        </button>
                    ))}
                </div>
            </div>
            <div className='section-products-slider-bottom-bar'>
                <button onClick={() => handleBackNextProducts('back')} disabled={position === 0}>
                    <img src={backwardIcon} alt='back_button' />
                </button>
                <button onClick={() => handleBackNextProducts('next')} disabled={position === products.length - 4}>
                    <img src={forwardIcon} alt='next_button' />
                </button>
            </div>
        </div>
    );

}

export { FeaturedProducts }
