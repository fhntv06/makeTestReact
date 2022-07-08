import React from 'react'

import styles from './Footer.module.scss'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className={styles.footer}>
        <p>Победа! 😜</p>
      </footer>
    )
  }
}
