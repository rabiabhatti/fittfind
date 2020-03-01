import React from 'react'
import {graphql, navigate} from 'gatsby'

import '../styles/single_product.css'
import like_fill from '../images/like_fill.png'
import { STRAPI_SERVER_URL } from '../../common'
import forwardIcon from '../images/forward-icon.png'
import right_arrow from "../images/right_arrow.png";
import like_outline from '../images/like_outline.png'
import horizontal_line from '../images/horizontal_line.png'
import background_imag from "../images/background-blue-imag.jpg";
import vertical_line_white from "../images/vertical_line_white.png";
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

    handleCartClick = async () => {
        await navigate(`/basket/`);
    };

    render() {
        const { quantity, liked, product_images_no, size, showChart } = this.state;
        // const product_images_count = [1, 2, 3, 4];
        const product = this.props.data.strapiProduct;
        const product_images_count = [];
        product.images.map((img, i) => product_images_count.push(i+1));
        console.log(product_images_no)

        return(
            <Wrapper name='Single Product' location={this.props.location}>
                {showChart && <SizeChart handleClose={() => this.setState({ showChart: false })} />}
                <div className='section-background'>
                    <img className='section-background-blue-right women' src={background_imag} alt='background_blue_imag' />
                </div>
                <Hero className='section-single-product-hero'>
                    <div className='section-single-product-hero-left'>
                        <img className='section-single-product-hero-left-line' src={horizontal_line} alt='horizontal_line' />
                        <div className='section-single-product-hero-left-content'>
                            <h1>{product.name}</h1>
                            <p className='single-product-desc'>Sometimes you’ll want to pass data from the source page to the linked page. You can do this by passing a state prop to the Link component or on a call to the navigate function.</p>
                            <div className='section-single-product-handles'>
                                <div className='row-center space-between'>
                                    <p className='section-single-product-price'>${product.price}.00</p>
                                    <span className='single-product-id'>{product.product_id}</span>
                                </div>
                                <div className='row-center space-between'>
                                    <p className='section-single-product-handles-text'>Size</p>
                                    <button className='size-chart-btn' onClick={() => this.setState({ showChart: true })}>
                                        <span>size & fit</span>
                                        <img src={right_arrow} alt='right_arrow' width={5} />
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
                                    <button className='single-product-cart-btn' onClick={this.handleCartClick}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section-single-product-hero-middle'>
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
                        {product.images.map((img, i) => (
                            <img
                                key={img.url}
                                alt='single_product_banner'
                                src={`${STRAPI_SERVER_URL}${img.url}`}
                                className={`section-single-product-hero-middle-banner ${product_images_no === i+1 ? 'show_single_product_banner': 'hide_single_product_banner'}`}
                            />
                        ))}
                        <div className='section-single-product-hero-middle-bottom'>
                            <button onClick={() => this.handleBackNextImage('back')} disabled={product_images_no === 1}>
                                <img className='section-single-product-hero-middle-bottom-reverse-btn-img' src={forwardIcon} alt='back_button' width={20} />
                            </button>
                            <button onClick={() => this.handleBackNextImage('next')} disabled={product_images_no >= product_images_count.length}>
                                <img src={forwardIcon} alt='next_button' width={20} />
                            </button>
                        </div>
                        <div className='box-shadow' />
                    </div>
                    <div className='section-single-product-hero-right'>
                        <p className='single-product-hero-right-text'>Images</p>
                        {product_images_count.map((count) => (
                            <button
                                key={count}
                                className={`single-product-count-btn ${count === product_images_no && 'single-product-active-count'}`}
                                onClick={() => this.setState({ product_images_no: count })}
                            >
                                <p>0{count}</p>
                                {product_images_no === count && <img className='section-product-active-page-line' src={vertical_line_white} alt='vertical_line_white' />}
                            </button>
                        ))}
                    </div>
                </Hero>
                <div className='section-single-product-details-container'>
                    <div className='section-single-product-benefits'>
                        <h3>BENEFITS</h3>
                        <ul>
                            <li>Dri-FIT Technology helps keep you dry and comfortable</li>
                            <li>Racerback design allows natural range of motion</li>
                            <li>Removable padding offers custom shaping</li>
                            <li>Compression fit for snug support</li>
                            <li>Flat seams feel smooth against your skin</li>
                            <li>For medium-impact sports like cycling, dance and cardio classes</li>
                        </ul>
                    </div>
                    <div className='section-single-product-details'>
                        <h3>PRODUCT DETAILS</h3>
                        <ul>
                            <li>Fabric: Body/lining: Dri-FIT 88% recycled polyester/12% spandex. Bottom hem: <br />Dri-FIT 86% nylon/14% spandex. Interlining: Dri-FIT 80% polyester/20%<br /> spandex. Pad top/back: Dri-FIT 100% polyester. Pad: 100% polyurethane.</li>
                            <li>Machine wash</li>
                            <li>Imported</li>
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


export const query = graphql`
  query ProductTemplate($id: String!) {
    strapiProduct(id: {eq: $id}) {
        id
        price
        description
        product_id
        name
        gender {
             type
        }
        sizes {
              size_name
        }
        images {
             url
        }
        categories {
              name
              collection {
                    name
              }
        }
        details {
            detail
        }
        benefits {
            benefit
        }
        kind {
            name
        }
    }
  }
`;
