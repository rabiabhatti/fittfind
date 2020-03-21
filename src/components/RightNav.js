import React from "react"
import { Link } from 'gatsby'

import  '../styles/rightNav.css'
import check_mark from '../images/check_mark.png'

function RightNav(props) {
    return (
        <div className='section-right-nav'>
            <div className='section-right-nav-container space-between'>
                <div className='section-right-nav-left'>
                    <div className='section-right-nav-left-btns'>
                        <Link to='/app/login'>
                            Sign In
                        </Link>
                        <Link to='/app/register'>
                            Create an Account
                        </Link>
                        <button>
                            Guest
                        </button>
                    </div>
                    <div className='section-right-nav-left-text-container'>
                        <p>Register with Fittfind.com to enjoy personalized services, including:</p>
                        <ul>
                            <li><img src={check_mark} alt='check_mark' width={11} />Online Order Status</li>
                            <li><img src={check_mark} alt='check_mark' width={11} />WishList</li>
                            <li><img src={check_mark} alt='check_mark' width={11} />Exclusive Emails</li>
                            <li><img src={check_mark} alt='check_mark' width={11} />Save Shipping Addresses</li>
                            <li><img src={check_mark} alt='check_mark' width={11} />Checkout Preferences</li>
                        </ul>
                    </div>
                </div>
                <div className='section-right-nav-right'>
                    <button onClick={props.onCloseClick}>&#10005;</button>
                </div>
            </div>
        </div>
    )
}

export { RightNav }
