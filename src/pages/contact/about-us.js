import React from 'react'
import { Link } from 'gatsby'
import ShowMore from 'react-show-more';

import '../../styles/about-us.css'
import one from '../../images/01.png'
import two from '../../images/02.png'
import three from '../../images/03.png'
import four from '../../images/04.png'
import five from '../../images/05.png'
import six from '../../images/06.png'
import seven from '../../images/07.png'
import eight from '../../images/08.png'
import backward_icon from '../../images/backward-icon.png'
import about_us_banner_right_1 from '../../images/about-us-banner-right-1.png'
import about_us_banner_right_2 from '../../images/about-us-banner-right-2.png'
import vertical_line_white from '../../images/vertical_line_white.png'
import horizontal_line from '../../images/horizontal_line.png'
import { Hero, Wrapper, ImpossibleBanner } from '../../components'

export default function AboutUs (props) {
    return (
        <Wrapper name='About Us' location={props.location}>
            <Hero>
                <div className='section-about-us-hero'>
                    <Link to='/contact/' className='section-about-us-hero-top'>
                        <img src={backward_icon} alt='forward_icon' />
                        Back to contact
                    </Link>
                    <div className='section-about-us-hero-bottom'>
                        <img src={vertical_line_white} alt='vertical_line_white' />
                        <h4>About Fittfind</h4>
                        <h2>To provide athletes* with the tools and services to lead the rich, healthy, & fulfilling life.</h2>
                        <h4>*Find & release your inner athlete.</h4>
                        <img src={vertical_line_white} alt='vertical_line_white' />
                    </div>
                </div>
            </Hero>
            <div className='section-about-us-banner'>
                <div className='section-about-us-banner-left'>
                    <div><img src={horizontal_line} alt='horizontal_line' /><h1>About <span>fitt</span><span>find</span></h1></div>
                    <p>Phasellus ut consectetur diam, sed cursus elit. Aenean euismod, lorem sit amet hendrerit porttitor, metus libero placerat lorem, nec euismod mi nibh id mi.<br/><br/>Nam et vestibulum justo. Suspendisse venenatis nisi nec turpis bibendum fermentum.<br/><br/>Nullam hendrerit, mi at dictum vehicula, lacus ex pretium ligula, sit amet elementum enim magna quis odio. Aliquam id dapibus tellus, dictum bibendum sem. Vestibulum vel viverra felis, ac hendrerit turpis.<br/><br/>Phasellus ut consectetur diam, sed cursus elit. Aenean euismod, lorem sit amet hendrerit porttitor, metus libero placerat lorem, nec euismod mi nibh id mi.<br/><br/>Nam et vestibulum justo. Suspendisse venenatis nisi nec turpis bibendum fermentum.</p>
                </div>
                <div className='section-about-us-banner-right'>
                    <img src={about_us_banner_right_1} alt='about_us_banner_right_1' />
                    <img src={about_us_banner_right_2} alt='about_us_banner_right_2' />
                </div>
            </div>
            <div className='section-about-us-corporates'>
                <h2><span>fitt</span><span>find</span> corporate details</h2>
                <div className='section-about-us-corporates-details'>
                    <div className='section-about-us-corporates-single-detail'>
                        <div style={{ backgroundImage: `url(${one})`}}>
                            <h4>claims & warranties</h4>
                            <img src={horizontal_line} alt='horizontal_line' />
                        </div>
                        <div className='section-about-us-corporates-single-detail-p'>
                            <ShowMore
                                lines={3}
                                more='Show more'
                                less='Show less'
                                anchorClass='corporates-single-detail-btn'
                            >
                                At FittFind, our footwear, apparel, and equipment is crafted with the finest attention to detail. We stand behind every product we sell, so if your product has any type of material damage or flaw in the craftsmanship, please <Link to='/contact#contact' className='section-about-us-corporates-single-detail-link'>contact us</Link>.
                            </ShowMore>
                        </div>
                    </div>
                    <div className='section-about-us-corporates-single-detail'>
                        <div style={{ backgroundImage: `url(${two})`}}>
                            <h4>product testing</h4>
                            <img src={horizontal_line} alt='horizontal_line' />
                        </div>
                        <div className='section-about-us-corporates-single-detail-p'>
                            <ShowMore
                                lines={3}
                                more='Show more'
                                less='Show less'
                                anchorClass='corporates-single-detail-btn'
                            >
                                Looking for an exciting new opportunity? Check out our unique career and internship opportunities <Link to='/' className='section-about-us-corporates-single-detail-link'>here</Link>.
                            </ShowMore>
                        </div>
                    </div><div className='section-about-us-corporates-single-detail'>
                    <div style={{ backgroundImage: `url(${three})`}}>
                        <h4>idea submission</h4>
                        <img src={horizontal_line} alt='horizontal_line' />
                    </div>
                    <div className='section-about-us-corporates-single-detail-p'>
                        <ShowMore
                            lines={2}
                            more='Show more'
                            less='Show less'
                            anchorClass='corporates-single-detail-btn'
                        >
                            At FittFind, we welcome fresh ideas and innovative concepts. Have an idea for a new product? <Link to='/' className='section-about-us-corporates-single-detail-link'>Share it here</Link>.
                        </ShowMore>
                    </div>
                </div><div className='section-about-us-corporates-single-detail'>
                    <div style={{ backgroundImage: `url(${four})`}}>
                        <h4>Careers & Internships</h4>
                        <img src={horizontal_line} alt='horizontal_line' />
                    </div>
                    <div className='section-about-us-corporates-single-detail-p'>
                        <ShowMore
                            lines={3}
                            more='Show more'
                            less='Show less'
                            anchorClass='corporates-single-detail-btn'
                        >
                            Looking for an exciting new opportunity? Check out our unique career and internship <Link to='/' className='section-about-us-corporates-single-detail-link'>opportunities here</Link>.
                        </ShowMore>
                    </div>
                </div><div className='section-about-us-corporates-single-detail'>
                    <div style={{ backgroundImage: `url(${five})`}}>
                        <h4>Media</h4>
                        <img src={horizontal_line} alt='horizontal_line' />
                    </div>
                    <div className='section-about-us-corporates-single-detail-p'>
                        <ShowMore
                            lines={1}
                            more='Show more'
                            less='Show less'
                            anchorClass='corporates-single-detail-btn'
                        >
                            For press and media inquiries, <Link to='/contact#contact' className='section-about-us-corporates-single-detail-link'>contact FittFind </Link>now.
                        </ShowMore>
                    </div>
                </div><div className='section-about-us-corporates-single-detail'>
                    <div style={{ backgroundImage: `url(${six})`}}>
                        <h4>Brand Permission</h4>
                        <img src={horizontal_line} alt='horizontal_line' />
                    </div>
                    <div className='section-about-us-corporates-single-detail-p'>
                        <ShowMore
                            lines={3}
                            more='Show more'
                            less='Show less'
                            anchorClass='corporates-single-detail-btn'
                        >
                            We do not authorize the modification or unauthorized use of our trademarks, logos, or images. Third party sites and affiliates seeking permission can <Link to='/contact#contact' className='section-about-us-corporates-single-detail-link'>contact FittFind</Link>.
                        </ShowMore>
                    </div>
                </div><div className='section-about-us-corporates-single-detail'>
                    <div style={{ backgroundImage: `url(${seven})`}}>
                        <h4>Gym & Studio Partner</h4>
                        <img src={horizontal_line} alt='horizontal_line' />
                    </div>
                    <div className='section-about-us-corporates-single-detail-p'>
                        <ShowMore
                            lines={3}
                            more='Show more'
                            less='Show less'
                            anchorClass='corporates-single-detail-btn'
                        >
                            Want to become a partner in the FittFind community? Personal trainers, gyms, fitness centers, nutritionists, and other industry professionals are invited and encouraged to <Link to='/list-yourself/' className='section-about-us-corporates-single-detail-link'>submit an application</Link> now.
                        </ShowMore>
                    </div>
                </div><div className='section-about-us-corporates-single-detail'>
                    <div style={{ backgroundImage: `url(${eight})`}}>
                        <h4>Can’t Find Something?</h4>
                        <img src={horizontal_line} alt='horizontal_line' />
                    </div>
                    <div className='section-about-us-corporates-single-detail-p'>
                        <ShowMore
                            lines={1}
                            more='Show more'
                            less='Show less'
                            anchorClass='corporates-single-detail-btn'
                        >
                            If you have any additional questions, please <Link to='/contact#contact' className='section-about-us-corporates-single-detail-link'>contact Fittfind</Link>.
                        </ShowMore>
                    </div>
                </div>
                </div>
            </div>
            <ImpossibleBanner/>
        </Wrapper>
    )
}

