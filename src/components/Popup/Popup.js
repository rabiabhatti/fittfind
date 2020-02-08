import React from 'react'
import ReactDOM from 'react-dom'

import '../../styles/popup.css'

export default class Popup extends React.Component {
  element = document.createElement('div');

  componentDidMount() {
    const modalRootRef = document.getElementById('modal-popup-root');
    if (modalRootRef) modalRootRef.appendChild(this.element);

    document.addEventListener('click', this.handleBodyClick);
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    this.element.remove();
    document.removeEventListener('click', this.handleBodyClick);
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    const { handleClose } = this.props;
    if (e.key === 'Escape') handleClose()
  };

  handleBodyClick = (e) => {
    if (e.defaultPrevented) {
      return
    }
    const { handleClose } = this.props;
    const firedOnSelf = e.target.closest('.section-popup-content');
    if (!firedOnSelf) handleClose()
  };

  render() {
    const { children, handleClose, title } = this.props;

    return ReactDOM.createPortal(
      <div className='section-popup column-center'>
        <div  className='section-popup-content'>
          <button onClick={handleClose} className='section-popup-close-btn'>&#10005;</button>
          <h3>{title}</h3>
          {children}
        </div>
      </div>,
      this.element,
    )
  }
}
