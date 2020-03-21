import React from 'react'
import Img from "gatsby-image"

import '../styles/slider.css'
import { isBrowser } from '../helper'
import vertical_line from "../images/vertical_line.png";

const hero_carousel = [1, 2, 3, 4];

class HomeSlider extends React.Component {
    state = {
        heroSliderPosition: 0,
    };

    componentDidMount() {
        this.countdown = setInterval(() => {
            this.setState(prevState => {
                return {heroSliderPosition: (prevState.heroSliderPosition + 1) % (hero_carousel.length || 1)}
            })
        }, 5000)
    }

    heroSliderClick = (no) => {
        this.setState({heroSliderPosition: no})
    };

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    renderSliderImages = () => {
        const { home_carousel } = this.props;
        const { heroSliderPosition } = this.state;
        if (isBrowser()) {
            let images;
            if (window.matchMedia('(max-width: 425px)').matches) {
                images = home_carousel.mobileImage
            } else {
                images = home_carousel.desktopImage
            }
            return images.edges.map((node, i) => (
                <Img key={i} fluid={node.node.fluid} alt='carousel' className={`hero-slide  ${heroSliderPosition === i ? 'show' : 'hide'}`} />
            ))
        }
    };

    render() {
        const { heroSliderPosition } = this.state;

        return (
            <div className='section-hero-slider'>
                {this.renderSliderImages()}
                <div className='section-hero-slider-right-numbers'>
                    <div className='section-hero-slider-right-bar'>
                        {hero_carousel.map((item, i) => (
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
            </div>
        );
    }
}

export { HomeSlider }
