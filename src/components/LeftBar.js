import React from 'react';

import '../styles/left_bar.css'
import scrollDownIcon from '../images/scroll_down_icon.png'

const LeftBar = () => (
    <div className='section-left-bar'>
        <p className='section-left-bar-text'>Find & release your inner athlete</p>
        <button className='section-left-bar-btn' role='button'>
            <img src={scrollDownIcon} />
            <span>scroll down</span>
        </button>
    </div>
);

export { LeftBar }
