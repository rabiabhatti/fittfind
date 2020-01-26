import React from "react"
import { Link } from "gatsby"

import  '../styles/footer.css'

import logo_light from '../images/logo-dark.png'
import replaceable from '../images/replaceable.png'

const Footer = () => (
    <footer>
        <div className='row-top'>
            <p>
                <span>Sign up </span>
                to get the latest on sales, <br/> new releases and more...
            </p>
            <p>Your email</p>
            <Link to={'/newsletter'}>
                get notified
            </Link>
        </div>
        <div className='row-middle'>
            <div className='col-media'>
                <Link to={'/'}>
                    <img src={logo_light} alt='logo_light' width={100} />
                </Link>
                <div className='social_media_links'>
                    <Link to={'/'}>
                        <img src={replaceable} alt='media_icon' width={100} />
                    </Link>
                    <Link to={'/'}>
                        <img src={replaceable} alt='media_icon' width={100} />
                    </Link>
                    <Link to={'/'}>
                        <img src={replaceable} alt='media_icon' width={100} />
                    </Link>
                    <Link to={'/'}>
                        <img src={replaceable} alt='media_icon' width={100} />
                    </Link>
                </div>
            </div>
            <div className='col-menu'>
                <div className='menu-row'>
                    <h4>Shop</h4>
                    <Link to={'/women'}>Women</Link>
                    <Link to={'/men'}>Men</Link>
                </div>
                <div className='menu-row'>
                    <h4>Products</h4>
                    <Link to={'/'}>Clothing</Link>
                    <Link to={'/'}>Accessories</Link>
                    <Link to={'/'}>New Arrivals</Link>
                </div>
                <div className='menu-row'>
                    <h4>Support</h4>
                    <Link to={'/'}>Track my order</Link>
                    <Link to={'/'}>Support</Link>
                    <Link to={'/'}>Terms and Conditions</Link>
                    <Link to={'/'}>Privacy Policy</Link>
                </div>
                <div className='menu-row'>
                    <h4>Company</h4>
                    <Link to={'/'}>About us</Link>
                    <Link to={'/'}>Press</Link>
                    <Link to={'/'}>Contact</Link>
                </div>
            </div>
        </div>
        <div className='row-bottom'>
            <p>Copywrite 2020 Fittfind</p>
            <p>Design <Link to={'/'}>www.jakobsze.com</Link></p>
        </div>
    </footer>
);

export { Footer }
