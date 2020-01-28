import React from 'react'

import { Wrapper, Hero } from '../components'

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
            </Wrapper>
        )
    }
}
