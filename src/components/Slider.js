import React from 'react'

import '../styles/slider.css'

import slider1 from '../images/home-slider-1.jpg'
import slider2 from '../images/home-slider-2.jpg'
import slider3 from '../images/home-slider-3.jpg'
import slider4 from '../images/home-slider-4.jpg'

const carousel = [slider1, slider2, slider3, slider4];

class Slider extends React.Component {
    state = {
        sliderPosition: 0,
    };

    componentDidMount() {
        this.countdown = setInterval(() => {
            this.setState(prevState => {
                return {sliderPosition: (prevState.sliderPosition + 1) % (carousel.length || 1)}
            })
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    handleSliderNoClick = (no) => {
        this.setState({sliderPosition: no})
    };

    render() {
        const { sliderPosition } = this.state;
        return (
            <div className='section-slider'>
                {carousel.map((img, i) => (
                    <img id="slide" key={i} src={img} alt='carousel' className={sliderPosition === i ? 'show' : 'hide'} />
                ))}
                <div className='section-slider-right-bar'>
                    {carousel.map((img, i) => (
                        <button className={i === sliderPosition ? 'activeSlider sliderNo' : 'sliderNo'} key={i} onClick={() => this.handleSliderNoClick(i)}>0{i+1}</button>
                    ))}
                    <div className='slidersCountContainer'>
                        <span className='currentSlider'>0{sliderPosition}</span> -
                        <span className='totalSliders'>0{carousel.length}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export { Slider }
