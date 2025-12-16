import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TourDate {
  date: string;
  availableSeats: number;
  price: number;
}

interface TourCalendarProps {
  onDateSelect: (date: string, price: number) => void;
}

export default function TourCalendar({ onDateSelect }: TourCalendarProps) {
  const generateDates = (month: Date): TourDate[] => {
    const dates: TourDate[] = [];
    const today = new Date();
    
    const tourPrices = [10990, 12790, 20390, 21390, 23590, 28990, 35990];
    
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const randomPrice = tourPrices[Math.floor(Math.random() * tourPrices.length)];
      
      dates.push({
        date: date.toISOString().split('T')[0],
        availableSeats: Math.floor(Math.random() * 20) + 5,
        price: randomPrice
      });
    }
    
    return dates;
  };

  const [allDates] = useState<TourDate[]>(generateDates(new Date()));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    if (allDates.length > 0 && !selectedDate) {
      const nearestDate = allDates[0];
      setSelectedDate(nearestDate.date);
      onDateSelect(nearestDate.date, nearestDate.price);
    }
  }, [allDates, selectedDate, onDateSelect]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startDayOfWeek, year, month };
  };

  const { daysInMonth, startDayOfWeek, year, month } = getDaysInMonth(currentMonth);

  const getTourDateInfo = (day: number): TourDate | null => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return allDates.find(td => td.date === dateStr) || null;
  };

  const handleDateClick = (day: number, tourDate: TourDate | null) => {
    if (!tourDate) return;
    setSelectedDate(tourDate.date);
    onDateSelect(tourDate.date, tourDate.price);
  };

  const changeMonth = (delta: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + delta);
    setCurrentMonth(newMonth);
  };

  const monthName = currentMonth.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const emptyDays = Array.from({ length: startDayOfWeek }, (_, i) => i);
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Дата отправления *
      </label>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => changeMonth(-1)}
            className="h-8 w-8 p-0"
          >
            <Icon name="ChevronLeft" size={16} />
          </Button>
          
          <h3 className="text-base font-bold capitalize">{monthName}</h3>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => changeMonth(1)}
            className="h-8 w-8 p-0"
          >
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map(day => (
            <div key={day} className="text-xs font-semibold text-gray-500 text-center py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {emptyDays.map(i => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          
          {monthDays.map(day => {
            const tourDate = getTourDateInfo(day);
            const isSelected = selectedDate === tourDate?.date;
            const isAvailable = tourDate !== null;
            const isLowSeats = tourDate && tourDate.availableSeats < 10;

            return (
              <button
                key={day}
                type="button"
                onClick={() => handleDateClick(day, tourDate)}
                disabled={!isAvailable}
                className={`
                  aspect-square rounded-lg text-sm transition-all relative
                  ${!isAvailable 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : isSelected
                      ? 'bg-[#D4AF37] text-white font-bold shadow-md'
                      : 'bg-[#F5F1E8] hover:bg-[#D4AF37]/20 text-gray-900 font-medium'
                  }
                `}
              >
                <span>{day}</span>
                {isAvailable && isLowSeats && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {allDates.filter(td => td.date === selectedDate).map(tourDate => {
              const date = new Date(tourDate.date);
              const formattedDate = date.toLocaleDateString('ru-RU', { 
                day: 'numeric', 
                month: 'long',
                weekday: 'short'
              });

              return (
                <div key={tourDate.date} className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 capitalize">
                    {formattedDate}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Свободных мест:</span>
                    <span className={`font-bold ${tourDate.availableSeats < 10 ? 'text-orange-600' : 'text-green-600'}`}>
                      {tourDate.availableSeats}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Цена:</span>
                    <span className="text-lg font-bold text-[#D4AF37]">
                      от {tourDate.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-gray-200 space-y-3">
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#F5F1E8]"></div>
              <span className="text-gray-600">Доступно</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-[#D4AF37]"></div>
              <span className="text-gray-600">Выбрано</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-600">Мало мест</span>
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <Icon name="Info" size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p>
              Отправление ежедневно. Выберите удобную дату.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}