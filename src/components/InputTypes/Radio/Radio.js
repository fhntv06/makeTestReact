import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import styles from './Radio.module.scss'

export default function Radio ({ item, styleActivated }) {
  // написать хук общий для input и checkbox по изменения состояния
  const [activated, setActivated] = useState(false)

  const checkedContainer = useRef(null)

  function checkedHandler () {
    setActivated(!activated)
    checkedContainer.current.children[0].checked = !activated
  }

  return (
    <div className={styles.container} ref={checkedContainer}>
        <input type={item.type} hidden/>
        <div className={`${styles[item.type]} ${styleActivated && styles[styleActivated]}`} onClick={() => checkedHandler()}>
            {(item.activated === 'active' || activated) && <div className={styles.activeInner}></div>}
        </div>
        <p className={styles.paragraph}>{item.label}</p>
    </div>
  )
}

Radio.propTypes = {
  item: PropTypes.object,
  styleActivated: PropTypes.string
}
