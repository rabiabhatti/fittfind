import React from 'react';

import { Header, Footer, LeftBar} from './'

function Wrapper(props) {
    return (
        <main>
            <LeftBar />
            <Header/>
            {props.children}
            <Footer/>
        </main>
    );
}

export { Wrapper };
