import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

const Modal = ({ isOpened, children, onClose }) => {
    if (!isOpened){
        return null
    };
  return createPortal(
    <div>
        <div className="overlay" onClick={onClose}>

        </div>

        <div className="modal">
            <div className="modal-contents">{children}</div>
        </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal