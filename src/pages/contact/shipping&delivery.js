import React from 'react'
import { Link } from 'gatsby'

import '../../styles/shipping.css'
import { Wrapper, Hero } from "../../components";
import backward_icon from '../../images/backward-icon.png'
import horizontal_line from '../../images/horizontal_line.png'

export default class ShippingAndDelivery extends React.Component {
    render() {
        return (
            <Wrapper name='Shipping & Delivery'>
                <Hero>
                    <div className='section-shipping-hero'>
                        <Link to='/contact'>
                            <img src={backward_icon} alt='backward_icon' />
                            <span>Back to contact</span>
                        </Link>
                        <h1>Shipping & Delivery</h1>
                    </div>
                </Hero>
                <div className='section-shipping-info'>
                    <img className='section-shipping-left' src={horizontal_line} alt='horizontal_line' />
                    <div className='section-shipping-info-right'>
                        <h2>Fittfind shipping information</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br/> Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Shipping method</th>
                                    <th>Shipping time</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Standard</td>
                                    <td>2-4 business days</td>
                                    <td>Free with Nike+ account on all orders* <br/>Guests: $8 (free for orders of $150 or more)</td>
                                </tr>
                                <tr>
                                    <td>Two-Day</td>
                                    <td>2-3 business days</td>
                                    <td>$15</td>
                                </tr>
                                <tr>
                                    <td>Next-Day</td>
                                    <td>1-2 business days</td>
                                    <td>$25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='section-shipping-faqs'>
                    <img className='section-shipping-left' src={horizontal_line} alt='horizontal_line' />
                    <div className='section-shipping-faqs-right'>
                        <h2>Frequently asked questions</h2>
                        <div className='section-shipping-faq-container'>
                            <h4>Where can I ship my order?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>How do I get free shipping?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>Whe exactly will I receive my order?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>Can I check order status or track shipping?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>When will I receive my personalized socks or shoes order?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className='section-shipping-related-questions'>
                    <img className='section-shipping-left' src={horizontal_line} alt='horizontal_line' />
                    <div className='section-shipping-related-questions-right'>
                        <h2>Answers others find helpful</h2>
                        <Link to={'/'}>Fittfind.com free shipping</Link>
                        <Link to={'/'}>Check Fittfind.com order status and track shipping</Link>
                        <Link to={'/'}>Change Fittfind order</Link>
                        <Link to={'/'}>FittfindiD shipping times and costs</Link>
                        <Link to={'/'}>Where does fittfind.com ship from?</Link>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
