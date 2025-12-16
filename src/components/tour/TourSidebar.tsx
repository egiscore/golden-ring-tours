import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tour } from '@/data/tours';
import ShareButtons from './ShareButtons';

interface TourSidebarProps {
  tour: Tour;
  onBookingClick: () => void;
}

export default function TourSidebar({ tour, onBookingClick }: TourSidebarProps) {
  return (
    <div className="space-y-6">
      <ShareButtons tourTitle={tour.title} tourUrl={window.location.href} />
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
          onClick={onBookingClick}
        >
          <Icon name="Phone" size={20} className="mr-2" />
          Забронировать
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
  );
}