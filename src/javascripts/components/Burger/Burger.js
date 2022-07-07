import React from 'react'

import styles from './Burger.module.scss'

export default class Burger extends React.Component {
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
    const lineTop = this.state.open ? styles.lineTopActive : styles.lineTop
    const lineBootom = this.state.open ? styles.lineBootomActive : styles.lineBootom

    return (
      <div onClick={() => this.changeStyle(this.state.open)} className={styles.burger}>
        <span className={lineTop}></span>
        <span className={lineBootom}></span>
      </div>
    )
  }
}
