import React from 'react';

import { Header, Footer} from './'

function Wrapper(props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export { Wrapper };
