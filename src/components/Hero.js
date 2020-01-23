import React from 'react';

import { LeftBar, RightBar } from "./";

import '../styles/hero.css'

const Hero = (props) => (
    <div className='section-hero'>
        <LeftBar />
        {props.children}
        <RightBar />
    </div>
);

export { Hero }
