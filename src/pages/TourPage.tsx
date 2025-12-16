import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import TourHero from '@/components/tour/TourHero';
import TourContent from '@/components/tour/TourContent';
import TourSidebar from '@/components/tour/TourSidebar';
import { tours } from '@/data/tours';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import TourCalendar from '@/components/tour/TourCalendar';

export default function TourPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const tour = tourId ? tours[tourId] : null;

  const [formData, setFormData] = useState({
    date: '',
    adults: 2,
    children: 0,
    name: '',
    phone: ''
  });

  const [selectedPrice, setSelectedPrice] = useState<number>(tour?.options?.[0]?.price || 18000);

  useEffect(() => {
    if (!tour) {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  }, [tour, navigate]);

  if (!tour) {
    return null;
  }

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const childDiscount = 0.7;
  const totalPrice = (formData.adults * selectedPrice) + (formData.children * selectedPrice * childDiscount);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.name || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите все обязательные данные',
        variant: 'destructive'
      });
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/5f3c4163-de98-4711-91ae-4c7424870c2f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: tourId,
          tourTitle: tour?.title,
          date: formData.date,
          adults: formData.adults,
          children: formData.children,
          name: formData.name,
          phone: formData.phone,
          totalPrice: totalPrice
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время'
        });
        setFormData({
          date: '',
          adults: 2,
          children: 0,
          name: '',
          phone: ''
        });
      } else {
        throw new Error(data.error || 'Ошибка при отправке заявки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: error instanceof Error ? error.message : 'Не удалось отправить заявку',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      
      <TourHero tour={tour} />

      <div className="w-full px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <TourContent 
              tour={tour} 
              onBookingClick={() => navigate(`/booking/${tourId}`)}
              onDateSelect={(date) => navigate(`/booking/${tourId}?date=${date}`)}
              sidebarContent={
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F5F1E8] p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4 font-playfair text-[#1A1F2C] flex items-center gap-2">
                      <Icon name="Check" className="text-[#D4AF37]" size={24} />
                      Что включено
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="Dot" className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      size="lg"
                      className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                      onClick={() => {
                        const bookingSection = document.getElementById('booking-form');
                        if (bookingSection) {
                          bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Получить бронь
                    </Button>

                    <div className="mt-4 pt-4 border-t border-gray-300">
                      <p className="text-xs text-gray-600 text-center">
                        Программа может быть адаптирована под ваши пожелания
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Нужна консультация?
                        </h4>
                        <p className="text-sm text-blue-700 mb-4">
                          Позвоните нам, и мы ответим на все вопросы о туре
                        </p>
                        <a
                          href="tel:+78007003498"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          8 (800) 700-34-98
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
              bookingForm={
                <section className="w-full" id="booking-form">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#D4AF37]/20">
                    <h3 className="text-2xl font-bold font-playfair text-[#1A1F2C] mb-6">Бесплатный предзаказ</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <TourCalendar onDateSelect={(date, price) => {
                        handleInputChange('date', date);
                        setSelectedPrice(price);
                      }} />

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-gray-200">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Взрослые
                          </label>
                          <div className="flex items-center justify-center gap-3">
                            <button
                              type="button"
                              onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                              className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                            >
                              −
                            </button>
                            <span className="text-2xl font-bold text-[#1A1F2C] w-10 text-center">
                              {formData.adults}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleInputChange('adults', Math.min(10, formData.adults + 1))}
                              className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-gray-200">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Дети
                          </label>
                          <div className="flex items-center justify-center gap-3">
                            <button
                              type="button"
                              onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
                              className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                            >
                              −
                            </button>
                            <span className="text-2xl font-bold text-[#1A1F2C] w-10 text-center">
                              {formData.children}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleInputChange('children', Math.min(10, formData.children + 1))}
                              className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-xl p-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-700 font-medium">Детские билеты:</span>
                          <span className="text-[#D4AF37] font-bold">-30%</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Имя *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
                          placeholder="Иван Иванов"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Телефон (придет сообщение)</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>

                      <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600 text-sm">Базовая стоимость:</span>
                          <span className="font-semibold">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <div className="border-t-2 border-gray-200 pt-3 mt-3">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-[#1A1F2C]">Итого:</span>
                            <span className="text-2xl font-bold text-[#D4AF37]">
                              {totalPrice.toLocaleString('ru-RU')} ₽
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-6 rounded-xl text-lg font-bold hover:shadow-xl transition-all"
                      >Получить бронь</Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">или быстрая заявка</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`https://wa.me/79099322226?text=${encodeURIComponent(`Здравствуйте! Хочу забронировать тур "${tour?.title}"`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center gap-2 py-5 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl"
                        >
                          <Icon name="MessageCircle" size={28} />
                          <span className="text-sm">WhatsApp</span>
                        </a>

                        <a
                          href={`https://t.me/+79099322226?text=${encodeURIComponent(`Здравствуйте! Хочу забронировать тур "${tour?.title}"`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center gap-2 py-5 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-xl font-bold transition-all shadow-md hover:shadow-xl"
                        >
                          <Icon name="Send" size={28} />
                          <span className="text-sm">Telegram</span>
                        </a>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-gray-600">
                        <Icon name="Shield" size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <p>
                          Нажимая кнопку, вы соглашаетесь с условиями бронирования
                        </p>
                      </div>
                    </form>
                  </div>
                </section>
              }
            />
            <TourSidebar 
              tour={tour} 
              onBookingClick={() => {
                const bookingSection = document.getElementById('booking-form');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }} 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}