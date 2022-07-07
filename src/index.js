import React from 'react'
import ReactDOM from 'react-dom/client'

import Wrapper from './javascripts/components/Wrapper/Wrapper'

import './styles/index.scss'

class App extends React.Component {
  render () {
    return (
      <Wrapper/>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
