import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PromoBenefitsSectionProps {
  userCity: string;
  cityTargeting: Record<string, {
    city: string;
    offer: string;
    benefit: string;
    transport: string;
    icon: string;
  }>;
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  onBookingClick: (tourTitle?: string) => void;
}

export default function PromoBenefitsSection({
  userCity,
  cityTargeting,
  timeLeft,
  onBookingClick
}: PromoBenefitsSectionProps) {
  return (
    <>
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
            onClick={() => onBookingClick('')}
          >
            <Icon name="Gift" className="mr-2" size={24} />
            Забронировать со скидкой
          </Button>

          <p className="text-sm mt-6 opacity-75">
            ⏰ Предложение истекает через {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </p>
        </div>
      </section>
    </>
  );
}