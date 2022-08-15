/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Main.module.scss'

import Sidebar from '../Sidebar/Sidebar'
import DescriptionDevice from '../DescriptionDevice/DescriptionDevice'
import DescriptionTabs from '../DescriptionTabs/DescriptionTabs'
import DescriptionUi from '../DescriptionUi/DescriptionUi'
import HeadContent from '../HeadContent/HeadContent'

export default function Main (props) {
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={'container'}>
        {props.arDataBlockContent.map((data, index) => {
          return (
            <div key={data.id} className={`${styles.containerDescriptionDevices} ${index === 0 ? 'firstTextblock' : ''}`}>
              <HeadContent data={data}/>
              { data.type === 'grid' &&
                <DescriptionDevice contentBlock={data.contentBlock}/>
              }
              { data.type === 'typo' &&
                <DescriptionTabs contentBlock={data.contentBlock}/>
              }
              { data.type === 'ui' &&
                <DescriptionUi contentBlock={data.contentBlock}/>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

Main.propTypes = {
  arDataBlockContent: PropTypes.array
}
