import React from 'react'
import Logo from './header/logo'
import Burger from './header/burger'
import FullName from './header/fullname'

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className='header__container'>
          <Logo />
          <FullName />
        </div>
        <div className='header__menu'>
          <Burger />
        </div>
      </header>
    )
  }
}
