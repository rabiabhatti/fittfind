import React from 'react'
import { Link } from 'gatsby'

import '../styles/application.css'
import { Wrapper, Hero } from '../components'
import phone_img from '../images/women_banner.jpg'
import play_video from '../images/youtube_icon.png'
import horizontal_line from '../images/horizontal_line.png'

export default class Application extends React.Component {
    render() {
        return (
            <Wrapper name={'App'}>
                <Hero className='section-hero-application'>
                    <h1>
                        <span>Find </span>
                        your private personal
                        <span>trainer</span>
                    </h1>
                </Hero>
                <div className='section-application-video'>
                    <div className='section-application-video-col-left'>
                        <h3>
                            <img src={horizontal_line} alt='horizontal_line' />
                            Connect with an expert
                        </h3>
                        <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page. For example, to turn the active link red, either of the following approaches is valid.</p>
                        <div className='section-application-video-col-left-buttons'>
                            <Link to={'/'}>
                                <img src={horizontal_line} alt='horizontal_line' />
                            </Link>
                            <Link to={'/'}>
                                <img src={horizontal_line} alt='horizontal_line' />
                            </Link>
                        </div>
                    </div>
                    <div className='section-application-video-col-right'>
                        <img src={phone_img} alt='phone_img' />
                        <div className='section-application-video-col-right-video-container'>
                            <button className='play-video-btn'>
                                <img src={play_video} alt='play_video' />
                            </button>
                            <p>Watch application here <img src={horizontal_line} alt='horizontal_line' /></p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
