import { useState } from 'react';
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
import BenefitsSection from '@/components/sections/BenefitsSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import PopupOffer from '@/components/PopupOffer';
import CallbackButton from '@/components/CallbackButton';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || 'direct';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    
    let sourceInfo = `📍 Страница: главная (контактная форма)\n🎯 Источник: ${utmSource}`;
    if (utmMedium) sourceInfo += ` / ${utmMedium}`;
    if (utmCampaign) sourceInfo += `\n📢 Кампания: ${utmCampaign}`;
    
    const emailValue = formData.get('email') as string;
    
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: emailValue && emailValue.trim() !== '' ? emailValue : null,
      message: `${sourceInfo}\n\n💬 Сообщение: ${formData.get('message') || 'Не указано'}`
    };

    try {
      const response = await fetch('https://functions.poehali.dev/eb6d500d-ad4a-455e-a440-a45f5a6c98d3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      const eventData = {
        timestamp: Date.now(),
        event: 'form_submit',
        city: 'unknown',
        utm_source: utmSource,
        utm_campaign: utmCampaign || 'none',
        utm_medium: utmMedium || 'website'
      };

      const saved = localStorage.getItem('retargeting_conversions');
      const conversions = saved ? JSON.parse(saved) : [];
      conversions.push(eventData);
      localStorage.setItem('retargeting_conversions', JSON.stringify(conversions));

      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(105829530, 'reachGoal', 'form_submit', eventData);
      }

      toast({
        title: '✅ Заявка отправлена!',
        description: 'Мы перезвоним вам в течение 15 минут',
        duration: 5000,
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: '❌ Ошибка',
        description: 'Позвоните нам: +7 (495) 179-74-44',
        variant: 'destructive',
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const gallery = [
    { 
      title: 'Суздальский кремль', 
      category: 'Архитектура',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/1b97c2c0-0ad1-437b-9db1-3cd5463aaa87.jpg'
    },
    { 
      title: 'Церковь Покрова на Нерли', 
      category: 'Храмы',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/9d74460c-799a-473a-a4fa-9d73dc809dbd.jpg'
    },
    { 
      title: 'Ярославль, набережная', 
      category: 'Города',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/5426bb0f-2fbb-490d-ba13-d544d41cce6a.jpg'
    },
    { 
      title: 'Троице-Сергиева Лавра', 
      category: 'Монастыри',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ccdac298-26df-4d81-81b5-44b72f445867.jpg'
    },
    { 
      title: 'Владимирские соборы', 
      category: 'Архитектура',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/699f480c-aa9b-427a-a4eb-a910c87d3ec1.jpg'
    },
    { 
      title: 'Ростовский кремль', 
      category: 'Памятники',
      image: 'https://cdn.poehali.dev/projects/c7fef2ff-49f4-4dfe-aa88-82f2fbf56c64/files/ad1a4a4a-af68-4760-b04d-6716c46c8a69.jpg'
    }
  ];

  const faqs = [
    {
      q: 'Что входит в стоимость тура?',
      a: 'В стоимость включено ВСЁ: автомобиль премиум-класса Mercedes/BMW/Audi с водителем, проживание в отелях 5★, персональный гид-эксперт, все трансферы, входные билеты, полная страховка. Никаких скрытых платежей!'
    },
    {
      q: 'Можно ли изменить программу под себя?',
      a: 'Да! Это главное преимущество наших туров. Мы создаём программу с нуля специально под ваши интересы. Хотите больше архитектуры? Или гастрономии? Скажите — и мы подстроимся под вас.'
    },
    {
      q: 'А если мне что-то не понравится?',
      a: 'У нас гарантия возврата 100% стоимости, если тур не оправдает ожиданий. За 14 лет работы к нам вернулось 98% клиентов. Ваше удовольствие — наша репутация.'
    },
    {
      q: 'Сколько человек в группе?',
      a: 'Никаких групп! Только вы, ваши спутники и личный гид. Это полностью приватное путешествие. Вы не будете ждать опаздывающих туристов или подстраиваться под чужой ритм.'
    },
    {
      q: 'Как быстро можно забронировать?',
      a: 'Оставьте заявку прямо сейчас — мы перезвоним за 15 минут, обсудим детали и забронируем тур. При бронировании до конца месяца — скидка 30%!'
    },
    {
      q: 'Почему вы дороже обычных турагентств?',
      a: 'Потому что мы даём то, чего нет у них: индивидуальную программу, премиум-авто, гида-эксперта только для вас, отели 5★ и полный сервис без компромиссов. Вы платите за качество, а не за количество.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <RoutesSection scrollToSection={scrollToSection} />
      <ToursSection scrollToSection={scrollToSection} />
      <BenefitsSection />
      <SocialProofSection />
      
      {/* Conversion optimization components */}
      <PopupOffer />
      <CallbackButton />
      <ExitIntentPopup />

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Остались вопросы?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              <strong>Мы ответили на самые частые.</strong> Не нашли свой? Позвоните — ответим за минуту!
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-[#1A1F2C]">Готовы увидеть Золотое кольцо?</h2>
              <p className="text-lg text-gray-600">
                <strong>Оставьте заявку сейчас</strong> — мы перезвоним в течение 15 минут и подберём идеальную программу
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/5 to-white rounded-3xl p-2 mb-12">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">-5%</div>
                    <div className="text-sm text-gray-600">При бронировании<br />до 31 декабря</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">Бесплатно</div>
                    <div className="text-sm text-gray-600">Консультация<br />и подбор тура</div>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#D4AF37] font-playfair mb-1">15 мин</div>
                    <div className="text-sm text-gray-600">Время ответа<br />на заявку</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-0 relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  Скидка -30%!
                </div>
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Ваше имя *</label>
                    <Input name="name" type="text" placeholder="Иван Иванов" className="h-12 border-gray-300 focus:border-[#D4AF37]" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Телефон *</label>
                    <Input name="phone" type="tel" placeholder="+7 (999) 123-45-67" className="h-12 border-gray-300 focus:border-[#D4AF37]" required />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Email (необязательно)</label>
                    <Input name="email" type="email" placeholder="email@example.com" className="h-12 border-gray-300 focus:border-[#D4AF37]" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-2 block text-[#1A1F2C]">Сообщение</label>
                    <Textarea name="message" placeholder="Расскажите о ваших пожеланиях..." className="min-h-[120px] border-gray-300 focus:border-[#D4AF37]" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50">
                    {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
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
                      <a href="tel:+74951797444" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold text-xl block mb-1">8 (800) 700-34-98</a>
                      <a href="tel:88007003498" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold text-xl block mb-1">
                        8 (800) 700-34-98
                      </a>
                      <p className="text-gray-600 text-sm">Без выходных, 9:00-21:00</p>
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
                      <a href="mailto:tours@vfs.travel" className="text-[#D4AF37] hover:text-[#B8941F] font-semibold">
                        tours@vfs.travel
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Ответим за 15 минут</p>
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
                      <p className="text-gray-700">г. Москва, Пресненская наб, д. 6с2</p>
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
              <p className="text-gray-400">© 2025 Ви Эф Эс. Реестровый номер туроператора РТО 024501. № 16/24-73-0006521 от 09.12.2024. Все права защищены.</p>
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