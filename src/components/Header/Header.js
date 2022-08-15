import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

import Logo from '../Logo/Logo'
import { worker } from '../../context/dataBLockContext'

function FullName ({ worker }) {
  return (
    <div className={styles.containerName}>
      <p className={styles.surname}>{worker.surname}</p>
      <p className={styles.name}>{worker.name}</p>
    </div>
  )
}

class Burger extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    changeStyle: PropTypes.func.isRequired
  }

  render () {
    const lineTop = this.props.open ? styles.lineTopActive : styles.lineTop
    const lineBootom = this.props.open ? styles.lineBootomActive : styles.lineBootom

    return (
      <div onClick={this.props.changeStyle} className={styles.burger}>
        <span className={lineTop}></span>
        <span className={lineBootom}></span>
      </div>
    )
  }
}

export default class Header extends React.Component {
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
