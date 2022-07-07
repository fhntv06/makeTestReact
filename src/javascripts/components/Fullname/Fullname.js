import React from 'react'

import styles from './Fullname.module.scss'

export default class Burger extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <p className={styles.surname}>Иванов</p>
        <p className={styles.name}>Иван Иванович</p>
      </div>
    )
  }
}
