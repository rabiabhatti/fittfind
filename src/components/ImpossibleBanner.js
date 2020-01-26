import React from 'react'

import ImpossibleImage from '../images/replaceable.png'

function ImpossibleBanner() {
    return (
        <div style={{  }}>
            <span>Become the</span>
            <img src={ImpossibleImage} width={200} alt='impossible_image' />
        </div>
    )
}

export { ImpossibleBanner }
