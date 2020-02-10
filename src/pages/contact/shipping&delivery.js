import React from 'react'
import { Link } from 'gatsby'

import '../../styles/shipping.css'
import { Wrapper, Hero } from "../../components";
import backward_icon from '../../images/backward-icon.png'

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
            </Wrapper>
        )
    }
}
