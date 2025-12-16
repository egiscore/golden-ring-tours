import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tour } from '@/data/tours';

interface TourSidebarProps {
  tour: Tour;
  onBookingClick?: () => void;
}

export default function TourSidebar({ tour, onBookingClick }: TourSidebarProps) {
  const handleBookingClick = () => {
    if (onBookingClick) {
      onBookingClick();
    } else {
      const bookingSection = document.getElementById('booking-form');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <div className="space-y-6 hidden lg:block">
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