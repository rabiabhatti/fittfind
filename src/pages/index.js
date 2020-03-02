import React from "react"
import { Link } from "gatsby"

import '../styles/products_categories.css'

import {Wrapper, Hero, Slider, ImpossibleBanner, VideoPopup} from "../components"

import forwardIcon from '../images/forward-icon.png'
import women_banner from '../images/women_banner.jpg'
import men_banner from '../images/men_banner.jpg'
import app_imag from '../images/app-store-imag.jpg'
import app_video from '../images/app-store-video.jpg'
import play_button from '../images/play-button.png'
import app_store_button_s from '../images/app-store-button-s.png'
import fittfind_h from '../images/fittfind_h.png'
import horizontal_line from '../images/horizontal_line.png'
import fit from '../images/fit.png'
import background_imag from '../images/background-blue-imag.jpg'

class IndexPage extends React.Component {
    state = {
      show_video: false,
    };

    render() {
        const { show_video } = this.state;

        return (
            <Wrapper name='Home' location={this.props.location}>
                {show_video && <VideoPopup handleClose={() => this.setState({ show_video: false })} />}
                <Hero>
                    <div className="section-main-slider">
                        <Slider type='hero' />
                        <div className="section-main-slider-left">
                            <h1 className="section-Find-release-hero">
                                <span><span>Find</span> & release</span>
                                <span>your inner <span>athlete</span></span>
                            </h1>
                            <button className='findFitBtn'>
                                Find your fit
                                <img src={forwardIcon} alt='forward_icon'/>
                            </button>
                        </div>
                    </div>
                </Hero>
                <div className='section-products-categories'>
                    <div>
                        <div className='section-products-women'>
                            <div className='section-products-women-banner'>
                                <img src={women_banner} alt='women_banner'/>
                                <div>
                                    <button className='shop-women-btn'>
                                        <Link to={'/women/new-release/'}><img src={fit} alt='fit'/><span>Women</span></Link>
                                    </button>
                                    <span className='shop-women-ver'><span>Women Shop</span><img src={horizontal_line} alt='horizontal_line'/></span>
                                </div>

                            </div>
                            <div className='section-products-men-categories'>
                                <img src={horizontal_line} alt='horizontal_line'/>
                                <div>
                                    <h3>Men Categories</h3>
                                    <Link to={`/men/new-release/`}>New Releases</Link>
                                    <Link to={`/men/compression-tops/`}>Compression Tops</Link>
                                    <Link to={`/men/tights/`}>Tights</Link>
                                    <Link to={`/men/hoodies/`}>Hoodies</Link>
                                    <Link to={`/men/joggers-and-sweatpants/`}>Joggers and sweatpants</Link>
                                </div>
                            </div>
                        </div>
                        <div className='section-products-men'>
                            <div className='section-products-women-categories'>
                                <img src={horizontal_line} alt='horizontal_line'/>
                                <div>
                                    <h3>Women Categories</h3>
                                    <Link to={`/women/new-release/`}>New Releases</Link>
                                    <Link to={`/women/sports-bras/`}>Sports Bras</Link>
                                    <Link to={`/women/tank-tops/`}>Tank tops</Link>
                                    <Link to={`/women/leggings/`}>Leggings</Link>
                                    <Link to={`/women/shorts/`}>Shorts</Link>
                                </div>
                            </div>
                            <div className='section-products-men-banner'>
                                <img src={men_banner} alt='men_banner'/>
                                <div>
                                    <button className='shop-men-btn'>
                                        <Link to={'/men/rew-release/'}><span>Men</span><img src={fit} alt='fit'/></Link>
                                    </button>
                                    <span className='shop-men-ver'><span>Men Shop</span><img src={horizontal_line} alt='horizontal_line'/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-background'>
                    <img className='section-background-blue-right' src={background_imag} alt='background_blue_imag'/>
                </div>
                <div className='section-features'>
                    <h2><img src={horizontal_line} alt='horizontal_line'/> <span>Featured Items</span></h2>
                    <Slider type='products' />
                </div>
                <div className='section-background'>
                    <img className='section-background-fittfind' src={fittfind_h} alt='fittfind_imag'/>
                </div>
                <div className='section-apps'>
                    <h2 className='section-apps-h2-1'><img src={horizontal_line} alt='horizontal_line'/> Book a personal trainer</h2><h2 className='section-apps-h2-2'>and more with the <span>fitt</span><span>find</span> app</h2>
                    <div className='section-apps-left-right'>
                        <div className='section-apps-left'>
                            <p>Phasellus ut consectetur diam, sed cursus elit. Aenean euismod, lorem sit amet hendrerit porttitor, metus libero placerat lorem, nec euismod mi nibh id mi.<br/><br/>Nam et vestibulum justo. <br/>Suspendisse venenatis nisi nec turpis bibendum fermentum.</p>
                            <Link to={'/app/'}>
                                <span>Find out more</span>
                                <img src={forwardIcon} alt='forward_icon' />
                            </Link>
                        </div>
                        <div className='section-apps-right'>
                            <img className='section-apps-right-img-1' src={app_imag} alt='app_store_imag'/>
                            <Link className='section-apps-right-img-app-store' to='/'>
                                <span>Download on</span>
                                <img className='section-apps-right-img-store' src={app_store_button_s} alt='app_store_button_s'/>
                                <span>App store</span>
                            </Link>
                            <span className='section-apps-right-span-1'>Download now</span>
                            <img className='section-apps-right-img-2' src={app_video} alt='app_store_video'/>
                            <button onClick={() => this.setState({show_video: true})}>
                                <img className='section-apps-right-img-play' src={play_button} alt='play_button'/>
                            </button>
                            <span className='section-apps-right-span-2'>watch application movie</span>
                        </div>
                    </div>
                </div>
                <div className='section-social-media'>
                    <h2><img src={horizontal_line} alt='horizontal_line'/> Follow <span>fitt</span><span>find</span></h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}

export default IndexPage
