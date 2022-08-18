import React from 'react'

export const worker = {
  surname: 'Иванов',
  name: 'Иван Иванович'
}

export const arDataBlockContent = [
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
    paragraphDefault: 'Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая» — переменной ширины.',
    contentBlock: [
      {
        id: 'desktopData',
        header: 'Десктоп (1200+)',
        srcImg: '/images/content/description-device/desktop.png',
        dataRow: {
          title: ['Контент', 'Колонок', 'Ширина колонки', 'Межколонник'],
          content: ['1072–1312', '12', '60-80', '32']
        }
      },
      {
        id: 'tabData',
        header: 'Планшет (736+)',
        srcImg: '/images/content/description-device/tab.png',
        dataRow: {
          title: ['Контент', 'Колонок', 'Ширина колонки', 'Межколонник'],
          content: ['672–928', '8', '56-88', '32']
        }
      },
      {
        id: 'mobileData',
        header: 'Телефон (320+)',
        srcImg: '/images/content/description-device/mobile.png',
        dataRow: {
          title: ['Контент', 'Колонок', 'Ширина колонки', 'Межколонник'],
          content: ['296–424', '4', '56-88', '24']
        }
      }
    ]
  },
  {
    title: {
      titleH2: 'Типографика'
    },
    titleH2: 'Типографика',
    linkTitle: 'Типографика',
    id: 2,
    link: 'typo',
    type: 'typo',
    paragraphDefault: 'Используется шрифт Graphik. На телефонах стили типографики переопределяются',
    contentBlock: [
      {
        title: 'Десктоп',
        content:
          [
            { title: 'Заголовок H1, 48/56, bold', content: 'Текст заголовка' },
            { title: 'Заголовок H2, 32/40, bold', content: 'Текст заголовка' },
            { title: 'Заголовок H3, 24/32, medium', content: 'Текст заголовка' },
            { title: 'Заголовок H4, 18/28, medium', content: 'Текст заголовка' },
            { title: 'Лид P_Lead, 24/32, regular', content: 'Текст лида' },
            { title: 'Крупный текст P_18, 18/28, regular', content: 'Крупный текст' },
            { title: 'Основной текст P_16, 16/24, regular', content: 'Основной текст' },
            { title: 'Впомогательный текст P_14, 14/20, regular', content: 'Вспомогательный текст' }
          ]
      },
      {
        title: 'Телефон',
        content:
          [
            { title: 'Заголовок H1, 32/40, bold', content: 'Текст заголовка' },
            { title: 'Заголовок H2, 28/36, bold', content: 'Текст заголовка' },
            { title: 'Заголовок H3, 20/28, medium', content: 'Текст заголовка' },
            { title: 'Заголовок H4, 18/28, medium', content: 'Текст заголовка' },
            { title: 'Лид P_Lead, 20/28, regular', content: 'Текст лида' },
            { title: 'Крупный текст P_18, 18/28, regular', content: 'Крупный текст' },
            { title: 'Основной текст P_16, 16/24, regular', content: 'Основной текст' },
            { title: 'Впомогательный текст P_14, 14/20, regular', content: 'Вспомогательный текст' }
          ]
      }
    ]
  },
  {
    title: {
      titleH2: 'UI'
    },
    linkTitle: 'UI',
    id: 3,
    link: 'ui',
    type: 'ui',
    contentBlock: [
      {
        paragraphLead: 'Текстовое поле',
        content: [
          {
            type: 'input',
            label: 'text',
            value: 'E-mail',
            status: 'default'
          },
          {
            type: 'input',
            label: 'Ховер',
            value: 'E-mail',
            status: 'hover'
          },
          {
            type: 'input',
            label: 'Ввод',
            value: 'office@make.st',
            status: 'enter'
          },
          {
            type: 'input',
            label: 'Ошибка',
            value: 'officemake.st',
            status: 'error'
          }
        ],
        type: 'input'
      },
      {
        paragraphLead: 'Выпадающий список',
        paragraphDefault: 'Компонент состоит из текстового поля и выпадающей подсказки',
        content: [
          {
            value: 'Выберите что-нибудь',
            options: ['Первый стул', 'Второй стул', 'Выбранный пункт', 'Теорема Эскобара'],
            type: 'select'
          },
          {
            value: 'Выберите что-нибудь',
            options: ['Первый стул', 'Второй стул', 'Выбранный пункт', 'Теорема Эскобара'],
            type: 'select'
          },
          {
            value: 'Выберите что-нибудь',
            options: ['Первый стул', 'Второй стул', 'Выбранный пункт', 'Теорема Эскобара'],
            type: 'select'
          }
        ],
        type: 'select'
      },
      {
        paragraphLead: 'Кнопка',
        content: [
          {
            label: 'text'
          },
          {
            label: 'Ховер',
            activated: 'hover'
          },
          {
            label: 'Нажатие',
            activated: 'active'
          },
          {
            label: 'Неактивна'
          }
        ],
        type: 'button',
        name: 'Отправить'
      },
      {
        paragraphLead: 'Чекбокс, радиобаттон',
        content: [
          {
            type: 'checkbox',
            label: 'Выбери меня',
            activated: 'disabled'
          },
          {
            type: 'radio',
            label: 'Пластмассовый мир победил',
            activated: 'disabled'
          },
          {
            type: 'checkbox',
            label: 'Выбери меня',
            activated: 'hover'
          },
          {
            type: 'radio',
            label: 'Макет оказался сильней',
            activated: 'hover'
          },
          {
            type: 'checkbox',
            label: 'Птица счастья завтрашнего дня',
            activated: 'active'
          },
          {
            type: 'radio',
            label: 'Последний кораблик остыл',
            activated: 'active'
          }
        ],
        type: 'checkbox'
      },
      {
        paragraphLead: 'Аккордеон',
        content: [
          {
            title: 'Аккордеон 1',
            content: 'Гоpдость полными вагонами золотыми погонами<br>С юга дyют молодые вет…<br>Pазpывая в клочья облака не забыли шлют из далека<br>С дома мама И не последняя любовь<br>А по небy бегyт видишь чьи-то следы<br>Это может быть ты это может быть я<br>Это может наш дрyг<br>Это может нам поют свои'
          },
          {
            title: 'Аккордеон 2',
            content: 'Гоpдость полными вагонами золотыми погонами<br>С юга дyют молодые вет…<br>Pазpывая в клочья облака не забыли шлют из далека<br>С дома мама И не последняя любовь<br>А по небy бегyт видишь чьи-то следы<br>Это может быть ты это может быть я<br>Это может наш дрyг<br>Это может нам поют свои'
          },
          {
            title: 'Аккордеон 3',
            content: 'Гоpдость полными вагонами золотыми погонами<br>С юга дyют молодые вет…<br>Pазpывая в клочья облака не забыли шлют из далека<br>С дома мама И не последняя любовь<br>А по небy бегyт видишь чьи-то следы<br>Это может быть ты это может быть я<br>Это может наш дрyг<br>Это может нам поют свои',
            activated: 'active'
          }
        ],
        type: 'accordion'
      }
    ]
  }
]

export const DataBlockContentContext = React.createContext()
