import React from 'react'
import './Modal.css';
const Modal = ({ setOpenModal, openModal }) => {
  if (!openModal) {
    return null
  }
  return (
    <div className='overlay'>
      <div className='modalContainer'>
        <img src="https://www.avarinshop.com/wp-content/uploads/2018/11/Qr-code-pay-avarin.jpg" alt="qr-code" className='image' />
        <div className='modalRight'>
          <p onClick={() => setOpenModal(false)} className='closeBtn'> X </p>
          <div className='content'>
            <h1>Payment Process</h1>
            <p>You Can Proceed Your Payment via QR-PAYMENT</p>
          </div>
          <div className='btnContainer'>
          <button className='btnPrimary' onClick={() => setOpenModal(false)}>
            <span className='bold'>CANCEL</span>
          </button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Modal