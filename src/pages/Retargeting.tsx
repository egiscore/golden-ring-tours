import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import PromoHeroSection from '@/components/promo/PromoHeroSection';
import PromoToursGrid from '@/components/promo/PromoToursGrid';
import PromoBenefitsSection from '@/components/promo/PromoBenefitsSection';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import TourCalendar from '@/components/tour/TourCalendar';

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
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTour, setSelectedTour] = useState<string>('');
  const [userCity, setUserCity] = useState<string>('moscow');
  const [utmParams, setUtmParams] = useState({
    source: '',
    medium: '',
    campaign: '',
    content: '',
    term: ''
  });

  const [formData, setFormData] = useState({
    date: '',
    adults: 2,
    children: 0,
    name: '',
    phone: ''
  });

  const [selectedPrice, setSelectedPrice] = useState<number>(25000);

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
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

  useEffect(() => {
    const detectCity = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const cityParam = urlParams.get('city')?.toLowerCase();
      
      if (cityParam && cityTargeting[cityParam]) {
        setUserCity(cityParam);
      } else {
        try {
          const response = await fetch('https://functions.poehali.dev/d28ecf67-6d03-4d65-94c9-3019a8f77bd3');
          const data = await response.json();
          
          const cityMap: Record<string, string> = {
            'Moscow': 'moscow',
            'Москва': 'moscow',
            'Saint Petersburg': 'spb',
            'Санкт-Петербург': 'spb',
            'Kazan': 'kazan',
            'Казань': 'kazan',
            'Nizhny Novgorod': 'nn',
            'Нижний Новгород': 'nn',
            'Yekaterinburg': 'ekb',
            'Екатеринбург': 'ekb',
            'Novosibirsk': 'nsk',
            'Новосибирск': 'nsk',
            'Krasnodar': 'krasnodar',
            'Краснодар': 'krasnodar',
            'Chelyabinsk': 'chelyabinsk',
            'Челябинск': 'chelyabinsk',
            'Samara': 'samara',
            'Самара': 'samara',
            'Perm': 'perm',
            'Пермь': 'perm'
          };
          
          const detectedCity = cityMap[data.city];
          if (detectedCity && cityTargeting[detectedCity]) {
            setUserCity(detectedCity);
          }
        } catch (error) {
          console.log('Geolocation detection failed, using default city');
        }
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
            city: cityParam || 'auto-detected',
            utm_source: urlParams.get('utm_source') || 'direct',
            utm_medium: urlParams.get('utm_medium') || 'none',
            utm_campaign: urlParams.get('utm_campaign') || 'none'
          }
        });
      }
    };

    detectCity();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const childDiscount = 0.7;
  const totalPrice = (formData.adults * selectedPrice) + (formData.children * selectedPrice * childDiscount);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите все обязательные данные',
        variant: 'destructive'
      });
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/5f3c4163-de98-4711-91ae-4c7424870c2f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: 'promo',
          tourTitle: selectedTour || 'Промо-тур из ' + cityTargeting[userCity].city,
          date: formData.date,
          adults: formData.adults,
          children: formData.children,
          name: formData.name,
          phone: formData.phone,
          totalPrice: totalPrice
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: '✅ Заявка успешно отправлена!',
          description: '🎉 Мы свяжемся с вами в ближайшее время',
          duration: 5000
        });
        setFormData({
          date: '',
          adults: 2,
          children: 0,
          name: '',
          phone: ''
        });
      } else {
        throw new Error(data.error || 'Ошибка при отправке заявки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: error instanceof Error ? error.message : 'Не удалось отправить заявку',
        variant: 'destructive'
      });
    }
  };

  const tours = [
    {
      title: 'Автобусный тур',
      subtitle: 'Комфортное групповое путешествие',
      originalPrice: '19 000 ₽',
      discountPrice: 'от 14 000 ₽',
      duration: '2-5 дней',
      icon: 'Bus',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/77ecd5dd-0bba-4cdf-9891-c20d8146e60c.jpg',
      features: ['Комфортабельный автобус', 'Группа до 30 человек', 'Профессиональный гид', 'Все экскурсии включены']
    },
    {
      title: 'Круиз на лайнере',
      subtitle: 'Путешествие по рекам с комфортом',
      originalPrice: '47 400 ₽',
      discountPrice: 'от 28 000 ₽',
      duration: '2-7 дней',
      icon: 'Ship',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8e68bbc5-7f96-4c41-b6ec-8ac9f0fa5e6f.jpg',
      features: ['Комфортабельная каюта', 'Трёхразовое питание', 'Береговые экскурсии', 'Развлекательная программа']
    },
    {
      title: 'Экскурсионный тур',
      subtitle: 'Насыщенная программа по всем городам',
      originalPrice: '26 300 ₽',
      discountPrice: 'от 18 000 ₽',
      duration: '2-7 дней',
      icon: 'Landmark',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/d76c9079-d4f3-492d-81f2-a1d21a0969fd.jpg',
      features: ['Опытный экскурсовод', 'Входные билеты включены', 'Удобный трансфер', 'Посещение музеев и храмов']
    },
    {
      title: 'Тур на поезде',
      subtitle: 'Комфортабельное путешествие между городами',
      originalPrice: '23 200 ₽',
      discountPrice: 'от 16 000 ₽',
      duration: '2-6 дней',
      icon: 'Train',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/dc11c82c-f1f7-4790-a687-b4eded4a846e.jpg',
      features: ['Билеты на поезд включены', 'Трансфер на вокзалы', 'Гид в каждом городе', 'Проживание в отелях 3-4★']
    },
    {
      title: 'Духовное путешествие',
      subtitle: 'Паломничество с духовным наставником',
      originalPrice: '36 850 ₽',
      discountPrice: 'от 28 000 ₽',
      duration: '2-7 дней',
      icon: 'Church',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/c5e3e6c0-5fd8-4d88-a42c-9d86e96cc3e0.jpg',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
    },
    {
      title: 'Гастрономический тур',
      subtitle: 'Вкусы древней Руси',
      originalPrice: '54 800 ₽',
      discountPrice: 'от 42 000 ₽',
      duration: '2-5 дней',
      icon: 'ChefHat',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/c9d45f13-78c7-4e55-9d43-efd3f32f0d77.jpg',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Индивидуальный VIP тур',
      subtitle: 'Золотое Кольцо в премиум-формате',
      originalPrice: '44 200 ₽',
      discountPrice: 'от 42 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/7c52ac05-edf1-4eb2-84be-41cb33bf10c5.jpg',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Фототур для профессионалов',
      subtitle: 'Золотые купола в объективе',
      originalPrice: '40 000 ₽',
      discountPrice: 'от 28 000 ₽',
      duration: '2-6 дней',
      icon: 'Camera',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/30e268dd-0545-460d-9268-507a25bcbe7b.jpg',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      
      <PromoHeroSection 
        userCity={userCity}
        cityTargeting={cityTargeting}
        timeLeft={timeLeft}
        utmParams={utmParams}
        onBookingClick={() => scrollToSection('booking-form')}
      />

      <PromoToursGrid 
        tours={tours} 
        userCity={userCity}
        cityTargeting={cityTargeting}
        utmParams={utmParams}
        onBookingClick={(tour) => {
          setSelectedTour(tour);
          scrollToSection('booking-form');
        }} 
      />

      <PromoBenefitsSection 
        userCity={userCity}
        cityTargeting={cityTargeting}
        timeLeft={timeLeft}
        onBookingClick={() => scrollToSection('booking-form')}
      />

      <section id="booking-form" className="py-16 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#D4AF37]/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
                  <Icon name="Sparkles" size={18} className="text-[#D4AF37]" />
                  <span className="text-sm font-semibold text-[#D4AF37]">Специальное предложение</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#1A1F2C] mb-2">
                  Бесплатный предзаказ
                </h2>
                <p className="text-gray-600">
                  Забронируйте тур без предоплаты — мы свяжемся с вами за 15 минут
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <TourCalendar onDateSelect={(date, price) => {
                  handleInputChange('date', date);
                  setSelectedPrice(price);
                }} />

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Взрослые
                    </label>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                        className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                      >
                        −
                      </button>
                      <span className="text-2xl font-bold text-[#1A1F2C] w-10 text-center">
                        {formData.adults}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleInputChange('adults', Math.min(10, formData.adults + 1))}
                        className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Дети
                    </label>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
                        className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                      >
                        −
                      </button>
                      <span className="text-2xl font-bold text-[#1A1F2C] w-10 text-center">
                        {formData.children}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleInputChange('children', Math.min(10, formData.children + 1))}
                        className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-xl p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-medium">Детские билеты:</span>
                    <span className="text-[#D4AF37] font-bold">-30%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Телефон (придет сообщение) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">Базовая стоимость:</span>
                    <span className="font-semibold"><span className="text-xs text-gray-500">от</span> {totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#1A1F2C]">Итого:</span>
                      <span className="text-2xl font-bold text-[#D4AF37]">
                        {totalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-6 rounded-xl text-lg font-bold hover:shadow-xl transition-all"
                >
                  Получить бронь
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">или быстрая заявка</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/79099322226?text=${encodeURIComponent(`Здравствуйте! Хочу забронировать тур из ${cityTargeting[userCity].city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 py-5 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl"
                  >
                    <Icon name="MessageCircle" size={28} />
                    <span className="text-sm">WhatsApp</span>
                  </a>

                  <a
                    href={`https://t.me/+79099322226?text=${encodeURIComponent(`Здравствуйте! Хочу забронировать тур из ${cityTargeting[userCity].city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 py-5 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl"
                  >
                    <Icon name="Send" size={28} />
                    <span className="text-sm">Telegram</span>
                  </a>
                </div>

                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <Icon name="Shield" size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p>
                    Нажимая кнопку, вы соглашаетесь с условиями бронирования
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}