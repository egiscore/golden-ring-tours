import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ToursSectionProps {
  scrollToSection: (id: string) => void;
}

export default function ToursSection({ scrollToSection }: ToursSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const tours = [
    {
      title: 'Индивидуальный VIP тур',
      description: 'Персональный водитель на автомобиле премиум-класса',
      price: 'от 45 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/44638fd9-ea84-42c6-b566-7672803c8acb.jpg',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Гастрономический тур',
      description: 'С шеф-поваром: традиционная кухня и авторские блюда',
      price: 'от 55 000 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/423cb975-3f13-4e33-9b5a-221f159f5a1d.jpg',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Фототур для профессионалов',
      description: 'Лучшие локации и рассветы с профессиональным фотографом',
      price: 'от 40 000 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    },
    {
      title: 'Духовное путешествие',
      description: 'Монастыри и храмы с духовным наставником',
      price: 'от 38 000 ₽',
      duration: '3-7 дней',
      icon: 'Church',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Наши туры</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый тур разработан индивидуально с учётом ваших интересов и пожеланий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Цена</div>
                    <div className="text-2xl font-bold text-[#D4AF37] font-playfair">{tour.price}</div>
                  </div>
                  <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white">
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-playfair">Забронировать тур</DialogTitle>
                        <DialogDescription>
                          Оставьте заявку, и мы свяжемся с вами в течение часа
                        </DialogDescription>
                      </DialogHeader>
                      <form className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                          <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Иван Иванов" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон</label>
                          <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="email@example.com" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Комментарий</label>
                          <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] min-h-[100px]" placeholder="Расскажите о ваших пожеланиях..." />
                        </div>
                        <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white h-12">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}