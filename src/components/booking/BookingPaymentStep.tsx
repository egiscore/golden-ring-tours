import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface FormData {
  date: string;
  adults: number;
  children: number;
  name: string;
  email: string;
  phone: string;
  comment: string;
  bookingNumber: string;
}

interface Tour {
  title: string;
  image: string;
  duration: string;
  cities: string[];
}

interface BookingPaymentStepProps {
  step: 'payment' | 'success';
  formData: FormData;
  tour: Tour;
  totalPrice: number;
  onPayment: () => Promise<void>;
  onBack: () => void;
  formatDate: (dateString: string) => string;
}

export default function BookingPaymentStep({ 
  step, 
  formData, 
  tour, 
  totalPrice, 
  onPayment,
  onBack,
  formatDate
}: BookingPaymentStepProps) {
  const navigate = useNavigate();

  if (step === 'success') {
    return (
      <div className="p-8 text-center">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Check" size={48} className="text-white" />
        </div>
        
        <h2 className="text-3xl font-bold font-playfair text-[#1A1F2C] mb-4">
          Бронирование подтверждено!
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Ваш номер бронирования: <span className="font-bold text-[#D4AF37]">{formData.bookingNumber}</span>
          <br />
          Детали отправлены на {formData.email}
        </p>

        <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl mb-8 text-left max-w-md mx-auto">
          <h3 className="font-bold text-[#1A1F2C] mb-4">Детали поездки:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Тур:</span>
              <span className="font-semibold">{tour.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Дата:</span>
              <span className="font-semibold">{formatDate(formData.date)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Туристов:</span>
              <span className="font-semibold">{formData.adults + formData.children} чел.</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-600">Стоимость:</span>
              <span className="font-bold text-[#D4AF37]">{totalPrice.toLocaleString('ru-RU')} ₽</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
          >
            На главную
          </Button>
          <Button
            onClick={() => navigate(`/tours/${tour.title}`)}
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white"
          >
            Посмотреть другие туры
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold font-playfair text-[#1A1F2C] mb-6">
          Подтверждение бронирования
        </h2>

        <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl mb-6">
          <h3 className="font-bold text-[#1A1F2C] mb-4">Детали вашего заказа:</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Тур:</span>
              <span className="font-semibold text-right">{tour.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Дата:</span>
              <span className="font-semibold">{formatDate(formData.date)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Туристов:</span>
              <span className="font-semibold">
                {formData.adults} взр. {formData.children > 0 && `+ ${formData.children} дет.`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Контакт:</span>
              <span className="font-semibold">{formData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-semibold">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Телефон:</span>
              <span className="font-semibold">{formData.phone}</span>
            </div>
            {formData.comment && (
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Комментарий:</span>
                <span className="font-semibold text-right max-w-xs">{formData.comment}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border-2 border-[#D4AF37] rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Итого к оплате:</div>
              <div className="text-3xl font-bold text-[#D4AF37]">
                {totalPrice.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            <Icon name="CreditCard" size={48} className="text-[#D4AF37]" />
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Условия бронирования:</p>
              <ul className="space-y-1 text-blue-800">
                <li>• Оплата производится после подтверждения менеджера</li>
                <li>• Бесплатная отмена за 72 часа до начала тура</li>
                <li>• Гарантия возврата средств 100%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1 border-2 border-gray-300 py-6"
          >
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад
          </Button>
          <Button
            onClick={onPayment}
            className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-6 text-lg font-bold hover:shadow-xl transition-all"
          >
            Подтвердить бронирование
            <Icon name="Check" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
