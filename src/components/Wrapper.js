import React from 'react';
import { Helmet } from "react-helmet"

import { Header, Footer} from './'

function Wrapper(props) {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.name} | Fitt Find</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
            </Helmet>
            <main>
                <Header/>
                {props.children}
                <Footer/>
            </main>
        </div>
    );
}

export { Wrapper };
