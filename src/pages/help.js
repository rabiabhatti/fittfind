import React from 'react'

import { Wrapper, Hero, ImpossibleBanner, Image} from "../components";

export default class Help extends React.Component {
    render() {
        return (
            <Wrapper name='Help' location={this.props.location} gymNav={true}>
                <Hero>
                    <div className='section-shipping-hero'>
                        <Image imgsrc='dhl_icon.png' />
                    </div>
                </Hero>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
