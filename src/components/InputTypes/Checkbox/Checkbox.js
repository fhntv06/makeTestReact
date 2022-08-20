import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.scss'

export default function Checkbox ({ item, styleActivated }) {
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
      <div className={`${styles[item.type]} ${styleActivated && styles[styleActivated]} ${(item.activated === 'active' || activated) && styles.blueBackground}`} onClick={() => checkedHandler()}>
        {(item.activated === 'active' || activated) && <img className={styles.imgItem} src={`${process.env.PUBLIC_URL}/images/content/description-ui/allright.png`} />}
      </div>
      <p className={styles.paragraph}>{item.label}</p>
    </div>
  )
}

Checkbox.propTypes = {
  item: PropTypes.object,
  styleActivated: PropTypes.string
}
