import React, {Fragment} from 'react'
import {Link} from "gatsby";

import '../styles/payment.css'

import {Hero} from "./Hero";
import backward_icon from "../images/backward-icon.png";

class PaymentComponent extends React.Component {
    state = {
        loaded: 0,
    };
    render() {
        // const { loaded } = this.state;

        return (
            <Fragment>
                <Hero>
                    <div className='section-shipping-hero'>
                        <Link to='/gym/'>
                            <img src={backward_icon} alt='backward_icon' />
                            <span>Back to gym</span>
                        </Link>
                        <h1>Payment</h1>
                    </div>
                </Hero>
            </Fragment>
        )
    }
}

export { PaymentComponent }
