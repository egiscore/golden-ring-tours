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
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg'
    },
    { 
      title: 'Церковь Покрова на Нерли', 
      category: 'Храмы',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg'
    },
    { 
      title: 'Ярославль, набережная', 
      category: 'Города',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg'
    },
    { 
      title: 'Троице-Сергиева Лавра', 
      category: 'Монастыри',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg'
    },
    { 
      title: 'Владимирские соборы', 
      category: 'Архитектура',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg'
    },
    { 
      title: 'Ростовский кремль', 
      category: 'Памятники',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg'
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
            <a href="#tours" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Туры</a>
            <a href="#routes" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Маршруты</a>
            <a href="#gallery" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Галерея</a>
            <a href="#contact" className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium">Контакты</a>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white font-semibold shadow-lg hover:shadow-xl transition-all">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/12b5362a-7c92-4001-84d6-ae2b39bc0cbc.jpg)`,
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
              <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg px-10 py-7 font-semibold shadow-2xl hover:shadow-[#D4AF37]/50 transition-all hover:scale-105">
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
      <section id="tours" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] mb-6 font-playfair">
              Эксклюзивные <span className="text-[#D4AF37]">туры</span>
            </h2>
            <p className="text-gray-600 text-xl">Каждый тур создан для незабываемых впечатлений и максимального комфорта</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tours.map((tour, i) => (
              <Card key={i} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {tour.duration}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <Icon name={tour.icon} className="text-[#D4AF37]" size={28} />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <CardTitle className="text-2xl mb-3 font-playfair text-[#1A1F2C]">
                    {tour.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6 text-gray-600">
                    {tour.description}
                  </CardDescription>
                  
                  <ul className="space-y-3 mb-6">
                    {tour.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" className="text-[#D4AF37]" size={14} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Стоимость</div>
                      <div className="text-3xl font-bold text-[#D4AF37] font-playfair">
                        {tour.price}
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white font-semibold shadow-lg hover:shadow-xl transition-all px-6">
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-playfair">
                            Бронирование тура
                          </DialogTitle>
                          <DialogDescription>
                            Оставьте заявку, и мы свяжемся с вами в течение часа
                          </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4 mt-4">
                          <Input placeholder="Ваше имя" className="h-12" />
                          <Input type="tel" placeholder="Телефон" className="h-12" />
                          <Input type="email" placeholder="Email" className="h-12" />
                          <Textarea placeholder="Пожелания к туру" rows={4} />
                          <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-semibold h-12">
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
      <section id="routes" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] mb-6 font-playfair">
              Популярные <span className="text-[#D4AF37]">маршруты</span>
            </h2>
            <p className="text-gray-600 text-xl">Выберите готовый маршрут или создадим индивидуальный специально для вас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {routes.map((route, i) => (
              <Card
                key={i}
                className={`cursor-pointer transition-all duration-300 ${
                  activeRoute === i
                    ? 'border-[#D4AF37] shadow-xl scale-105 bg-gradient-to-br from-[#D4AF37]/5 to-transparent'
                    : 'border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-lg'
                }`}
                onClick={() => setActiveRoute(i)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="font-playfair text-xl">{route.name}</CardTitle>
                    <Icon 
                      name={activeRoute === i ? "CheckCircle2" : "Circle"} 
                      className={activeRoute === i ? "text-[#D4AF37]" : "text-gray-300"} 
                      size={24} 
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                    <Icon name="Clock" size={16} />
                    <span>{route.duration}</span>
                  </div>
                  <CardDescription className="text-sm mt-2">
                    {route.highlights}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-[#D4AF37]/30 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-8">
              <h3 className="text-3xl font-bold mb-6 text-[#1A1F2C] font-playfair">
                {routes[activeRoute].name}
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {routes[activeRoute].cities.map((city, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                      <div className="w-7 h-7 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="font-medium text-gray-800">{city}</span>
                    </div>
                    {i < routes[activeRoute].cities.length - 1 && (
                      <Icon name="MoveRight" className="text-[#D4AF37]" size={20} />
                    )}
                  </div>
                ))}
              </div>
              <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white font-semibold shadow-lg hover:shadow-xl transition-all px-8 h-12">
                Забронировать этот маршрут
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] mb-6 font-playfair">
              Галерея <span className="text-[#D4AF37]">впечатлений</span>
            </h2>
            <p className="text-gray-600 text-xl">Красота древних городов в лучших кадрах</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs font-semibold text-[#D4AF37] mb-2 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ZoomIn" className="text-white" size={20} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 h-12 font-semibold">
              Смотреть все фото
              <Icon name="ExternalLink" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] mb-6 font-playfair">
              Частые <span className="text-[#D4AF37]">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#D4AF37] py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] mb-6 font-playfair">
              Свяжитесь <span className="text-[#D4AF37]">с нами</span>
            </h2>
            <p className="text-gray-600 text-xl">Мы ответим в течение часа</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1A1F2C]">Телефон</h3>
                    <p className="text-gray-700 font-medium text-lg">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500 mt-1">Ежедневно 9:00 - 21:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1A1F2C]">Email</h3>
                    <p className="text-gray-700 font-medium">vip@goldring.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1A1F2C]">Офис</h3>
                    <p className="text-gray-700">г. Москва, Красная площадь, 1</p>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-6 border-t border-gray-100">
                  <Button size="icon" className="bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white transition-all w-12 h-12">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button size="icon" className="bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white transition-all w-12 h-12">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button size="icon" className="bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white transition-all w-12 h-12">
                    <Icon name="Instagram" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-5">
                  <Input placeholder="Ваше имя" className="h-12" />
                  <Input type="tel" placeholder="Телефон" className="h-12" />
                  <Input type="email" placeholder="Email" className="h-12" />
                  <Textarea placeholder="Расскажите о ваших пожеланиях" rows={5} />
                  <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                  <Icon name="Crown" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-[#D4AF37] font-playfair">
                  Золотое Кольцо
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Эксклюзивные туры по древним городам России с персональным сервисом премиум-класса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Туры</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Индивидуальные</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Гастрономические</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Фототуры</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Духовные</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Компания</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  vip@goldring.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Красная площадь, 1
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Золотое Кольцо VIP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
