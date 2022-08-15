import React from 'react'
import styles from './DescriptionUi.module.scss'
import PropTypes from 'prop-types'

import HeadContent from '../HeadContent/HeadContent'
import InputTypes from '../InputTypes/InputTypes'
import Select from '../Select/Select'
import Button from '../Button/Button'
// import Accordion from '../Accordion/Accordion'

export default function DescriptionUi ({ contentBlock }) {
  return (
    contentBlock.map((data, index) => {
      const items = data.content.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {/* { data.type === 'button' &&
              <Button content={data.content}/>
            }
            { data.type === 'accordion' &&
              <Accordion content={data.content}/>
            } */}
          </React.Fragment>
        )
      })

      return (
        <div className={styles.section} key={index}>
          <HeadContent data={data}/>
          <div className={styles.container}>
            { data.type === 'input' &&
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
            {items}
          </div>
        </div>
      )
    })
  )
}

DescriptionUi.propTypes = {
  contentBlock: PropTypes.array
}
