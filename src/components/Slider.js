import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'

import '../styles/slider.css'
import { Product } from './'

import product_1 from '../images/product-1.jpg'
import product_2 from '../images/product-2.jpg'
import product_3 from '../images/product-3.jpg'
import product_4 from '../images/product-4.jpg'
import forwardIcon from '../images/forward-icon.png'
import backwardIcon from '../images/backward-icon.png'
import instagram_icon from '../images/instagram_icon.png'
import vertical_line_white from '../images/vertical_line_white.png'
import social_media_slider_1 from '../images/social_media_slider-1.jpg'
import social_media_slider_2 from '../images/social_media_slider-2.jpg'
import social_media_slider_4 from '../images/social_media_slider-4.jpg'
import social_media_slider_3 from '../images/social_media_slider-3.jpg'
import social_media_slider_5 from '../images/social_media_slider-5.jpg'

const products_carousel = [
    {
       name: 'Women hybrid Joggers Black',
       price: 45,
       image: product_1,
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_4
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'Women hybrid Joggers',
        price: 100,
        image: product_4
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
       name: 'Women hybrid Joggers Black',
       price: 45,
       image: product_1,
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_4
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'Women hybrid Joggers',
        price: 100,
        image: product_4
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },
];
const social_carousel = [social_media_slider_1, social_media_slider_2, social_media_slider_3, social_media_slider_4, social_media_slider_5, social_media_slider_3, social_media_slider_5, social_media_slider_1, social_media_slider_4, social_media_slider_2, social_media_slider_5, social_media_slider_4, social_media_slider_5, social_media_slider_3, social_media_slider_1];

class Slider extends React.Component {
    state = {
        socialSliderPosition: 0,
        productsSliderPosition: 0,
    };

    handleBackNextProducts = (type) => {
        if (type === 'next') {
            this.setState(prevState => {
                return {productsSliderPosition: prevState.productsSliderPosition + 4}
            })
        } else {
            this.setState(prevState => {
                return {productsSliderPosition: prevState.productsSliderPosition - 4}
            })
        }
    };

    handleBackNextSocial = (type) => {
        if (type === 'next') {
            this.setState(prevState => {
                return {socialSliderPosition: prevState.socialSliderPosition + 5}
            })
        } else {
            this.setState(prevState => {
                return {socialSliderPosition: prevState.socialSliderPosition - 5}
            })
        }
    };

    render() {
        const { type } = this.props;
        const { productsSliderPosition, socialSliderPosition } = this.state;
        const products_pages = [];
        const social_media_pages = [];
        for (let i = 0; i < products_carousel.length / 4; i++) {
            products_pages.push(i)
        }
        for (let j = 0; j < social_carousel.length / 5; j++) {
            social_media_pages.push(j)
        }

        return (
            <Fragment>
                {
                    {
                        social_media:
                            <div className='section-social-media-slider column-start'>
                                <div className='row-center space-between'>
                                    <div className='section-social-media-slider-left-container'>
                                        {social_media_pages.map(p => (
                                            <div className={`section-social-media-slider-left ${p*5 === socialSliderPosition ? 'section-social-media-slider-active': 'section-social-media-slider-hide'}`} key={p}>
                                                {social_carousel.slice(p, p + 5).map((item, i)  => (
                                                    <img src={item} key={i} alt='social_media_image' width={318} />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='section-social-media-slider-right'>
                                        <Link to={'/'}>
                                            <img src={instagram_icon} alt='instagram_icon' />
                                            <span>Follow on Instagram</span>
                                        </Link>
                                        <div className='section-social-media-slider-right-bar'>
                                            {social_media_pages.map(i => (
                                                <button key={i} onClick={() => this.setState({socialSliderPosition: i*5})}>
                                                    <p>0{i+1}</p>
                                                    {socialSliderPosition === i*5 && <img className='section-products-slider-active-page-line' src={vertical_line_white} alt='vertical_line_white' />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='section-social-slider-bottom-bar'>
                                    <button onClick={() => this.handleBackNextSocial('back')} disabled={socialSliderPosition === 0}>
                                        <img src={backwardIcon} alt='back_button' />
                                    </button>
                                    <button onClick={() => this.handleBackNextSocial('next')} disabled={socialSliderPosition === social_carousel.length - 5}>
                                        <img src={forwardIcon} alt='next_button' />
                                    </button>
                                </div>
                            </div>,
                        products:
                            <div className='section-products-slider'>
                                <div className='section-products-slider-container row-center'>
                                    {products_pages.map(p => (
                                        <div className={`section-products-slider-left-bar row-center ${p*4 === productsSliderPosition ? 'section-products-slider-active': 'section-products-slider-hide'}`} key={p}>
                                            {products_carousel.slice(p, p + 4).map((item, i) => (
                                                <Product slider={true} key={i} img={item.image} name={item.name} price={`$${item.price}.00`} />
                                            ))}
                                        </div>
                                    ))}
                                    <div className='section-products-slider-right-bar'>
                                        <p>pages</p>
                                        {products_pages.map(i => (
                                            <button className={`section-products-slider-active-page ${productsSliderPosition === i*4 && 'active-products-slider-page'}`} key={i} onClick={() => this.setState({productsSliderPosition: i*4})}>
                                                <p>0{i+1}</p>
                                                {productsSliderPosition === i*4 && <img className='section-products-slider-active-page-line' src={vertical_line_white} alt='vertical_line_white' />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className='section-products-slider-bottom-bar'>
                                    <button onClick={() => this.handleBackNextProducts('back')} disabled={productsSliderPosition === 0}>
                                        <img src={backwardIcon} alt='back_button' />
                                    </button>
                                    <button onClick={() => this.handleBackNextProducts('next')} disabled={productsSliderPosition === products_carousel.length - 4}>
                                        <img src={forwardIcon} alt='next_button' />
                                    </button>
                                </div>
                            </div>,
                    }[type]
                }
            </Fragment>
        );
    }
}

export { Slider }
