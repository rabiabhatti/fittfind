import * as React from 'react'
import ReactDOM from 'react-dom'

import '../../styles/popup.css'

class VideoPopup extends React.Component {
    element = document.createElement('div');

    componentDidMount() {
        const modalRootRef = document.getElementById('modal-popup-root');
        if (modalRootRef) modalRootRef.appendChild(this.element);

        document.addEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress = (e) => {
        const { handleClose } = this.props;
        if (e.key === 'Escape') handleClose()
    };

    render() {
        return ReactDOM.createPortal(
            <div className='section-video-popup column-center'>
                <button onClick={this.props.handleClose} className='section-video-popup-close-btn'>&#10005;</button>
                <embed className='section-video-popup-content'
                       src="https://www.youtube.com/embed/GV1-9wowmvo"
                />
            </div>,
            this.element,
        )
    }
}

export { VideoPopup }
