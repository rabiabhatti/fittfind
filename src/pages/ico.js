import React from 'react'
import {Link} from "gatsby";

import '../styles/ico.css'
import quotes from "../images/quotes.png";
import forwardIcon from '../images/forward-icon.png'
import backwardIcon from '../images/backward-icon.png'
import ico_banner_2 from '../images/ico_banner_2.jpg'
import paper_plane_icon from '../images/paper_plane.png'
import alpha_preview_icon from '../images/alpha_preview.png'
import ico_hero_banner from '../images/ico_hero_banner.png'
import horizontal_line from '../images/horizontal_line.png'
import vertical_line from '../images/vertical_line_white.png'
import { Wrapper, Hero, ImpossibleBanner} from "../components";
import find_gym_hero_img from "../images/find-gym-hero-img.png";
import alpha_preview_banner from '../images/alpha_preview_banner.png'

export default class Help extends React.Component {
    state = {
      current_slider_position: 1,
    };

    handleBackNext = (type) => {
        if (type === 'next') {
            this.setState(prevState => {
                return {current_slider_position: prevState.current_slider_position + 1}
            })
        } else {
            this.setState(prevState => {
                return {current_slider_position: prevState.current_slider_position - 1}
            })
        }
    };

    render() {
        const { current_slider_position } = this.state
        const dashboard_images_no = [1, 2, 3, 4, 5];

        return (
            <Wrapper name='ICO' location={this.props.location} gymNav={true}>
                <Hero>
                    <div className='section-find-gym-hero'>
                        <img src={ico_hero_banner} alt='ico_hero_banner' />
                    </div>
                </Hero>
                <div className='section-ico-main-heading-container'>
                    <h1 className='section-ico-main-heading'>Fittfind - A next-generation sports <br /> and fitness lead generation service</h1>
                    <p>Fittfind is building The World's First Decentralized Fitness Lead Generation Service for the health and fitness sector. Fittfind is a journeying to become the world's first leading decentralized Health and fitness solution and global leader in the sporting goods industry.</p>
                    <Link to='/' className='section-ico-main-heading-btn'>
                        <img src={paper_plane_icon} alt='paper_plane_icon' width={20} />
                        join the whitelist
                    </Link>
                </div>
                <div className='section-ico-vision-container'>
                    <img className='section-ico-vision-img' src={ico_banner_2} alt='ico_banner_2' width={300} />
                    <div className='column-center section-ico-vision-content'>
                        <div className='section-ico-vision-top'>
                            <h2>
                                <img src={horizontal_line} alt='horizontal_line' />
                                Fittfind vision
                            </h2>
                            <p>A world where everyone has the opportunity to find and release their inner athlete.</p>
                            <Link to='/'>Read our vision paper</Link>
                        </div>
                        <div className='section-ico-vision-bottom'>
                            <img src={quotes} alt='quotes-img' width={50} />
                            <h3>Fittfind is building The World's First Decentralized Fitness Lead Generation Service for the health and fitness sector. Fittfind is a journeying to become the world's first leading decentralized Health and fitness solution and global leader in the sporting goods industry</h3>
                            <p>FITTFIND team</p>
                            <img src={vertical_line} alt='vertical_line'  />
                        </div>
                    </div>
                </div>
                <div className='section-ico-platform-container row-center space-between'>
                    <div className='section-ico-platform-left'>
                        <h2>Fittfind platform</h2>
                        <p>Fittfind enables users to overcome the difficulty to find the right personal trainer & facility, manage all end to end transactions, send messages and menage schedules, features to make fitness work for you!<br/><br/>Be the first to test ans review our alpha Preview, Fittfind is always looking for athletes to test products in the gym and on the field</p>
                        <button className='section-ico-platform-left-btn row-center'>
                            <img src={alpha_preview_icon} alt='alpha_preview_icon' width={20} />
                            Alpha preview
                        </button>
                    </div>
                    <div className='section-ico-platform-right row-center'>
                        <button className='section-ico-platform-right-btn' onClick={() => this.handleBackNext('back')} disabled={current_slider_position === 1}>
                            <img src={backwardIcon} alt='back_button' />
                        </button>
                        <div className='column-center section-ico-platform-right-slider-container'>
                            <div className='section-ico-platform-right-slider'>
                                {dashboard_images_no.map(item => (
                                    <img src={alpha_preview_banner} alt='alpha_preview_banner' key={item} className={`section-ico-platform-right-slider-img ${current_slider_position === item ? 'show' : 'hide'}`} />
                                ))}
                            </div>
                            <div className='row-center'>
                                {dashboard_images_no.map(item => (
                                    <div key={item} className={`${current_slider_position === item && 'active_ico_slider_indicator'} ico_slider_indicator`}/>
                                ))}
                            </div>
                        </div>
                        <button className='section-ico-platform-right-btn' onClick={() => this.handleBackNext('next')} disabled={current_slider_position === dashboard_images_no.length}>
                            <img src={forwardIcon} alt='next_button' />
                        </button>
                    </div>
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
