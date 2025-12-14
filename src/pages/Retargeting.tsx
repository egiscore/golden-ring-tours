import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/modals/BookingModal';

const cityTargeting: Record<string, {
  city: string;
  offer: string;
  benefit: string;
  transport: string;
  icon: string;
}> = {
  'moscow': {
    city: 'Москвы',
    offer: 'Выезд от вашего дома на Mercedes',
    benefit: 'Без пробок — выезд в 6:00',
    transport: 'Комфортный трансфер',
    icon: 'Car'
  },
  'spb': {
    city: 'Санкт-Петербурга',
    offer: 'Прямой поезд + трансфер в подарок',
    benefit: 'Встретим на вокзале',
    transport: 'Сапсан до Владимира',
    icon: 'Train'
  },
  'kazan': {
    city: 'Казани',
    offer: 'Авиаперелет включен в стоимость',
    benefit: 'Летим вместе',
    transport: 'Прямой рейс',
    icon: 'Plane'
  },
  'nn': {
    city: 'Нижнего Новгорода',
    offer: 'Всего 2 часа в пути на авто',
    benefit: 'Самый близкий маршрут',
    transport: 'Комфортный автобус',
    icon: 'Bus'
  },
  'ekb': {
    city: 'Екатеринбурга',
    offer: 'Перелет + 2 ночи в отеле в подарок',
    benefit: 'Максимум комфорта',
    transport: 'Прямой рейс 2ч',
    icon: 'Plane'
  },
  'nsk': {
    city: 'Новосибирска',
    offer: 'Перелет туда-обратно включен',
    benefit: 'Летим бизнес-классом',
    transport: 'Удобный рейс',
    icon: 'Plane'
  },
  'krasnodar': {
    city: 'Краснодара',
    offer: 'Авиаперелет + встреча в аэропорту',
    benefit: 'VIP-зал в подарок',
    transport: 'Прямой рейс',
    icon: 'Plane'
  },
  'chelyabinsk': {
    city: 'Челябинска',
    offer: 'Перелет включен + экскурсия в подарок',
    benefit: 'Летим с комфортом',
    transport: 'Удобный рейс',
    icon: 'Plane'
  },
  'samara': {
    city: 'Самары',
    offer: 'Скоростной поезд + трансфер',
    benefit: 'Близко и удобно',
    transport: 'Ласточка 4ч',
    icon: 'Train'
  },
  'perm': {
    city: 'Перми',
    offer: 'Авиабилеты туда-обратно в подарок',
    benefit: 'Полный пакет',
    transport: 'Прямой рейс',
    icon: 'Plane'
  }
};

export default function Retargeting() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [userCity, setUserCity] = useState<string>('moscow');
  const [utmParams, setUtmParams] = useState({
    source: '',
    medium: '',
    campaign: '',
    content: '',
    term: ''
  });
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const detectCity = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const cityParam = urlParams.get('city')?.toLowerCase();
      
      if (cityParam && cityTargeting[cityParam]) {
        setUserCity(cityParam);
      }

      setUtmParams({
        source: urlParams.get('utm_source') || '',
        medium: urlParams.get('utm_medium') || '',
        campaign: urlParams.get('utm_campaign') || '',
        content: urlParams.get('utm_content') || '',
        term: urlParams.get('utm_term') || ''
      });

      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(105829530, 'hit', window.location.href, {
          params: {
            city: cityParam || 'unknown',
            utm_source: urlParams.get('utm_source') || 'direct',
            utm_medium: urlParams.get('utm_medium') || 'none',
            utm_campaign: urlParams.get('utm_campaign') || 'none'
          }
        });
      }
    };

    detectCity();

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tours = [
    {
      title: 'Индивидуальный VIP тур',
      subtitle: 'Золотое Кольцо в премиум-формате',
      originalPrice: '42 000 ₽',
      discountPrice: '39 900 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Все города маршрута']
    },
    {
      title: 'Гастрономический тур',
      subtitle: 'Вкусы древней Руси',
      originalPrice: '52 000 ₽',
      discountPrice: '49 400 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      features: ['Мастер-классы от шефа', 'Дегустации местных вин', 'Посещение ферм', 'Аутентичные рестораны']
    },
    {
      title: 'Фототур для профессионалов',
      subtitle: 'Золотые купола в объективе',
      originalPrice: '38 000 ₽',
      discountPrice: '36 100 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      features: ['Фотограф-эксперт', 'Лучшие локации', 'Рассветы и закаты', 'Обработка фото']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-primary/5">
      {/* Hero Section с акцентом на скидку */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/dc11c82c-f1f7-4790-a687-b4eded4a846e.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Логотип / Бренд */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Church" size={40} className="text-[#D4AF37]" />
              <h2 className="text-3xl font-bold text-[#1A1F2C]">Золотое Кольцо</h2>
            </div>

            {/* Специальное предложение баннер с геотаргетингом */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border-2 border-[#D4AF37] px-6 py-3 rounded-full mb-6 animate-pulse">
              <Icon name="MapPin" size={20} className="text-[#D4AF37]" />
              <span className="font-semibold text-[#1A1F2C]">Специально для жителей {cityTargeting[userCity].city}</span>
            </div>

            {/* Персональное преимущество */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 px-6 py-4 rounded-2xl mb-8 shadow-lg">
              <Icon name={cityTargeting[userCity].icon} size={24} className="text-green-600" />
              <div className="text-left">
                <p className="font-bold text-green-900">{cityTargeting[userCity].offer}</p>
                <p className="text-sm text-green-700">{cityTargeting[userCity].benefit}</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#B8941F] to-[#D4AF37] bg-clip-text text-transparent">
              Скидка 5%<br />на туры по Золотому Кольцу
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto">
              Откройте для себя древние города России с комфортом премиум-класса из {cityTargeting[userCity].city}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Владимир • Суздаль • Ярославль • Ростов Великий • Кострома • Иваново • Сергиев Посад • Переславль-Залесский
            </p>

            {/* Таймер обратного отсчета */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 mb-8 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-4">Предложение действует:</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground mt-1">часов</div>
                </div>
                <div className="text-4xl font-bold text-primary">:</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground mt-1">минут</div>
                </div>
                <div className="text-4xl font-bold text-primary">:</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-muted-foreground mt-1">секунд</div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="text-lg px-12 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(105829530, 'reachGoal', 'click_get_discount', {
                    city: userCity,
                    utm_source: utmParams.source || 'direct',
                    utm_campaign: utmParams.campaign || 'none'
                  });
                }
                setIsBookingOpen(true);
              }}
            >
              <Icon name="Percent" className="mr-2" size={24} />
              Получить скидку 5%
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              🔥 Уже 127 человек воспользовались предложением сегодня
            </p>
          </div>
        </div>
      </section>

      {/* Туры со скидкой */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Выберите тур со скидкой 5%
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Все наши премиальные туры теперь доступны с персональной скидкой
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tours.map((tour, index) => (
              <div 
                key={index}
                className="group bg-card border-2 border-border hover:border-primary rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={tour.icon} size={32} className="text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                <p className="text-sm text-[#D4AF37] font-medium mb-3">{tour.subtitle}</p>
                <p className="text-muted-foreground mb-2">{tour.duration}</p>
                
                {/* Транспорт из города */}
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
                  <Icon name={cityTargeting[userCity].icon} size={16} className="text-green-600" />
                  <span className="text-xs text-green-700 font-medium">{cityTargeting[userCity].transport}</span>
                </div>

                {/* Цена со скидкой */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-primary">{tour.discountPrice}</span>
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      <Icon name="Percent" size={14} />
                      -5%
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground line-through">
                    Обычная цена: {tour.originalPrice}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tour.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105829530, 'reachGoal', 'click_book_tour', {
                        city: userCity,
                        tour: tour.title,
                        price: tour.discountPrice,
                        utm_source: utmParams.source || 'direct',
                        utm_campaign: utmParams.campaign || 'none'
                      });
                    }
                    setIsBookingOpen(true);
                  }}
                >
                  Забронировать со скидкой
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему стоит забронировать сейчас */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Почему нужно забронировать сейчас?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Clock',
                title: 'Ограниченное время',
                description: 'Скидка 5% действует только 24 часа'
              },
              {
                icon: cityTargeting[userCity].icon,
                title: cityTargeting[userCity].offer,
                description: cityTargeting[userCity].benefit
              },
              {
                icon: 'Shield',
                title: 'Без риска',
                description: 'Бесплатная отмена за 14 дней до тура'
              },
              {
                icon: 'Star',
                title: 'Лучшая цена',
                description: 'Гарантируем лучшую цену или вернем разницу'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Социальное доказательство */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Что говорят наши клиенты
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Екатерина Волкова',
                  tour: 'VIP тур по Золотому Кольцу',
                  text: 'Увидела рекламу и решила воспользоваться скидкой. Суздаль и Владимир поразили красотой! Организация на высшем уровне.',
                  rating: 5
                },
                {
                  name: 'Дмитрий Соколов',
                  tour: 'Гастрономический тур',
                  text: 'Скидка была приятным бонусом, но главное — узнал настоящую русскую кухню! Впечатления от древних городов незабываемы.',
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="bg-card border rounded-2xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.tour}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Не упустите свою скидку 5%
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Забронируйте тур прямо сейчас и начните готовиться к незабываемому путешествию
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-12 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
            onClick={() => setIsBookingOpen(true)}
          >
            <Icon name="Gift" className="mr-2" size={24} />
            Забронировать со скидкой
          </Button>

          <p className="text-sm mt-6 opacity-75">
            ⏰ Предложение истекает через {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </p>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        source="промо (скидка 5%)"
      />
    </div>
  );
}