import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
import ModalOverlay from './ModalOverlay'

// Declaring a Variable that gets the HTML element for the "portal"
const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeCart={props.closeCart}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal