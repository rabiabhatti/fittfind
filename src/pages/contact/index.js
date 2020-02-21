import React from 'react'
import { Link } from 'gatsby'

import '../../styles/contact.css'
import { Wrapper, Hero } from '../../components'
import contact_banner from "../../images/contact-banner.png";
import women_banner from "../../images/women_banner.jpg";
import contact_feature_1 from '../../images/contact-feature-1.png'
import contact_feature_2 from '../../images/contact-feature-2.png'
import contact_feature_3 from '../../images/contact-feature-3.png'
import horizontal_line from "../../images/horizontal_line_white.png";
import horizontal_line_c from "../../images/horizontal_line_c.png";

const categories = [
    {
        name: 'Order Status',
        image: women_banner,
        link: '/contact/order-status'
    }, {
        name: 'Shipping & Delivery',
        image: women_banner,
        link: '/contact/shipping&delivery'
    },{
        name: 'Returns',
        image: women_banner,
        link: '/contact/returns'
    },{
        name: 'Fittfind Corp',
        image: women_banner,
        link: '/contact/about-us'
    },
];


export default class Contact extends React.Component {
    render() {
        const path = this.props.path.split('/')[this.props.path.split('/').length - 2];
        return (
            <Wrapper name='Contact' path={path}>
                <Hero>
                    <div className='column-center section-contact-hero'>
                        <div className='section-contact-hero-top'>
                            <span>SUPPORT</span>
                            {categories.map((item, i) => (
                                <Link to={item.link} key={i} style={{backgroundImage: `url(${item.image})`}} className='section-contact-hero-category-container'>
                                    <div className='section-contact-hero-category'>
                                        <img src={horizontal_line} alt='horizontal_line' />
                                        <p>{item.name.toUpperCase()}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Hero>
                <div className='section-contact-hero-bottom column-center'>
                    <h2>Contact Fittfind</h2>
                    <div className='section-contact-hero-bottom-features space-between'>
                        <div className='column-center section-contact-hero-bottom-feature'>
                            <div className='column-center section-contact-hero-bottom-feature-img'>
                                <img src={contact_feature_1} alt='contact_feature_1' />
                            </div>
                            <img className='section-contact-hero-bottom-feature-line' src={horizontal_line_c} alt='horizontal_line' />
                            <h4>Find and order product</h4>
                            <p className='heading-light'>Clothing</p>
                            <p className='heading-light'>Accessories</p>
                            <p className='heading-light'>New Arrivals</p>
                        </div>
                        <div className='column-center section-contact-hero-bottom-feature'>
                            <div className='column-center section-contact-hero-bottom-feature-img'>
                                <img src={contact_feature_2} alt='contact_feature_2' />
                            </div>
                            <img className='section-contact-hero-bottom-feature-line' src={horizontal_line_c} alt='horizontal_line' />
                            <h4>Order Status</h4>
                            <p className='heading-light'>Track my order</p>
                        </div>
                        <div className='column-center section-contact-hero-bottom-feature'>
                            <div className='column-center section-contact-hero-bottom-feature-img'>
                                <img src={contact_feature_3} alt='contact_feature_3' />
                            </div>
                            <img className='section-contact-hero-bottom-feature-line' src={horizontal_line_c} alt='horizontal_line' />
                            <h4>App Support</h4>
                            <p className='heading-light'>App coming soon...</p>
                        </div>
                    </div>
                </div>
                <div className='section-contact-banner column-center'>
                    <img className='section-contact-banner-img' src={contact_banner} alt='contact_banner'/>
                    <div className='section-contact-details column-center'>
                        <h2>Contact Fittfind</h2>
                        <div className='section-contact-details-container space-between'>
                            <div className='column-center section-contact-detail'>
                                <img className='section-contact-hero-bottom-feature-line' src={horizontal_line} alt='horizontal_line' />
                                <h4>Email</h4>
                                <p>info@fittfind.com</p>
                            </div>
                            <div className='column-center section-contact-detail'>
                                <img className='section-contact-hero-bottom-feature-line' src={horizontal_line} alt='horizontal_line' />
                                <h4>Company Address</h4>
                                <p>107 Cheapside, London,</p>
                                <p>EC2V 6DN</p>
                                <p>United Kingdom</p>
                            </div>
                            <div className='column-center section-contact-detail'>
                                <img className='section-contact-hero-bottom-feature-line' src={horizontal_line} alt='horizontal_line' />
                                <h4>Phone</h4>
                                <p>51 258 369 458</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
