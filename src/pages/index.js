import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import {Wrapper, Hero, Slider} from "../components"

import forwardIcon from '../images/forward-icon.png'
import women_banner from '../images/home-slider-4.jpg'
import men_banner from '../images/home-slider-1.jpg'

class IndexPage extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home | Fitt Find</title>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                </Helmet>
                <Wrapper>
                    <Hero>
                        <h1>Find & release your inner athlete</h1>
                        <button className='findFitBtn'>
                            Find your fit
                            <img src={forwardIcon} alt='forward_icon'/>
                        </button>
                        <Slider type='hero' />
                    </Hero>
                    <div className='section-products-categories'>
                        <div className='section-products-women'>
                            <div className='section-products-women-banner'>
                                <img src={women_banner} alt='women_banner' width={400} />
                                <button className='shop-women-btn'>
                                    <Link to={'/women'}>Women</Link>
                                </button>
                                <span>Women Shop ---</span>
                            </div>
                            <div className='section-products-women-categories'>
                                <h3>Women Categories</h3>
                                <Link to={`/women?category=new`}>New Releases</Link>
                                <Link to={`/women?category=sportsbras`}>Sports Bras</Link>
                                <Link to={`/women?category=tanktops`}>Tank tops</Link>
                                <Link to={`/women?category=leggings`}>Leggings</Link>
                                <Link to={`/women?category=shorts`}>Shorts</Link>
                            </div>
                        </div>
                        <div className='section-products-men'>
                            <div className='section-products-men-categories'>
                                <h3>Men Categories</h3>
                                <Link to={`/men?category=new`}>New Releases</Link>
                                <Link to={`/men?category=compressiontops`}>Compression Tops</Link>
                                <Link to={`/men?category=tights`}>Tights</Link>
                                <Link to={`/men?category=hoodies`}>Hoodies</Link>
                                <Link to={`/men?category=joggers&sweatpants`}>Joggers and sweatpants</Link>
                            </div>
                            <div className='section-products-men-banner'>
                                <img src={men_banner} alt='men_banner' width={400} />
                                <button className='shop-men-btn'>
                                    <Link to={'/men'}>Men</Link>
                                </button>
                                <span>Men Shop ---</span>
                            </div>
                        </div>
                    </div>
                    <div className='section-features'>
                        <h2>--- Featured Items</h2>
                        <Slider type='products' />
                    </div>
                    <div className='section-social-media'>
                        <h2>--- Follow FittFind</h2>
                        <Slider type='social_media' />
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default IndexPage
