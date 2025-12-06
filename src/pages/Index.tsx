import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeRoute, setActiveRoute] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const tours = [
    {
      title: 'Индивидуальный VIP тур',
      description: 'Персональный водитель на автомобиле премиум-класса',
      price: 'от 45 000 ₽',
      duration: '2-7 дней',
      icon: 'Crown',
      image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80',
      features: ['Mercedes-Benz S-Class', 'Личный гид-историк', 'Проживание 5★', 'Трансферы включены']
    },
    {
      title: 'Гастрономический тур',
      description: 'С шеф-поваром: традиционная кухня и авторские блюда',
      price: 'от 55 000 ₽',
      duration: '3-5 дней',
      icon: 'ChefHat',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      features: ['Мастер-классы от шефа', 'Дегустации вин', 'Посещение ферм', 'Эксклюзивные рестораны']
    },
    {
      title: 'Фототур для профессионалов',
      description: 'Лучшие локации и рассветы с профессиональным фотографом',
      price: 'от 40 000 ₽',
      duration: '4-6 дней',
      icon: 'Camera',
      image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&q=80',
      features: ['Фотограф-эксперт', 'Секретные локации', 'Индивидуальный маршрут', 'Обработка фото']
    },
    {
      title: 'Духовное путешествие',
      description: 'Монастыри и храмы с духовным наставником',
      price: 'от 38 000 ₽',
      duration: '3-7 дней',
      icon: 'Church',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
      features: ['Духовный наставник', 'Беседы с настоятелями', 'Участие в службах', 'Паломнические места']
    }
  ];

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

  const gallery = [
    { 
      title: 'Суздальский кремль', 
      category: 'Архитектура',
      image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80'
    },
    { 
      title: 'Церковь Покрова на Нерли', 
      category: 'Храмы',
      image: 'https://images.unsplash.com/photo-1581263477258-beb6efad31a9?w=800&q=80'
    },
    { 
      title: 'Ярославль, набережная', 
      category: 'Города',
      image: 'https://images.unsplash.com/photo-1564181091-1f18b0b3e5ad?w=800&q=80'
    },
    { 
      title: 'Троице-Сергиева Лавра', 
      category: 'Монастыри',
      image: 'https://images.unsplash.com/photo-1580670931013-bb0506a9e08b?w=800&q=80'
    },
    { 
      title: 'Владимирские соборы', 
      category: 'Архитектура',
      image: 'https://images.unsplash.com/photo-1597250699910-6eef50da52f5?w=800&q=80'
    },
    { 
      title: 'Ростовский кремль', 
      category: 'Памятники',
      image: 'https://images.unsplash.com/photo-1589655524737-8c951f52d3c8?w=800&q=80'
    }
  ];

  const faqs = [
    {
      q: 'Что входит в стоимость VIP тура?',
      a: 'Автомобиль премиум-класса с водителем, проживание в отелях 5★, услуги персонального гида, все трансферы, входные билеты в музеи и достопримечательности, страховка.'
    },
    {
      q: 'Можно ли изменить маршрут тура?',
      a: 'Да, все наши туры полностью индивидуальные. Мы составим маршрут специально под ваши пожелания и интересы.'
    },
    {
      q: 'Какие автомобили используются?',
      a: 'Mercedes-Benz S-Class, BMW 7 серии, Audi A8 или аналогичные премиум автомобили в идеальном состоянии с профессиональными водителями.'
    },
    {
      q: 'Сколько человек в группе?',
      a: 'Это исключительно индивидуальные туры. Только вы, ваши спутники и персональный гид. Никаких групп.'
    },
    {
      q: 'Как забронировать тур?',
      a: 'Заполните форму обратной связи или позвоните нам. Мы обсудим детали, составим программу и забронируем тур на удобные даты.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
              <Icon name="Crown" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-[#1A1F2C] font-playfair">
              Золотое Кольцо
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Туры</button>
            <button onClick={() => scrollToSection('routes')} className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Маршруты</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Галерея</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Контакты</button>
          </div>
          <a href="tel:+74951234567" className="flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] transition-colors font-semibold">
            <Icon name="Phone" size={18} />
            <span className="hidden lg:inline">+7 (495) 123-45-67</span>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1600&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Icon name="Award" size={20} className="text-[#D4AF37]" />
              <span className="text-sm font-medium">Премиум туры по историческим местам России</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-playfair leading-tight">
              Путешествие<br />по <span className="text-[#D4AF37]">Золотому кольцу</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Откройте величие древних русских городов в комфорте автомобиля премиум-класса с персональным гидом
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => scrollToSection('tours')} size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg px-10 py-7 font-semibold shadow-2xl hover:shadow-[#D4AF37]/50 transition-all hover:scale-105">
                Подобрать тур
                <Icon name="ArrowRight" size={22} className="ml-3" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg px-10 py-7 backdrop-blur-sm bg-white/10">
                <Icon name="Play" size={22} className="mr-3" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Car', title: 'Премиум авто', desc: 'Mercedes, BMW, Audi' },
              { icon: 'User', title: 'Личный гид', desc: 'Эксперт-историк' },
              { icon: 'Hotel', title: 'Отели 5★', desc: 'Лучшие гостиницы' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная страховка' }
            ].map((feature, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-2xl mb-4">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
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
                            <Input type="text" placeholder="Иван Иванов" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Телефон</label>
                            <Input type="tel" placeholder="+7 (999) 123-45-67" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Email</label>
                            <Input type="email" placeholder="email@example.com" />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Комментарий</label>
                            <Textarea placeholder="Расскажите о ваших пожеланиях..." className="min-h-[100px]" />
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

      {/* Routes Section */}
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

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {routes.map((route, index) => (
              <button
                key={index}
                onClick={() => setActiveRoute(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeRoute === index
                    ? 'bg-[#D4AF37] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {route.name}
              </button>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto shadow-xl border-0">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-playfair text-[#1A1F2C]">{routes[activeRoute].name}</h3>
                    <p className="text-gray-600">{routes[activeRoute].duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 bg-[#D4AF37]/5 p-4 rounded-lg border-l-4 border-[#D4AF37]">
                  {routes[activeRoute].highlights}
                </p>
              </div>

              <div className="space-y-3">
                {routes[activeRoute].cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#D4AF37]/5 transition-colors">
                    <div className="w-8 h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#1A1F2C]">{city}</div>
                    </div>
                    <Icon name="ChevronRight" className="text-gray-400" size={20} />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button onClick={() => scrollToSection('contact')} className="flex-1 bg-[#D4AF37] hover:bg-[#B8941F] text-white h-12">
                  Заказать этот маршрут
                </Button>
                <Button variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white">
                  <Icon name="Download" size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-[#F5F1E8] to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Camera" size={18} className="text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#D4AF37]">Фотогалерея</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Красота Золотого кольца</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Взгляните на величественную архитектуру древних русских городов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm font-semibold text-[#D4AF37] mb-1">{item.category}</div>
                    <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Icon name="HelpCircle" size={18} className="text-[#D4AF37]" />
              <span className="text-sm font-semibold text-[#D4AF37]">Ответы на вопросы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Всё, что нужно знать о наших турах
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#D4AF37] transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full mb-4">
                <Icon name="MessageCircle" size={18} className="text-[#D4AF37]" />
                <span className="text-sm font-semibold text-[#D4AF37]">Свяжитесь с нами</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Начните своё путешествие</h2>
              <p className="text-lg text-gray-600">
                Заполните форму, и мы свяжемся с вами в течение часа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Ваше имя</label>
                    <Input type="text" placeholder="Иван Иванов" className="h-12 border-gray-300 focus:border-[#D4AF37]" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" className="h-12 border-gray-300 focus:border-[#D4AF37]" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Email</label>
                    <Input type="email" placeholder="email@example.com" className="h-12 border-gray-300 focus:border-[#D4AF37]" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Сообщение</label>
                    <Textarea placeholder="Расскажите о ваших пожеланиях..." className="min-h-[120px] border-gray-300 focus:border-[#D4AF37]" />
                  </div>
                  <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white h-14 text-lg font-semibold">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#1A1F2C]">Телефон</h3>
                      <a href="tel:+74951234567" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold text-lg">
                        +7 (495) 123-45-67
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#1A1F2C]">Email</h3>
                      <a href="mailto:info@goldring-tours.ru" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold">
                        info@goldring-tours.ru
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Ответим в течение часа</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-[#1A1F2C]">Офис</h3>
                      <p className="text-gray-700">г. Москва, Красная площадь, д. 1</p>
                      <p className="text-gray-600 text-sm mt-1">Пн-Пт: 10:00-19:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                <Icon name="Crown" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold font-playfair">Золотое Кольцо</span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2024 Золотое Кольцо. Все права защищены.</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
