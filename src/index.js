import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import { DataTextBLockContentContext, arDataTextBLockContent } from './context/dataTextBLockContext'

import './styles/index.scss'

function App () {
  // контекст в учебных целях
  return (
      <div className='wrapper'>
        <Header />
          <DataTextBLockContentContext.Provider value={arDataTextBLockContent}>
            <Main arDataTextBLockContent={arDataTextBLockContent}/>
          </DataTextBLockContentContext.Provider>
        <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
