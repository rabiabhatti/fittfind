import React from 'react'

import '../styles/product.css'

function Product(props) {
    return (
        <div className='section-product'>
            <img src={props.img} alt='product_image' width='400' />
            <button className='product-like-btn'>Like icon</button>
            <button className='product-desc'>
                <span className='product-name'>{props.name}</span>
                <span className='product-price'>{props.price}</span>
            </button>
        </div>
    )
}

export { Product }
