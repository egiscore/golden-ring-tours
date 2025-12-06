import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ToursSection from '@/components/sections/ToursSection';
import RoutesSection from '@/components/sections/RoutesSection';

export default function Index() {
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
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ToursSection scrollToSection={scrollToSection} />
      <RoutesSection scrollToSection={scrollToSection} />

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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <Card key={index} className="group overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-xs font-semibold text-[#D4AF37] mb-1">{item.category}</div>
                    <h3 className="text-lg font-bold font-playfair">{item.title}</h3>
                  </div>
                </div>
              </Card>
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
