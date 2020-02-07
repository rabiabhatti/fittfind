import React, { Fragment } from "react"
import { Link } from "gatsby"

import  '../styles/header.css'
import { RightNav, SignIn } from "./";
import cart from '../images/cart.png'
import menu from '../images/menu.png'
import logo_dark from '../images/logo-dark.png'

class Header extends React.Component {
    state = {
        open_right_bar: false,
        show_sign_in_popup: false,
    };

    closeRightBar = () => {
        this.setState({ open_right_bar: false })
    };

    componentDidMount() {
        document.addEventListener('click', this.handleBodyClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleBodyClick);
    }

    handleBodyClick = (e) => {
        const { open_right_bar } = this.state;
        const buttonClicked = e.target.closest('.section-nav-right-menu');
        const firedOnSelf = e.target.closest('.section-right-nav-container');
        if (buttonClicked) {
            return null
        } else if (open_right_bar && !firedOnSelf) {
            this.setState({ open_right_bar: false })
        }
    };

    handleSignInClick = () => {
        this.setState({
            open_right_bar: false,
            show_sign_in_popup: true
        })
    };

    render() {
        const { open_right_bar, show_sign_in_popup } = this.state;

        return (
            <Fragment>
                {show_sign_in_popup && <SignIn handleClose={() => this.setState({ show_sign_in_popup: false })} />}
                <header>
                    <div className='section-header'>
                        <div className='section-header-left'>
                            <div className='section-logo'>
                                <Link to={'/'} id='logo'>
                                    <img src={logo_dark} alt='Logo' />
                                </Link>
                            </div>
                            <nav className='section-nav-left'>
                                <ul>
                                    <li>
                                        <Link to="/men">Men</Link>
                                    </li>
                                    <li>
                                        <Link to="/women">Women</Link>
                                    </li>
                                    <li>
                                        <Link to="/app">App</Link>
                                    </li>
                                    <li>
                                        <Link to="/gym">Gym</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='section-header-right'>
                            <span className='section-nav-right-currency'>
                                <span>Currency</span>
                                <span>USD</span>
                            </span>
                            <Link to="/basket"  className='section-nav-right-cart'>
                                <img src={cart} alt='Cart icon' />
                                <span>
                                <span>Basket</span>
                                <span>Empty</span>
                              </span>
                            </Link>
                            <button className='section-nav-right-menu' onClick={() => this.setState({ open_right_bar: !open_right_bar })}>
                                <img src={menu} alt='Menu icon' />
                            </button>
                        </div>
                    </div>
                </header>
                {!!open_right_bar &&
                    <RightNav onCloseClick={this.closeRightBar} handleSignInClick={this.handleSignInClick}/>
                }
            </Fragment>
        );
    }
}

export { Header }
