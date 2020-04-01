import React from 'react'
import { Link } from 'gatsby'

import '../../styles/order-status.css'
import backward_icon from "../../images/backward-icon.png";
import {Wrapper, ImpossibleBanner, Hero, CustomInput} from "../../components";

export default class OrderStatus extends React.Component {
    state= {
      order_no: '',
      status_res: false
    };

    _onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleCheckStatus = () => {
        this.setState({ status_res: true })
    };

    render() {
        const { order_no, status_res } = this.state;
        return (
            <Wrapper name='Order Status' location={this.props.location}>
                <Hero>
                    <div className='section-shipping-hero'>
                        <Link to='/contact/'>
                            <img src={backward_icon} alt='backward_icon' />
                            <span>Back to contact</span>
                        </Link>
                        <h1>Check order status</h1>
                    </div>
                </Hero>
                <div className='column-start'>
                    {status_res ?
                        <div className='section-order-status-response-container'>
                            <h2>Status</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        :
                        <div className='column-start section-order-status-form'>
                            <h2>Please enter your order number here.</h2>
                            <CustomInput className='section-order-status-form-input' title='Order number' name='order_no' width={100} onChange={this._onChange} value={order_no} />
                            <button className='section-order-status-form-btn' onClick={this.handleCheckStatus}>Check order status</button>
                        </div>
                    }
                </div>
                <ImpossibleBanner />
            </Wrapper>
        )
    }
}
