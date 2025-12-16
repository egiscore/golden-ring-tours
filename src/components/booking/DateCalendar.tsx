import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface TourDate {
  date: string;
  availableSeats: number;
  price: number;
}

interface DateCalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

export default function DateCalendar({ selectedDate, onDateSelect }: DateCalendarProps) {
  // Генерируем даты на ближайшие 3 месяца
  const generateDates = (): TourDate[] => {
    const dates: TourDate[] = [];
    const today = new Date();
    
    // Даты отправления по выходным (пятницы и субботы)
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
    const month = date.toLocaleDateString('ru-RU', { month: 'short' });
    const weekday = date.toLocaleDateString('ru-RU', { weekday: 'short' });
    return { day, month, weekday };
  };

  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-gray-700 mb-4">
        Выберите дату отправления *
      </label>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {dates.map((tourDate) => {
          const { day, month, weekday } = formatDate(tourDate.date);
          const isSelected = selectedDate === tourDate.date;
          const isLowSeats = tourDate.availableSeats < 10;

          return (
            <button
              key={tourDate.date}
              type="button"
              onClick={() => onDateSelect(tourDate.date)}
              className={`
                relative p-3 rounded-xl border-2 transition-all text-center
                ${isSelected 
                  ? 'border-[#D4AF37] bg-[#D4AF37] text-white shadow-lg scale-105' 
                  : 'border-gray-200 bg-white hover:border-[#D4AF37] hover:shadow-md'
                }
              `}
            >
              <div className="text-2xl font-bold mb-1">{day}</div>
              <div className="text-xs capitalize mb-1">{month}</div>
              <div className="text-xs capitalize opacity-70">{weekday}</div>
              
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} className="text-white" />
                </div>
              )}
              
              {!isSelected && isLowSeats && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Icon name="Check" size={18} className="text-green-600" />
            <span className="font-medium">
              Выбрана дата: {new Date(selectedDate).toLocaleDateString('ru-RU', { 
                day: 'numeric', 
                month: 'long', 
                weekday: 'long' 
              })}
            </span>
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-orange-500 rounded-full" />
          <span>Мало мест</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="Info" size={14} />
          <span>Отправление по пятницам и субботам</span>
        </div>
      </div>
    </div>
  );
}
