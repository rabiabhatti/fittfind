import React from 'react';
import {ImpossibleBanner, Slider, Wrapper} from "../components";

export default class Men extends React.Component {
    render() {
        return (
            <Wrapper name='Men'>
                <div className='section-social-media'>
                    <h2>--- Follow FittFind</h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        );
    }
}
