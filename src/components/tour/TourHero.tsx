import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tour } from '@/data/tours';

interface TourHeroProps {
  tour: Tour;
  onBookingClick: () => void;
}

export default function TourHero({ tour, onBookingClick }: TourHeroProps) {
  return (
    <>
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 w-full px-4 sm:px-6 pb-8 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37] px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
              <Icon name={tour.icon} size={18} className="text-white" />
              <span className="text-xs sm:text-sm font-semibold text-white">{tour.duration}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 font-playfair">
              {tour.title}
            </h1>
            <p className="text-base sm:text-xl text-white/90 mb-4 sm:mb-6">{tour.description}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                <p className="text-xs sm:text-sm text-white/80 mb-1">Цена тура</p>
                <p className="text-xl sm:text-3xl font-bold text-white font-playfair">{tour.price}</p>
              </div>
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white w-full sm:w-auto"
                onClick={onBookingClick}
              >
                <Icon name="Calendar" size={18} className="mr-2" />
                Забронировать тур
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-orange-50 border-y border-gray-200">
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
              <Icon name="Users" size={18} className="text-green-600" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">
                {Math.floor(Math.random() * 15) + 12} бронирований
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
              <Icon name="Flame" size={18} className="text-orange-500" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">
                Популярный
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}