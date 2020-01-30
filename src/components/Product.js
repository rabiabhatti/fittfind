import React from 'react'
import { Link } from 'gatsby'

import '../styles/product.css'
import like_fill from '../images/like_fill.png'
import like_outline from '../images/like_outline.png'
import product_price_container from '../images/product_price_container.png'

class Product extends React.Component {
    state = {
        liked: false,
    };

    handleLikePress = () => {
        const { liked } = this.state;
        this.setState({ liked: !liked })
    };

    render() {
        const { liked } = this.state;
        const { img, name, price, id, slider } = this.props;
        return (
            <div className={`section-product ${!!slider && 'slider-product'}`}>
                <div className='section-product-image-container'>
                    <img src={img} alt='product_image'/>
                    <button className='product-like-btn' onClick={this.handleLikePress}>
                        <img src={liked ? like_fill : like_outline} alt='like_icon' />
                    </button>
                </div>
                <Link className='product-desc-container' to={`product?id=${id}`}>
                    <button className='product-desc'>
                        <p className='product-name'>{name}</p>
                        <p className='product-price'>{price}</p>
                    </button>
                </Link>
            </div>
        )
    }
}

export { Product }
