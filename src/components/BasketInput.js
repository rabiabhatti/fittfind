import React from 'react'

function BasketInput(props) {
    const { name, width, onChange, value, title, className, type, errors } = props;
    let found ;
    if (errors) {
        found = errors.find(item => item.id.includes(name))
    }
    return (
        <div style={{ width: `${width}%`, }} className={className}>
            <label htmlFor={name}>{title}</label>
            <input type={type ? type : 'text'} name={name} id={name} onChange={onChange} value={value} className={`${found && 'input-error'}`} />
            {found && <p className='error-msg'>{found.message}</p>}
        </div>
    )
}

export { BasketInput }
