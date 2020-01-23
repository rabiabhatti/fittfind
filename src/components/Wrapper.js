import React from 'react';

import { Header, Footer} from './'

function Wrapper(props) {
    return (
        <main>
            <Header/>
            {props.children}
            <Footer/>
        </main>
    );
}

export { Wrapper };
