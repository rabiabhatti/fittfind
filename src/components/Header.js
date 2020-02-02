import React from "react"
import { Link } from "gatsby"

import  '../styles/header.css'
import cart from '../images/cart.png'
import menu from '../images/menu.png'
import logo_dark from '../images/logo-dark.png'

const Header = () => (
  <header>
    <div className='section-logo'>
      <Link to={'/'} id='logo'>
        <img src={logo_dark} alt='Logo' />
      </Link>
    </div>
    <div className='section-nav'>
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
      <div className='section-nav-right'>
          <span className='section-nav-right-currency'>Currency USD</span>
          <Link to="/basket"  className='section-nav-right-cart'>
              <img src={cart} alt='Cart icon' />
              <span>Empty Basket</span>
          </Link>
          <button className='section-nav-right-menu'>
              <img src={menu} alt='Menu icon' />
          </button>
      </div>
    </div>

  </header>
);

export { Header }
