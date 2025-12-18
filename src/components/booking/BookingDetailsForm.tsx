import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import DateCalendar from '@/components/booking/DateCalendar';

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

interface BookingDetailsFormProps {
  formData: FormData;
  onInputChange: (field: string, value: string | number) => void;
  onSubmit: (e: React.FormEvent) => void;
  totalPrice: number;
}

export default function BookingDetailsForm({ 
  formData, 
  onInputChange, 
  onSubmit, 
  totalPrice 
}: BookingDetailsFormProps) {
  return (
    <form onSubmit={onSubmit} className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-playfair text-[#1A1F2C] mb-6">
          Детали бронирования
        </h2>

        <DateCalendar 
          selectedDate={formData.date}
          onDateSelect={(date) => onInputChange('date', date)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 sm:p-6 rounded-xl border-2 border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
              Взрослые (от 12 лет)
            </label>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onInputChange('adults', Math.max(1, formData.adults - 1))}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-xl shadow-md flex-shrink-0"
              >
                −
              </button>
              <span className="text-2xl sm:text-3xl font-bold text-[#1A1F2C] min-w-[3rem] text-center">
                {formData.adults}
              </span>
              <button
                type="button"
                onClick={() => onInputChange('adults', Math.min(10, formData.adults + 1))}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-xl shadow-md flex-shrink-0"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-4 sm:p-6 rounded-xl border-2 border-gray-200">
            <label className="block text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
              Дети (до 12 лет)
            </label>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onInputChange('children', Math.max(0, formData.children - 1))}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-xl shadow-md flex-shrink-0"
              >
                −
              </button>
              <span className="text-2xl sm:text-3xl font-bold text-[#1A1F2C] min-w-[3rem] text-center">
                {formData.children}
              </span>
              <button
                type="button"
                onClick={() => onInputChange('children', Math.min(10, formData.children + 1))}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all font-bold text-xl shadow-md flex-shrink-0"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Скидка на детские билеты:</span>
            <span className="text-[#D4AF37] font-bold text-lg">-30%</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold font-playfair text-[#1A1F2C] mb-6">
          Контактная информация
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Полное имя *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => onInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="Иван Иванов"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="example@mail.com"
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
              onChange={(e) => onInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Комментарий (необязательно)
            </label>
            <textarea
              value={formData.comment}
              onChange={(e) => onInputChange('comment', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              rows={4}
              placeholder="Особые пожелания или вопросы..."
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-200 pt-6">
        <div className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-xl mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Базовая стоимость:</span>
            <span className="font-semibold">{totalPrice.toLocaleString('ru-RU')} ₽</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Налоги и сборы:</span>
            <span className="font-semibold text-green-600">Включены</span>
          </div>
          <div className="border-t-2 border-gray-200 pt-4 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[#1A1F2C]">Итого к оплате:</span>
              <span className="text-3xl font-bold text-[#D4AF37]">
                {totalPrice.toLocaleString('ru-RU')} ₽
              </span>
            </div>
          </div>
        </div>

        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white py-6 rounded-xl text-lg font-bold hover:shadow-xl transition-all"
        >Отправить</Button>

        <div className="mt-4 flex items-start gap-3 text-sm text-gray-600">
          <Icon name="Shield" size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
          <p>
            Нажимая кнопку, вы соглашаетесь с условиями бронирования. 
            Данные защищены по стандарту SSL.
          </p>
        </div>
      </div>
    </form>
  );
}