import { useState, useEffect } from 'react';
import BookingModal from '@/components/modals/BookingModal';
import CallbackButton from '@/components/CallbackButton';
import PromoHeroSection from '@/components/promo/PromoHeroSection';
import PromoToursGrid from '@/components/promo/PromoToursGrid';
import PromoBenefitsSection from '@/components/promo/PromoBenefitsSection';

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
      title: 'Автобусный тур',
      subtitle: 'Комфортное групповое путешествие',
      originalPrice: '19 000 ₽',
      discountPrice: 'от 18 000 ₽',
      duration: '3-5 дней',
      icon: 'Bus',
      features: ['Комфортабельный автобус', 'Группа до 30 человек', 'Профессиональный гид', 'Все экскурсии включены']
    },
    {
      title: 'Круиз на лайнере',
      subtitle: 'Путешествие по рекам с комфортом',
      originalPrice: '47 400 ₽',
      discountPrice: 'от 45 000 ₽',
      duration: '5-7 дней',
      icon: 'Ship',
      features: ['Комфортабельная каюта', 'Трёхразовое питание', 'Береговые экскурсии', 'Развлекательная программа']
    },
    {
      title: 'Экскурсионный тур',
      subtitle: 'Насыщенная программа по всем городам',
      originalPrice: '26 300 ₽',
      discountPrice: 'от 25 000 ₽',
      duration: '3-7 дней',
      icon: 'Landmark',
      features: ['Опытный экскурсовод', 'Входные билеты включены', 'Удобный трансфер', 'Посещение музеев и храмов']
    },
    {
      title: 'Тур на поезде',
      subtitle: 'Комфортабельное путешествие между городами',
      originalPrice: '23 200 ₽',
      discountPrice: 'от 22 000 ₽',
      duration: '4-6 дней',
      icon: 'Train',
      features: ['Билеты на поезд включены', 'Трансфер на вокзалы', 'Гид в каждом городе', 'Проживание в отелях 3-4★']
    },
    {
      title: 'Духовное путешествие',
      subtitle: 'Паломничество с духовным наставником',
      originalPrice: '36 850 ₽',
      discountPrice: 'от 35 000 ₽',
      duration: '3-7 дней',
      icon: 'Church',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
    },
    {
      title: 'Гастрономический тур',
      subtitle: 'Вкусы древней Руси',
      originalPrice: '54 800 ₽',
      discountPrice: 'от 52 000 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Индивидуальный VIP тур',
      subtitle: 'Золотое Кольцо в премиум-формате',
      originalPrice: '44 200 ₽',
      discountPrice: 'от 42 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Фототур для профессионалов',
      subtitle: 'Золотые купола в объективе',
      originalPrice: '40 000 ₽',
      discountPrice: 'от 38 000 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-primary/5">
      <PromoHeroSection 
        userCity={userCity}
        cityTargeting={cityTargeting}
        timeLeft={timeLeft}
        utmParams={utmParams}
        onBookingClick={() => setIsBookingOpen(true)}
      />

      <PromoToursGrid 
        tours={tours}
        userCity={userCity}
        cityTargeting={cityTargeting}
        utmParams={utmParams}
        onBookingClick={() => setIsBookingOpen(true)}
      />

      <PromoBenefitsSection 
        userCity={userCity}
        cityTargeting={cityTargeting}
        timeLeft={timeLeft}
        onBookingClick={() => setIsBookingOpen(true)}
      />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        source="промо (скидка 5%)"
      />
      
      <CallbackButton />
    </div>
  );
}
