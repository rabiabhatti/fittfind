import React from 'react'
import { Link } from 'gatsby'

import '../styles/application.css'
import { Wrapper, Hero } from '../components'
import phone_img from '../images/women_banner.jpg'
import play_video from '../images/youtube_icon.png'
import vertical_line from '../images/vertical_line.png'
import horizontal_line from '../images/horizontal_line.png'
import horizontal_line_white from '../images/horizontal_line_white.png'
import app_store_icon from '../images/app-store-icon.png'
import play_store_icon from '../images/play-store-icon.png'
import trainer_banner from '../images/personaltrainer.png'
import iPhone_7_Black from '../images/iPhone7Black.png'
import video_girl from '../images/video-girl.png'
import play_button from '../images/play-button.png'
import app_store_button from '../images/app-store-button.png'
import play_store_button from '../images/play-store-button.png'

export default class Application extends React.Component {
    render() {
        return (
            <Wrapper name={'App'}>
                <div className='section-hero-video'>
                    <Hero className='section-hero-application'>
                        <div className='section-hero-application-main'>
                            <img className='section-hero-application-img' src={trainer_banner} alt='trainer_banner' />
                            <div className='section-hero-application-text'>
                            <h1><span>Find</span> your private</h1>
                            <h1>personal <span>trainer</span></h1>
                            </div>
                        </div>
                    </Hero>
                    <div className='section-application-video-main'>
                        <div className='section-application-video-col-left'>
                            <h3 className='section-application-video-col-left-heading'>
                                <img src={horizontal_line} alt='horizontal_line' />
                                Connect with an expert
                            </h3>
                            <p className='section-application-video-col-left-text'>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page. For example, to turn the active link red, either of the following approaches is valid.</p>
                            <div className='section-application-video-col-left-stores-links'>
                                <Link to={'/'}>
                                    <img className='app-store-button-img' src={app_store_button} alt='app_store_button' />
                                </Link>
                                <Link to={'/'}>
                                    <img className='play-store-button-img' src={play_store_button} alt='play_store_button' />
                                </Link>
                            </div>
                        </div>
                        <div className='section-application-video-col-right'>
                            <img src={iPhone_7_Black} alt='iPhone_7_Black' />
                            <div className='section-application-video-col-right-video-container'>
                                <img className='section-application-video-img' src={video_girl} alt='video_girl' />
                                <button className='play-video-btn'>
                                    <img src={play_button} alt='play_video' />
                                </button>
                                <p>Watch application movie <img src={horizontal_line_white} alt='horizontal_line_white' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-application-video'>
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
                    <div className='section-application-motivation-banner-1'>
                        <img src={phone_img} alt='phone_img' />
                        <div className='section-application-motivation-banner-dialogue'>
                            <img src={vertical_line} alt='vertical_line' />
                            <p>"The question isn't can you, it's will you?"</p>
                            <img src={vertical_line} alt='vertical_line' />
                        </div>
                    </div>
                    <div className='section-application-motivation-banner-2'>
                        <div className='section-application-motivation-banner-left'>
                            <h3 className='left-banner-heading'>
                                <img src={horizontal_line} alt='horizontal_line' />
                                Find your trainer <br />and become the impossible!
                            </h3>
                            <div className='left-banner-container'>
                                <div className='left-banner-text'>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                    <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page.</p>
                                </div>
                                <div className='left-banner-image'>
                                    <img src={phone_img} alt='phone_img' />
                                    <Link to={'/'}>
                                        <img src={play_store_icon} alt='play_store_icon' width={200} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='section-application-motivation-banner-right'>
                            <div className='right-banner-image'>
                                <img src={phone_img} alt='phone_img' />
                                <Link to={'/'}>
                                    <img src={app_store_icon} alt='app_store_icon' width={200} />
                                </Link>
                            </div>
                            <div className='right-banner-text'>
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>It’s often a good idea to show which page is currently being viewed by visually changing the link matching the current page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}