import React from 'react'

import '../styles/input.css'
import default_image_thumbnail from '../images/default_image_thumbnail.png';

function FileInput(props) {
    const { name, onChange, value } = props;
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
                <label htmlFor={name} className='input_file_label row-center'><span>+</span> UPLOAD IMAGE</label>
                <input type='file' name={name} onChange={onChange} className='input_file' />
            </div>
        </div>
    )
}

export { FileInput }
