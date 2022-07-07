import React from 'react'
import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'
import FullName from '../Fullname/Fullname'

import styles from './Header.module.scss'

export default class Header extends React.Component {
  render () {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
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
