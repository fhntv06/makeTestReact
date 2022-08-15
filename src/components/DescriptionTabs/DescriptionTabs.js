import React, { useState } from 'react'
import styles from './DescriptionTabs.module.scss'
import PropTypes from 'prop-types'

export default function Tabs ({ contentBlock }) {
  const [indexActiveTab, setIndexActiveTab] = useState(0)

  function activatedTabHandler (index) {
    setIndexActiveTab(index)
  }

  const titles = contentBlock.map((content, index) => {
    return (
      <p key={content.title} className={`paragraphDefault ${indexActiveTab === index ? styles.active : ''} ${styles.tab}`} onClick={() => { activatedTabHandler(index) }}>{content.title}</p>
    )
  })

  const items = contentBlock.map((arrayContent, indexItem) => {
    const objectText = arrayContent.content.map((objectText, index) => {
      let title
      switch (index) {
        case 0:
          indexActiveTab === 0 ? title = 'headerHigh' : title = 'header'
          break
        case 1:
          indexActiveTab === 0 ? title = 'header' : title = 'headerMobile'
          break
        case 2:
          indexActiveTab === 0 ? title = 'headerMedium' : title = 'headerMediumMobile'
          break
        case 3:
          indexActiveTab === 0 ? title = 'headerLow' : title = 'headerLow'
          break
        case 4:
          indexActiveTab === 0 ? title = 'paragraphLead' : title = 'paragraphLeadMobile'
          break
        case 5:
          title = 'paragraphSize18'
          break
        case 6:
          title = 'paragraphDefault'
          break
        case 7:
          title = 'paragraphSize14'
          break
      }
      return (
        <div key={index} className={styles.items}>
          <p className={`${styles.itemTitle} paragraphSize14`}>{objectText.title}</p>
          <p className={`${title}`}>{objectText.content}</p>
        </div>
      )
    })

    return (
      <div key={indexItem} className={`${styles.content} ${indexActiveTab === indexItem ? styles.active : ''}`}>
        { objectText }
      </div>
    )
  })

  return (
    <div>
      <div className={styles.tabsSelect}>
        {titles}
      </div>
      <div className={styles.container}>
        {items}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  contentBlock: PropTypes.array
}
