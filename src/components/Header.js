import React, { Fragment } from "react"
import { Link } from "gatsby"

import  '../styles/header.css';
import cart from '../images/cart.png';
import menu from '../images/menu.png';
import { RightNav, SignIn, Register } from "./";
import logo_dark from '../images/logo-dark.png';
import horizontal_line from '../images/horizontal_line.png';

class Header extends React.Component {
    state = {
        open_right_bar: false,
        show_sign_in_popup: false,
        show_register_popup: false,
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
    handleRegisterClick = () => {
        this.setState({
            open_right_bar: false,
            show_register_popup: true
        })
    };

    renderNavLink = (name) => {
        const currentURL = this.props.path.split('/');
        let link = name;
        if (name === 'women' || link === 'men') {
            link = `/${link}/new-release/`
        } else if (name === 'app') {
            link = '/application/'
        }
        return (
            <li>
                {currentURL.includes(name) && <img src={horizontal_line} alt='horizontal_line' className='active-nav-link' />}
                <Link to={`/${link}/`}>{name.split('-').join(' ').toUpperCase()}</Link>
            </li>
        )
    };

    getGymNav = () => {
        return (
            <ul>
                {this.renderNavLink('gym-list')}
                {this.renderNavLink('help')}
                {this.renderNavLink('list-yourself')}
                {this.renderNavLink('contact')}
            </ul>
        )
    };
    getProductsNav = () => {
        return (
            <ul>
                {this.renderNavLink('men')}
                {this.renderNavLink('women')}
                {this.renderNavLink('app')}
                {this.renderNavLink('gym')}
                {this.renderNavLink('ico')}
                {this.renderNavLink('contact')}
            </ul>
        )
    };

    render() {
        const { open_right_bar, show_sign_in_popup, show_register_popup } = this.state;

        return (
            <Fragment>
                {show_sign_in_popup && <SignIn handleClose={() => this.setState({ show_sign_in_popup: false })} />}
                {show_register_popup && <Register handleClose={() => this.setState({ show_register_popup: false })} />}
                <header>
                    <div className='section-header'>
                        <div className='section-header-left'>
                            <div className='section-logo'>
                                <Link to={'/'} id='logo'>
                                    <img src={logo_dark} alt='Logo' />
                                </Link>
                            </div>
                            <nav className='section-nav-left'>
                                {this.props.gymNav ?
                                    this.getGymNav()
                                :
                                    this.getProductsNav()
                                }
                            </nav>
                        </div>
                        <div className='section-header-right'>
                            <span className='section-nav-right-currency'>
                                <span>Currency</span>
                                <span>USD</span>
                            </span>
                            <Link to="/basket"  className='section-nav-right-cart'>
                                <img src={cart} alt='Cart icon' width={25} />
                                <span>
                                <span>Basket</span>
                                <span>Empty</span>
                              </span>
                            </Link>
                            <button className='section-nav-right-menu' onClick={() => this.setState({ open_right_bar: !open_right_bar })}>
                                <img src={menu} alt='Menu icon' width={25} />
                            </button>
                        </div>
                    </div>
                </header>
                {!!open_right_bar &&
                    <RightNav onCloseClick={this.closeRightBar} handleSignInClick={this.handleSignInClick} handleRegisterClick={this.handleRegisterClick} />
                }
            </Fragment>
        );
    }
}

export { Header }
