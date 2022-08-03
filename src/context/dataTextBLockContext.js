import React from 'react'

export const arDataTextBLockContent = [
  {
    title: {
      titleH1: 'Тестовое задание'
    },
    linkTitle: 'Напутственное слово',
    id: 0,
    link: 'word',
    type: 'word',
    paragraphLead: 'Уровень: junior',
    paragraphDefault: 'Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее. В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну что, поехали?'
  },
  {
    title: {
      titleH2: 'Сетка'
    },
    linkTitle: 'Сетка',
    id: 1,
    link: 'grid',
    type: 'grid',
    paragraphDefault: 'Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая» — переменной ширины.'
  },
  {
    title: {
      titleH2: 'Типографика'
    },
    titleH2: 'Типографика',
    linkTitle: 'Типографика',
    id: 2,
    link: 'typo',
    type: 'typo'
  },
  {
    title: {
      titleH2: 'UI'
    },
    linkTitle: 'UI',
    id: 3,
    link: 'ui',
    type: 'ui'
  }
]

export const DataTextBLockContentContext = React.createContext()
