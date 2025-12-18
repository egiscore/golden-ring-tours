import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface RoutesSectionProps {
  scrollToSection: (id: string) => void;
}

export default function RoutesSection({ scrollToSection }: RoutesSectionProps) {
  const [activeRoute, setActiveRoute] = useState(0);
  const [viewCount, setViewCount] = useState(143);

  useEffect(() => {
    const viewInterval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);

    return () => {
      clearInterval(viewInterval);
    };
  }, []);

  const routes = [
    {
      name: 'Классический маршрут',
      cities: ['Сергиев Посад', 'Переславль-Залесский', 'Ростов Великий', 'Ярославль', 'Кострома', 'Иваново', 'Суздаль', 'Владимир'],
      duration: '7 дней',
      highlights: 'Все главные города Золотого кольца'
    },
    {
      name: 'Экспресс-маршрут',
      cities: ['Сергиев Посад', 'Суздаль', 'Владимир'],
      duration: '3 дня',
      highlights: 'Самые значимые достопримечательности'
    },
    {
      name: 'Расширенный маршрут',
      cities: ['Сергиев Посад', 'Переславль', 'Ростов', 'Ярославль', 'Кострома', 'Плёс', 'Иваново', 'Суздаль', 'Владимир', 'Боголюбово'],
      duration: '10 дней',
      highlights: 'Полное погружение с дополнительными городами'
    }
  ];

  return (
    <section id="routes" className="py-12 sm:py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#D4AF37]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Icon name="Map" size={16} className="text-[#D4AF37] sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm font-semibold text-[#D4AF37]">Проверенные маршруты</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-playfair text-[#1A1F2C] px-2">Маршруты туров</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Выберите готовый маршрут или создадим индивидуальный специально для вас
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
              <Icon name="Eye" size={16} className="text-blue-600 sm:w-[18px] sm:h-[18px]" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">
                {viewCount} человек смотрят сейчас
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {routes.map((route, index) => (
              <Button
                key={index}
                onClick={() => setActiveRoute(index)}
                variant={activeRoute === index ? 'default' : 'outline'}
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 h-auto ${activeRoute === index ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-white' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}`}
              >
                {route.name}
              </Button>
            ))}
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <CardTitle className="text-lg sm:text-xl md:text-2xl font-playfair text-[#1A1F2C]">
                  {routes[activeRoute].name}
                </CardTitle>
                <div className="flex items-center gap-3 sm:gap-4 text-[#D4AF37] flex-wrap">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Icon name="Clock" size={16} className="sm:w-5 sm:h-5" />
                    <span className="font-semibold text-sm sm:text-base">{routes[activeRoute].duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Icon name="MapPin" size={16} className="sm:w-5 sm:h-5" />
                    <span className="font-semibold text-sm sm:text-base">
                      {routes[activeRoute].cities.length} {
                        routes[activeRoute].cities.length === 3 ? 'города' : 
                        routes[activeRoute].cities.length === 1 ? 'город' : 
                        routes[activeRoute].cities.length >= 5 ? 'городов' : 
                        'города'
                      }
                    </span>
                  </div>
                </div>
              </div>
              <CardDescription className="text-sm sm:text-base mt-2">
                {routes[activeRoute].highlights}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {routes[activeRoute].cities.flatMap((city, index) => [
                  <div 
                    key={`city-${index}`}
                    className="flex items-center gap-2 sm:gap-3 bg-white border-2 border-[#D4AF37] text-[#1A1F2C] rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 font-semibold shadow-sm hover:shadow-lg transition-all"
                  >
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">{city}</span>
                  </div>,
                  index < routes[activeRoute].cities.length - 1 ? (
                    <Icon 
                      key={`arrow-${index}`}
                      name="ArrowRight" 
                      size={16} 
                      className="text-[#D4AF37] hidden sm:block animate-arrow sm:w-5 sm:h-5 md:w-6 md:h-6" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  ) : null
                ]).filter(Boolean)}
              </div>
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-sm sm:text-base md:text-lg h-12 sm:h-14 mt-6 sm:mt-8"
              >
                Забронировать этот маршрут
                <Icon name="ArrowRight" size={18} className="ml-2 sm:w-5 sm:h-5" />
              </Button>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-[#D4AF37]/5 via-white to-[#D4AF37]/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mt-8 sm:mt-10 md:mt-12 border-2 border-[#D4AF37]/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 sm:mb-4">
                <Icon name="Sparkles" size={20} className="text-[#D4AF37] sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1F2C] font-playfair">Не подходит ни один маршрут?</h3>
              </div>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-2">
                Создадим <strong>индивидуальный маршрут</strong> специально под ваши интересы и пожелания. 
                Больше храмов? Или музеев? Гастрономия? Природа? Скажите — и мы составим уникальную программу.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg"
                className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white px-4 sm:px-6 py-4 sm:py-6 h-auto text-sm sm:text-base md:text-lg max-w-full"
              >
                <Icon name="Compass" size={18} className="mr-2 shrink-0 sm:w-5 sm:h-5" />
                <span className="whitespace-normal leading-tight">Заказать индивидуальный маршрут</span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                📞 Перезвоним за 15 минут и обсудим детали
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}