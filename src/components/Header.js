import React from "react"
import { Link } from "gatsby"

import  '../styles/header.css'
import cart from '../images/cart.png'
import menu from '../images/menu.png'
import logo_dark from '../images/logo-dark.png'

const Header = () => (
  <header>
    <Link to={'/'} id='logo'>
      <img src={logo_dark} />
    </Link>
    <div className='section-nav'>
      <div className='section-nav-left'>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/app">App</Link>
          <Link to="/gym">Gym</Link>
          <Link to="/contact">Contact</Link>
      </div>
      <div className='section-nav-right'>
          <span className='section-nav-right-currency'>Currency USD</span>
          <Link to="/cart"  className='section-nav-right-cart'>
              <img src={cart} />
              <span>Empty Basket</span>
          </Link>
          <button role='button' className='section-nav-right-menu'>
              <img src={menu} />
          </button>
      </div>
    </div>

  </header>
);

export { Header }
