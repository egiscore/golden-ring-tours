import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BookingModal from "./BookingModal";

interface Tour {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  image: string;
  features: string[];
  fullDescription?: string;
  cities?: string[];
  program?: string[];
  included?: string[];
}

interface TourDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour | null;
}

export default function TourDetailsModal({
  isOpen,
  onClose,
  tour,
}: TourDetailsModalProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const trackEvent = (event: string, tourTitle?: string) => {
    const eventData = {
      timestamp: Date.now(),
      event,
      city: 'unknown',
      tour: tourTitle,
      utm_source: 'direct',
      utm_campaign: 'tour_detail',
      utm_medium: 'website'
    };

    const saved = localStorage.getItem('retargeting_conversions');
    const conversions = saved ? JSON.parse(saved) : [];
    conversions.push(eventData);
    localStorage.setItem('retargeting_conversions', JSON.stringify(conversions));

    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(105829530, 'reachGoal', event, eventData);
    }
  };

  if (!tour) return null;

  const defaultProgram = [
    "День 1: Выезд из Москвы, переезд в первый город маршрута",
    "День 2-4: Экскурсии по историческим городам Золотого кольца",
    "День 5: Возвращение в Москву",
  ];

  const defaultIncluded = [
    "Трансфер по маршруту",
    "Проживание в комфортабельных отелях",
    "Завтраки",
    "Экскурсионное обслуживание",
    "Входные билеты в музеи",
  ];

  return (
    <>
      <Dialog open={isOpen && !isBookingOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair flex items-center gap-3">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                <Icon name={tour.icon} className="text-[#D4AF37]" size={24} />
              </div>
              {tour.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-4 py-2 rounded-full font-semibold">
                {tour.duration}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Icon name="Check" className="text-[#D4AF37]" size={20} />
                  Что включено
                </h3>
                <ul className="space-y-2">
                  {(tour.included || defaultIncluded).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icon name="Dot" className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Icon name="MapPin" className="text-[#D4AF37]" size={20} />
                  Программа тура
                </h3>
                <ul className="space-y-2">
                  {(tour.program || defaultProgram).map((day, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Icon name="Calendar" className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={16} />
                      <span>{day}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F5F1E8] p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Стоимость тура</p>
                  <p className="text-3xl font-bold text-[#D4AF37] font-playfair">
                    {tour.price}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">*за человека</p>
                </div>
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                  onClick={() => {
                    trackEvent('booking_click', tour.title);
                    setIsBookingOpen(true);
                  }}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Забронировать
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Icon name="Info" className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Персональный подход</p>
                <p className="text-blue-700">
                  Программа может быть адаптирована под ваши пожелания. Звоните — обсудим детали!
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
        }}
        selectedTour={tour.title}
        source="детальный просмотр тура"
      />
    </>
  );
}