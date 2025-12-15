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
    },
    {
      id: 'photo',
      title: 'Фототур для профессионалов',
      description: 'Секретные локации и профессиональный опыт',
      price: 'от 38 000 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/137ede6c-dc37-4b47-b2cd-d84877bec21e.jpg',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    }
  ];

  return (
    <section id="tours" className="py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Sparkles" size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#D4AF37]">Эксклюзивные предложения</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Выберите свой формат путешествия</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Каждый тур — это уникальный опыт.</strong> Мы создадим программу специально под вас, учитывая все пожелания
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl">
            <Icon name="MapPin" size={20} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Бронирование тура возможно из любого города России
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 bg-white">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Icon name={tour.icon} className="text-[#D4AF37]" size={24} />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-[#1A1F2C]">{tour.title}</CardTitle>
                <CardDescription className="text-gray-600">{tour.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {tour.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon name="Check" size={16} className="text-[#D4AF37] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Цена</div>
                      <div className="text-lg font-bold text-[#D4AF37] font-playfair">{tour.price}</div>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all"
                    onClick={() => {
                      trackEvent('view_tour_details', tour.title);
                      navigate(`/tours/${tour.id}`);
                    }}
                  >
                    <Icon name="Eye" size={18} className="mr-2" />
                    Узнать подробнее
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