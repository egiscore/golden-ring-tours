export interface TourOption {
  days: number;
  price: number;
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  duration: string;
  icon: string;
  image: string;
  features: string[];
  cities: string[];
  program: string[];
  included: string[];
  gallery: string[];
  options: TourOption[];
}

export const tours: Record<string, Tour> = {
  'new-year': {
    id: 'new-year',
    title: 'Новогодний тур по Золотому кольцу',
    description: 'Встретьте Новый год в древних русских городах',
    fullDescription: 'Незабываемое новогоднее путешествие по городам Золотого кольца. Встретьте Новый год в атмосфере русской сказки — заснеженные храмы, праздничные ярмарки, традиционные гуляния и новогодние программы. Вас ждут праздничные ужины, развлекательные мероприятия и волшебная атмосфера зимней России.',
    price: 'от 35 000 ₽',
    duration: '3-4 дня',
    icon: 'Sparkles',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/15e3304b-db9a-480b-a61e-6ee77149ce73.jpg',
    features: ['Новогодний банкет', 'Праздничная программа', 'Экскурсии по заснеженным городам', 'Подарки от Деда Мороза'],
    cities: ['Суздаль', 'Владимир', 'Ярославль', 'Кострома'],
    program: [
      '30 декабря: Выезд из Москвы. Переезд в Суздаль. Размещение в отеле. Вечерняя прогулка по праздничному городу',
      '31 декабря: Экскурсия по Суздалю — Кремль, Покровский монастырь. Свободное время на новогодней ярмарке. Праздничный новогодний банкет с развлекательной программой',
      '1 января: Поздний завтрак. Переезд во Владимир. Экскурсия по городу — Золотые ворота, Успенский собор. Переезд в Ярославль',
      '2 января: Экскурсия по Ярославлю. Возвращение в Москву с праздничным настроением'
    ],
    included: [
      'Трансфер на комфортабельном автобусе',
      'Проживание в отелях 3-4★ (3 ночи)',
      'Завтраки каждый день',
      'Праздничный новогодний банкет 31 декабря',
      'Развлекательная новогодняя программа',
      'Экскурсионное обслуживание',
      'Входные билеты в музеи и храмы'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/30e268dd-0545-460d-9268-507a25bcbe7b.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5acf7363-1dd4-497b-a469-e289b9497863.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/0b690b95-d722-472f-9d9d-49b5ab07313d.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/98070741-4b1d-4246-90fc-4b398513ba52.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/56ce8a49-2d29-4b61-bb32-c1d91d4c5476.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/098ff97d-0589-433a-922a-e2ae940c93fd.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/38e152b5-4732-427d-8aee-752c9df39482.jpg'
    ],
    options: [
      { days: 3, price: 35000, description: 'Суздаль + Владимир' },
      { days: 4, price: 42000, description: 'Расширенный тур с Ярославлем' },
      { days: 5, price: 49000, description: 'Полный тур + Кострома' }
    ]
  },
  'bus-tour': {
    id: 'bus-tour',
    title: 'Автобусный тур по Золотому кольцу',
    description: 'Комфортное групповое путешествие с экскурсоводом',
    fullDescription: 'Классический автобусный тур по городам Золотого кольца — это возможность увидеть древние русские города, не беспокоясь о логистике. Вас ждет комфортабельный автобус, профессиональный гид и насыщенная программа.',
    price: 'от 18 000 ₽',
    duration: '3-5 дней',
    icon: 'Bus',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/77ecd5dd-0bba-4cdf-9891-c20d8146e60c.jpg',
    features: ['Комфортабельный автобус', 'Группа до 30 человек', 'Профессиональный гид', 'Все экскурсии включены'],
    cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома', 'Суздаль', 'Владимир'],
    program: [
      'День 1: Выезд из Москвы. Сергиев Посад — посещение Троице-Сергиевой Лавры. Переезд в Ярославль',
      'День 2: Экскурсия по Ярославлю — церковь Ильи Пророка, Спасо-Преображенский монастырь. Переезд в Кострому',
      'День 3: Кострома — Ипатьевский монастырь, Музей деревянного зодчества. Переезд в Суздаль',
      'День 4: Суздаль — Кремль, Музей деревянного зодчества, Покровский монастырь',
      'День 5: Владимир — Золотые ворота, Успенский собор, Дмитриевский собор. Возвращение в Москву'
    ],
    included: [
      'Трансфер на комфортабельном автобусе по всему маршруту',
      'Проживание в отелях 3★ (4 ночи)',
      'Завтраки',
      'Экскурсионное обслуживание с профессиональным гидом',
      'Входные билеты во все музеи и храмы',
      'Страховка'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/77ecd5dd-0bba-4cdf-9891-c20d8146e60c.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/76c0c55d-54f3-45c0-9136-94ddfc93efc0.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/7956c0c8-581f-4ee8-85af-affe2ecfb6fb.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/81ccb69c-77d6-49d6-ba13-5e755970cd28.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/bcf1e869-b820-47ac-b567-3dd1a406ab49.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/886a505f-c2e5-4ef4-99c7-d3b572c14291.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/0fc43796-9f6d-470c-8a36-2e374fcccdfe.jpg'
    ],
    options: [
      { days: 3, price: 18000, description: 'Экспресс-тур: Сергиев Посад + Ярославль + Ростов' },
      { days: 4, price: 23000, description: 'Классический: + Кострома + Суздаль' },
      { days: 5, price: 28000, description: 'Полный тур всех городов Золотого кольца' }
    ]
  },
  'cruise': {
    id: 'cruise',
    title: 'Круиз на лайнере по Золотому кольцу',
    description: 'Путешествие по рекам с комфортом плавучего отеля',
    fullDescription: 'Речной круиз — это уникальный способ познакомиться с городами Золотого кольца. Вы живете на комфортабельном теплоходе, а каждый день открываете для себя новый город.',
    price: 'от 45 000 ₽',
    duration: '5-7 дней',
    icon: 'Ship',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/315c4129-2360-41af-bea0-05c9da8fa230.jpg',
    features: ['Комфортабельная каюта', 'Трёхразовое питание', 'Береговые экскурсии', 'Развлекательная программа'],
    cities: ['Москва', 'Углич', 'Ярославль', 'Кострома', 'Плёс', 'Нижний Новгород'],
    program: [
      'День 1: Посадка на теплоход в Москве. Отправление вечером',
      'День 2: Прибытие в Углич. Береговая экскурсия — Кремль, церковь Димитрия на Крови',
      'День 3: Ярославль — Спасо-Преображенский монастырь, набережная Волги',
      'День 4: Кострома — Ипатьевский монастырь, Сусанинская площадь',
      'День 5: Плёс — живописный город художников, дом-музей Левитана',
      'День 6: Нижний Новгород — Кремль, Чкаловская лестница',
      'День 7: Возвращение в Москву'
    ],
    included: [
      'Проживание в каюте выбранной категории',
      'Трёхразовое питание на теплоходе',
      'Все береговые экскурсии с гидом',
      'Развлекательная программа на борту',
      'Страховка'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/315c4129-2360-41af-bea0-05c9da8fa230.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/1b97c2c0-0ad1-437b-9db1-3cd5463aaa87.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/7956c0c8-581f-4ee8-85af-affe2ecfb6fb.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/81ccb69c-77d6-49d6-ba13-5e755970cd28.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/0fc43796-9f6d-470c-8a36-2e374fcccdfe.jpg'
    ],
    options: [
      { days: 5, price: 45000, description: 'Стандартная каюта' },
      { days: 6, price: 62000, description: 'Комфорт-каюта с окном' },
      { days: 7, price: 85000, description: 'Люкс-каюта с балконом' }
    ]
  },
  'excursion': {
    id: 'excursion',
    title: 'Экскурсионный тур по Золотому кольцу',
    description: 'Насыщенная программа по всем достопримечательностям',
    fullDescription: 'Максимально насыщенный тур для тех, кто хочет увидеть все главные достопримечательности Золотого кольца за короткое время.',
    price: 'от 25 000 ₽',
    duration: '3-7 дней',
    icon: 'Landmark',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/43e44425-e22c-451c-bc26-4e38a65293c6.jpg',
    features: ['Опытный экскурсовод', 'Входные билеты включены', 'Удобный трансфер', 'Посещение музеев и храмов'],
    cities: ['Все города Золотого кольца'],
    program: [
      'Индивидуальная программа под ваши интересы',
      'Посещение всех знаковых храмов и монастырей',
      'Музеи, мастер-классы, дегустации',
      'Фотосессии в самых красивых местах'
    ],
    included: [
      'Трансфер по маршруту',
      'Проживание в комфортабельных отелях',
      'Завтраки',
      'Экскурсионное обслуживание',
      'Входные билеты в музеи'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/43e44425-e22c-451c-bc26-4e38a65293c6.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ccdac298-26df-4d81-81b5-44b72f445867.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/76c0c55d-54f3-45c0-9136-94ddfc93efc0.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/bcf1e869-b820-47ac-b567-3dd1a406ab49.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/886a505f-c2e5-4ef4-99c7-d3b572c14291.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/7956c0c8-581f-4ee8-85af-affe2ecfb6fb.jpg'
    ],
    options: [
      { days: 3, price: 25000, description: 'Экспресс: Владимир + Суздаль' },
      { days: 5, price: 38000, description: 'Классический: + Ярославль + Кострома' },
      { days: 7, price: 52000, description: 'Расширенный: все города + мастер-классы' }
    ]
  },
  'train': {
    id: 'train',
    title: 'Тур на поезде по Золотому кольцу',
    description: 'Путешествие на комфортабельном поезде между городами',
    fullDescription: 'Удобный формат для тех, кто предпочитает железнодорожные путешествия. Переезды на поезде, а в городах — насыщенная экскурсионная программа.',
    price: 'от 22 000 ₽',
    duration: '4-6 дней',
    icon: 'Train',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8b97e9d1-8e7d-4a8b-be32-0c8f92f17025.jpg',
    features: ['Билеты на поезд включены', 'Трансфер на вокзалы', 'Гид в каждом городе', 'Проживание в отелях 3-4★'],
    cities: ['Владимир', 'Суздаль', 'Ярославль', 'Кострома'],
    program: [
      'День 1: Поезд Москва — Владимир. Экскурсия по Владимиру',
      'День 2: Трансфер в Суздаль. Полный день экскурсий',
      'День 3: Поезд в Ярославль. Экскурсия по городу',
      'День 4: Поезд в Кострому. Экскурсии',
      'День 5: Возвращение в Москву'
    ],
    included: [
      'Железнодорожные билеты',
      'Трансферы вокзал-отель-вокзал',
      'Проживание в отелях 3-4★',
      'Завтраки',
      'Экскурсии с гидом'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8b97e9d1-8e7d-4a8b-be32-0c8f92f17025.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/699f480c-aa9b-427a-a4eb-a910c87d3ec1.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/886a505f-c2e5-4ef4-99c7-d3b572c14291.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/bcf1e869-b820-47ac-b567-3dd1a406ab49.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/7956c0c8-581f-4ee8-85af-affe2ecfb6fb.jpg'
    ],
    options: [
      { days: 4, price: 22000, description: 'Плацкарт: Владимир + Суздаль + Ярославль' },
      { days: 5, price: 29000, description: 'Купе: + Кострома' },
      { days: 6, price: 38000, description: 'СВ (люкс): полный маршрут' }
    ]
  },
  'spiritual': {
    id: 'spiritual',
    title: 'Духовное путешествие по Золотому кольцу',
    description: 'Паломничество с духовным наставником',
    fullDescription: 'Паломнический тур для тех, кто хочет прикоснуться к духовным святыням России. В сопровождении священника или духовного наставника.',
    price: 'от 35 000 ₽',
    duration: '3-7 дней',
    icon: 'Church',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/e98a7b40-ff09-4740-b0c1-6cfa7e9044c9.jpg',
    features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места'],
    cities: ['Сергиев Посад', 'Суздаль', 'Владимир', 'Дивеево'],
    program: [
      'Посещение святынь и монастырей',
      'Участие в богослужениях',
      'Беседы с духовными наставниками',
      'Время для молитвы и размышлений'
    ],
    included: [
      'Трансфер',
      'Проживание',
      'Питание (постное по желанию)',
      'Духовное сопровождение',
      'Свечи и требы'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/e98a7b40-ff09-4740-b0c1-6cfa7e9044c9.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d51a5f3-1205-477e-9ac8-1bc43b02701c.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/76c0c55d-54f3-45c0-9136-94ddfc93efc0.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/bcf1e869-b820-47ac-b567-3dd1a406ab49.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/886a505f-c2e5-4ef4-99c7-d3b572c14291.jpg'
    ],
    options: [
      { days: 3, price: 35000, description: 'Сергиев Посад + Суздаль' },
      { days: 5, price: 48000, description: '+ Владимир + Дивеево' },
      { days: 7, price: 62000, description: 'Расширенное паломничество с беседами' }
    ]
  },
  'gastro': {
    id: 'gastro',
    title: 'Гастрономический тур по Золотому кольцу',
    description: 'Авторские блюда и лучшие вина региона',
    fullDescription: 'Откройте для себя кулинарные традиции русских городов. Дегустации, мастер-классы от шеф-поваров, посещение ферм и производств.',
    price: 'от 52 000 ₽',
    duration: '3-5 дней',
    icon: 'ChefHat',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8d3d5500-3428-4cd0-b7db-19e5836a3c42.jpg',
    features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны'],
    cities: ['Суздаль', 'Ростов', 'Ярославль', 'Кострома'],
    program: [
      'Дегустации местных продуктов и блюд',
      'Мастер-классы по приготовлению традиционных блюд',
      'Посещение сыроварен, пивоварен, медоварен',
      'Ужины в лучших ресторанах региона'
    ],
    included: [
      'Трансфер премиум-класса',
      'Проживание в отелях 4-5★',
      'Все приёмы пищи включены',
      'Дегустации и мастер-классы',
      'Сопровождение сомелье'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8d3d5500-3428-4cd0-b7db-19e5836a3c42.jpg'
    ],
    options: [
      { days: 3, price: 52000, description: 'Суздаль + Ростов: дегустации и мастер-классы' },
      { days: 4, price: 68000, description: '+ Ярославль: расширенная программа' },
      { days: 5, price: 85000, description: 'Полный гастротур с сомелье' }
    ]
  },
  'vip': {
    id: 'vip',
    title: 'Индивидуальный VIP тур по Золотому кольцу',
    description: 'Максимальный комфорт и полное погружение в историю',
    fullDescription: 'Эксклюзивный тур для тех, кто ценит комфорт и индивидуальный подход. Личный гид-историк, автомобиль премиум-класса, лучшие отели.',
    price: 'от 42 000 ₽',
    duration: '2-7 дней',
    icon: 'Crown',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/cd2d6549-1f39-42b9-a01d-b1f2c1b08c8c.jpg',
    features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены'],
    cities: ['По вашему выбору'],
    program: [
      'Индивидуальный маршрут под ваши интересы',
      'Закрытые экскурсии вне расписания',
      'Посещение частных коллекций',
      'Встречи с краеведами и историками'
    ],
    included: [
      'Автомобиль премиум-класса с водителем',
      'Проживание в лучших отелях 5★',
      'Личный гид-историк',
      'Все входные билеты',
      'Индивидуальная программа'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/cd2d6549-1f39-42b9-a01d-b1f2c1b08c8c.jpg'
    ],
    options: [
      { days: 2, price: 42000, description: 'Экспресс-тур: 1-2 города' },
      { days: 4, price: 78000, description: 'Классический VIP: 3-4 города' },
      { days: 7, price: 145000, description: 'Премиум: полный маршрут с эксклюзивами' }
    ]
  },
  'photo': {
    id: 'photo',
    title: 'Фототур по Золотому кольцу',
    description: 'Секретные локации и профессиональный опыт',
    fullDescription: 'Специальный тур для фотографов. Съемка в лучшее время суток, секретные локации, советы от профессионалов.',
    price: 'от 38 000 ₽',
    duration: '4-6 дней',
    icon: 'Camera',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/137ede6c-dc37-4b47-b2cd-d84877bec21e.jpg',
    features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото'],
    cities: ['Суздаль', 'Владимир', 'Плёс', 'Кострома'],
    program: [
      'Съемка рассветов и закатов в лучших локациях',
      'Посещение малоизвестных фотогеничных мест',
      'Мастер-классы по пейзажной и архитектурной съемке',
      'Разбор отснятого материала'
    ],
    included: [
      'Сопровождение фотографа-эксперта',
      'Трансфер в секретные локации',
      'Проживание в отелях 4★',
      'Доступ к закрытым площадкам для съемки',
      'Базовая обработка фото'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/137ede6c-dc37-4b47-b2cd-d84877bec21e.jpg'
    ],
    options: [
      { days: 4, price: 38000, description: 'Базовый: Суздаль + Владимир' },
      { days: 5, price: 52000, description: 'Расширенный: + Плёс + рассветы/закаты' },
      { days: 6, price: 68000, description: 'Премиум: все локации + обработка фото' }
    ]
  }
};