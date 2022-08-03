import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import styles from './Sidebar.module.scss'

import { DataTextBLockContentContext } from '../../context/dataTextBLockContext'

export default function Sidebar () {
  const [activeLink, setActive] = useState(false)
  const arDataTextBLockContent = useContext(DataTextBLockContentContext)

  function activatedLinkHandler (item) {
    const activeLink = item.id
    setActive(
      activeLink
    )
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {
          arDataTextBLockContent.map((item) =>
            <li key={item.id} className={`${styles.text} ${activeLink === item.id ? styles.active : ''}`}>
              <a href={`#${item.link}`} onClick={() => activatedLinkHandler(item)} className='p_14'>{item.linkTitle}</a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  arTitles: PropTypes.array
}
