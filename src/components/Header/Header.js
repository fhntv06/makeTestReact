import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

function Logo () {
  return (
    <img className='logo' src={`${process.env.PUBLIC_URL}/images/header/logo.png`}/>
  )
}
class FullName extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={styles.containerName}>
        <p className={styles.surname}>{this.props.surname}</p>
        <p className={styles.name}>{this.props.name}</p>
      </div>
    )
  }
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
          <FullName surname='Иванов' name='Иван Иванович'/>
        </div>
        <div className='header__menu'>
          <Burger open={this.state.open} changeStyle={() => this.changeStyle(this.state.open)}/>
        </div>
      </header>
    )
  }
}
