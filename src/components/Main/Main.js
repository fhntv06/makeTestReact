import React from 'react'
import PropTypes from 'prop-types'

import styles from './Main.module.scss'

import Sidebar from '../Sidebar/Sidebar'
import TextBlockContent from '../TextBlockContent/TextBlockContent'

export default function Main (props) {
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.container}>
        {props.arDataTextBLockContent.map((data) => {
          return (
            <div key={data.id} className={styles.containerDescriptionDevices}>
              <TextBlockContent type={data.type} arData={props.arDataTextBLockContent}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Main.propTypes = {
  arDataTextBLockContent: PropTypes.array
}
