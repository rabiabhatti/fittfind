import React from 'react'
import { Link } from 'gatsby'

import '../styles/basket.css'
import { Wrapper, Hero } from '../components'
import forwardIcon from '../images/forward-icon.png'

export default class Basket extends React.Component {
    state= {
      products_count: 3,
    };

    render() {
        const { products_count } = this.state

        return (
            <Wrapper name='Basket'>
                <Hero>
                    <div className='section-basket-hero'>
                        <Link to='/' className='section-basket-hero-back-link'>
                            <img src={forwardIcon} alt='forwardIcon' />
                            <span>Back shopping</span>
                        </Link>
                        <div className='section-basket-hero-products-count'>
                            <h1>Basket</h1>
                            <p>({products_count} products)</p>
                        </div>
                    </div>
                </Hero>
                <div className='section-basket-'>

                </div>
            </Wrapper>
        )
    }
}
