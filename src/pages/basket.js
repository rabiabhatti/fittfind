import React from 'react'
import { Link } from 'gatsby'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

import '../styles/basket.css'
import dhl_icon from '../images/dhl_icon.png'
import dpd_icon from '../images/dpd_icon.png'
import women_banner from '../images/women_banner.jpg'
import forwardIcon from '../images/forward-icon.png'
import { Wrapper, Hero, BasketInput } from '../components'
import horizontal_line from '../images/horizontal_line.png'

const items = [
    {
        name: 'New! sport mesh jacket',
        color: 'Coral Reef (B35)',
        size: 'S',
        qty: 3,
        price: '46.00'
    },{
        name: 'New! sport mesh jacket',
        color: 'Coral Reef (B35)',
        size: 'S',
        qty: 3,
        price: '46.00'
    },{
        name: 'New! sport mesh jacket',
        color: 'Coral Reef (B35)',
        size: 'S',
        qty: 3,
        price: '46.00'
    },
];

export default class Basket extends React.Component {
    state= {
      products_count: 3,
      firstName: '',
      lastName: '',
      company: '',
      address: '',
      city: '',
      postCode: '',
      country: '',
      phone: '',
      deliveryMode: '',
    };

    _onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    onSelectCountry = (countryCode) => {
        this.setState({ country: countryCode })
    }

    render() {
        const { products_count, firstName, lastName, company, address, city, postCode, deliveryMode, phone } = this.state;

        return (
            <Wrapper name='Basket'>
                <Hero>
                    <div className='section-basket-hero'>
                        <Link to='/' className='section-basket-hero-back-link'>
                            <img src={forwardIcon} alt='forwardIcon' />
                            <span>Back shopping</span>
                        </Link>
                        <div className='section-basket-hero-products-count'>
                            <h1>Basket</h1>
                            <p>({products_count} products)</p>
                        </div>
                    </div>
                </Hero>
                <div className='section-basket-details'>
                    <div className='section-basket-items'>
                        <div className='section-basket-items-left'>
                            <h4>My bag <img src={horizontal_line} alt='horizontal_line' /></h4>
                            <h4>My order</h4>
                        </div>
                        <div className='section-basket-items-right'>
                            <h2>My bag</h2>
                            {items.map((item, i) => (
                                <div className='section-basket-single-item row-center' key={i}>
                                    <img className='section-basket-single-item-img' src={women_banner} alt='women_banner'/>
                                    <div className='section-basket-single-item-details'>
                                        <div className='section-basket-single-item-headings space-between'>
                                            <h3 className='section-basket-heading'>{item.name}</h3>
                                            <p className='section-basket-heading heading-light'>Unit price</p>
                                            <div className='section-basket-heading'/>
                                            <p className='section-basket-heading heading-light'>Total</p>
                                            <div className='section-basket-heading'/>
                                        </div>
                                        <div className='section-basket-single-item-desc space-between'>
                                            <div className='section-basket-item-detail'>
                                               <div className='column-start'>
                                                    <p className='heading-light'>Color</p>
                                                    <p className='heading-light'>Size</p>
                                                    <p className='heading-light'>Qty</p>
                                                </div>
                                                <div className='column-start'>
                                                    <p className='section-basket-item-details'>{item.color}</p>
                                                    <p className='section-basket-item-details'>{item.size}</p>
                                                    <p className='section-basket-item-details'>{item.qty}</p>
                                                </div>
                                            </div>
                                            <p className='section-basket-single-item-price section-basket-item-detail'>${item.price}</p>
                                            <div className='section-basket-single-item-quantity-controls section-basket-item-detail'>
                                                <button>-</button>
                                                <p>{item.qty}</p>
                                                <button>+</button>
                                            </div>
                                            <p className='section-basket-item-detail section-basket-single-item-price'>${item.price}</p>
                                            <button className='section-basket-item-detail'>
                                                &#10005;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='section-basket-place-order'>
                        <div className='space-between'>
                            <div className='column-end'>
                                <p className='heading-light'>Subtotal</p>
                                <p className='heading-light'>Shipping from</p>
                                <p className='heading-light'>Total(including taxes)</p>
                            </div>
                            <div className='column-start'>
                                <p>$40</p>
                                <p>$6</p>
                                <p>$46</p>
                            </div>
                        </div>
                        <button className='section-basket-place-order-btn'>Order</button>
                    </div>
                    <div className='section-basket-order-details'>
                        <div className='section-basket-items'>
                            <div className='section-basket-items-left'>
                                <h4>My bag</h4>
                                <h4>My order <img src={horizontal_line} alt='horizontal_line' /></h4>
                            </div>
                            <div className='section-basket-items-right'>
                                <h2>My order</h2>
                                <div className='section-basket-address-container'>
                                    <h4>Delivery address</h4>
                                    <div className='section-basket-address-inputs-container'>
                                        <div className='space-between'>
                                            <BasketInput className='section-basket-address-input' title='First Name' name='firstName' width={49} onChange={this._onChange} value={firstName} />
                                            <BasketInput className='section-basket-address-input' title='Last Name' name='lastName' width={49} onChange={this._onChange} value={lastName} />
                                        </div>
                                        <BasketInput className='section-basket-address-input' title='Company' name='company' width={100} onChange={this._onChange} value={company} />
                                        <BasketInput className='section-basket-address-input' title='Address' name='address' width={100} onChange={this._onChange} value={address} />
                                        <BasketInput className='section-basket-address-input' title='City / Region' name='city' width={100} onChange={this._onChange} value={city} />
                                        <div className='space-between align-center'>
                                            <BasketInput className='section-basket-address-input' title='Post Code' name='postCode' width={49} onChange={this._onChange} value={postCode} />
                                            <div className='column-start section-basket-address-select-container'>
                                                <p>Country</p>
                                                <ReactFlagsSelect
                                                    searchable={true}
                                                    onSelect={this.onSelectCountry}
                                                    className="section-basket-address-select"
                                                    placeholder="Please select" />
                                            </div>
                                        </div>
                                        <BasketInput className='section-basket-address-input' title='Phone' name='phone' width={100} onChange={this._onChange} value={phone} />
                                    </div>
                                </div>
                                <div className='section-basket-address-container'>
                                    <h4>Delivery mode</h4>
                                    <div className='section-basket-delivery-content'>
                                        <div className='column-start section-basket-delivery-select-container'>
                                            <p>Country</p>
                                            <ReactFlagsSelect
                                                searchable={true}
                                                onSelect={this.onSelectCountry}
                                                className="section-basket-address-select"
                                                placeholder="Please select" />
                                        </div>
                                        <div className='column-start'>
                                            <div className='section-basket-delivery-mode-container'>
                                                <input type='radio' name='deliveryMode' value='dpd_p' />
                                                <img src={dpd_icon} alt='dpd_icon' />
                                                <p>Pick up point DPD / Chronopost - $6</p>
                                            </div>
                                            <div className='section-basket-delivery-mode-container'>
                                                <input type='radio' name='deliveryMode' value='dpd_s' />
                                                <img src={dpd_icon} alt='dpd_icon' />
                                                <p>DPD Standard / Chronopost - $9</p>
                                            </div>
                                            <div className='section-basket-delivery-mode-container'>
                                                <input type='radio' name='deliveryMode' value='dhl' />
                                                <img src={dhl_icon} alt='dhl_icon' />
                                                <p>Express DHL - $9</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-basket-address-container'>
                                    <h4>Payment details</h4>
                                    <div className='section-basket-address-inputs-container'>
                                        <div className='row-start'>
                                            <input type='checkbox' />
                                            <p className='remember-card-text'>Remember my credit cart for a future order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
