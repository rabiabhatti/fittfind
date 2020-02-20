import React from 'react'

import '../styles/single_product.css'
import like_fill from '../images/like_fill.png'
import like_outline from '../images/like_outline.png'
import forwardIcon from '../images/forward-icon.png'
import horizontal_line from '../images/horizontal_line.png'
import single_product_banner from '../images/women_banner.jpg'
import {Wrapper, Hero, ImpossibleBanner, Slider, SizeChart} from '../components'

const sizes = ['XS', 'S', 'M', 'L'];

export default class extends React.Component {
    state = {
        size: null,
        quantity: 1,
        liked: false,
        showChart: false,
        product_images_no: 1,
    };

    handleReduceQuantity = () => {
        const { quantity } = this.state;
        if (quantity <=1) {
            return null
        } else {
            this.setState({ quantity: quantity - 1 })
        }
    };

    handleLikePress = () => {
        const { liked } = this.state;
        this.setState({ liked: !liked })
    };

    handleBackNextImage = (type) => {
        if (type === 'next') {
            this.setState(prevState => {
                return {product_images_no: prevState.product_images_no + 1}
            })
        } else {
            this.setState(prevState => {
                return {product_images_no: prevState.product_images_no - 1}
            })
        }
    };
    handleSizeSelect = (size) => {
        if (this.state.size === size) {
            this.setState({ size: null })
        } else {
            this.setState({ size })
        }
    };

    render() {
        const { quantity, liked, product_images_no, size, showChart } = this.state;
        const product_images_count = [1, 2, 3, 4];

        return(
            <Wrapper name='Single Product'>
                {showChart && <SizeChart handleClose={() => this.setState({ showChart: false })}/>}
                <Hero className='section-single-product-hero'>
                    <div className='section-single-product-hero-left'>
                        <img className='section-single-product-hero-left-line' src={horizontal_line} alt='horizontal_line' />
                        <div className='section-single-product-hero-left-content'>
                            <h1>New! Sport mesh jacket</h1>
                            <p className='single-product-desc'>Sometimes you’ll want to pass data from the source page to the linked page. You can do this by passing a state prop to the Link component or on a call to the navigate function.</p>
                            <div className='section-single-product-handles'>
                                <div className='row-center space-between'>
                                    <p className='section-single-product-price'>$46.00</p>
                                    <span className='single-product-id'>AM-363-166</span>
                                </div>
                                <div className='row-center space-between'>
                                    <p className='section-single-product-handles-text'>Size</p>
                                    <button className='size-chart-btn' onClick={() => this.setState({showChart:true})}>
                                        size & fit
                                        <img src={forwardIcon} alt='forwardIcon' />
                                    </button>
                                </div>
                                <div className='row-center'>
                                    {sizes.map((item, i) => (
                                        <button className={`single-product-size-btn ${item === size && 'selected-size'}`} key={i} onClick={() => this.handleSizeSelect(item)}>{item.toUpperCase()}</button>
                                    ))}
                                </div>
                                <p className=' section-single-product-handles-text'>Quantity</p>
                                <div className='row-center'>
                                    <div className='row-center single-product-quantity-controls space-between'>
                                        <button onClick={this.handleReduceQuantity}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => this.setState({ quantity: quantity + 1 })}>+</button>
                                    </div>
                                    <button className='single-product-cart-btn'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section-single-product-hero-middle' style={{ backgroundImage: `url(${single_product_banner})` }}>
                        <div className='section-single-product-hero-middle-top'>
                            <button className='single-product-like-btn' onClick={this.handleLikePress}>
                                <img src={liked ? like_fill : like_outline} alt='like_icon' />
                            </button>
                            <div className='row-center'>
                                <span className='current-image-no'>0{product_images_no}</span>
                                <div className='column-center'>
                                    <span className='total-dash'>_</span>
                                    <span className='total-single-product-images'>0{product_images_count.length}</span>
                                </div>
                            </div>
                        </div>
                        <div className='section-single-product-hero-middle-bottom'>
                            <button onClick={() => this.handleBackNextImage('back')} disabled={product_images_no === 1}>
                                <img className='section-single-product-hero-middle-bottom-reverse-btn-img' src={forwardIcon} alt='back_button' width={20} />
                            </button>
                            <button onClick={() => this.handleBackNextImage('next')} disabled={product_images_no >= product_images_count.length}>
                                <img src={forwardIcon} alt='next_button' width={20} />
                            </button>
                        </div>
                    </div>
                    <div className='section-single-product-hero-right'>
                        <p className='single-product-hero-right-text'>Images</p>
                        {product_images_count.map((count) => (
                            <button
                                key={count}
                                className={`single-product-count-btn ${count === product_images_no && 'single-product-active-count'}`}
                                onClick={() => this.setState({product_images_no: count})}
                            >
                                0{count}
                            </button>
                        ))}
                    </div>
                </Hero>
                <div className='section-single-product-details-container'>
                    <div className='section-single-product-benefits'>
                        <h3>BENEFITS</h3>
                        <ul>
                            <li>Jules Verne was a French author who the late nineteenth and early twentieth century.</li>
                            <li>Follow him on Twitter.</li>
                            <li>French author who pioneered the genre of science. Follow him on Twitter.</li>
                            <li>French author wh. Follow him on Twitter.</li>
                            <li>The genre of science. Follow him on Twitter.</li>
                            <li>Fiction in the late nineteenth and early twentieth century. Follow him on Twitter.</li>
                        </ul>
                    </div>
                    <div className='section-single-product-details'>
                        <h3>PRODUCT DETAILS</h3>
                        <ul>
                            <li>Jules Verne was a French author who the late nineteenth and early twentieth century.</li>
                            <li>Follow him on Twitter.</li>
                            <li>French author who pioneered the genre of science. Follow him on Twitter.</li>
                            <li>French author wh. Follow him on Twitter.</li>
                            <li>The genre of science. Follow him on Twitter.</li>
                            <li>Fiction in the late nineteenth and early twentieth century. Follow him on Twitter.</li>
                        </ul>
                    </div>
                </div>
                <div className='section-single-product-similar'>
                    <h2>
                        <img className='section-single-product-similar-left-line' src={horizontal_line} alt='horizontal_line' />
                        You'll also love
                    </h2>
                    <Slider type='products' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
