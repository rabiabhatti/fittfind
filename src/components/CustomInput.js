import React from 'react'

import '../styles/input.css'

function CustomInput(props) {
    const { name, width, onChange, value, title, type, errors, textArea } = props;
    let found ;
    if (errors) {
        found = errors.find(item => item.id.includes(name))
    }
    return (
        <div style={{ width: `${width}%`, }} className='section-custom-input'>
            <label htmlFor={name}>{title}</label>
            {textArea ?
                <textarea name={name} id={name} onChange={onChange} value={value} className={`${found && 'input-error'} custom-textArea`}  rows={textArea.rows} cols={textArea.cols} />
                :
                <input type={type ? type : 'text'} name={name} id={name} onChange={onChange} value={value} className={`${found && 'input-error'}`} />
            }
            {found && <p className='error-msg'>{found.message}</p>}
        </div>
    )
}

export { CustomInput }
