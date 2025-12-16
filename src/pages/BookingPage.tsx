import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { tours } from '@/data/tours';
import DateCalendar from '@/components/booking/DateCalendar';

export default function BookingPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const tour = tourId ? tours[tourId] : null;
  const preselectedDate = searchParams.get('date') || '';

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    date: preselectedDate,
    adults: 2,
    children: 0,
    name: '',
    email: '',
    phone: '',
    comment: '',
    bookingNumber: ''
  });

  useEffect(() => {
    if (!tour) {
      navigate('/');
    }
  }, [tour, navigate]);

  if (!tour) return null;

  const basePrice = tour.options?.[0]?.price || 18000;
  const totalPeople = formData.adults + formData.children;
  const childDiscount = 0.7;
  const totalPrice = (formData.adults * basePrice) + (formData.children * basePrice * childDiscount);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите все обязательные данные',
        variant: 'destructive'
      });
      return;
    }

    setStep('payment');
  };

  const handlePayment = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/5f3c4163-de98-4711-91ae-4c7424870c2f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId: tourId,
          tourTitle: tour.title,
          date: formData.date,
          adults: formData.adults,
          children: formData.children,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          totalPrice: totalPrice,
          comment: formData.comment
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Сохраняем номер бронирования
        setFormData(prev => ({ ...prev, bookingNumber: data.bookingNumber }));
        setStep('success');
        toast({
          title: 'Бронирование подтверждено!',
          description: 'Информация о туре отправлена на вашу почту'
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

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(`/tours/${tourId}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="font-medium">Назад к туру</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">Безопасное соединение</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Tour Info Banner */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-2 border-[#D4AF37]/20">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold font-playfair text-[#1A1F2C] mb-2">
                {tour.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} className="text-[#D4AF37]" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="MapPin" size={16} className="text-[#D4AF37]" />
                  <span>{tour.cities[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        {step !== 'success' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'details' ? 'bg-[#D4AF37] text-white' : 'bg-green-500 text-white'
                }`}>
                  {step === 'details' ? '1' : <Icon name="Check" size={20} />}
                </div>
                <div>
                  <div className="font-semibold text-[#1A1F2C]">Детали поездки</div>
                  <div className="text-xs text-gray-500">Выберите дату и количество</div>
                </div>
              </div>

              <div className="flex-1 h-1 bg-gray-200 mx-4">
                <div className={`h-full transition-all duration-500 ${
                  step === 'payment' ? 'w-full bg-[#D4AF37]' : 'w-0'
                }`} />
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'payment' ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  2
                </div>
                <div>
                  <div className={`font-semibold ${step === 'payment' ? 'text-[#1A1F2C]' : 'text-gray-400'}`}>
                    Бронирование
                  </div>
                  <div className="text-xs text-gray-500">Подтверждение заказа</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {step === 'details' && (
            <form onSubmit={handleSubmitDetails} className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-playfair text-[#1A1F2C] mb-6">
                  Детали бронирования
                </h2>

                {/* Календарь с датами */}
                <DateCalendar 
                  selectedDate={formData.date}
                  onDateSelect={(date) => handleInputChange('date', date)}
                />

                {/* Количество человек */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Взрослые (от 12 лет)
                    </label>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                        className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center"
                      >
                        <Icon name="Minus" size={20} />
                      </button>
                      <span className="text-4xl font-bold text-[#D4AF37] min-w-[4rem] text-center">
                        {formData.adults}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleInputChange('adults', formData.adults + 1)}
                        className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center"
                      >
                        <Icon name="Plus" size={20} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {(formData.adults * basePrice).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Дети (до 12 лет)
                    </label>
                    <div className="flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
                        className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center"
                      >
                        <Icon name="Minus" size={20} />
                      </button>
                      <span className="text-4xl font-bold text-[#D4AF37] min-w-[4rem] text-center">
                        {formData.children}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleInputChange('children', formData.children + 1)}
                        className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center"
                      >
                        <Icon name="Plus" size={20} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {(formData.children * basePrice * childDiscount).toLocaleString('ru-RU')} ₽ (скидка 30%)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-100 pt-8">
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-6">Контактные данные</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (900) 123-45-67"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Комментарий к заказу
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    placeholder="Укажите дополнительные пожелания..."
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Итого */}
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F5F1E8] p-8 rounded-xl border-2 border-[#D4AF37]/30">
                <div className="flex items-center justify-between mb-4 text-lg">
                  <span className="text-gray-700">Взрослые ({formData.adults} чел.)</span>
                  <span className="font-semibold">{(formData.adults * basePrice).toLocaleString('ru-RU')} ₽</span>
                </div>
                {formData.children > 0 && (
                  <div className="flex items-center justify-between mb-4 text-lg">
                    <span className="text-gray-700">Дети ({formData.children} чел.)</span>
                    <span className="font-semibold">{(formData.children * basePrice * childDiscount).toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}
                <div className="border-t-2 border-[#D4AF37]/30 pt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1A1F2C]">Итого:</span>
                  <span className="text-4xl font-bold text-[#D4AF37]">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Общая стоимость для {totalPeople} {totalPeople === 1 ? 'человека' : totalPeople < 5 ? 'человек' : 'человек'}
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Отправить
                <Icon name="Send" size={24} className="ml-3" />
              </Button>
            </form>
          )}

          {step === 'payment' && (
            <div className="p-8 space-y-8">
              <h2 className="text-2xl font-bold font-playfair text-[#1A1F2C]">
                Подтверждение и оплата
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-lg font-bold text-[#1A1F2C] mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={20} className="text-blue-600" />
                  Детали бронирования
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">Дата отправления:</span>
                    <span className="font-semibold capitalize">{formatDate(formData.date)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">Количество туристов:</span>
                    <span className="font-semibold">{totalPeople} чел.</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">Имя:</span>
                    <span className="font-semibold">{formData.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold">{formData.email}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Телефон:</span>
                    <span className="font-semibold">{formData.phone}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F5F1E8] p-8 rounded-xl border-2 border-[#D4AF37]/30">
                <div className="text-center mb-6">
                  <p className="text-gray-700 mb-2 text-lg">Итоговая стоимость:</p>
                  <p className="text-5xl font-bold text-[#D4AF37]">{totalPrice.toLocaleString('ru-RU')} ₽</p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handlePayment}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Check" size={24} className="mr-3" />
                    Подтвердить бронирование
                  </Button>

                  <button
                    onClick={() => setStep('details')}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-lg font-medium"
                  >
                    <Icon name="ArrowLeft" size={20} className="inline mr-2" />
                    Изменить данные
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-600 bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
                <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-800 mb-1">Информация о бронировании</p>
                  <p>После подтверждения мы свяжемся с вами в течение 24 часов для уточнения деталей поездки.</p>
                </div>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="p-8 text-center space-y-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Check" size={48} className="text-green-600" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-3 font-playfair">
                  Бронирование подтверждено!
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  Номер бронирования: <span className="font-mono font-bold text-[#D4AF37]">{formData.bookingNumber || 'GR-******'}</span>
                </p>
                <p className="text-gray-600">
                  Спасибо за выбор нашей компании!
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-8 rounded-xl border-2 border-[#D4AF37]/20 text-left max-w-2xl mx-auto">
                <h3 className="font-bold text-[#1A1F2C] mb-6 text-xl flex items-center gap-2">
                  <Icon name="Info" size={24} className="text-[#D4AF37]" />
                  Что дальше?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1F2C]">Письмо с подтверждением</p>
                      <p className="text-sm text-gray-600">Отправлено на {formData.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1F2C]">Звонок менеджера</p>
                      <p className="text-sm text-gray-600">Мы свяжемся с вами в течение 24 часов</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={20} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1F2C]">Документы для поездки</p>
                      <p className="text-sm text-gray-600">Придут за 3 дня до отправления</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/')}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-6 text-lg"
                >
                  <Icon name="Home" size={20} className="mr-2" />
                  На главную
                </Button>
                <Button
                  onClick={() => navigate(`/tours/${tourId}`)}
                  variant="outline"
                  className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-6 text-lg"
                >
                  <Icon name="Eye" size={20} className="mr-2" />
                  О туре
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}