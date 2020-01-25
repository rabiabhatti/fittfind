import React, { Fragment } from 'react'

import '../styles/slider.css'
import { Product } from './'

import slider1 from '../images/home-slider-1.jpg'
import slider2 from '../images/home-slider-2.jpg'
import slider3 from '../images/home-slider-3.jpg'
import slider4 from '../images/home-slider-4.jpg'
import forwardIcon from '../images/forward-icon.png'

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

    render() {
        const { type } = this.props;
        const { heroSliderPosition, productsSliderPosition } = this.state;
        const products_pages = [];
        for (let i = 0; i < products_carousel.length / 4; i++) {
            products_pages.push(i)
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
                                {products_carousel.slice(productsSliderPosition, productsSliderPosition + 4).map((item, i) => (
                                    <Product key={i} img={item} name='Women hybrid Joggers Black' price='$46.00' id={i} />
                                ))}
                                <div className='section-products-slider-right-bar'>
                                    <p>pages</p>
                                    {products_pages.map(i => (
                                        <button key={i} onClick={() => this.setState({productsSliderPosition: i*4})}>
                                            0{i+1}
                                        </button>
                                    ))}
                                </div>
                                <div className='section-products-slider-bottom-bar'>
                                    <button onClick={() => this.handleBackNextProducts('back')} disabled={productsSliderPosition === 0}>
                                        <img src={forwardIcon} alt='back_button' />
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
