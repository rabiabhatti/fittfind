import React from 'react'
import {Link} from "gatsby";

import quotes from "../images/quotes.png";
import women_banner from '../images/women_banner.jpg'
import horizontal_line from '../images/horizontal_line.png'
import vertical_line from '../images/vertical_line_white.png'
import { Wrapper, Hero, ImpossibleBanner} from "../components";
import find_gym_hero_img from "../images/find-gym-hero-img.png";
import paper_plane_icon from '../images/gym_healthy_snacks.png'

export default class Help extends React.Component {
    render() {
        return (
            <Wrapper name='ICO' location={this.props.location} gymNav={true}>
                <Hero>
                    <div className='section-find-gym-hero'>
                        <img src={find_gym_hero_img} alt='find_gym_hero_img' />
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
                    <img className='section-ico-vision-img' src={women_banner} alt='women_banner' />
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
                <div>
                    <div>

                    </div>
                    <div>
                        <h2>Fittfind platform</h2>
                        <p>Fittfind enables users to overcome the difficulty to find the right personal trainer & facility, manage all end to end transactions, send messages and menage schedules, features to make fitness work for you!<br/><br/>Be the first to test ans review our alpha Preview, Fittfind is always looking for athletes to test products in the gym and on the field</p>
                        <button>
                            
                        </button>
                    </div>
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
