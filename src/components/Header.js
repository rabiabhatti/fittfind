import React from "react"
import { Link } from "gatsby"

import replaceable from '../images/replaceable.png'
import  '../styles/header.css'

const Header = () => (
  <header>
    {/*<div style={{margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`,}}>*/}
    {/*  <h1 className='test'>*/}
    {/*    <Link to="/" style={{color: `white`, textDecoration: `none`,}}>*/}
    {/*      Test*/}
    {/*    </Link>*/}
    {/*  </h1>*/}
    {/*</div>*/}
      <Link to={'/'} >
          <img src={replaceable} />
      </Link>
    <div>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/app">App</Link>
        <Link to="/gym">Gym</Link>
        <Link to="/contact">Contact</Link>
    </div>
    <div>
        <span>Currency USD</span>
        <Link to="/cart">Empty Basket</Link>
        <button role='button'>Menu</button>
    </div>
  </header>
);

export { Header }
