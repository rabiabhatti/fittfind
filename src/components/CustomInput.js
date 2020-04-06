import React from 'react'

function CustomInput(props) {
    const { name, width, onChange, value, title, className, type, errors, textArea } = props;
    let found ;
    if (errors) {
        found = errors.find(item => item.id.includes(name))
    }
    return (
        <div style={{ width: `${width}%`, }} className={className}>
            <label htmlFor={name}>{title}</label>
            {textArea ?
                <textarea name={name} id={name} onChange={onChange} value={value} className={`${found && 'input-error'} custom-textArea`}  rows="15" cols="50" />
                :
                <input type={type ? type : 'text'} name={name} id={name} onChange={onChange} value={value} className={`${found && 'input-error'}`} />
            }
            {found && <p className='error-msg'>{found.message}</p>}
        </div>
    )
}

export { CustomInput }
