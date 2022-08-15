import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import styles from './Sidebar.module.scss'

import { DataBlockContentContext } from '../../context/dataBLockContext'

export default function Sidebar () {
  const [idActiveLink, setIdActiveLink] = useState(0)
  const arDataBlockContent = useContext(DataBlockContentContext)

  function activatedLinkHandler (item) {
    document.querySelector(`#${item.link}`).scrollIntoView({ behavior: 'smooth' })
    setIdActiveLink(item.id)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {arDataBlockContent.map((item) =>
          <li key={item.id} className={`${styles.text} ${idActiveLink === item.id ? styles.active : ''}`}>
            <a onClick={() => activatedLinkHandler(item)} className='paragraphSize14'>{item.linkTitle}</a>
          </li>)
        }
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  arTitles: PropTypes.array
}
