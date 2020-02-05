import React from 'react'

import '../../styles/contact.css'
import { Wrapper, Hero } from '../../components'
import women_banner from "../../images/women_banner.jpg";
import horizontal_line from "../../images/horizontal_line.png";

const categories = [
    {
        name: 'Order Status',
        image: women_banner,
    }, {
        name: 'Shipping & Delivery',
        image: women_banner,
    },{
        name: 'Returns',
        image: women_banner,
    },{
        name: 'Fittfind Corp',
        image: women_banner,
    },
];


export default class Contact extends React.Component {
    state = {
        hovered: categories[0].name
    };

    render() {
        const { hovered } = this.state;

        return (
            <Wrapper name='Contact'>
                <Hero>
                    <div className='section-contact-hero'>
                        <div className='section-contact-hero-category'>
                            <h1>SUPPORT</h1>
                        </div>
                        {categories.map((item, i) => (
                            <button
                                onMouseOver={() => this.setState({ hovered: item.name })}
                                className='section-contact-hero-category' key={i} style={hovered === item.name ? { backgroundImage: `url(${item.image})` } : null}
                            >
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>{item.name.toUpperCase()}</p>
                            </button>
                        ))}
                    </div>
                </Hero>
            </Wrapper>
        )
    }
}
