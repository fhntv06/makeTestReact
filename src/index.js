import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header//Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import { DataBlockContentContext, arDataBlockContent } from './context/dataBLockContext'

import './styles/index.scss'

function App () {
  // контекст в учебных целях
  return (
      <div className='wrapper'>
        <Header />
        <DataBlockContentContext.Provider value={ arDataBlockContent }>
          <Main arDataBlockContent={arDataBlockContent} />
        </DataBlockContentContext.Provider>
        <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
