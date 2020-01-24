import React from "react"
import { Helmet } from "react-helmet"

import {Wrapper, Hero, Slider} from "../components"

import forwardIcon from '../images/forward-icon.png'

class IndexPage extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home | Fitt Find</title>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                </Helmet>
                <Wrapper>
                    <Hero>
                        <p>Find & release your inner athlete</p>
                        <button className='findFitBtn'>
                            Find your fit
                            <img src={forwardIcon}/>
                        </button>
                        <Slider />
                    </Hero>
                </Wrapper>
            </div>
        )
    }
}

export default IndexPage
