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
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:900&display=swap" rel="stylesheet" />
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
