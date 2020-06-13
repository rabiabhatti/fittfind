import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'gatsby'

import '../styles/product.css'
import {get} from "../api/ecwid";
import like_fill from '../images/like_fill.png'
import like_outline from '../images/like_outline.png'


function Product(props) {
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [liked, setLiked] = useState(false);

    const { id, slider } = props;

    const handleLikePress = useCallback(() => {
        setLiked(!liked)
    },[liked])

    useEffect(() => {
        getProduct(id)
    }, [id])

    const getProduct = (id) => {
        get('products', parseFloat(id)).then(res => {
            setImg(res.hdThumbnailUrl)
            setName(res.name)
            setPrice(`$${res.price}`)
        })
    }


    return (
        <Link className={`section-product ${!!slider && 'slider-product'}`}  to={`${id ? `/product_id=${id}` : `product?id=1`}`}>
            <div className='section-product-image-container'>
                <img src={img} alt='product_image'/>
                <button className='product-like-btn' onClick={handleLikePress}>
                    <img width={18} src={liked ? like_fill : like_outline} alt='like_icon' />
                </button>
            </div>
            <div className='product-desc-container'>
                <button className='product-desc'>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>{price}</p>
                </button>
            </div>
        </Link>
    )

}

export { Product }
