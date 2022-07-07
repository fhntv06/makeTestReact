import React from 'react'

import logo from '../../../images/header/logo.png'

export default class Logo extends React.Component {
  render () {
    return (
      <img className='logo' src={logo}/>
    )
  }
}
