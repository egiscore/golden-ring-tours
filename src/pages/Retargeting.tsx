import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/modals/BookingModal';

export default function Retargeting() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
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

  const tours = [
    {
      title: 'Индивидуальный VIP тур',
      originalPrice: '42 000 ₽',
      discountPrice: '39 900 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Гастрономический тур',
      originalPrice: '52 000 ₽',
      discountPrice: '49 400 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Фототур для профессионалов',
      originalPrice: '38 000 ₽',
      discountPrice: '36 100 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-primary/5">
      {/* Hero Section с акцентом на скидку */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80')] bg-cover bg-center opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Специальное предложение баннер */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-8 animate-pulse">
              <Icon name="Sparkles" size={20} />
              <span className="font-semibold">Специальное предложение только для вас</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Скидка 5%<br />на любой тур
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Вы почти приняли решение. Мы дарим вам дополнительную скидку, 
              чтобы ваше путешествие стало еще выгоднее
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
              onClick={() => setIsBookingOpen(true)}
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

                <h3 className="text-2xl font-bold mb-3">{tour.title}</h3>
                <p className="text-muted-foreground mb-4">{tour.duration}</p>

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
                  onClick={() => setIsBookingOpen(true)}
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
                icon: 'Users',
                title: 'Мало мест',
                description: 'На ближайшие даты осталось всего 3 места'
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
                  tour: 'VIP тур',
                  text: 'Увидела рекламу и решила воспользоваться скидкой. Не пожалела ни секунды! Организация на высшем уровне.',
                  rating: 5
                },
                {
                  name: 'Дмитрий Соколов',
                  tour: 'Гастрономический тур',
                  text: 'Скидка была приятным бонусом, но главное — впечатления! Это было незабываемо.',
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
      />
    </div>
  );
}
