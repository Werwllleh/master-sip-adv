const messages = [
  {
    type: 'text',
    text: 'Здравствуйте! 👋<br>Меня зовут Анастасия, я&nbsp;менеджер строительной компании MASTER-SIP. Более 20&nbsp;лет мы&nbsp;успешно строим объекты из&nbsp;СИП панелей по&nbsp;всей России.',
    step: 1,
    sleep: '1000',
    noscroll: '1500',
  },
  {
    type: 'text',
    text: 'Пожалуйста, ответьте на&nbsp;несколько вопросов, я&nbsp;рассчитаю стоимость вашего объекта под ключ.',
    step: 2,
    sleep: '1000',
    noscroll: '1500',
  },
  {
    type: 'radio',
    text: 'Что планируете строить?',
    step: 3,
    category: "build",
    goal: 'question1',
    noscroll: false,
    buts: [
      {
        type: 'house',
        text: 'Дом',
      },
      {
        type: 'bath',
        text: 'Баня',
      },
      {
        type: 'garage',
        text: 'Гараж',
      },
      {
        type: 'outbuildings',
        text: 'Хозяйственная постройка',
      },
    ],
  },
  {
    type: 'text',
    text: 'Хорошо, записала, перейдем к&nbsp;следующему вопросу',
    step: 4,
    noscroll: '1000',
    sleep: '1200',
  },
  {
    type: 'radio',
    text: '{project_plan}',
    step: 5,
    category: "project-plan",
    goal: 'question2',
    buts: [
      {
        type: 'project_yes',
        text: 'Проект есть',
      },
      {
        type: 'project_no',
        text: 'Требуется проект',
      },
    ],
    noscroll: false,
  },
  {
    type: 'radio',
    text: 'Выберите площадь объекта',
    step: 6,
    category: "square",
    goal: 'question3',
    buts: [
      {
        type: 'house_small',
        text: 'до 200 м2',
      },
      {
        type: 'house_medium',
        text: 'от 200 до 300 м2',
      },
      {
        type: 'house_large',
        text: 'от 300 м2',
      },
      {
        type: 'bath_small',
        text: 'до 110 м2',
      },
      {
        type: 'bath_medium',
        text: 'от 110 м2',
      },
      {
        type: 'garage_small',
        text: 'до 110 м2',
      },
      {
        type: 'garage_medium',
        text: 'от 110 м2',
      },
      {
        type: 'outbuildings_small',
        text: 'до 110 м2',
      },
      {
        type: 'outbuildings_medium',
        text: 'от 110 м2',
      },
    ],
    noscroll: false,
  },
  {
    type: 'cards',
    text: '{variants}',
    step: 7,
    category: "build-type",
    goal: 'question4',
    noscroll: false,
    buts: [
      //от 300 м2
      {
        type: 'house_large',
        name: 'Дом Алтайская Лагуна',
        fullname: 'Дом Алтайская Лагуна',
        price: '57 372 820 руб',
        img: 'img/house/house-1.png',
        profit: '',
        gift: '',
        diameter: '38-52 см',
        meterage: '595 м2',
      },
      {
        type: 'house_large',
        name: 'Дом Таежный',
        fullname: 'Дом Таежный',
        price: '21 866 760 руб',
        img: 'img/house/house-2.png',
        profit: '',
        gift: '',
        diameter: '36-44 см',
        meterage: '305,75 м2',
      },
      //от 200 до 300 м2
      {
        type: 'house_medium',
        name: 'Дом Монтана',
        fullname: 'Дом Монтана',
        price: '26 431 000 руб',
        img: 'img/house/house-3.png',
        profit: '',
        gift: '',
        diameter: '38-48 см',
        meterage: '276 м2',
      },
      {
        type: 'house_medium',
        name: 'Тихий Уголок',
        fullname: 'Тихий Уголок',
        price: '22 741 200 руб',
        img: 'img/house/house-4.png',
        profit: '',
        gift: '',
        diameter: '40-48 см',
        meterage: '254,2 м2',
      },
      //баня от 110 м2
      {
        type: 'bath_medium',
        name: 'Баня Алатау',
        fullname: 'Баня Алатау',
        price: '16 895 000 руб',
        img: 'img/bathhouse/bathhouse-1.png',
        profit: '',
        gift: '',
        diameter: '36-48 см',
        meterage: '140 м2',
      },
      {
        type: 'bath_medium',
        name: 'Баня Большая',
        fullname: 'Баня Большая',
        price: '12 405 000 руб',
        img: 'img/bathhouse/bathhouse-2.png',
        profit: '',
        gift: '',
        diameter: '36-40 см',
        meterage: '145 м2',
      },
      //до 110 м2
      {
        type: 'bath_small',
        name: 'Баня Бузули',
        fullname: 'Баня Бузули',
        price: '16 345 000 руб',
        img: 'img/bathhouse/bathhouse-3.png',
        profit: '',
        gift: '',
        diameter: '40 см',
        meterage: '103,5 м2',
      },
      {
        type: 'bath_small',
        name: 'Баня Таежная Кело',
        fullname: 'Баня Таежная Кело',
        price: '7 450 850 руб',
        img: 'img/bathhouse/bathhouse-4.png',
        profit: '',
        gift: '',
        diameter: '30 см',
        meterage: '42 м2',
      },
    ],
    buttons: [
      {
        type: null,
        text: 'Не&nbsp;знаю&nbsp;/ Не&nbsp;определился',
      },
    ]
  },
  {
    type: 'text',
    text: 'Спасибо за&nbsp;ответы!',
    step: 8,
  },
  {
    type: 'text',
    text: '{pre_last}',
    step: 9,
  },
  {
    type: 'phone',
    text: 'Пожалуйста, оставьте ваши данные для связи:',
    step: 10,
    noscroll: '1500',
  },
];

