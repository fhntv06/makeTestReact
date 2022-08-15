import React from 'react'
import Table from '../Table/Table'

import styles from './DescriptionDevice.module.scss'

export default function DescriptionDevice ({ contentBlock }) {
  const devicesResult = contentBlock.map((objDescriptionDevice) => {
    return (
      <div key={objDescriptionDevice.id} className={styles.container}>
        <h3>{objDescriptionDevice.header}</h3>
        <Table dataRow={objDescriptionDevice.dataRow}/>
        <img src={process.env.PUBLIC_URL + objDescriptionDevice.srcImg}/>
      </div>
    )
  })

  return (
    devicesResult
  )
}
