import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { tours } from '@/data/tours';
import { toast } from '@/hooks/use-toast';

export default function TourSearchForm() {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');

  // Генерируем ближайшие даты (пятницы и субботы)
  const generateDates = () => {
    const dates: string[] = [];
    const today = new Date();
    
    for (let i = 0; i < 90; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      if (date.getDay() === 5 || date.getDay() === 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    
    return dates.slice(0, 10);
  };

  const dates = generateDates();

  // Варианты длительности из туров
  const durations = ['3-4 дня', '4-5 дней', '5-7 дней', '7+ дней'];

  const handleSearch = () => {
    if (!selectedTour && !selectedDate && !selectedDuration) {
      toast({
        title: 'Выберите параметры поиска',
        description: 'Пожалуйста, укажите хотя бы один параметр для подбора тура',
        variant: 'destructive'
      });
      return;
    }

    if (selectedTour) {
      navigate(`/booking/${selectedTour}${selectedDate ? `?date=${selectedDate}` : ''}`);
    } else {
      navigate('/#tours');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'short',
      weekday: 'short'
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 -mt-16 relative z-10 border-2 border-[#D4AF37]/20">
      <h3 className="text-2xl font-bold text-[#1A1F2C] mb-6 font-playfair flex items-center gap-2">
        <Icon name="Search" size={24} className="text-[#D4AF37]" />
        Поиск идеального тура
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Выбор тура */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Направление
          </label>
          <div className="relative">
            <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none appearance-none bg-white cursor-pointer"
            >
              <option value="">Все направления</option>
              {Object.values(tours).map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.title}
                </option>
              ))}
            </select>
            <Icon name="ChevronDown" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Выбор даты */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Дата выезда
          </label>
          <div className="relative">
            <Icon name="Calendar" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none appearance-none bg-white cursor-pointer"
            >
              <option value="">Любая дата</option>
              {dates.map((date) => (
                <option key={date} value={date}>
                  {formatDate(date)}
                </option>
              ))}
            </select>
            <Icon name="ChevronDown" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Выбор длительности */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Длительность
          </label>
          <div className="relative">
            <Icon name="Clock" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none appearance-none bg-white cursor-pointer"
            >
              <option value="">Любая</option>
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
            <Icon name="ChevronDown" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSearch}
        className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold"
      >
        <Icon name="Search" size={20} className="mr-2" />
        Подобрать тур
      </Button>

      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" size={16} className="text-green-600" />
          <span>Бесплатная консультация</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Shield" size={16} className="text-green-600" />
          <span>Гарантия возврата</span>
        </div>
      </div>
    </div>
  );
}