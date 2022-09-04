import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header//Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import Modal from './components/Modal/Modal'

import { DataBlockContentContext, arDataBlockContent } from './context/dataBLockContext'

import './styles/index.scss'

function App () {
  // eslint-disable-next-line no-unused-vars
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // контекст в учебных целях
  return (
    <React.Fragment>
      <div className='wrapper'>
        <Header setModalIsOpen={setModalIsOpen}/>
        <DataBlockContentContext.Provider value={ arDataBlockContent }>
          <Main arDataBlockContent={arDataBlockContent} />
        </DataBlockContentContext.Provider>
        <Footer/>
      </div>
      { modalIsOpen && <Modal /> }
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
