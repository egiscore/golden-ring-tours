import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
  selectedDate?: string;
  basePrice: number;
}

export default function TourBookingModal({ 
  isOpen, 
  onClose, 
  tourTitle, 
  selectedDate,
  basePrice 
}: TourBookingModalProps) {
  const { toast } = useToast();
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    date: selectedDate || '',
    adults: 2,
    children: 0,
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  if (!isOpen) return null;

  const totalPeople = formData.adults + formData.children;
  const childDiscount = 0.7; // Детский билет 70% от взрослого
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

  const handlePayment = () => {
    // Здесь будет интеграция с платежной системой
    setTimeout(() => {
      setStep('success');
      toast({
        title: 'Бронирование подтверждено!',
        description: 'Информация о туре отправлена на вашу почту'
      });
    }, 1500);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold font-playfair mb-2">
                {step === 'success' ? 'Бронирование успешно!' : 'Бронирование тура'}
              </h2>
              <p className="text-white/90 text-sm">{tourTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Progress */}
          {step !== 'success' && (
            <div className="mt-4 flex items-center gap-2">
              <div className={`flex-1 h-2 rounded-full ${step === 'details' ? 'bg-white' : 'bg-white/30'}`} />
              <div className={`flex-1 h-2 rounded-full ${step === 'payment' ? 'bg-white' : 'bg-white/30'}`} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'details' && (
            <form onSubmit={handleSubmitDetails} className="space-y-6">
              {/* Дата */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Дата отправления *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  required
                />
                {formData.date && (
                  <p className="text-sm text-gray-600 mt-1 capitalize">{formatDate(formData.date)}</p>
                )}
              </div>

              {/* Количество человек */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Взрослые (12+)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('adults', Math.max(1, formData.adults - 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <Icon name="Minus" size={18} />
                    </button>
                    <span className="text-2xl font-bold text-[#1A1F2C] min-w-[3rem] text-center">
                      {formData.adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleInputChange('adults', formData.adults + 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <Icon name="Plus" size={18} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Дети (до 12 лет)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('children', Math.max(0, formData.children - 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <Icon name="Minus" size={18} />
                    </button>
                    <span className="text-2xl font-bold text-[#1A1F2C] min-w-[3rem] text-center">
                      {formData.children}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleInputChange('children', formData.children + 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <Icon name="Plus" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Контактные данные */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1A1F2C]">Контактные данные</h3>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Комментарий к заказу
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                    placeholder="Дополнительные пожелания..."
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Итого */}
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F5F1E8] p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Взрослые ({formData.adults} чел.)</span>
                  <span className="font-semibold">{(formData.adults * basePrice).toLocaleString('ru-RU')} ₽</span>
                </div>
                {formData.children > 0 && (
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700">Дети ({formData.children} чел.)</span>
                    <span className="font-semibold">{(formData.children * basePrice * childDiscount).toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}
                <div className="border-t-2 border-gray-300 pt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-[#1A1F2C]">Итого:</span>
                  <span className="text-3xl font-bold text-[#D4AF37]">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg py-6"
              >
                Перейти к оплате
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-lg font-bold text-[#1A1F2C] mb-4">Детали бронирования</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Дата:</span>
                    <span className="font-semibold capitalize">{formatDate(formData.date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Туристов:</span>
                    <span className="font-semibold">{totalPeople} чел.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Имя:</span>
                    <span className="font-semibold">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold">{formData.email}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F5F1E8] p-6 rounded-xl">
                <div className="text-center mb-6">
                  <p className="text-gray-700 mb-2">К оплате:</p>
                  <p className="text-4xl font-bold text-[#D4AF37]">{totalPrice.toLocaleString('ru-RU')} ₽</p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handlePayment}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg py-6"
                  >
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оплатить картой
                  </Button>

                  <button
                    onClick={() => setStep('details')}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Назад к деталям
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-600 bg-gray-50 p-4 rounded-lg">
                <Icon name="Lock" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <p>
                  Безопасная оплата. Ваши данные защищены и не передаются третьим лицам.
                </p>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Check" size={40} className="text-green-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-2">
                  Бронирование подтверждено!
                </h3>
                <p className="text-gray-600">
                  Номер бронирования: <span className="font-mono font-semibold">GR-{Date.now().toString().slice(-6)}</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl border-2 border-[#D4AF37]/20 text-left">
                <h4 className="font-bold text-[#1A1F2C] mb-3">Что дальше?</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="Mail" size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Подтверждение отправлено на {formData.email}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Phone" size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Мы свяжемся с вами в течение 24 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="FileText" size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>Документы для поездки придут за 3 дня до отправления</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={onClose}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white"
              >
                Отлично!
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
