import React, { useState, useRef } from 'react'
import styles from './Input.module.scss'
import PropTypes from 'prop-types'

import useOutsideClick from '../../../hooks/useOutsideClick'

export default function Input (props) {
  const type = props.content.type
  let selectContent

  const refSelect = useRef(null)

  const [value, setValue] = useState('')
  const [valid, setValid] = useState(true)
  const [selectOpen, setSelectOpen] = useState(false)

  function changeValueInputHandler (e) {
    setValue(e.target.value)
    validEmail(e.target.value)
  }

  function validEmail (value) {
    // eslint-disable-next-line no-useless-escape
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    const valid = re.test(value)

    setValid(valid)
  }

  function selectOpenHandler (e) {
    setSelectOpen(!selectOpen)
  }

  useOutsideClick(refSelect, () => setSelectOpen(false))

  if (type === 'select') {
    selectContent = props.content.options.map((option) => {
      return (
        <p key={option} className={`${styles.option} option paragraphDefault`}
        onClick={(e) => {
          setValue(e.target.textContent)
        }}>{option}</p>
      )
    })
  }

  return (
    <div className={`${type === 'input' ? styles.inputType : styles.selectType}`}>
      {type === 'input' && <p className={`${styles.label} paragraphSize14`}>{props.content.label}</p>}
      <div ref={refSelect} className={`${styles.inputContent}`} onClick={(e) => selectOpenHandler(e)}>
        <div>
          <span className={`${styles.placeholder} ${(value) && styles.placeholderActive}`}>{props.content.value}</span>
          {type === 'select' && <svg className={`${styles.arrow} ${selectOpen ? styles.arrowActive : ''}`} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.5 3L7.5 0L9 1.5L4.5 6L0 1.5L1.5 0L4.5 3Z" fill="#3E29E3"/>
            </svg>}
        </div>

          <input className={`${(!valid && value) || props.content.status === 'error' ? styles.inputError : ''} ${(value || selectOpen) ? styles.inputActive : ''} paragraphDefault`}
          onChange={ changeValueInputHandler } value={value}/>
          {type === 'select' && <div className={`${styles.select} ${selectOpen ? styles.selectActive : ''}`}>
            {selectContent}
          </div>}
      </div>

      {type === 'input' && <span className={`${(!valid && value) || props.content.status === 'error' ? styles.errorActive : ''} ${styles.error} paragraphSize14`}>Текст ошибки</span>}
    </div>
  )
}

Input.propTypes = {
  content: PropTypes.object
}
