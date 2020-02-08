import React from 'react'
import { Link } from 'gatsby'

import '../../styles/about-us.css'
import forward_icon from '../../images/forward-icon.png'
import vertical_line from '../../images/vertical_line.png'
import { Hero, Wrapper, ImpossibleBanner } from '../../components'

export default class AboutUs extends React.Component{
    render() {
        return (
            <Wrapper name='About Us'>
                <Hero>
                    <div className='section-about-us'>
                        <Link to='/contact'>
                            <img src={forward_icon} alt='forward_icon' />
                            Back to contact
                        </Link>
                        <div>
                            <img src={vertical_line} alt='vertical_line' />
                            <h4>About Fittfind</h4>
                            <h2>To provide athletes* with the tools and services to lead the rich, healthy, & fulfilling life.</h2>
                            <h4>*Find & release your inner athlete.</h4>
                            <img src={vertical_line} alt='vertical_line' />
                        </div>
                    </div>
                </Hero>
                <ImpossibleBanner/>
            </Wrapper>
        )
    }
}
