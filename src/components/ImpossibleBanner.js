import React from 'react'

import ImpossibleImage from '../images/immpossible.png'
import fittfind from '../images/fittfind-im.png'

function ImpossibleBanner() {
    return (
        <div className='section-impossible' style={{  }}>
            <span>Become the</span>
            <img src={ImpossibleImage} width={200} alt='impossible_image' />
            <img src={fittfind} alt='fittfind' />
            <img src={fittfind} alt='fittfind' />
        </div>
    )
}

export { ImpossibleBanner }
