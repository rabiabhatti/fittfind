import React from 'react'

import { Wrapper, Hero } from '../components'
import one from '../images/01.png'
import two from '../images/01.png'
import three from '../images/01.png'
import forwardIcon from '../images/forward-icon.png'
import vertical_line from '../images/vertical_line.png'
import gym_feature_1 from '../images/gym-feature-1.png'
import gym_feature_2 from '../images/gym-feature-2.png'
import gym_feature_3 from '../images/gym-feature-3.png'
import horizontal_line from '../images/horizontal_line.png'
import kickstarter_logo from '../images/kickstarter_logo.png'

export default class Gym extends React.Component{
    render() {
        return (
            <Wrapper name='Gym'>
                <Hero className='section-hero-gym'>
                    <h2>Flexible Gym access</h2>
                    <div className='section-hero-gym-main-banner'>
                        <h1>Find gym in</h1>
                        <div className='section-hero-gym-main-banner-heading'>
                            <span>London</span>
                            <span>Enter location <br/>or postcode</span>
                        </div>
                        <div className='section-hero-gym-kickstarter-ref'>
                            <p>coming soon on</p>
                            <img src={kickstarter_logo} alt='kickstarter_logo' />
                        </div>
                    </div>
                </Hero>
                <div className='section-gym-features'>
                    <div className='section-gym-features-desc'>
                        <h3>
                            <img src={horizontal_line} alt='horizontal_line' />
                            1000 gyms <br/> in your pocket
                        </h3>
                        <p>Personal fitness trainers and clients connect through FittFind, a revolutionary app coming soon. If you're sick and tired of not hitting your New Year's "better body" resolution, this app is for you.</p>
                        <button>
                            PASS TYPES
                            <img src={forwardIcon} alt='forwardIcon' />
                        </button>
                    </div>
                    <div className='section-gym-features-list'>
                        <div className='section-gym-feature'>
                            <img src={gym_feature_1} alt='gym_feature_1' />
                            <div className='section-gym-feature-desc'>
                                <div style={{ backgroundImage: `url(${one})` }}>
                                    <h4>Discover venues</h4>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                </div>
                                <p>We will be in every major city</p>
                            </div>
                        </div>
                        <div className='section-gym-feature'>
                            <img src={gym_feature_2} alt='gym_feature_2' />
                            <div className='section-gym-feature-desc'>
                                <div style={{ backgroundImage: `url(${two})` }}>
                                    <h4>Select your pass</h4>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                </div>
                                <p>Find your desired price</p>
                            </div>
                        </div>
                        <div className='section-gym-feature'>
                            <img src={gym_feature_3} alt='gym_feature_3' />
                            <div className='section-gym-feature-desc'>
                                <div style={{ backgroundImage: `url(${three})` }}>
                                    <h4>Go to gym</h4>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                </div>
                                <p>Work out today, It only take 3<br/>mins to Fittfind it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
