import React from "react"
import { Link } from "gatsby"

import '../styles/products_categories.css'

import {Wrapper, Hero, Slider, ImpossibleBanner} from "../components"

import forwardIcon from '../images/forward-icon.png'
import women_banner from '../images/women_banner.jpg'
import men_banner from '../images/men_banner.jpg'
import app_imag from '../images/app-store-imag.jpg'
import app_video from '../images/app-store-video.jpg'
import fittfind from '../images/fittfind.png'
import horizontal_line from '../images/horizontal_line.png'
import fit from '../images/fit.png'
import background_imag from '../images/background-blue-imag.jpg'

class IndexPage extends React.Component {
    render() {
        return (
            <Wrapper name='Home'>
                <Hero>
                    <div className="section-main-slider">
                        <Slider type='hero' />
                        <div className="section-main-slider-left">
                            <h1 className="section-Find-release-hero"><span><span>Find</span> & release</span><span>your inner <span>athlete</span></span></h1>
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
                                <span className='shop-women-ver'><span>Women Shop</span><img src={horizontal_line} alt='horizontal_line'/></span>
                                <button className='shop-women-btn'>
                                    <Link to={'/women'}><img src={fit} alt='fit'/><span>Women</span></Link>
                                </button>
                            </div>
                            <div className='section-products-men-categories'>
                                <img src={horizontal_line} alt='horizontal_line'/>
                                <div>
                                    <h3>Men Categories</h3>
                                    <Link to={`/men?category=new`}>New Releases</Link>
                                    <Link to={`/men?category=compressiontops`}>Compression Tops</Link>
                                    <Link to={`/men?category=tights`}>Tights</Link>
                                    <Link to={`/men?category=hoodies`}>Hoodies</Link>
                                    <Link to={`/men?category=joggers&sweatpants`}>Joggers and sweatpants</Link>
                                </div>
                            </div>
                        </div>
                        <div className='section-products-men'>
                            <div className='section-products-women-categories'>
                                <img src={horizontal_line} alt='horizontal_line'/>
                                <div>
                                    <h3>Women Categories</h3>
                                    <Link to={`/women?category=new`}>New Releases</Link>
                                    <Link to={`/women?category=sportsbras`}>Sports Bras</Link>
                                    <Link to={`/women?category=tanktops`}>Tank tops</Link>
                                    <Link to={`/women?category=leggings`}>Leggings</Link>
                                    <Link to={`/women?category=shorts`}>Shorts</Link>
                                </div>
                            </div>
                            <div className='section-products-men-banner'>
                                <button className='shop-men-btn'>
                                    <Link to={'/men'}><span>Men</span><img src={fit} alt='fit'/></Link>
                                </button>
                                <span className='shop-men-ver'><span>Men Shop</span><img src={horizontal_line} alt='horizontal_line'/></span>
                                <img src={men_banner} alt='men_banner'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-background'>
                    <img className='section-background-blue-right' src={background_imag} alt='background_blue_imag'/>
                </div>
                <div className='section-features'>
                    <h2>--- Featured Items</h2>
                    <Slider type='products' />
                </div>
                <div className='section-background'>
                    <img className='section-background-fittfind' src={fittfind} alt='fittfind_imag'/>
                </div>
                <div className='section-apps'>
                    <h2 className='section-apps-h2-1'>--- Book a personal trainer</h2><h2 className='section-apps-h2-2'>and more with the <span>fitt</span><span>find</span> app</h2>
                    <div className='section-apps-left-right'>
                        <div className='section-apps-left'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Link to={'/'}>
                                <span>Find out more</span>
                                <img src={forwardIcon} alt='forward_icon' />
                            </Link>
                        </div>
                        <div className='section-apps-right'>
                            <img className='section-apps-right-img-1' src={app_imag} alt='app_store_imag'/>
                            <span className='section-apps-right-span-1'>Download now</span>
                            <img className='section-apps-right-img-2' src={app_video} alt='app_store_video'/>
                            <span className='section-apps-right-span-2'>watch application movie</span>
                        </div>
                    </div>
                </div>
                <div className='section-social-media'>
                    <h2>--- Follow FittFind</h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}

export default IndexPage
