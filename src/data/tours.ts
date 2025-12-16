export interface TourOption {
  days: number;
  price: number;
  description: string;
  cities?: string[];
  program?: string[];
  included?: string[];
  photos?: string[];
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
      '30 декабря: Встреча группы. Переезд в Суздаль. Размещение в отеле. Вечерняя прогулка по праздничному городу',
      '31 декабря: Экскурсия по Суздалю — Кремль, Покровский монастырь. Свободное время на новогодней ярмарке. Праздничный новогодний банкет с развлекательной программой',
      '1 января: Поздний завтрак. Переезд во Владимир. Экскурсия по городу — Золотые ворота, Успенский собор. Переезд в Ярославль',
      '2 января: Экскурсия по Ярославлю. Завершение тура с праздничным настроением'
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
      { 
        days: 2, 
        price: 28000, 
        description: 'Экспресс: Суздаль',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/c040cb4d-23fd-48f3-aade-f0a7a513155c.jpg'
        ]
      },
      { 
        days: 3, 
        price: 35000, 
        description: 'Суздаль + Владимир',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/c040cb4d-23fd-48f3-aade-f0a7a513155c.jpg'
        ]
      },
      { 
        days: 4, 
        price: 42000, 
        description: 'Расширенный тур с Ярославлем',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/c040cb4d-23fd-48f3-aade-f0a7a513155c.jpg'
        ]
      },
      { 
        days: 5, 
        price: 49000, 
        description: 'Полный тур + Кострома',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/c040cb4d-23fd-48f3-aade-f0a7a513155c.jpg'
        ]
      }
    ]
  },
  'bus-tour': {
    id: 'bus-tour',
    title: 'Автобусные туры по Золотому кольцу',
    description: 'Популярные маршруты с комфортом и удобством',
    fullDescription: 'Выберите один из самых популярных автобусных туров по Золотому кольцу. Комфортабельные автобусы, профессиональные гиды и насыщенные программы позволят увидеть лучшие достопримечательности древних русских городов без забот о логистике.',
    price: 'от 10 990 ₽',
    duration: '2-3 дня',
    icon: 'Bus',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/77ecd5dd-0bba-4cdf-9891-c20d8146e60c.jpg',
    features: ['Комфортабельный автобус', 'Группа до 30 человек', 'Профессиональный гид', 'Отели 3★'],
    cities: ['Суздаль', 'Владимир', 'Коломна', 'Рязань', 'Муром', 'Иваново', 'Плёс', 'Кострома'],
    program: [
      'Каждый маршрут включает посещение главных достопримечательностей городов',
      'Размещение в комфортабельных отелях 3★, питание по программе',
      'Все экскурсии с профессиональными гидами, входные билеты включены'
    ],
    included: [
      'Трансфер на комфортабельном автобусе по всему маршруту',
      'Проживание в отеле 3★ (1 ночь)',
      'Питание: 1 завтрак + 2 обеда',
      'Экскурсионное обслуживание с профессиональным гидом',
      'Входные билеты во все музеи и храмы',
      'Страховка от несчастного случая'
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
      { 
        days: 2, 
        price: 10990, 
        description: 'Владимирское княжество',
        cities: ['Суздаль', 'Владимир', 'Боголюбово'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a6e0b3e7-ad02-4fd9-aa84-91f664af28d8.jpg'
        ],
        program: [
          'День 1: Отправление. Переезд в Суздаль (220 км). Обзорная экскурсия по Суздалю — Суздальский Кремль, Рождественский собор XIII века с Золотыми воротами, Спасо-Евфимиев монастырь с концертом колокольных звонов. Обед. Музей деревянного зодчества под открытым небом. Размещение в гостинице 3★',
          'День 2: Завтрак. Покровский монастырь, прогулка по торговым рядам. Переезд в Боголюбово — церковь Покрова на Нерли XII века (объект ЮНЕСКО). Переезд во Владимир. Обзорная экскурсия — Золотые ворота, Успенский собор с фресками Андрея Рублева, Дмитриевский собор. Обед. Отправление в обратный путь. Прибытие вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отеле 3★ (1 ночь)',
          'Питание: 1 завтрак + 2 обеда',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты в музеи и храмы',
          'Страховка от несчастного случая'
        ]
      },
      { 
        days: 3, 
        price: 20390, 
        description: 'От Оки до Волги',
        cities: ['Коломна', 'Рязань', 'Гусь-Хрустальный', 'Муром', 'Нижний Новгород', 'Гороховец'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a2724244-67ae-43e5-a3aa-81d1d2d8c825.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3d427b63-b434-4303-8429-633698dfb166.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/de52a775-7a82-42f4-af42-0553bcc6aad1.jpg'
        ],
        program: [
          'День 1: Отправление. Переезд в Коломну (115 км). Экскурсия по Коломенскому кремлю — Успенский собор, крепостные башни XIV века. Дегустация коломенской пастилы. Переезд в Рязань (195 км). Обед. Экскурсия — Рязанский кремль, Успенский собор XVII века (высота 72 м), Дворец Олега. Размещение в гостинице',
          'День 2: Завтрак. Переезд в Гусь-Хрустальный (260 км). Музей хрусталя в Георгиевском соборе — коллекция изделий знаменитого завода. Переезд в Муром (120 км). Обед. Экскурсия — Спасо-Преображенский монастырь (самый древний в России, 1096 год), мощи святых Петра и Февронии (покровители семьи), набережная Оки. Размещение',
          'День 3: Завтрак. Переезд в Нижний Новгород (170 км). Обзорная экскурсия — Нижегородский кремль XIII века, Чкаловская лестница (560 ступеней), стрелка Оки и Волги. Обед. Переезд в Гороховец (85 км) — уникальные купеческие палаты XVII века. Отправление в обратный путь. Прибытие поздним вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отелях 3★ (2 ночи)',
          'Питание: 2 завтрака + 3 обеда',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты во все музеи и храмы',
          'Дегустация коломенской пастилы',
          'Страховка от несчастного случая'
        ]
      },
      { 
        days: 3, 
        price: 21390, 
        description: 'Необычное путешествие по Волжским городам',
        cities: ['Суздаль', 'Иваново', 'Плёс', 'Волгореченск', 'Кострома'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f254d1a8-6f27-459a-b985-a5fee03783c6.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ],
        program: [
          'День 1: Отправление. Переезд в Суздаль (220 км). Обзорная экскурсия — Суздальский Кремль, Спасо-Евфимиев монастырь. Обед. Музей деревянного зодчества. Переезд в Иваново (80 км). Размещение в гостинице 3★',
          'День 2: Завтрак. Обзорная экскурсия по Иваново — город невест, музей ситца. Переезд в Плёс (70 км) — живописный город на Волге, любимое место художников. Дом-музей Левитана. Обед. Переезд в Волгореченск — рыбное хозяйство, дегустация царской рыбы. Музей сыра с дегустацией. Размещение в Костроме',
          'День 3: Завтрак. Обзорная экскурсия по Костроме — Ипатьевский монастырь (колыбель династии Романовых), Троицкий собор, выставка «Золотая кладовая». Обед. Музей деревянного зодчества. Отправление в обратный путь. Прибытие поздним вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отелях 3★ (2 ночи)',
          'Питание: 2 завтрака + 3 обеда',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты во все музеи',
          'Дегустация царской рыбы',
          'Дегустация сыра в музее сыра',
          'Страховка от несчастного случая'
        ]
      },
      { 
        days: 3, 
        price: 23590, 
        description: 'Сказка Русского Севера',
        cities: ['Переславль-Залесский', 'Ярославль', 'Данилов', 'Вологда', 'Горицы', 'Кириллов', 'Ферапонтово'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5a8ec40b-0eec-4a51-b187-31c5e454f747.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/054968f1-8790-43c1-8498-781cfe71e50d.jpg'
        ],
        program: [
          'День 1: Отправление. Переезд в Переславль-Залесский (140 км). Обзорная экскурсия — Спасо-Преображенский собор XII века, Горицкий монастырь, Плещеево озеро. Обед. Переезд в Ярославль (60 км). Экскурсия по историческому центру (объект ЮНЕСКО) — Спасо-Преображенский монастырь, церковь Ильи Пророка. Переезд в Данилов. Размещение в гостинице 3★',
          'День 2: Завтрак. Переезд в Вологду (180 км). Обзорная экскурсия — Вологодский кремль, Софийский собор XVI века, набережная реки Вологды. Музей кружева — уникальная коллекция вологодского кружева. Обед с дегустацией вологодского масла. Переезд в Горицы (120 км). Размещение',
          'День 3: Завтрак. Экскурсия в Кириллов — Кирилло-Белозерский монастырь XV века (один из крупнейших в России). Переезд в Ферапонтово (20 км) — Ферапонтов монастырь с фресками Дионисия (объект ЮНЕСКО). Обед. Отправление в обратный путь. Прибытие поздним вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отелях 3★ (2 ночи)',
          'Питание: 2 завтрака + 3 обеда',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты во все музеи и монастыри',
          'Дегустация вологодского масла',
          'Посещение музея кружева',
          'Страховка от несчастного случая'
        ]
      },
      { 
        days: 2, 
        price: 12790, 
        description: 'Легендарная Русь — классический маршрут',
        cities: ['Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5a8ec40b-0eec-4a51-b187-31c5e454f747.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ],
        program: [
          'День 1 (07:45): Встреча группы. Отправление. Переезд в Переславль-Залесский (140 км). Обзорная экскурсия — Спасо-Преображенский собор XII века, Горицкий монастырь, Плещеево озеро. Обед в кафе города. Переезд в Ростов Великий (60 км). Экскурсия по Ростовскому Кремлю — Успенский собор, звонница с знаменитыми ростовскими колоколами, переходы по крепостным стенам. Переезд в Ярославль (55 км). Размещение в гостинице 3★',
          'День 2: Завтрак в гостинице. Обзорная экскурсия по Ярославлю — исторический центр (объект ЮНЕСКО), набережная Волги, церковь Ильи Пророка XVII века с уникальными фресками, Спасо-Преображенский монастырь. Переезд в Кострому (85 км). Обед. Экскурсия — Ипатьевский монастырь (колыбель династии Романовых), Троицкий собор, Музей деревянного зодчества. Отправление в обратный путь. Прибытие поздним вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отеле 3★ (1 ночь)',
          'Питание: 1 завтрак + 2 обеда',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты в музеи и храмы',
          'Прогулка по крепостным стенам Ростовского Кремля',
          'Страховка от несчастного случая'
        ]
      },
      { 
        days: 4, 
        price: 28990, 
        description: 'Большое Золотое кольцо',
        cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома', 'Иваново', 'Суздаль', 'Владимир'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5a8ec40b-0eec-4a51-b187-31c5e454f747.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg'
        ],
        program: [
          'День 1: Отправление. Переезд в Сергиев Посад (70 км). Экскурсия по Троице-Сергиевой Лавре — главный монастырь России, Троицкий собор, мощи Сергия Радонежского. Обед. Переезд в Переславль-Залесский. Экскурсия — Спасо-Преображенский собор, Плещеево озеро. Переезд в Ростов Великий. Размещение в гостинице 3★',
          'День 2: Завтрак. Экскурсия по Ростовскому Кремлю. Переезд в Ярославль (55 км). Обзорная экскурсия — исторический центр ЮНЕСКО, церковь Ильи Пророка, Спасо-Преображенский монастырь. Обед. Переезд в Кострому (85 км). Экскурсия — Ипатьевский монастырь, Сусанинская площадь. Размещение в гостинице',
          'День 3: Завтрак. Музей деревянного зодчества. Переезд в Иваново (110 км). Экскурсия — город невест, музей ситца. Обед. Переезд в Суздаль (80 км). Экскурсия — Суздальский Кремль, Спасо-Евфимиев монастырь, концерт колокольных звонов. Размещение',
          'День 4: Завтрак. Музей деревянного зодчества, Покровский монастырь. Переезд во Владимир (40 км). Обзорная экскурсия — Золотые ворота, Успенский собор с фресками Андрея Рублева, Дмитриевский собор. Обед. Отправление в обратный путь. Прибытие вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отелях 3★ (3 ночи)',
          'Питание: 3 завтрака + 4 обеда',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты во все музеи, храмы и монастыри',
          'Концерт колокольных звонов в Суздале',
          'Посещение Троице-Сергиевой Лавры',
          'Страховка от несчастного случая'
        ]
      },
      { 
        days: 5, 
        price: 35990, 
        description: 'Великое княжество — расширенный тур',
        cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома', 'Плёс', 'Иваново', 'Суздаль', 'Владимир', 'Боголюбово'],
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5a8ec40b-0eec-4a51-b187-31c5e454f747.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f254d1a8-6f27-459a-b985-a5fee03783c6.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg'
        ],
        program: [
          'День 1: Отправление в Сергиев Посад (70 км). Экскурсия по Троице-Сергиевой Лавре — главная святыня России. Обед. Переезд в Переславль-Залесский (60 км). Экскурсия — Спасо-Преображенский собор XII века, Горицкий монастырь. Переезд в Ростов Великий (60 км). Размещение в гостинице 3★',
          'День 2: Завтрак. Экскурсия по Ростовскому Кремлю — Успенский собор, звонница, крепостные стены. Переезд в Ярославль (55 км). Обзорная экскурсия — исторический центр ЮНЕСКО, Спасо-Преображенский монастырь, церковь Ильи Пророка. Обед. Размещение в гостинице',
          'День 3: Завтрак. Переезд в Кострому (85 км). Экскурсия — Ипатьевский монастырь, Музей деревянного зодчества. Обед. Переезд в Плёс (70 км) — живописный город художников, дом-музей Левитана. Переезд в Иваново (70 км). Размещение',
          'День 4: Завтрак. Экскурсия по Иваново — город невест, музей ситца. Переезд в Суздаль (80 км). Обед. Обзорная экскурсия — Суздальский Кремль, Рождественский собор, Спасо-Евфимиев монастырь с концертом колокольных звонов. Музей деревянного зодчества. Размещение',
          'День 5: Завтрак. Покровский монастырь. Переезд в Боголюбово (35 км) — церковь Покрова на Нерли (объект ЮНЕСКО). Переезд во Владимир (10 км). Обзорная экскурсия — Золотые ворота, Успенский собор с фресками Рублева, Дмитриевский собор. Обед. Отправление в обратный путь. Прибытие вечером'
        ],
        included: [
          'Трансфер на комфортабельном автобусе',
          'Проживание в отелях 3★ (4 ночи)',
          'Питание: 4 завтрака + 5 обедов',
          'Экскурсионное обслуживание с гидом',
          'Входные билеты во все музеи, храмы и монастыри',
          'Концерт колокольных звонов в Суздале',
          'Посещение Троице-Сергиевой Лавры',
          'Посещение дома-музея Левитана в Плёсе',
          'Страховка от несчастного случая'
        ]
      }
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
    cities: ['Углич', 'Ярославль', 'Кострома', 'Плёс', 'Нижний Новгород'],
    program: [
      'День 1: Посадка на теплоход. Встреча группы. Отправление вечером',
      'День 2: Прибытие в Углич. Береговая экскурсия — Кремль, церковь Димитрия на Крови',
      'День 3: Ярославль — Спасо-Преображенский монастырь, набережная Волги',
      'День 4: Кострома — Ипатьевский монастырь, Сусанинская площадь',
      'День 5: Плёс — живописный город художников, дом-музей Левитана',
      'День 6: Нижний Новгород — Кремль, Чкаловская лестница',
      'День 7: Завершение тура'
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
      { 
        days: 2, 
        price: 28000, 
        description: 'Мини-круиз: Углич',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ca963a76-5faf-473d-a509-c6eb40bab553.jpg'
        ]
      },
      { 
        days: 5, 
        price: 45000, 
        description: 'Стандартная каюта',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ca963a76-5faf-473d-a509-c6eb40bab553.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f254d1a8-6f27-459a-b985-a5fee03783c6.jpg'
        ]
      },
      { 
        days: 6, 
        price: 62000, 
        description: 'Комфорт-каюта с окном',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ca963a76-5faf-473d-a509-c6eb40bab553.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f254d1a8-6f27-459a-b985-a5fee03783c6.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/38cf0f92-fa03-42e6-bb10-a3af45e10f8a.jpg'
        ]
      },
      { 
        days: 7, 
        price: 85000, 
        description: 'Люкс-каюта с балконом',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ca963a76-5faf-473d-a509-c6eb40bab553.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f254d1a8-6f27-459a-b985-a5fee03783c6.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/38cf0f92-fa03-42e6-bb10-a3af45e10f8a.jpg'
        ]
      }
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
      { 
        days: 2, 
        price: 18000, 
        description: 'Выходные: Владимир + Суздаль',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg'
        ]
      },
      { 
        days: 3, 
        price: 25000, 
        description: 'Экспресс: Владимир + Суздаль',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a6e0b3e7-ad02-4fd9-aa84-91f664af28d8.jpg'
        ]
      },
      { 
        days: 5, 
        price: 38000, 
        description: 'Классический: + Ярославль + Кострома',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ]
      },
      { 
        days: 7, 
        price: 52000, 
        description: 'Расширенный: все города + мастер-классы',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ]
      }
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
      { 
        days: 2, 
        price: 16000, 
        description: 'Выходные: Владимир + Суздаль',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg'
        ]
      },
      { 
        days: 4, 
        price: 22000, 
        description: 'Плацкарт: Владимир + Суздаль + Ярославль',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg'
        ]
      },
      { 
        days: 5, 
        price: 29000, 
        description: 'Купе: + Кострома',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ]
      },
      { 
        days: 6, 
        price: 38000, 
        description: 'СВ (люкс): полный маршрут',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ]
      }
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
      { 
        days: 2, 
        price: 28000, 
        description: 'Выходные: Сергиев Посад',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8537533d-5a8a-4cce-8b9c-5846500884a1.jpg'
        ]
      },
      { 
        days: 3, 
        price: 35000, 
        description: 'Сергиев Посад + Суздаль',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8537533d-5a8a-4cce-8b9c-5846500884a1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg'
        ]
      },
      { 
        days: 5, 
        price: 48000, 
        description: '+ Владимир + Дивеево',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8537533d-5a8a-4cce-8b9c-5846500884a1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f8703cd0-e26e-4816-82fe-26244961be44.jpg'
        ]
      },
      { 
        days: 7, 
        price: 62000, 
        description: 'Расширенное паломничество с беседами',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8537533d-5a8a-4cce-8b9c-5846500884a1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/f8703cd0-e26e-4816-82fe-26244961be44.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/de52a775-7a82-42f4-af42-0553bcc6aad1.jpg'
        ]
      }
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
      { 
        days: 2, 
        price: 42000, 
        description: 'Выходные: Суздаль с дегустациями',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4fa40abb-727d-4a21-9984-9d7e8bed58e1.jpg'
        ]
      },
      { 
        days: 3, 
        price: 52000, 
        description: 'Суздаль + Ростов: дегустации и мастер-классы',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4fa40abb-727d-4a21-9984-9d7e8bed58e1.jpg'
        ]
      },
      { 
        days: 4, 
        price: 68000, 
        description: '+ Ярославль: расширенная программа',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4fa40abb-727d-4a21-9984-9d7e8bed58e1.jpg'
        ]
      },
      { 
        days: 5, 
        price: 85000, 
        description: 'Полный гастротур с сомелье',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4fa40abb-727d-4a21-9984-9d7e8bed58e1.jpg'
        ]
      }
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
      { 
        days: 2, 
        price: 42000, 
        description: 'Экспресс-тур: 1-2 города',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg'
        ]
      },
      { 
        days: 4, 
        price: 78000, 
        description: 'Классический VIP: 3-4 города',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/3ef23615-680d-44df-8aac-f752f4f2ca3f.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg'
        ]
      },
      { 
        days: 7, 
        price: 145000, 
        description: 'Премиум: полный маршрут с эксклюзивами',
        photos: [
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8537533d-5a8a-4cce-8b9c-5846500884a1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5a8ec40b-0eec-4a51-b187-31c5e454f747.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/eb9b4058-7da2-4dc7-ac90-ef7e7c0feb39.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/a75abbe0-2a5f-4fbe-ae68-8106dda779fe.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d1f32ae9-b93d-4eb7-9598-6cc2b572def1.jpg',
          'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/4d26f4f8-b3a9-4cd3-88df-58ccce064ad0.jpg'
        ]
      }
    ]
  },
  'vladimir-principality': {
    id: 'vladimir-principality',
    title: 'Владимирское княжество',
    description: 'Классика Золотого кольца за 2 дня',
    fullDescription: 'Компактный и насыщенный тур по двум главным городам Владимирской области. За два дня вы увидите главные достопримечательности Суздаля и Владимира — древние храмы, кремли и музеи. Идеальный вариант для первого знакомства с Золотым кольцом.',
    price: 'от 10 990 ₽',
    duration: '2-4 дня',
    icon: 'Castle',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d76c9079-d4f3-492d-81f2-a1d21a0969fd.jpg',
    features: ['Отели 3★', 'Все музеи включены', 'Небольшая группа', 'Опытный гид'],
    cities: ['Суздаль', 'Владимир', 'Боголюбово'],
    program: [
      'День 1 (08:00): Встреча группы. Отправление в Суздаль (220 км). Обзорная экскурсия — Суздальский Кремль с древними валами XI века, Рождественский собор XIII века с уникальными Золотыми воротами, Архиерейские палаты. Обед в ресторане с видом на Каменку. Прогулка по торговым рядам. Посещение Спасо-Евфимиева монастыря — крепостные стены, Спасо-Преображенский собор с фресками XVI века, звонница с концертом колокольных звонов. Размещение в гостинице 3★. Свободное время',
      'День 2: Завтрак. Посещение Музея деревянного зодчества — уникальный комплекс под открытым небом с деревянными церквями, домами и мельницами XVIII-XIX веков. Переезд в Боголюбово (40 км). Церковь Покрова на Нерли XII века (объект ЮНЕСКО) — один из самых поэтичных храмов древней Руси. Переезд во Владимир (10 км). Обед. Обзорная экскурсия — Золотые ворота XII века, Успенский собор XII века с фресками Андрея Рублева, Дмитриевский собор с белокаменной резьбой. Отправление в обратный путь. Прибытие поздним вечером'
    ],
    included: [
      'Трансфер на комфортабельном автобусе',
      'Проживание в отеле 3★ (1 ночь)',
      'Питание: 1 завтрак + 2 обеда',
      'Экскурсионное обслуживание',
      'Входные билеты во все музеи и храмы',
      'Страховка от несчастного случая'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d76c9079-d4f3-492d-81f2-a1d21a0969fd.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/bcf1e869-b820-47ac-b567-3dd1a406ab49.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/76c0c55d-54f3-45c0-9136-94ddfc93efc0.jpg'
    ],
    options: [
      { 
        days: 2, 
        price: 10990, 
        description: 'Классический (Суздаль + Владимир + Боголюбово)',
        cities: ['Суздаль', 'Владимир', 'Боголюбово'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Суздаль (220 км, 4 часа). Обзорная экскурсия по Суздалю — Суздальский Кремль с Рождественским собором XIII века, Архиерейские палаты, крепостные валы. Обед в трапезной. Посещение Спасо-Евфимиева монастыря — мощные крепостные стены XVI века, Спасо-Преображенский собор с фресками, концерт колокольных звонов. Музей деревянного зодчества под открытым небом — крестьянские избы, церкви, мельницы XVIII-XIX веков. Размещение в гостинице 3★. Свободное время',
          'День 2: Завтрак в гостинице. Прогулка по торговым рядам, посещение Покровского монастыря. Переезд во Владимир (35 км). Обзорная экскурсия — Золотые ворота XII века, Успенский собор с фресками Андрея Рублева, Дмитриевский собор с белокаменной резьбой. Обед. Посещение Боголюбово (10 км) — церковь Покрова на Нерли, шедевр древнерусского зодчества на заливном лугу. Отправление в обратный путь. Прибытие вечером'
        ]
      },
      { 
        days: 3, 
        price: 15800, 
        description: 'Расширенный + Гусь-Хрустальный',
        cities: ['Суздаль', 'Владимир', 'Боголюбово', 'Гусь-Хрустальный'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Суздаль (220 км, 4 часа). Обзорная экскурсия — Суздальский Кремль с Рождественским собором XIII века, Архиерейские палаты. Обед. Спасо-Евфимиев монастырь, концерт колокольных звонов. Музей деревянного зодчества. Размещение в гостинице 3★',
          'День 2: Завтрак. Прогулка по Суздалю, посещение Покровского монастыря. Переезд во Владимир (35 км). Обзорная экскурсия — Золотые ворота, Успенский собор с фресками Андрея Рублева, Дмитриевский собор. Обед. Посещение Боголюбово — церковь Покрова на Нерли. Размещение во Владимире',
          'День 3: Завтрак. Переезд в Гусь-Хрустальный (55 км). Посещение уникального Музея хрусталя в Георгиевском соборе — шедевр архитектора Бенуа, коллекция изделий знаменитого Гусевского хрустального завода XVIII-XX веков. Мастер-класс по росписи стекла. Обед. Посещение фирменного магазина хрусталя. Отправление в обратный путь (250 км). Прибытие вечером'
        ]
      },
      { 
        days: 4, 
        price: 19500, 
        description: 'Максимальный + Муром',
        cities: ['Суздаль', 'Владимир', 'Боголюбово', 'Гусь-Хрустальный', 'Муром'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Суздаль (220 км). Обзорная экскурсия — Суздальский Кремль, Рождественский собор. Обед. Спасо-Евфимиев монастырь, концерт колокольных звонов. Музей деревянного зодчества. Размещение в гостинице 3★',
          'День 2: Завтрак. Покровский монастырь. Переезд во Владимир (35 км). Экскурсия — Золотые ворота, Успенский собор, Дмитриевский собор. Обед. Боголюбово — церковь Покрова на Нерли. Размещение во Владимире',
          'День 3: Завтрак. Переезд в Гусь-Хрустальный (55 км). Музей хрусталя в Георгиевском соборе, мастер-класс по росписи стекла. Обед. Переезд в Муром (120 км). Размещение в гостинице',
          'День 4: Завтрак. Обзорная экскурсия по Мурому — один из древнейших городов Руси (862 год). Спасо-Преображенский монастырь XI века, Троицкий монастырь с мощами святых Петра и Февронии (покровители семьи и брака), Благовещенский монастырь. Обед. Прогулка по набережной Оки. Отправление в обратный путь (280 км). Прибытие вечером'
        ]
      }
    ]
  },
  'oka-to-volga': {
    id: 'oka-to-volga',
    title: 'От Оки до Волги',
    description: 'Путешествие по малым городам России',
    fullDescription: 'Уникальный маршрут, который познакомит вас с менее известными, но не менее интересными городами центральной России. Три дня насыщенной программы — древние города, храмы, музеи и живописная природа между Окой и Волгой.',
    price: 'от 20 390 ₽',
    duration: '3-5 дней',
    icon: 'Waves',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/886a505f-c2e5-4ef4-99c7-d3b572c14291.jpg',
    features: ['Малые города России', 'Отели 3★', 'Рыбные деликатесы', 'Музей хрусталя'],
    cities: ['Коломна', 'Рязань', 'Гусь-Хрустальный', 'Муром', 'Нижний Новгород', 'Гороховец'],
    program: [
      'День 1 (07:30): Встреча группы. Отправление в Коломну (115 км). Обзорная экскурсия по Коломенскому кремлю — Успенский собор, крепостные башни XIV века. Дегустация коломенской пастилы. Переезд в Рязань (195 км). Обед. Экскурсия по Рязанскому кремлю — Успенский собор XVII века, соборная колокольня 83 метра высотой, дворец Олега. Размещение в гостинице. Свободное время',
      'День 2: Завтрак. Переезд в Гусь-Хрустальный (260 км). Посещение уникального Музея хрусталя в Георгиевском соборе — коллекция изделий Гусевского хрустального завода. Переезд в Муром (120 км). Обед. Экскурсия — Спасо-Преображенский монастырь (самый древний на Руси), мощи святых Петра и Февронии (покровители семьи и брака), набережная Оки. Размещение в гостинице',
      'День 3: Завтрак. Переезд в Нижний Новгород (170 км). Обзорная экскурсия — Нижегородский кремль, Чкаловская лестница (560 ступеней), стрелка рек Оки и Волги. Обед. Переезд в Гороховец (85 км) — купеческий город с уникальными каменными палатами XVII века. Отправление в обратный путь. Прибытие поздним вечером'
    ],
    included: [
      'Трансфер на комфортабельном автобусе',
      'Проживание в отелях 3★ (2 ночи)',
      'Питание: 2 завтрака + 3 обеда',
      'Экскурсионное обслуживание',
      'Входные билеты во все музеи',
      'Дегустация пастилы в Коломне',
      'Страховка'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/886a505f-c2e5-4ef4-99c7-d3b572c14291.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/7956c0c8-581f-4ee8-85af-affe2ecfb6fb.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg'
    ],
    options: [
      { 
        days: 2, 
        price: 16500, 
        description: 'Короткий: Коломна + Рязань',
        cities: ['Коломна', 'Рязань'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Коломну (110 км, 2 часа). Обзорная экскурсия по Коломенскому Кремлю — одна из самых мощных крепостей средневековой Руси, Успенский собор XIV века, Соборная площадь, крепостные башни. Дегустация знаменитой коломенской пастилы в музее «Коломенская пастила». Обед. Переезд в Рязань (200 км, 3 часа). Размещение в гостинице 3★. Вечерняя прогулка по набережной Трубежа',
          'День 2: Завтрак в гостинице. Обзорная экскурсия по Рязани — Рязанский Кремль с Успенским собором XVII века (высота 72 метра), Христорождественский собор, колокольня, Дворец Олега. Посещение музея-заповедника. Обед. Посещение музея-усадьбы академика И.П. Павлова. Отправление в обратный путь (200 км). Прибытие вечером'
        ]
      },
      { 
        days: 3, 
        price: 20390, 
        description: 'Классический (весь маршрут)',
        cities: ['Коломна', 'Рязань', 'Константиново'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Коломну (110 км, 2 часа). Обзорная экскурсия по Коломенскому Кремлю — Успенский собор XIV века, Соборная площадь, крепостные башни XVI-XVII веков, Маринкина башня. Обед. Музей «Коломенская пастила» с дегустацией. Посещение музея «Калачная» — дегустация калачей по старинным рецептам. Переезд в Рязань (200 км, 3 часа). Размещение в гостинице 3★',
          'День 2: Завтрак. Обзорная экскурсия — Рязанский Кремль с Успенским собором XVII века, Христорождественский собор, Дворец Олега, Соборная колокольня. Обед. Переезд в село Константиново (50 км) — родина поэта Сергея Есенина. Посещение музея-заповедника — дом-музей поэта, церковь Казанской иконы Божией Матери, литературный музей. Прогулка по живописным берегам Оки. Возвращение в Рязань',
          'День 3: Завтрак. Посещение музея истории воздушно-десантных войск. Свободное время в центре города или посещение торгового городка «Рязанский кремль». Обед. Отправление в обратный путь (200 км). Прибытие вечером'
        ]
      },
      { 
        days: 4, 
        price: 25800, 
        description: 'Расширенный + Касимов',
        cities: ['Коломна', 'Рязань', 'Константиново', 'Касимов'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Коломну (110 км). Обзорная экскурсия по Коломенскому Кремлю. Обед. Музей «Коломенская пастила» с дегустацией, музей «Калачная». Переезд в Рязань (200 км). Размещение в гостинице 3★',
          'День 2: Завтрак. Обзорная экскурсия — Рязанский Кремль с Успенским собором, Христорождественский собор, Дворец Олега. Обед. Переезд в Константиново (50 км) — музей-заповедник С.А. Есенина. Возвращение в Рязань',
          'День 3: Завтрак. Переезд в Касимов (165 км, 3 часа) — уникальный город с татарским наследием. Обзорная экскурсия — минарет XV века (единственный сохранившийся в Центральной России), Вознесенский собор, музей «Русский самовар», Ханская мечеть. Обед с блюдами татарской кухни. Посещение музея колоколов. Размещение в гостинице',
          'День 4: Завтрак. Прогулка по набережной Оки. Посещение Троицкой церкви. Свободное время для покупки сувениров. Обед. Отправление в обратный путь через Рязань (370 км). Прибытие поздним вечером'
        ]
      },
      { 
        days: 5, 
        price: 31200, 
        description: 'Полный + Городец + круиз по Волге',
        cities: ['Коломна', 'Рязань', 'Константиново', 'Касимов', 'Городец', 'Нижний Новгород'],
        program: [
          'День 1 (08:00): Встреча группы. Переезд в Коломну (110 км). Обзорная экскурсия по Коломенскому Кремлю. Обед. Музей «Коломенская пастила», музей «Калачная». Переезд в Рязань (200 км). Размещение в гостинице 3★',
          'День 2: Завтрак. Обзорная экскурсия — Рязанский Кремль с Успенским собором, Дворец Олега. Обед. Переезд в Константиново (50 км) — музей-заповедник С.А. Есенина. Возвращение в Рязань',
          'День 3: Завтрак. Переезд в Касимов (165 км). Обзорная экскурсия — минарет XV века, Вознесенский собор, музей «Русский самовар». Обед с татарской кухней. Переезд в Нижний Новгород (280 км). Размещение в гостинице',
          'День 4: Завтрак. Переезд в Городец (60 км) — один из древнейших городов Поволжья. Обзорная экскурсия — музей «Город мастеров», музей самоваров, музей пряника. Мастер-класс по городецкой росписи. Обед. Прогулка по набережной Волги. Возвращение в Нижний Новгород. Вечерняя прогулка по Нижегородскому Кремлю',
          'День 5: Завтрак. Обзорная экскурсия по Нижнему Новгороду — Кремль XIII века, Чкаловская лестница (560 ступеней), Стрелка (слияние Оки и Волги), канатная дорога через Волгу. Обед. Отправление в обратный путь (420 км). Прибытие поздним вечером'
        ]
      }
    ]
  },
  'holy-rus': {
    id: 'holy-rus',
    title: 'Русь святая — паломнический тур',
    description: 'К мощам святых Петра и Февронии',
    fullDescription: 'Паломнический тур к главным православным святыням — древний Муром, святой источник в Дивеево, Серафимо-Дивеевский монастырь. Это путешествие для тех, кто ищет духовного обогащения и хочет прикоснуться к святыням Русской православной церкви.',
    price: 'от 11 100 ₽',
    duration: '2-4 дня',
    icon: 'Church',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/e98a7b40-ff09-4740-b0c1-6cfa7e9044c9.jpg',
    features: ['Отели 4★', 'Святые места', 'Духовное сопровождение', 'Малая группа'],
    cities: ['Муром', 'Выкса', 'Дивеево'],
    program: [
      'День 1 (07:00): Встреча группы. Отправление в Муром (295 км). Обзорная экскурсия — Спасо-Преображенский монастырь (самый древний в России, основан в 1096 году), поклонение мощам святых благоверных князя Петра и княгини Февронии (покровителей семьи и брака), Троицкий женский монастырь с мощами святых Константина, Михаила и Феодора Муромских. Обед. Свято-Благовещенский монастырь, набережная Оки. Переезд в Выксу (105 км). Размещение в гостинице 4★. Свободное время',
      'День 2: Завтрак. Переезд в Дивеево (70 км) — четвертый удел Божией Матери на земле. Экскурсия по Серафимо-Дивеевскому монастырю — поклонение мощам преподобного Серафима Саровского, посещение Троицкого собора, прохождение Святой Канавки Божией Матери (традиция с чтением 150 раз «Богородице Дево, радуйся»). Обед. Посещение святых источников преподобного Серафима Саровского, источника Казанской иконы Божией Матери (при желании — омовение в купели). Отправление в обратный путь. Прибытие поздним вечером'
    ],
    included: [
      'Трансфер на комфортабельном автобусе',
      'Проживание в отеле 4★ (1 ночь)',
      'Питание: 1 завтрак + 2 обеда (постное меню по желанию)',
      'Экскурсионное обслуживание с православным гидом',
      'Свечи для молитв',
      'Бутилированная вода для набора из святых источников',
      'Страховка'
    ],
    gallery: [
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/e98a7b40-ff09-4740-b0c1-6cfa7e9044c9.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d51a5f3-1205-477e-9ac8-1bc43b02701c.jpg',
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/76c0c55d-54f3-45c0-9136-94ddfc93efc0.jpg'
    ],
    options: [
      { 
        days: 2, 
        price: 11100, 
        description: 'Классический (Муром + Дивеево)',
        cities: ['Дивеево'],
        program: [
          'День 1 (07:00): Встреча группы. Переезд в Дивеево (450 км, 6-7 часов с остановками). Обед в пути. Прибытие в Дивеево. Размещение в паломнической гостинице монастыря. Вечерняя служба в Троицком соборе Серафимо-Дивеевского монастыря. Свободное время',
          'День 2: Ранний подъем. Утренняя служба (по желанию). Завтрак. Обзорная экскурсия по монастырю — Троицкий собор с мощами преподобного Серафима Саровского, Преображенский собор, Казанская церковь. Прохождение Канавки Божией Матери с чтением молитвы «Богородице Дево, радуйся» (150 раз). Посещение святых источников — источник батюшки Серафима, источник Казанской иконы Божией Матери, купание в купелях. Обед. Посещение монастырской лавки. Отправление в обратный путь. Прибытие поздним вечером'
        ]
      },
      { 
        days: 3, 
        price: 16900, 
        description: 'Расширенный + Арзамас (храмы XVII века)',
        cities: ['Дивеево', 'Арзамас'],
        program: [
          'День 1 (07:00): Встреча группы. Переезд в Арзамас (400 км, 6 часов). Обед в пути. Прибытие в Арзамас. Обзорная экскурсия по городу — Воскресенский собор (один из красивейших в России, построен по образцу Исаакиевского), Благовещенская церковь, Соборная площадь. Посещение музея А.П. Гайдара или музея русского патриаршества. Переезд в Дивеево (60 км). Размещение в паломнической гостинице. Вечерняя служба',
          'День 2: Ранний подъем. Утренняя служба (по желанию). Завтрак. Обзорная экскурсия по монастырю — Троицкий собор с мощами преподобного Серафима Саровского, Преображенский собор, Казанская церковь. Прохождение Канавки Божией Матери. Обед. Посещение святых источников, купание в купелях. Свободное время для молитвы',
          'День 3: Завтрак. Посещение музея-дома блаженной Параскевы Дивеевской. Экскурсия в село Суворово — родина адмирала Ушакова (15 км). Обед. Посещение монастырской лавки. Отправление в обратный путь (450 км). Прибытие поздним вечером'
        ]
      },
      { 
        days: 4, 
        price: 21500, 
        description: 'Полный + Саров (с разрешением ФСБ)',
        cities: ['Дивеево', 'Арзамас', 'Саров'],
        program: [
          'День 1 (07:00): Встреча группы. Переезд в Арзамас (400 км). Обед в пути. Обзорная экскурсия — Воскресенский собор, Благовещенская церковь, музей А.П. Гайдара. Переезд в Дивеево (60 км). Размещение в паломнической гостинице. Вечерняя служба в Троицком соборе',
          'День 2: Ранний подъем. Утренняя служба (по желанию). Завтрак. Обзорная экскурсия по монастырю — Троицкий собор с мощами преподобного Серафима Саровского, Преображенский собор с колокольней, Казанская церковь. Прохождение Канавки Божией Матери. Обед. Посещение святых источников, купание в купелях. Свободное время',
          'День 3: Завтрак. Переезд в Саров (70 км) — закрытый город, требуется предварительное оформление пропусков. Посещение Саровской пустыни — место подвигов преподобного Серафима Саровского. Дальняя пустынка — место уединенной молитвы святого. Ближняя пустынка с камнем, на котором молился старец 1000 дней и ночей. Обед. Монастырский музей. Возвращение в Дивеево. Вечерняя служба',
          'День 4: Завтрак. Посещение музея-дома блаженной Параскевы Дивеевской. Экскурсия в село Суворово — усадьба адмирала Ушакова. Обед. Посещение монастырской лавки. Отправление в обратный путь (450 км). Прибытие поздним вечером'
        ]
      }
    ]
  }
};