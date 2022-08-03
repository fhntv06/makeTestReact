import React from 'react'
import Table from '../Table/Table'

// import PropTypes from 'prop-types'

import styles from './DescriptionDevice.module.scss'

export default function DescriptionDevice (props) {
  const descriptionDevices = [
    {
      id: 'desktopData',
      header: 'Десктоп (1200+)',
      srcImg: '/images/content/description-device/desktop.png',
      dataRow: ['1072–1312', '12', '60-80', '32']
    },
    {
      id: 'tabData',
      header: 'Планшет (736+)',
      srcImg: '/images/content/description-device/tab.png',
      dataRow: ['672–928', '8', '56-88', '32']
    },
    {
      id: 'mobileData',
      header: 'Телефон (320+)',
      srcImg: '/images/content/description-device/mobile.png',
      dataRow: ['296–424', '4', '56-88', '24']
    }
  ]

  const devicesResult = descriptionDevices.map((objDescriptionDevice) => {
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
