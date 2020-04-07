import React from 'react'

function PlusIcon(props) {
    const { color, width, height} = props;

    return (
        <svg viewBox="0 0 448 512" style={{width: `${width}px`, height: `${height}px`}} xmlns="http://www.w3.org/2000/svg" data-icon="plus" role="img">
            <path fill={color} d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
    )
}

function DeleteIcon(props) {
    const { color, width, height} = props;
    return (
        <svg aria-hidden="true" focusable="false"  data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width: `${width}px`, height: `${height}px`}}>
            <path fill={color} d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />
        </svg>
    )
}

export {PlusIcon, DeleteIcon}
