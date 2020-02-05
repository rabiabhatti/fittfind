import React from 'react'

import '../../styles/contact.css'
import { Wrapper, Hero } from '../../components'
import women_banner from "../../images/women_banner.jpg";
import contact_feature_3 from '../../images/gym-feature-1.png'
import contact_feature_2 from '../../images/gym-feature-2.png'
import contact_feature_1 from '../../images/gym-feature-3.png'
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
                    <div className='column-center section-contact-hero'>
                        <div className='section-contact-hero-top'>
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
                        <div className='section-contact-hero-bottom column-center'>
                            <h2>Contact Fittfind</h2>
                            <div className='section-contact-hero-bottom-features space-between'>
                                <div className='column-center section-contact-hero-bottom-feature'>
                                    <img src={contact_feature_1} alt='contact_feature_1' width={70} />
                                    <img className='section-contact-hero-bottom-feature-line' src={horizontal_line} alt='horizontal_line' />
                                    <h4>Find and order product</h4>
                                    <p className='heading-light'>Clothing</p>
                                    <p className='heading-light'>Accessories</p>
                                    <p className='heading-light'>New Arrivals</p>
                                </div>
                                <div className='column-center section-contact-hero-bottom-feature'>
                                    <img src={contact_feature_2} alt='contact_feature_2' width={70} />
                                    <img className='section-contact-hero-bottom-feature-line' src={horizontal_line} alt='horizontal_line' />
                                    <h4>Order Status</h4>
                                    <p className='heading-light'>Track my order</p>
                                </div>
                                <div className='column-center section-contact-hero-bottom-feature'>
                                    <img src={contact_feature_3} alt='contact_feature_3' width={70} />
                                    <img className='section-contact-hero-bottom-feature-line' src={horizontal_line} alt='horizontal_line' />
                                    <h4>App Support</h4>
                                    <p className='heading-light'>App coming soon...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Hero>
            </Wrapper>
        )
    }
}
