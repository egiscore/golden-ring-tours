import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface RoutesSectionProps {
  scrollToSection: (id: string) => void;
}

export default function RoutesSection({ scrollToSection }: RoutesSectionProps) {
  const [activeRoute, setActiveRoute] = useState(0);

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
      cities: ['Москва', 'Сергиев Посад', 'Переславль', 'Ростов', 'Ярославль', 'Кострома', 'Плёс', 'Иваново', 'Суздаль', 'Владимир', 'Боголюбово'],
      duration: '10 дней',
      highlights: 'Полное погружение с дополнительными городами'
    }
  ];

  return (
    <section id="routes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Map" size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">Проверенные маршруты</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Маршруты туров</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите готовый маршрут или создадим индивидуальный специально для вас
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {routes.map((route, index) => (
              <Button
                key={index}
                onClick={() => setActiveRoute(index)}
                variant={activeRoute === index ? 'default' : 'outline'}
                className={activeRoute === index ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-white' : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'}
              >
                {route.name}
              </Button>
            ))}
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8941F]/10">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-playfair text-[#1A1F2C]">
                  {routes[activeRoute].name}
                </CardTitle>
                <div className="flex items-center gap-4 text-[#D4AF37]">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    <span className="font-semibold">{routes[activeRoute].duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span className="font-semibold">{routes[activeRoute].cities.length} городов</span>
                  </div>
                </div>
              </div>
              <CardDescription className="text-base mt-2">
                {routes[activeRoute].highlights}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {routes[activeRoute].cities.map((city, index) => (
                  <>
                    <div 
                      key={`city-${index}`}
                      className="flex items-center gap-3 bg-white border-2 border-[#D4AF37] text-[#1A1F2C] rounded-lg px-6 py-3 font-semibold shadow-sm hover:shadow-lg transition-all"
                    >
                      <span className="text-lg">{city}</span>
                    </div>
                    {index < routes[activeRoute].cities.length - 1 && (
                      <Icon 
                        key={`arrow-${index}`}
                        name="ArrowRight" 
                        size={24} 
                        className="text-[#D4AF37] hidden md:block animate-arrow" 
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    )}
                  </>
                ))}
              </div>
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg h-14 mt-8"
              >
                Забронировать этот маршрут
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
