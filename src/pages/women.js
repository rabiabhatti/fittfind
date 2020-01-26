import React from 'react';

import {Wrapper, Hero, Slider, ImpossibleBanner} from "../components"

export default class Women extends React.Component {
    render() {
        return (
            <Wrapper name='Women'>
                <div className='section-social-media'>
                    <h2>--- Follow FittFind</h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        );
    }
}
