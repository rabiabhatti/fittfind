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
            <div className='section-about-us-banner row-center'>
                <div className='section-about-us-banner-left'>
                    <div><img src={horizontal_line} alt='horizontal_line' /><h1>About <span>fitt</span><span>find</span></h1></div>
                    <p>
                        Fittfind is a technology driven corporation engaged in the design, development and marketing of Elite sportswear.
                        We believe that as long as you have a pulse, there’s there is an inner
                        athlete waiting to emerge. Our mission is to provide our athletes with the tools and services
                        they need to lead a rich, healthy, and fulfilling life. <br/><br/>From our redefined sportswear to our advanced mobile app, FittFind connects you to a pool
                        of with the personal trainers, physio therapists, nutritionists, gyms, and studios they seek to
                        build and sustain a fit and healthy lifestyle.
                        <br/><br/>
                        We’re not just selling tee shirts and sneakers – we’re changing the way that athletes, trainers,
                        and gyms find and connect with one another in order to achieve great superior physical fitness and mental well-being.
                        <br/><br/>
                        With our home base located in the beautiful city of London, we’re providing athletes around the world with an easy and effective way to connect to fitness.
                        Whether you’re in the UK, New York, or Mozambique,
                        our mobile app is a connection to the world of fitness, making it easy to find the trainer or gym where you can best develop your inner athlete.
                        <br/><br/>
                        All of our products are designed and developed in house, then manufactured in top-quality
                        factories in order to provide our athletes with superior products at competitive prices. We
                        know that everyone has it in them to become a great athlete, and we’re dedicated to giving you
                        the tools and products needed to smash that goal and achieve that dream. With great fitness
                        you can achieve your true potential, and we’re dedicated to making our athletes all they can be
                        – inside and out.
                        <br/><br/>
                        Our innovative new fitness app took the 2017-2018 title of Best Growth Business at the annual
                        Flare awards in Hatfield, England. Recognized for our advanced digital software and streamlined
                        way of connecting fitness clients with trainers, gyms, and other professionals, we’re quickly
                        making our mark on the industry. Our 2Fs logo, as well as our “Find & Release” trademark is
                        fast becoming recognized by leading industry professionals and athletes everywhere.
                    </p>
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

