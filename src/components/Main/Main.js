import React from 'react'

import styles from './Main.module.scss'

import Sidebar from '../Sidebar/Sidebar'
import TextBlockHead from '../TextBlock/TextBlockHead/TextBlockHead'
import TextBlockContent from '../TextBlock/TextBlockContent/TextBlockContent'

import DescriptionDevice from '../DescriptionDevice/DescriptionDevice'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
    this.foo = this.foo.bind(this)
  }

  foo (str) {
    this.setState({
      title: str
    })
  }

  arDescriptionDeviceDefault = ['Контент', 'Колонок', 'Ширина колонки', 'Межколонник']
  arDescriptionDeviceDesktop = ['1072–1312', '12', '60-80', '32']
  arDescriptionDeviceTab = ['672–928', '8', '56-88', '32']
  arDescriptionDeviceMobile = ['296–424', '4', '56-88', '24']

  render () {
    return (
      <div className={styles.main}>
        <Sidebar changeTitle={this.foo} />
        <div className={styles.container}>
          <TextBlockHead header='Тестовое задание' paragraphLead='Уровень: junior' paragraphDefault='Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее. В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну что, поехали?'/>
          <TextBlockContent header='Сетка' paragraphDefault='Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая» — переменной ширины.'/>
          <div className={styles.containerDescription}>
            <DescriptionDevice header='Десктоп (1200+)' arDescriptionDeviceDefault={this.arDescriptionDeviceDefault} arDescriptionDevice={this.arDescriptionDeviceDesktop} srcImg='/images/content/description-device/desktop.png' />
            <DescriptionDevice header='Планшет (736+)' arDescriptionDeviceDefault={this.arDescriptionDeviceDefault} arDescriptionDevice={this.arDescriptionDeviceTab} srcImg='/images/content/description-device/tab.png' />
            <DescriptionDevice header='Телефон (320+)' arDescriptionDeviceDefault={this.arDescriptionDeviceDefault} arDescriptionDevice={this.arDescriptionDeviceMobile} srcImg='/images/content/description-device/mobile.png' />
          </div>
        </div>
      </div>
    )
  }
}
