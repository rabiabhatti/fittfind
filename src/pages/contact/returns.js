import React from 'react'
import {Link} from "gatsby";

import { Wrapper, Hero, ImpossibleBanner} from "../../components";
import backward_icon from "../../images/backward-icon.png";

export default class Returns extends React.Component {
    render() {
        return (
            <Wrapper name='Returns'>
                <Hero>
                    <div className='section-shipping-hero'>
                        <Link to='/contact/'>
                            <img src={backward_icon} alt='backward_icon' />
                            <span>Back to contact</span>
                        </Link>
                        <h1>Returns</h1>
                    </div>
                </Hero>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
