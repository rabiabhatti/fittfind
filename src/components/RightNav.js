import React from "react"

import  '../styles/rightNav.css'

function RightNav(props) {
    return (
        <div className='section-right-nav'>
            <div className='section-right-nav-container space-between'>
                <div className='section-right-nav-left'>
                    <div className='section-right-nav-left-btns'>
                        <button onClick={props.handleSignInClick}>
                            Sign In
                        </button>
                        <button onClick={props.handleRegisterClick}>
                            Create an Account
                        </button>
                        <button>
                            Guest
                        </button>
                    </div>
                    <div className='section-right-nav-left-text-container'>
                        <p>Register with Fittfind.com to enjoy personalized services, including:</p>
                        <ul>
                            <li>Online Order Status</li>
                            <li>WishList</li>
                            <li>Exclusive Emails</li>
                            <li>Save Shipping Addresses</li>
                            <li>Checkout Preferences</li>
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
