import React from 'react'
import { Link } from 'gatsby'

import '../../styles/about-us.css'
import two from '../../images/02.png'
import backward_icon from '../../images/backward-icon.png'
import about_us_banner_right_1 from '../../images/about-us-banner-right-1.png'
import about_us_banner_right_2 from '../../images/about-us-banner-right-2.png'
import vertical_line_white from '../../images/vertical_line_white.png'
import horizontal_line from '../../images/horizontal_line.png'
import { Hero, Wrapper, ImpossibleBanner } from '../../components'

const corporates_details = [
    {
        title: 'claims & warranties',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'product testing',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'idea submission',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'fittfind careers & internships',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'media',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'brand permission',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: 'gym & studio partner',
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        title: "can't find something?" ,
        overview: 'Nike stands behind all of our products. If your product has a material or workmanship flaw, support is available.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
];

export default class AboutUs extends React.Component{
    state= {
        detail: null,
    };

    render() {
        const { detail } = this.state;

        return (
            <Wrapper name='About Us'>
                <Hero>
                    <div className='section-about-us-hero'>
                        <Link to='/contact' className='section-about-us-hero-top'>
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
                        {corporates_details.map((item, i) => (
                            <div className='section-about-us-corporates-single-detail' key={i}>
                                <div style={{ backgroundImage: `url(${two})` }}>
                                    <h4>{item.title}</h4>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                </div>
                                <div>
                                    <p>{item.overview}</p>
                                    {detail !== i+1 &&
                                        <button className='corporates-single-detail-btn' onClick={() => this.setState({ detail: i+1 })}>
                                            Read more
                                        </button>
                                    }
                                </div>
                                {detail === i+1 &&
                                    <div className='section-about-us-corporates-single-detail-desc'>
                                        <p>{item.desc}</p>
                                        <button className='corporates-single-detail-btn' onClick={() => this.setState({ detail: null })}>
                                            Show less
                                        </button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <ImpossibleBanner/>
            </Wrapper>
        )
    }
}
