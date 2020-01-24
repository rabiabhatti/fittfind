import React from "react"
import { Helmet } from "react-helmet"

import {Wrapper, Hero, Slider} from "../components"

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
                        <Slider />
                    </Hero>
                </Wrapper>
            </div>
        )
    }
}

export default IndexPage
