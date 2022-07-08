import React from 'react'

import styles from './Main.module.scss'

import Sidebar from '../Sidebar/Sidebar'
import TextBlockHead from '../TextBlock/TextBlockHead/TextBlockHead'
import TextBlockContent from '../TextBlock/TextBlockContent/TextBlockContent'

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

  render () {
    return (
      <div className={styles.main}>
        <Sidebar changeTitle={this.foo} />
        <div className={styles.container}>
          <h1>{this.state.title}</h1>
          <TextBlockHead title='Тестовое задание' text='Уровень: junior' />
          <TextBlockContent title='Сетка' text='Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее. В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну что, поехали?'/>
        </div>
      </div>
    )
  }
}
