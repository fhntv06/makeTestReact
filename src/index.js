import React from 'react'
import ReactDOM from 'react-dom/client'

import Main from './javascripts/components/blocks/main'

import './styles/index.css'

class App extends React.Component {
  render () {
    return (
      <Main/>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
