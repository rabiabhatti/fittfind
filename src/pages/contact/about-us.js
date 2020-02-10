import React from 'react'
import { Link } from 'gatsby'

import '../../styles/about-us.css'
import forward_icon from '../../images/forward-icon.png'
import women_banner from '../../images/women_banner.jpg'
import vertical_line from '../../images/vertical_line.png'
import { Hero, Wrapper, ImpossibleBanner } from '../../components'

export default class AboutUs extends React.Component{
    render() {
        return (
            <Wrapper name='About Us'>
                <Hero>
                    <div className='section-about-us-hero'>
                        <Link to='/contact' className='section-about-us-hero-top'>
                            <img src={forward_icon} alt='forward_icon' />
                            Back to contact
                        </Link>
                        <div className='section-about-us-hero-bottom'>
                            <img src={vertical_line} alt='vertical_line' />
                            <h4>About Fittfind</h4>
                            <h2>To provide athletes* with the tools and services to lead the rich, healthy, & fulfilling life.</h2>
                            <h4>*Find & release your inner athlete.</h4>
                            <img src={vertical_line} alt='vertical_line' />
                        </div>
                    </div>
                </Hero>
                <div className='section-about-us-banner'>
                    <div className='section-about-us-banner-left'>
                        <h1>About Fittfind</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='section-about-us-banner-right'>
                        <img src={women_banner} alt='women_banner' />
                        <img src={women_banner} alt='women_banner' />
                    </div>
                </div>
                <ImpossibleBanner/>
            </Wrapper>
        )
    }
}
