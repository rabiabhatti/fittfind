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
                <Hero className='section-shipping-hero-main'>
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
                        <p>You can select shipping options on Nike.com during step one of order checkout. See the following table for Nike.com shipping options, estimated timelines and costs. Additional shipping FAQs are provided below.<br/><br/>Please note that NIKEiD orders typically arrive in 3-6 weeks, and expedited shipping options aren't available. Converse Custom orders arrive in 2-4 weeks. Learn more about NIKEiD shipping or Converse Custom shipping. The following timelines also don't apply to orders shipping to APO/FPO addresses.</p>
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
                            <p>Orders can be shipped within the continental US, Alaska, Hawaii and to APO/FPO addresses (some restrictions apply).<br/><br/>Nike.com doesn't ship internationally, but ordering options are available in several other countries. Please see Nike.com's international shipping policy.<br/><br/>Nike.com doesn't ship to P.O. boxes, Nike, Converse or Hurley stores for in-store pickup, US territories (Puerto Rico, US Virgin Islands, Guam, Saipan, Midway Islands, American Samoa, and Federated States of Micronesia), international reshippers or businesses that forward packages to international addresses.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>How do I get free shipping?</h4>
                            <p>Join Nike+ and sign in to receive free standard shipping on every order, every time. Free standard shipping is automatically applied during checkout. You can join Nike+ for free.<br/><br/>If you place your order as a guest, you'll automatically receive free standard shipping on all qualifying orders of $150 or more.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>Whe exactly will I receive my order?</h4>
                            <p>When you enter your shipping address during checkout, each available shipping method will automatically update with estimated delivery dates. Once you select the shipping method and complete your order, the estimated delivery date will be listed in your order confirmation email.</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>Can I check order status or track shipping?</h4>
                            <p>You can check your order status anytime after it's placed. Tracking information will also be emailed to you when the order ships</p>
                        </div>
                        <div className='section-shipping-faq-container'>
                            <h4>When will I receive my personalized socks or shoes order?</h4>
                            <p>You can select Standard, Two-Day, or Next-Day shipping for personalized sock or shoe orders. Please note that personalized socks and shoes typically take an additional day to ship.</p>
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
