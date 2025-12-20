import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import TourCalendar from '@/components/tour/TourCalendar';

interface TourBookingFormProps {
  tourId?: string;
  tourTitle?: string;
  defaultPrice?: number;
  selectedPrice?: number;
}

export default function TourBookingForm({ tourId, tourTitle, defaultPrice = 18000, selectedPrice: externalSelectedPrice }: TourBookingFormProps) {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    date: '',
    adults: 2,
    children: 0,
    name: '',
    phone: ''
  });

  const [selectedPrice, setSelectedPrice] = useState<number>(defaultPrice);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (externalSelectedPrice) {
      setSelectedPrice(externalSelectedPrice);
    }
  }, [externalSelectedPrice]);

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

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/5f3c4163-de98-4711-91ae-4c7424870c2f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: tourId,
          tourTitle: tourTitle,
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
          title: '✅ Заявка успешно отправлена!',
          description: '🎉 Мы свяжемся с вами в ближайшее время',
          duration: 5000
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-[#D4AF37]/20">
      <h3 className="text-xl sm:text-2xl font-bold font-playfair text-[#1A1F2C] mb-4 sm:mb-6">Бесплатный предзаказ</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <TourCalendar 
          selectedPrice={selectedPrice}
          onDateSelect={(date, price) => {
            handleInputChange('date', date);
            setSelectedPrice(price);
          }} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Взрослые
            </label>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                className="w-11 h-11 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg flex-shrink-0"
              >
                −
              </button>
              <span className="text-2xl font-bold text-[#1A1F2C] min-w-[3rem] text-center">
                {formData.adults}
              </span>
              <button
                type="button"
                onClick={() => handleInputChange('adults', Math.min(10, formData.adults + 1))}
                className="w-11 h-11 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg flex-shrink-0"
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
                className="w-11 h-11 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg flex-shrink-0"
              >
                −
              </button>
              <span className="text-2xl font-bold text-[#1A1F2C] min-w-[3rem] text-center">
                {formData.children}
              </span>
              <button
                type="button"
                onClick={() => handleInputChange('children', Math.min(10, formData.children + 1))}
                className="w-11 h-11 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-lg flex-shrink-0"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-xl p-3 sm:p-4">
          <div className="flex items-center justify-between text-sm sm:text-base">
            <span className="text-gray-700 font-medium">Скидка на детские билеты:</span>
            <span className="text-[#D4AF37] font-bold">-30%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ваше имя *
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
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Телефон *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 rounded-xl border-2 border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm sm:text-base">Взрослые ({formData.adults}):</span>
            <span className="font-semibold text-sm sm:text-base">{(formData.adults * selectedPrice).toLocaleString('ru-RU')} ₽</span>
          </div>
          {formData.children > 0 && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm sm:text-base">Дети ({formData.children}):</span>
              <span className="font-semibold text-sm sm:text-base">{(formData.children * selectedPrice * childDiscount).toLocaleString('ru-RU')} ₽</span>
            </div>
          )}
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
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-4 sm:py-6 rounded-xl text-base sm:text-lg font-bold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </>
          )}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-2 bg-white text-gray-500">или свяжитесь быстро</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={`https://wa.me/79255693984?text=Здравствуйте! Интересует тур "${tourTitle || 'Экскурсия'}". ${formData.date ? `Дата: ${formData.date}` : ''} Взрослых: ${formData.adults}, детей: ${formData.children}. Примерная стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all font-semibold text-sm shadow-md"
          >
            <Icon name="MessageCircle" size={18} />
            WhatsApp
          </a>
          
          <a
            href={`https://t.me/+79255693984?text=Здравствуйте! Интересует тур "${tourTitle || 'Экскурсия'}". ${formData.date ? `Дата: ${formData.date}` : ''} Взрослых: ${formData.adults}, детей: ${formData.children}. Примерная стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0088cc] text-white rounded-xl hover:bg-[#0077bb] transition-all font-semibold text-sm shadow-md"
          >
            <Icon name="Send" size={18} />
            Telegram
          </a>
        </div>

        <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
          <Icon name="Shield" size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
          <p>
            Нажимая кнопку, вы соглашаетесь с условиями бронирования. 
            Данные защищены по стандарту SSL.
          </p>
        </div>
      </form>
    </div>
  );
}