import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TourDate {
  date: string;
  availableSeats: number;
  price: number;
}

interface TourCalendarProps {
  onDateSelect: (date: string) => void;
}

export default function TourCalendar({ onDateSelect }: TourCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Генерируем даты на ближайшие 3 месяца
  const generateDates = (): TourDate[] => {
    const dates: TourDate[] = [];
    const today = new Date();
    
    // Даты отправления по выходным
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Только пятницы и субботы
      if (date.getDay() === 5 || date.getDay() === 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          availableSeats: Math.floor(Math.random() * 20) + 5,
          price: 18000 + Math.floor(Math.random() * 10000)
        });
      }
    }
    
    return dates.slice(0, 12); // Показываем 12 ближайших дат
  };

  const [dates] = useState<TourDate[]>(generateDates());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('ru-RU', { month: 'long' });
    const weekday = date.toLocaleDateString('ru-RU', { weekday: 'short' });
    return { day, month, weekday };
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <section className="my-8 sm:my-12 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-playfair text-[#1A1F2C] flex items-center gap-2 sm:gap-3">
        <Icon name="Calendar" className="text-[#D4AF37]" size={24} />
        Даты отправления
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {dates.map((tourDate) => {
          const { day, month, weekday } = formatDate(tourDate.date);
          const isSelected = selectedDate === tourDate.date;
          const isLowSeats = tourDate.availableSeats < 10;

          return (
            <button
              key={tourDate.date}
              onClick={() => handleDateClick(tourDate.date)}
              className={`
                relative p-4 rounded-xl border-2 transition-all text-left
                ${isSelected 
                  ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 shadow-lg' 
                  : 'border-gray-200 bg-white hover:border-[#D4AF37]/50 hover:shadow-md'
                }
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-[#1A1F2C]">{day}</div>
                  <div className="text-sm text-gray-600 capitalize">{month}</div>
                  <div className="text-xs text-gray-500 capitalize">{weekday}</div>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Мест:</span>
                  <span className={`text-sm font-semibold ${isLowSeats ? 'text-orange-600' : 'text-green-600'}`}>
                    {tourDate.availableSeats}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Цена:</span>
                  <span className="text-lg font-bold text-[#D4AF37]">
                    от {tourDate.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              {isLowSeats && (
                <div className="mt-3 px-2 py-1 bg-orange-100 border border-orange-300 rounded text-xs text-orange-700 text-center">
                  Осталось мало мест!
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <div className="flex items-start gap-2 sm:gap-3">
          <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
          <div className="text-xs sm:text-sm text-blue-700">
            <p className="mb-2">
              <strong>Отправление по расписанию:</strong> Пятница и суббота каждую неделю
            </p>
            <p>
              Выберите удобную дату, и мы свяжемся с вами для подтверждения бронирования
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
