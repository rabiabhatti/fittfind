import React from 'react'
import {Link} from "gatsby";

import '../styles/ico.css'
import quotes from "../images/quotes.png";
import bitcoin from "../images/bitcoin.png";
import ethereum from "../images/ethereum.png";
import dapp_icon from "../images/dapp_icon.png";
import forwardIcon from '../images/forward-icon.png'
import ico_banner_2 from '../images/ico_banner_2.jpg'
import backwardIcon from '../images/backward-icon.png'
import paper_plane_icon from '../images/paper_plane.png'
import ico_hero_banner from '../images/ico_hero_banner.png'
import horizontal_line from '../images/horizontal_line.png'
import alpha_preview_icon from '../images/alpha_preview.png'
import vertical_line from '../images/vertical_line_white.png'
import ico_crypto_banner from '../images/ico_crypto_banner.jpg'
import { Wrapper, Hero, ImpossibleBanner} from "../components";
import app_store_button_s from "../images/app-store-button-s.png";
import alpha_preview_banner from '../images/alpha_preview_banner.png'

const features = [
    {
        name: 'privacy',
        desc: 'Cryptograp cally secured',
    },{
        name: 'proprietary gamification interface',
        desc: 'Intrinsically motivate users to workout',
    },{
        name: 'trust',
        desc: 'Trusted, immutable peer reviews',
    },{
        name: 'security',
        desc: 'Verified user security through Know Your Customer (KYC)',
    },
];

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
        const { current_slider_position } = this.state;
        const dashboard_images_no = [1, 2, 3, 4, 5];

        return (
            <Wrapper name='ICO' location={this.props.location} className='section-ico' >
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
                            <Link to='/' className='section-ico-btn'>Read our vision paper</Link>
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
                        <button className='section-ico-btn row-center'>
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
                <div className='section-ico-features-container row-center space-between'>
                    {features.map((item, i) => (
                        <div key={i} className='section-ico-feature'>
                            <img src={require(`../images/ico_feature_${i+1}.png`)} alt={`../images/ico_feature_${i+1}.png`} />
                            <h4>{item.name.toUpperCase()}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className='section-ico_crypto_container  row-center space-between'>
                    <div className='section-ico_crypto-left'>
                        <h2>Crypto specific sportswear</h2>
                        <p>Fittfind is a technology driven corporation engaged in the design, development and marketing of Elite sports wear.<br/>Purchase Bitcoin sportswear using Bitcoin only.</p>
                        <div className='row-center'>
                            <img src={bitcoin} alt='bitcoin' width={20} />
                            <img src={ethereum} alt='ethereum' width={20} />
                        </div>
                    </div>
                    <img className='section-ico_crypto-right' src={ico_crypto_banner} alt='ico_crypto_banner' width={300}/>
                </div>
                <div className='row-center section-ico-app-container'>
                    <div className='section-ico-app-left'>
                        <Link className='row-center space-between' to='/'>
                            <span>Download on</span>
                            <img width={100} src={app_store_button_s} alt='app_store_button_s'/>
                            <span>App store</span>
                        </Link>
                    </div>
                    <div className='section-ico-app-right'>
                        <h2>
                            <img src={horizontal_line} alt='horizontal_line'/>Fitness
                        </h2>
                        <h2>on the blockchain</h2>
                        <p>In the same manner Uber is the largest trans-portation company that owns no vehicles and Airbnb the largest hotel company that owns no real estate, Fittfind is on its way to becoming the largest health and fitness institution that controls no gyms or studios.<br/>We empower freelancers Fitness professionals and business to join our decentralized fitness marketplace. Fitness fanatics can discover each over, browse gyms listings, make bookings, leave ratings and reviews, and much more.</p>
                        <div className='row-center space-between'>
                            <button className='section-ico-btn row-center'>
                                <img src={dapp_icon} alt='dapp_icon' width={9} />
                                <span>Dapp preview</span>
                            </button>
                            <Link to='/' className='section-ico-btn'>Read our vision paper</Link>
                        </div>
                    </div>
                </div>
                <div className='section-ico-gym-banner row-center space-between'>
                    <div className='column-end'>
                        <h2>Gym or</h2>
                        <h2>studio owner?</h2>
                    </div>
                    <div className='column-start'>
                        <p>Want to become a partner in the Fittfind community?</p>
                        <p>Personal trainers, gyms, fitness canters, nutritionists, and other industry professionals are invited and encouraged to submit and application now.</p>
                        <Link to='/list-yourself/' className='section-gym-owners-btn'>
                            GET LISTED
                            <img src={forwardIcon} alt='forwardIcon' />
                        </Link>
                    </div>
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
