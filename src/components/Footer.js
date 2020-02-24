import React from "react"
import { Link } from "gatsby"

import  '../styles/footer.css'

import { NewsLetter } from '../components'
import logo_light from '../images/logo_light.png'
import forwardIcon from '../images/forward-icon.png'
import twitter_icon from '../images/twitter_icon.png'
import youtube_icon from '../images/youtube_icon.png'
import facebook_icon from '../images/facebook_icon.png'
import instagram_icon from '../images/instagram_icon.png'
import horizontal_line from '../images/horizontal_line_g.png'

class Footer extends React.Component {
    state = {
        email: '',
        error: false,
        placeholder: 'YOUR EMAIL',
        showNewsLetterPopup: false,
    };

    onEmailChange = (e) => {
      this.setState({ email: e.target.value, placeholder: 'YOUR EMAIL', error: false })
    };

    handleNotifiedClick = () => {
        const { email } = this.state;
        const reg = /\S+@\S+\.\S+/;
        if (!email.length) {
            return this.setState({ placeholder: 'EMPTY EMAIL', error: true, email: '' })
        }
        if (reg.test(email)) {
            this.setState({ placeholder: 'YOUR EMAIL', error: false, showNewsLetterPopup: true, email: '' });
            setTimeout(() => {
                this.setState({ showNewsLetterPopup: false });
            }, 5000);
        } else {
            return this.setState({ placeholder: 'INVALID EMAIL', error: true, email: '' })
        }
    };

    render() {
        const { email, showNewsLetterPopup, placeholder, error } = this.state;

        return (
            <footer>
                {showNewsLetterPopup && <NewsLetter handleClose={() => this.setState({ showNewsLetterPopup: false })}/>}
                <div className='footer-wrapper'>
                    <div className='row-top'>
                        <p>
                            <span>Sign up </span>
                            to get the latest on sales, <br/> new releases and more...
                        </p>
                        <input
                            type='email'
                            value={email}
                            placeholder={placeholder}
                            onChange={this.onEmailChange}
                            className={`footer-wrapper-notified-input ${error && 'error-placeholder'}`}
                        />
                        <button onClick={this.handleNotifiedClick} className='footer-wrapper-notified-btn'>
                            <span>get notified</span>
                            <img src={forwardIcon} alt='social_media_icon' />
                        </button>
                    </div>
                    <div className='footer-border'/>
                    <div className='row-middle'>
                        <div className='col-media'>
                            <Link to={'/'}>
                                <img src={logo_light} alt='logo_light' width={170}/>
                            </Link>
                            <div className='social_media_links row-start'>
                                <Link to={'/'}>
                                    <div className='media_icon_container'>
                                        <img src={facebook_icon} alt='media_icon'/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className='media_icon_container'>
                                        <img src={instagram_icon} alt='media_icon'/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className='media_icon_container'>
                                        <img src={twitter_icon} alt='media_icon'/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className='media_icon_container'>
                                        <img src={youtube_icon} alt='media_icon'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-menu'>
                            <img src={horizontal_line} alt='horizontal_line'/>
                            <div className='menu-row'>
                                <h4>Shop</h4>
                                <Link to={'/women'}>Women</Link>
                                <Link to={'/men'}>Men</Link>
                            </div>
                            <img src={horizontal_line} alt='horizontal_line'/>
                            <div className='menu-row'>
                                <h4>Products</h4>
                                <Link to={'/'}>Clothing</Link>
                                <Link to={'/'}>Accessories</Link>
                                <Link to={'/'}>New Arrivals</Link>
                            </div>
                            <img src={horizontal_line} alt='horizontal_line'/>
                            <div className='menu-row'>
                                <h4>Support</h4>
                                <Link to={'/contact/order-status'}>Track my order</Link>
                                <Link to={'/'}>Support</Link>
                                <Link to={'/'}>Terms and Conditions</Link>
                                <Link to={'/'}>Privacy Policy</Link>
                            </div>
                            <img src={horizontal_line} alt='horizontal_line'/>
                            <div className='menu-row'>
                                <h4>Company</h4>
                                <Link to={'/contact/about-us'}>About us</Link>
                                <Link to={'/'}>Press</Link>
                                <Link to={'/contact'}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row-bottom'>
                        <p>© Copywrite 2020 Fittfind</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export { Footer }
