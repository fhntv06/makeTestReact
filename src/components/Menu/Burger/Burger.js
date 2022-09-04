import React from 'react'
import PropTypes from 'prop-types'

import styles from './Burger.module.scss'

export default class Burger extends React.Component {
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
