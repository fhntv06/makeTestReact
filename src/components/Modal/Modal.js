import React from 'react'

import Logo from '../Logo/Logo'

import styles from './Modal.module.scss'
import Fullname from '../Fullname/Fullname'
import HeadContent from '../HeadContent/HeadContent'

import Link from '../Link/Link'

import { arDataModalContent } from '../../context/dataBLockContext'

export default function Modal () {
  return (
    <div id="modal" className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalInner}>
          <Logo parent={'modal'}/>
          <div className={`${styles.innerContent} paragraphSize14`}>
            <div className={styles.content}>
              <p className={styles.taskAllright}>Задание выполнил</p>
              <Fullname style='default'/>
              <HeadContent data={arDataModalContent} />
            </div>
            <Link data={arDataModalContent.link} />
          </div>
        </div>
      </div>
    </div>
  )
}
