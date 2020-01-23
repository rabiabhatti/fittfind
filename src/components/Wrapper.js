import React from 'react';

import { Header, Footer, LeftBar} from './'

function Wrapper(props) {
    return (
        <main>
            <Header/>
            <LeftBar />
            {props.children}
            <Footer/>
        </main>
    );
}

export { Wrapper };
