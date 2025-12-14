import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Tour {
  title: string;
  subtitle: string;
  originalPrice: string;
  discountPrice: string;
  duration: string;
  icon: string;
  features: string[];
}

interface PromoToursGridProps {
  tours: Tour[];
  userCity: string;
  cityTargeting: Record<string, {
    city: string;
    offer: string;
    benefit: string;
    transport: string;
    icon: string;
  }>;
  utmParams: {
    source: string;
    medium: string;
    campaign: string;
    content: string;
    term: string;
  };
  onBookingClick: (tourTitle: string) => void;
}

export default function PromoToursGrid({
  tours,
  userCity,
  cityTargeting,
  utmParams,
  onBookingClick
}: PromoToursGridProps) {
  return (
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
              
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
                <Icon name={cityTargeting[userCity].icon} size={16} className="text-green-600" />
                <span className="text-xs text-green-700 font-medium">{cityTargeting[userCity].transport}</span>
              </div>

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
                  onBookingClick(tour.title);
                }}
              >
                Забронировать со скидкой
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}