import React from 'react'
import {Link} from "gatsby";

import { Wrapper, Hero, ImpossibleBanner} from "../components";

export default class Help extends React.Component {
    render() {
        return (
            <Wrapper name='Help' location={this.props.location} gymNav={true}>
                <Hero>
                    <div className='section-shipping-hero'>
                        <h1>Help</h1>
                    </div>
                </Hero>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
