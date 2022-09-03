import React, { useState } from 'react'
// import ModalWindow from 'react-modal'
import PropTypes from 'prop-types'

import styles from './Modal.module.scss'

export default function Modal ({ modalIsOpen }) {
  // ModalWindow.setAppElement('#yourAppElement')

  // eslint-disable-next-line no-unused-vars
  const [modalOpen, setModalOpen] = useState(false)

  function openClose () {
    setModalOpen(modalIsOpen)
  }

  return (
    <div>
      <Modal
        isOpen={openClose}
        onRequestClose={openClose}
        className={styles.modal}
        contentLabel="Example Modal"
      >
          <h2>Hello</h2>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
      </Modal>
    </div>
  )
}

Modal.propTypes = {
  modalIsOpen: PropTypes.bool
}
