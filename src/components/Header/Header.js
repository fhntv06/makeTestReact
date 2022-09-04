import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

import Logo from '../Logo/Logo'
import FullName from '../Fullname/Fullname'
import Burger from '../Menu/Burger/Burger'

import { worker } from '../../context/dataBLockContext'

export default class Header extends React.Component {
  static propTypes = {
    setModalIsOpen: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  changeStyle (open) {
    this.setState(
      { open: !open }
    )
    this.props.setModalIsOpen(!this.state.open)
  }

  render () {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Logo />
          <FullName worker={worker}/>
        </div>
        <div className='header__menu'>
          <Burger open={this.state.open} changeStyle={() => this.changeStyle(this.state.open)}/>
        </div>
      </header>
    )
  }
}

FullName.propTypes = {
  worker: PropTypes.object
}
