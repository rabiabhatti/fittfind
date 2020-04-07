import React from 'react'

import '../styles/input.css'
import { PlusIcon } from ".";
import default_image_thumbnail from "../images/default_image_thumbnail.png";
import check_mark from "../images/check_mark.png";

function Input(props) {
    const { name, width, onChange, value, title, type, errors, textArea } = props;
    let found ;
    if (errors) {
        found = errors.find(item => item.id.includes(name))
    }
    return (
        <div style={{ width: `${width}%`}} className='section-custom-input'>
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

function CheckBox(props) {
    const { name, width, onChange, value, checked } = props;
    return (
        <div className='section-custom-checkbox row-center' style={{ width: `${width}%`}}>
            {checked ?
                <img src={check_mark} alt='check_mark' className='section-custom-checkbox-img' />
                :
                <div className='section-custom-checkbox-empty' />
            }
            <input type='checkbox' name={name} value={value} onClick={onChange} />
            <label htmlFor={name}>{value}</label>
        </div>
    )
}

function FileInput(props) {
    const { name, onChange, value, title } = props;
    let error ;
    let img;
    const validImageTypes = ['image/jpeg', 'image/png'];
    if (value && !validImageTypes.includes(value.type)) {
        error = 'Invalid image upload.'
    } else {
        img = value
    }

    return (
        <div className='column-start section-file-input'>
            {error && <p className='error-msg'>{error}</p>}
            <div className='input_file_container column-center space-between'>
                {img ?
                    <img src={window.URL.createObjectURL(value)} alt='default_image_thumbnail' className='input_file_image' />
                    :
                    <div className='column-center input_file_image_thumbnail'>
                        <img src={default_image_thumbnail} alt='default_image_thumbnail' width={100} />
                    </div>
                }
                <label htmlFor={name} className='input_file_label row-center'>
                    <PlusIcon color='#333' width={15} height={15} />
                    <p>{title}</p>
                </label>
                <input type='file' name={name} onChange={onChange} className='input_file' />
            </div>
        </div>
    )
}

export { Input, CheckBox, FileInput }
