import React, { Fragment } from 'react'

import '../styles/slider.css'

import slider1 from '../images/home-slider-1.jpg'
import slider2 from '../images/home-slider-2.jpg'
import slider3 from '../images/home-slider-3.jpg'
import slider4 from '../images/home-slider-4.jpg'

const hero_carousel = [slider1, slider2, slider3, slider4];
const products_carousel = [slider1, slider2, slider3, slider4, slider2, slider2, slider2, slider2, slider3, slider3, slider3, slider3, slider4, slider4, slider4, slider4];

class Slider extends React.Component {
    state = {
        heroSliderPosition: 0,
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

    renderProductsPages = () => {
        const { productsSliderPosition } = this.state
        let i = 0;
        const buttons = [];
        for (i ; i < products_carousel.length/4; i ++) {
            console.log('i', i)
            buttons.push(
                <button
                    key={i}
                    onClick={() => this.setState({ productsSliderPosition: i * 4 })}
                >
                    0{i+1}
                </button>
            )
        }
        return buttons
    };

    render() {
        const { type } = this.props;
        const { heroSliderPosition, productsSliderPosition } = this.state;
        console.log(productsSliderPosition)
        return (
            <Fragment>
                {
                    {
                        hero:
                            <div className='section-hero-slider'>
                                {hero_carousel.map((img, i) => (
                                    <img key={i} src={img} alt='carousel' className={heroSliderPosition === i ? 'show hero-slide' : 'hide hero-slide'} />
                                ))}
                                <div className='section-hero-slider-right-bar'>
                                    {hero_carousel.map((img, i) => (
                                        <button className={i === heroSliderPosition ? 'active-slider slider-no' : 'slider-no'} key={i} onClick={() => this.heroSliderClick(i)}>0{i+1}</button>
                                    ))}
                                    <div className='sliders-count-container'>
                                        <span className='current-slider'>0{heroSliderPosition}</span> -
                                        <span className='total-sliders'>0{hero_carousel.length}</span>
                                    </div>
                                </div>
                            </div>,
                        social_media: <p>Social Media</p>,
                        products:
                            <div className='section-products-slider'>
                                {products_carousel.slice(productsSliderPosition, 4).map((item, i) => (
                                    <div className='section-product' key={i}>
                                        <img src={item} alt='product_image' width='400' />
                                        <button className='product-like-btn'>Like icon</button>
                                        <button className='product-desc'>
                                            <span className='product-name'>Women hybrid Joggers Black</span>
                                            <span className='product-price'>$46.00</span>
                                        </button>
                                    </div>
                                ))}
                                <div className='section-products-slider-right-bar'>
                                    <p>pages</p>
                                    {this.renderProductsPages()}
                                </div>
                            </div>,
                    }[type]
                }
            </Fragment>
        );
    }
}

export { Slider }
