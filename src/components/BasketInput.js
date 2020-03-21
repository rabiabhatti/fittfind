import React from 'react'

function BasketInput(props) {
    const { name, width, onChange, value, title, className, type } = props;
    return (
        <div style={{ width: `${width}%`, }} className={className}>
            <label htmlFor={name}>{title}</label>
            <input type={type ? type : 'text'} name={name} id={name} onChange={onChange} value={value} />
        </div>
    )
}

export { BasketInput }
