import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import './styles/index.scss'

class App extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <Header />
            <Main />
        <Footer/>
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
