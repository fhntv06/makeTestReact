import React from 'react'

import Header from './header'
import Footer from './footer'

export default class Main extends React.Component {
  render () {
    return (
      <main className="main">
        main
        <Header />
        <Footer/>
      </main>
    )
  }
}
