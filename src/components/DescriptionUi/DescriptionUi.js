import React from 'react'
import styles from './DescriptionUi.module.scss'
import PropTypes from 'prop-types'

import HeadContent from '../HeadContent/HeadContent'
import InputTypes from '../InputTypes/InputTypes'
import Select from '../Select/Select'
import Button from '../Button/Button'
// import Accordion from '../Accordion/Accordion'

export default function DescriptionUi ({ contentBlock }) {
  let styleContainer

  return (
    contentBlock.map((data, index) => {
      switch (data.type) {
        case 'checkbox':
          styleContainer = styles.container2columns
          break
        default:
          styleContainer = styles.container3columns
          break
      }

      return (
        <div className={styles.section} key={index}>
          <HeadContent data={data}/>
          <div className={`${styles.container} ${styleContainer}`}>
            { (data.type === 'input' || data.type === 'checkbox') &&
              <InputTypes content={data.content}/>
            }
            { data.type === 'select' &&
              <Select content={data.content}/>
            }
            { data.type === 'button' &&
              <Button content={data.content} />
            }
            {/* { data.type === 'accordion' &&
              <Accordion content={data.content}/>
            }  */}
          </div>
        </div>
      )
    })
  )
}

DescriptionUi.propTypes = {
  contentBlock: PropTypes.array
}
