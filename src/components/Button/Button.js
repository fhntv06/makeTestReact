/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

export default function Button ({ content }) {
  const lastChild = content.length - 1
  return (
    content.map((button, index) => {
      let styleActivated
      switch (button.activated) {
        case 'hover':
          styleActivated = 'hover'
          break
        case 'active':
          styleActivated = 'active'
          break
        case 'disabled':
          styleActivated = 'disabled'
          break
      }
      return (
        <div key={button.label} className={styles.container}>
          <p className={`${styles.label} paragraphSize14`}>{button.label}</p>
          <button className={`${styles.button} ${styles[styleActivated] ? styles[styleActivated] : ''} paragraphDefault`} disabled={lastChild === index && true}>Отправить</button>
        </div>
      )
    })
  )
}

Button.propTypes = {
  content: PropTypes.array
}
