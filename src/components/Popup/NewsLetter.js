import * as React from 'react'

import Popup from './Popup'

function NewsLetter(props) {
    return (
        <Popup title="Congratulations!" handleClose={props.handleClose}>
            <p style={{textAlign: 'center'}}>You have successfully subscribed to our newsletter.</p>
        </Popup>
    )
}

export { NewsLetter }
