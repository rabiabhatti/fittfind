import React from 'react'

function PlusIcon(props) {
    const { color, width, height , className} = props;

    return (
        <svg className={className} viewBox="0 0 448 512" width={`${width}px`} height={`${height}px`} xmlns="http://www.w3.org/2000/svg" data-icon="plus" role="img">
            <path fill={color} d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
    )
}

export {PlusIcon}
