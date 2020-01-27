import React from 'react'
import { Link } from 'gatsby'

import '../styles/application.css'
import { Wrapper, Hero } from '../components'
import phone_img from '../images/women_banner.jpg'
import play_video from '../images/youtube_icon.png'
import vertical_line from '../images/vertical_line.png'
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
                        <div className='section-application-video-col-left-stores-links'>
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
                    <div className='section-application-features'>
                        <div className='section-application-features-col-left'>
                            <div className='section-application-feature'>
                                <h4>Trainer & gym search</h4>
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page.</p>
                            </div>
                            <div className='section-application-feature'>
                                <h4>Features</h4>
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page.</p>
                            </div>
                        </div>
                        <div className='section-application-features-col-middle'>
                            <img src={phone_img} alt='phone_img' />
                            <div className='section-application-features-col-middle-stores-links'>
                                <p>Download on</p>
                                <Link to={'/'}>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                </Link>
                                <Link to={'/'}>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                </Link>
                            </div>
                        </div>
                        <div className='section-application-features-col-right'>
                            <div className='section-application-feature'>
                                <h4>Messages</h4>
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page.</p>
                            </div>
                            <div className='section-application-feature'>
                                <h4>IOS & Android compatible</h4>
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page.</p>
                            </div>
                        </div>
                    </div>
                    <div className='section-application-motivation-banner'>
                        <img src={phone_img} alt='phone_img' />
                        <div className='section-application-motivation-banner-dialogue'>
                            <img src={vertical_line} alt='vertical_line' />
                            <p>"The question isn't can you, it's will you?"</p>
                            <img src={vertical_line} alt='vertical_line' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
