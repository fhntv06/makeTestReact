import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.scss'

export default function Checkbox ({ item }) {
  // написать хук общий для input и checkbox по изменения состояния
  const [activated, setActivated] = useState(false)

  let styleActivated
  switch (item.activated) {
    case 'disabled':
      styleActivated = styles.disabled
      break
    case 'hover':
      styleActivated = styles.hover
      break
    case 'active':
      styleActivated = styles.active
      break
  }
  return (
    <>
      <div className={styles.container}>
        <input type={item.type} hidden/>
        <div className={`${styles[item.type]} ${styleActivated !== undefined ? styleActivated : ''}`}>
          {(item.type === 'checkbox' && item.activated === 'active') && <img className={styles.imgItem} src='' />}
          {(item.type === 'radio' && item.activated === 'active') && <div className={styles.activeInner}></div>}
        </div>
        <p className={styles.p}>{item.label}</p>
      </div>
    </>
  )
}

Checkbox.propTypes = {
  item: PropTypes.object
}
