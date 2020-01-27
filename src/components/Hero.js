import React from 'react';

import { LeftBar } from "./";

const Hero = (props) => (
    <div className={props.className} style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", position: "relative" }}>
        <LeftBar />
        {props.children}
    </div>
);

export { Hero }
