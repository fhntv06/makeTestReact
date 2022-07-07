import React from 'react'

import styles from './Main.module.scss'

export default class Main extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Тестовое задание</h1>
      </div>
    )
  }
}
