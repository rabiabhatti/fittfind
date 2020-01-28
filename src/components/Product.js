import React from 'react'

import '../styles/product.css'
import like_fill from '../images/like_fill.png'
import like_outline from '../images/like_outline.png'

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
        const { img, name, price, id } = this.props;
        return (
            <div className='section-product' id={`product${id}`}>
                <img src={img} alt='product_image'/>
                <button className='product-like-btn' onClick={this.handleLikePress}>
                    <img src={liked ? like_fill : like_outline} alt='like_icon' />
                </button>
                <button className='product-desc'>
                    <span className='product-name'>{name}</span>
                    <span className='product-price'>{price}</span>
                </button>
            </div>
        )
    }
}

export { Product }
