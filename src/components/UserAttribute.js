import React from 'react';

import '../styles/list-yourself.css'

const UserAttribute = (props) => (
    <div className='section-gym-dashboard-user-single-att-container column-center'>
        <div className='section-gym-dashboard-user-single-att-title row-center space-between full-width'>
            <p>{props.name.toUpperCase()}</p>
            <p>
                <span className={`section-gym-dashboard-user-single-att-${props.progress.type === 'add' ? 'positive' : 'negative'} `}>{props.progress.value}</span>
                /124
            </p>
        </div>
        <div className='section-gym-dashboard-user-single-att row-start'>
            <div style={{ width: `${props.attribute/124*100}%` }}  className='section-gym-dashboard-user-single-att-fill'/>
            <div className={`section-gym-dashboard-user-single-att-${props.progress.type === 'add' ? 'addition' : 'subtraction'} `} style={{ width: `${props.progress.width}%` }} />
        </div>
    </div>
);

export { UserAttribute }
