import React from "react"
import { Link } from "gatsby"

import  '../styles/footer.css'

import logo_light from '../images/logo_light.png'
import forwardIcon from '../images/forward-icon.png'
import twitter_icon from '../images/twitter_icon.png'
import youtube_icon from '../images/youtube_icon.png'
import facebook_icon from '../images/facebook_icon.png'
import instagram_icon from '../images/instagram_icon.png'

const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <div className='row-top'>
                <p>
                    <span>Sign up </span>
                    to get the latest on sales, <br/> new releases and more...
                </p>
                <p>Your email</p>
                <Link to={'/newsletter'}>
                    <span>get notified</span>
                    <img src={forwardIcon} alt='social_media_icon' />
                </Link>
            </div>
            <div className='footer-border'></div>
            <div className='row-middle'>
                <div className='col-media'>
                    <Link to={'/'}>
                        <img src={logo_light} alt='logo_light'/>
                    </Link>
                    <div className='social_media_links'>
                        <Link to={'/'}>
                            <img src={facebook_icon} alt='media_icon'/>
                        </Link>
                        <Link to={'/'}>
                            <img src={instagram_icon} alt='media_icon'/>
                        </Link>
                        <Link to={'/'}>
                            <img src={twitter_icon} alt='media_icon'/>
                        </Link>
                        <Link to={'/'}>
                            <img src={youtube_icon} alt='media_icon'/>
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
                <p>© Copywrite 2020 Fittfind</p>
            </div>
        </div>
    </footer>
);

export { Footer }
