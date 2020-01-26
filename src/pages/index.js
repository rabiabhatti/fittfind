import React from "react"
import { Link } from "gatsby"

import {Wrapper, Hero, Slider, ImpossibleBanner} from "../components"

import forwardIcon from '../images/forward-icon.png'
import women_banner from '../images/women_banner.jpg'
import men_banner from '../images/men_banner.jpg'

class IndexPage extends React.Component {
    render() {
        return (
            <Wrapper name='Home'>
                <Hero>
                    <h1 className="section-Find-release-hero"><span>Find</span> & release your inner <span>athlete</span></h1>
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
                        <div className='section-products-men-banner'>
                            <img src={men_banner} alt='men_banner' width={400} />
                            <button className='shop-men-btn'>
                                <Link to={'/men'}>Men</Link>
                            </button>
                            <span>Men Shop ---</span>
                        </div>
                        <div className='section-products-men-categories'>
                            <h3>Men Categories</h3>
                            <Link to={`/men?category=new`}>New Releases</Link>
                            <Link to={`/men?category=compressiontops`}>Compression Tops</Link>
                            <Link to={`/men?category=tights`}>Tights</Link>
                            <Link to={`/men?category=hoodies`}>Hoodies</Link>
                            <Link to={`/men?category=joggers&sweatpants`}>Joggers and sweatpants</Link>
                        </div>
                    </div>
                </div>
                <div className='section-features'>
                    <h2>--- Featured Items</h2>
                    <Slider type='products' />
                </div>
                <div className='section-apps'>
                    <h2>Book a personal trainer and more with the <span>fittfind</span> app</h2>
                    <div className='section-apps-left'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Link to={'/'}>
                            <span>Find out more</span>
                            <img src={forwardIcon} alt='forward_icon' />
                        </Link>
                    </div>
                    <div className='section-apps-right'>
                        <img src={women_banner} alt='app_store_imag' width={400} />
                        <img src={women_banner} alt='app_store_video' width={400} />
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
