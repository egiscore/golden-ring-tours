import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface ToursSectionProps {
  scrollToSection: (id: string) => void;
}

interface Tour {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  image: string;
  features: string[];
}

export default function ToursSection({ scrollToSection }: ToursSectionProps) {
  const navigate = useNavigate();

  const tours: Tour[] = [
    {
      id: 'new-year',
      title: 'Новогодний тур',
      description: 'Встретьте Новый год в древних русских городах',
      price: 'от 35 000 ₽',
      duration: '3-4 дня',
      icon: 'Sparkles',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/15e3304b-db9a-480b-a61e-6ee77149ce73.jpg',
      features: ['Новогодний банкет', 'Праздничная программа', 'Экскурсии по заснеженным городам', 'Подарки от Деда Мороза']
    },
    {
      id: 'bus-tour',
      title: 'Автобусный тур',
      description: 'Комфортное групповое путешествие с экскурсоводом',
      price: 'от 18 000 ₽',
      duration: '3-5 дней',
      icon: 'Bus',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg',
      features: ['Комфортабельный автобус', 'Группа до 30 человек', 'Профессиональный гид', 'Все экскурсии включены']
    },
    {
      id: 'cruise',
      title: 'Круиз на лайнере',
      description: 'Путешествие по рекам с комфортом плавучего отеля',
      price: 'от 45 000 ₽',
      duration: '5-7 дней',
      icon: 'Ship',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/1b97c2c0-0ad1-437b-9db1-3cd5463aaa87.jpg',
      features: ['Комфортабельная каюта', 'Трёхразовое питание', 'Береговые экскурсии', 'Развлекательная программа']
    },
    {
      id: 'excursion',
      title: 'Экскурсионный тур',
      description: 'Насыщенная программа по всем достопримечательностям',
      price: 'от 25 000 ₽',
      duration: '3-7 дней',
      icon: 'Landmark',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ccdac298-26df-4d81-81b5-44b72f445867.jpg',
      features: ['Опытный экскурсовод', 'Входные билеты включены', 'Удобный трансфер', 'Посещение музеев и храмов']
    },
    {
      id: 'train',
      title: 'Тур на поезде',
      description: 'Путешествие на комфортабельном поезде между городами',
      price: 'от 22 000 ₽',
      duration: '4-6 дней',
      icon: 'Train',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/699f480c-aa9b-427a-a4eb-a910c87d3ec1.jpg',
      features: ['Билеты на поезд включены', 'Трансфер на вокзалы', 'Гид в каждом городе', 'Проживание в отелях 3-4★']
    },
    {
      id: 'spiritual',
      title: 'Духовное путешествие',
      description: 'Паломничество с духовным наставником',
      price: 'от 35 000 ₽',
      duration: '3-7 дней',
      icon: 'Church',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d51a5f3-1205-477e-9ac8-1bc43b02701c.jpg',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
    },
    {
      id: 'gastro',
      title: 'Гастрономический тур',
      description: 'Авторские блюда и лучшие вина региона',
      price: 'от 52 000 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/8d3d5500-3428-4cd0-b7db-19e5836a3c42.jpg',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      id: 'vip',
      title: 'Индивидуальный VIP тур',
      description: 'Максимальный комфорт и полное погружение в историю',
      price: 'от 42 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/cd2d6549-1f39-42b9-a01d-b1f2c1b08c8c.jpg',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    }
  ];

  return (
    <section id="tours" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#D4AF37]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Icon name="Sparkles" size={16} className="text-[#D4AF37] sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm font-semibold text-[#D4AF37]">Эксклюзивные предложения</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-playfair text-[#1A1F2C] px-4">Выберите свой формат путешествия</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            <strong>Каждый тур — это уникальный опыт.</strong> Мы создадим программу специально под вас, учитывая все пожелания
          </p>
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 sm:gap-3 bg-blue-50 border border-blue-200 px-3 sm:px-6 py-2 sm:py-3 rounded-xl">
            <Icon name="MapPin" size={16} className="text-blue-600 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-blue-700">
              Бронирование тура из любого города России
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {tours.map((tour, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border-0 bg-white">
              <div 
                className="relative h-48 sm:h-56 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/tours/${tour.id}`)}
              >
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#D4AF37] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {tour.duration}
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                    <Icon name={tour.icon} className="text-[#D4AF37]" size={20} />
                  </div>
                </div>
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-playfair text-[#1A1F2C]">{tour.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">{tour.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {tour.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                      <Icon name="Check" size={14} className="text-[#D4AF37] flex-shrink-0 sm:w-4 sm:h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Цена</div>
                      <div className="text-base sm:text-lg font-bold text-[#D4AF37] font-playfair">{tour.price}</div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all text-sm sm:text-base py-2 sm:py-2.5 h-auto"
                    onClick={() => navigate(`/tours/${tour.id}`)}
                  >
                    <Icon name="Eye" size={16} className="mr-2 sm:w-[18px] sm:h-[18px]" />
                    Посмотреть тур
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


    </section>
  );
}