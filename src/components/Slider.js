import React, {Fragment, useState, useCallback} from 'react'
import { Link } from 'gatsby'

import '../styles/slider.css'
import forwardIcon from '../images/forward-icon.png'
import backwardIcon from '../images/backward-icon.png'
import instagram_icon from '../images/instagram_icon.png'
import vertical_line_white from '../images/vertical_line_white.png'
import social_media_slider_1 from '../images/social_media_slider-1.jpg'
import social_media_slider_2 from '../images/social_media_slider-2.jpg'
import social_media_slider_4 from '../images/social_media_slider-4.jpg'
import social_media_slider_3 from '../images/social_media_slider-3.jpg'
import social_media_slider_5 from '../images/social_media_slider-5.jpg'

const social_carousel = [social_media_slider_1, social_media_slider_2, social_media_slider_3, social_media_slider_4, social_media_slider_5, social_media_slider_3, social_media_slider_5, social_media_slider_1, social_media_slider_4, social_media_slider_2, social_media_slider_5, social_media_slider_4, social_media_slider_5, social_media_slider_3, social_media_slider_1];

function Slider(props) {
    const [socialSliderPosition, setSocialSliderPosition] = useState(0)

    const { type } = props;
    const social_media_pages = [];
    for (let j = 0; j < social_carousel.length / 5; j++) {
        social_media_pages.push(j)
    }

    const handleBackNextSocial = useCallback((type) => {
        if (type === 'next') {
            setSocialSliderPosition(socialSliderPosition + 5)
        } else {
            setSocialSliderPosition(socialSliderPosition - 5)
        }
    }, [socialSliderPosition]);

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
                                            <button key={i} onClick={() => setSocialSliderPosition(i*5)}>
                                                <p>0{i+1}</p>
                                                {socialSliderPosition === i*5 && <img className='section-products-slider-active-page-line' src={vertical_line_white} alt='vertical_line_white' />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='section-social-slider-bottom-bar'>
                                <button onClick={() => handleBackNextSocial('back')} disabled={socialSliderPosition === 0}>
                                    <img src={backwardIcon} alt='back_button' />
                                </button>
                                <button onClick={() => handleBackNextSocial('next')} disabled={socialSliderPosition === social_carousel.length - 5}>
                                    <img src={forwardIcon} alt='next_button' />
                                </button>
                            </div>
                        </div>,
                }[type]
            }
        </Fragment>
    );

}

export { Slider }
