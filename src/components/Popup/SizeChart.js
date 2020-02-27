import * as React from 'react'

import Popup from './Popup'
import size_chart from '../../images/size_chart.png'

function SizeChart (props) {
    return (
        <Popup handleClose={props.handleClose} sizeChart={true}>
            <img src={size_chart} alt='size_chart' />
        </Popup>
    )
}

export { SizeChart }
