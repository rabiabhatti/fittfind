import React from 'react';

import '../styles/women.css'
import {Wrapper, Hero, Slider, ImpossibleBanner} from "../components"
import horizontal_line from '../images/horizontal_line.png'
import women_banner from '../images/women_banner.jpg'

const categories = [
    {
        name: 'New Release',
        image: women_banner,
    }, {
        name: 'Sport Bras',
        image: women_banner,
    },{
        name: 'Tank Tops',
        image: women_banner,
    },{
        name: 'Leggings',
        image: women_banner,
    },{
        name: 'Shorts',
        image: women_banner,
    },

];

export default class Women extends React.Component {
    state = {
        size: '38DD',
        collection: 'player',
        sortBy: 'recommended',
        category: categories[1].name,
    };

    render() {
        return (
            <Wrapper name='Women'>
                <Hero className='section-products-women-hero'>
                    {categories.map((item, i) => (
                        <div className='section-hero-category' key={i} style={{ backgroundImage: `url(${item.image})` }}>
                            <img src={horizontal_line} alt='horizontal_line' />
                            <p>{item.name.toUpperCase()}</p>
                        </div>
                    ))}
                </Hero>
                <div className='section-social-media'>
                    <h2>--- Follow FittFind</h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        );
    }
}
