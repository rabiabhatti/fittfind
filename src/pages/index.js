import React from "react"
import { Helmet } from "react-helmet"

import {Wrapper, Hero} from "../components"

const IndexPage = () => (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Fitt Find</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
        </Helmet>
        <Wrapper>
            <Hero>
                Hello there I am Hero element.
            </Hero>
        </Wrapper>
    </div>
);

export default IndexPage
