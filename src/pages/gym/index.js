import React from 'react'
import { Link } from 'gatsby'

import '../../styles/gym.css'
import { Wrapper, Hero } from '../../components'
import one from '../../images/01.png'
import two from '../../images/02.png'
import three from '../../images/03.png'
import quotes from '../../images/quotes.png'
import backwardIcon from '../../images/backward-icon.png'
import forwardIcon from '../../images/forward-icon.png'
import vertical_line_white from '../../images/vertical_line_white.png'
import gym_feature_1 from '../../images/gym-feature-1.png'
import gym_feature_2 from '../../images/gym-feature-2.png'
import gym_feature_3 from '../../images/gym-feature-3.png'
import horizontal_line from '../../images/horizontal_line.png'
import kickstarter_logo from '../../images/kickstarter_logo.png'
import bbc_logo from '../../images/bbc.png'
import guardian_logo from '../../images/guardian.png'
import techradar_logo from '../../images/techradar.png'
import huffington_post_logo from '../../images/huffington-post.png'
import evening_standard_logo from '../../images/evening-standard.png'
import slider_men from '../../images/slider-men.png'
import gym_motivation_girl from '../../images/gym-motivation-girl.png'


export default class Index extends React.Component{
    render() {
        return (
            <Wrapper name='Gym'>
                <Hero className='section-hero-gym'>
                    <div className='section-hero-gym-slider'>
                        <div className='section-hero-gym-img'>
                            <img src={slider_men} alt='slider_men' />
                        </div>
                        <div className='section-hero-gym-text'>
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
                        </div>
                    </div>
                </Hero>
                <div className='section-gym-features'>
                    <div className='section-gym-features-desc-first'>
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

                    <div className='section-gym-motivation-banner'>
                        <div className='section-gym-motivation-first'>
                            <img src={gym_motivation_girl} alt='gym_motivation_girl' />
                            <div className='section-gym-motivation-banner-desc'>
                                <h3>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                    You won't look back
                                </h3>
                                <p>We're working on our customers to create an innovative <br/> solution to fit your fitness needs</p>
                            </div>
                        </div>
                        <div className='section-gym-motivation-banner-slider'>
                            <img src={quotes} alt='quotes-img' />
                            <div className='motivation-quotes'>
                                <p>We're working on our customers to create an innovative solution to fit your fitness needs</p>
                                <p>Socrates</p>
                            </div>
                            <div className='motivation-quotes-buttons'>
                                <button>
                                    <img src={backwardIcon} alt='back_button' />
                                </button>
                                <img src={vertical_line_white} alt='vertical_line_white' />
                                <button>
                                    <img src={forwardIcon} alt='next_button' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='section-gym-supporters'>
                        <h3>They wrote about us</h3>
                        <div className='section-gym-supporters-list'>
                            <img src={evening_standard_logo} alt='evening_standard_logo' />
                            <img src={techradar_logo} alt='techradar_logo' />
                            <img src={huffington_post_logo} alt='huffington_post_logo' />
                            <img src={guardian_logo} alt='guardian_logo' />
                            <img src={bbc_logo} alt='bbc_logo' />
                        </div>
                    </div>
                </div>
                <div className='section-gym-owners'>
                    <h2>Gym or studio owner?</h2>
                    <p>Join the new fitness market and get new customers!</p>
                    <Link to='/gym/list?page=1' className='section-gym-owners-btn'>
                        GET LISTED
                        <img src={forwardIcon} alt='forwardIcon' />
                    </Link>
                </div>
            </Wrapper>
        )
    }
}
