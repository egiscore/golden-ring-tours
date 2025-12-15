import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import BookingModal from '@/components/modals/BookingModal';

interface Tour {
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
}

const tours: Record<string, Tour> = {
  'bus-tour': {
    id: 'bus-tour',
    title: 'Автобусный тур по Золотому кольцу',
    description: 'Комфортное групповое путешествие с экскурсоводом',
    fullDescription: 'Классический автобусный тур по городам Золотого кольца — это возможность увидеть древние русские города, не беспокоясь о логистике. Вас ждет комфортабельный автобус, профессиональный гид и насыщенная программа.',
    price: 'от 18 000 ₽',
    duration: '3-5 дней',
    icon: 'Bus',
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg',
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
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg'
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
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/1b97c2c0-0ad1-437b-9db1-3cd5463aaa87.jpg',
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
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/1b97c2c0-0ad1-437b-9db1-3cd5463aaa87.jpg'
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
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ccdac298-26df-4d81-81b5-44b72f445867.jpg',
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
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ccdac298-26df-4d81-81b5-44b72f445867.jpg'
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
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/699f480c-aa9b-427a-a4eb-a910c87d3ec1.jpg',
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
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/699f480c-aa9b-427a-a4eb-a910c87d3ec1.jpg'
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
    image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d51a5f3-1205-477e-9ac8-1bc43b02701c.jpg',
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
      'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d51a5f3-1205-477e-9ac8-1bc43b02701c.jpg'
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
    ]
  }
};

export default function TourPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const tour = tourId ? tours[tourId] : null;

  useEffect(() => {
    if (!tour) {
      navigate('/');
    }
  }, [tour, navigate]);

  if (!tour) {
    return null;
  }

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header scrollToSection={scrollToSection} />
      
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37] px-4 py-2 rounded-full mb-4">
              <Icon name={tour.icon} size={20} className="text-white" />
              <span className="text-sm font-semibold text-white">{tour.duration}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-playfair">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">{tour.description}</p>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Icon name="Users" size={18} className="text-white" />
                <span className="text-sm font-semibold text-white">
                  {Math.floor(Math.random() * 15) + 12} человек забронировали за последний месяц
                </span>
              </div>
              <div className="bg-orange-500/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Icon name="Flame" size={18} className="text-white" />
                <span className="text-sm font-semibold text-white">
                  Популярный тур
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-white/80 mb-1">Цена тура</p>
                <p className="text-3xl font-bold text-white font-playfair">{tour.price}</p>
              </div>
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                onClick={() => setIsBookingOpen(true)}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Забронировать тур
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 font-playfair text-[#1A1F2C]">
                  О туре
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {tour.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 font-playfair text-[#1A1F2C] flex items-center gap-3">
                  <Icon name="MapPin" className="text-[#D4AF37]" size={32} />
                  Программа тура
                </h2>
                <div className="space-y-4">
                  {tour.program.map((day, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-[#F5F1E8] rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{day}</p>
                    </div>
                  ))}
                </div>
              </section>

              {tour.cities.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-6 font-playfair text-[#1A1F2C] flex items-center gap-3">
                    <Icon name="Map" className="text-[#D4AF37]" size={32} />
                    Города маршрута
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {tour.cities.map((city, index) => (
                      <div key={index} className="bg-white border-2 border-[#D4AF37] px-4 py-2 rounded-full">
                        <span className="text-[#1A1F2C] font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-3xl font-bold mb-6 font-playfair text-[#1A1F2C] flex items-center gap-3">
                  <Icon name="Quote" className="text-[#D4AF37]" size={32} />
                  Отзывы туристов
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-[#D4AF37]/20">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={18} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "Потрясающий тур! Всё было организовано идеально. Гид очень знающий и увлечённый. Увидели столько красивых мест! Отели комфортные, питание отличное. Спасибо за незабываемые впечатления!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="text-[#D4AF37]" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Елена Михайловна</p>
                        <p className="text-sm text-gray-500">Москва • Сентябрь 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-[#D4AF37]/20">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={18} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "Спасибо за незабываемое путешествие! Особенно понравилось внимание к деталям и комфорт. Всё продумано до мелочей. Рекомендую всем друзьям!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="text-[#D4AF37]" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Дмитрий Козлов</p>
                        <p className="text-sm text-gray-500">Санкт-Петербург • Октябрь 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-[#D4AF37]/20">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" className="text-[#D4AF37] fill-[#D4AF37]" size={18} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "Ездили всей семьёй — все в восторге! Детям особенно понравились интерактивные экскурсии. Гид умел увлечь и взрослых, и детей. Уже планируем следующую поездку с вами!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="text-[#D4AF37]" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">Ольга Соколова</p>
                        <p className="text-sm text-gray-500">Екатеринбург • Ноябрь 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F5F1E8] p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-4 font-playfair text-[#1A1F2C] flex items-center gap-2">
                  <Icon name="Check" className="text-[#D4AF37]" size={24} />
                  Что включено
                </h3>
                <ul className="space-y-3 mb-6">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icon name="Dot" className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Забронировать
                </Button>

                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-xs text-gray-600 text-center">
                    Программа может быть адаптирована под ваши пожелания
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Нужна консультация?
                    </h4>
                    <p className="text-sm text-blue-700 mb-4">
                      Позвоните нам, и мы ответим на все вопросы о туре
                    </p>
                    <a
                      href="tel:+74951797444"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      +7 (495) 179-74-44
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTour={tour.title}
        source={`страница тура - ${tour.id}`}
      />
    </div>
  );
}