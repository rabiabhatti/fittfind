import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import '../styles/slider.css'
import { Product } from './'

import product_1 from '../images/product-1.jpg'
import product_2 from '../images/product-2.jpg'
import product_3 from '../images/product-3.jpg'
import product_4 from '../images/product-4.jpg'
import slider1 from '../images/home-slider-1.jpg'
import slider2 from '../images/home-slider-2.jpg'
import slider3 from '../images/home-slider-3.jpg'
import slider4 from '../images/home-slider-4.jpg'
import forwardIcon from '../images/forward-icon.png'
import backwardIcon from '../images/backward-icon.png'
import vertical_line from '../images/vertical_line.png'
import instagram_icon from '../images/instagram_icon.png'
import vertical_line_white from '../images/vertical_line_white.png'

const hero_carousel = [slider1, slider2, slider3, slider4];
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
const social_carousel = [slider1, slider2, slider3, slider4, slider2, slider2, slider2, slider2, slider3, slider3, slider3, slider3];

class Slider extends React.Component {
    state = {
        heroSliderPosition: 0,
        socialSliderPosition: 0,
        productsSliderPosition: 0,
    };

    componentDidMount() {
        if (this.props.type === 'hero') {
            this.countdown = setInterval(() => {
                this.setState(prevState => {
                    return {heroSliderPosition: (prevState.heroSliderPosition + 1) % (hero_carousel.length || 1)}
                })
            }, 5000)
        }
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    heroSliderClick = (no) => {
        this.setState({heroSliderPosition: no})
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
                return {socialSliderPosition: prevState.socialSliderPosition + 4}
            })
        } else {
            this.setState(prevState => {
                return {socialSliderPosition: prevState.socialSliderPosition - 4}
            })
        }
    };

    render() {
        const { type } = this.props;
        const { heroSliderPosition, productsSliderPosition, socialSliderPosition } = this.state;
        const products_pages = [];
        const social_media_pages = [];
        for (let i = 0; i < products_carousel.length / 4; i++) {
            products_pages.push(i)
        }
        for (let j = 0; j < social_carousel.length / 4; j++) {
            social_media_pages.push(j)
        }
        return (
            <Fragment>
                {
                    {
                        hero:
                            <div className='section-hero-slider'>
                                {hero_carousel.map((img, i) => (
                                    <img key={i} src={img} alt='carousel' className={heroSliderPosition === i ? 'show hero-slide' : 'hide hero-slide'} />
                                ))}
                                <div className='section-hero-slider-right-numbers'>
                                    <div className='section-hero-slider-right-bar'>
                                        {hero_carousel.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => this.heroSliderClick(i)}
                                                className={i === heroSliderPosition ? 'active-slider slider-no' : 'slider-no'}
                                            >
                                               <p>0{i+1}</p>
                                                {i === heroSliderPosition && <img className='section-products-slider-active-page-line' src={vertical_line} alt='vertical_line' />}
                                            </button>
                                        ))}
                                    </div>
                                    <div className='sliders-count-container'>
                                        <span className='current-slider'>0{heroSliderPosition + 1}</span>
                                        <div>
                                            <span className='total-dash'>_</span>
                                            <span className='total-sliders'>0{hero_carousel.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>,
                        social_media:
                            <div className='section-social-media-slider'>
                                <div className='section-social-media-slider-left'>
                                    {social_carousel.slice(socialSliderPosition, socialSliderPosition + 5).map((item, i)  => (
                                        <img className={`social-media-img${i}`} src={item} key={i} alt='social_media_image' width={330} />
                                    ))}
                                </div>
                                <div className='section-social-media-slider-right'>
                                    <Link to={'/'}>
                                        <img src={instagram_icon} alt='instagram_icon' />
                                        <span>Follow on Instagram</span>
                                    </Link>
                                    <div className='section-social-media-slider-right-bar'>
                                        {social_media_pages.map(i => (
                                            <button className={`${socialSliderPosition === i*4 && 'active-products-slider-page'}`} key={i} onClick={() => this.setState({socialSliderPosition: i*4})}>
                                                <p>0{i+1}</p>
                                                {socialSliderPosition === i*4 && <img className='section-products-slider-active-page-line' src={vertical_line_white} alt='vertical_line_white' />}
                                            </button>
                                        ))}
                                    </div>
                                    <div className='section-social-slider-bottom-bar'>
                                        <button onClick={() => this.handleBackNextSocial('back')} disabled={socialSliderPosition === 0}>
                                            <img src={backwardIcon} alt='back_button' />
                                        </button>
                                        <button onClick={() => this.handleBackNextSocial('next')} disabled={socialSliderPosition === social_carousel.length - 4}>
                                            <img src={forwardIcon} alt='next_button' />
                                        </button>
                                    </div>
                                </div>
                            </div>,
                        products:
                            <div className='section-products-slider'>
                                <div className='section-products-slider-container'>
                                    {products_carousel.slice(productsSliderPosition, productsSliderPosition + 4).map((item, i) => (
                                        <Product slider={true} key={i} img={item.image} name={item.name} price={`$${item.price}.00`} id={i} />
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
